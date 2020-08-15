import React, { useRef, useState, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import UserContext from "./userContext";
import ReactGA from "react-ga";
import Axios from "axios";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import Vote from "./views/Vote";
import Sign from "./views/Sign";
import Login from "./views/Login";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post("/users/tokenIsValid", null, {
        headers: { "x-auth-token": token }
      });
      if (tokenRes.data) {
        const userRes = await Axios.get("/users", {
          headers: { "x-auth-token": token }
        });
        setUserData({
          token,
          user: userRes.data
        });
      }
    };

    checkLoggedIn();
  }, []);

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute path="/vote" component={Vote} layout={LayoutDefault} />
            <AppRoute path="/sign" component={Sign} layout={LayoutDefault} />
            <AppRoute path="/login" component={Login} layout={LayoutDefault} />
          </Switch>
        </UserContext.Provider>
      )}
    />
  );
};

export default App;
