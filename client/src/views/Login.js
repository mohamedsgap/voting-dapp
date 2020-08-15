import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../userContext";
import Axios from "axios";
import ErrorNotice from "../errorNotice";
import "./Login.css";
import { set } from "lodash";

const Login = () => {
  const [valueNat, setValue] = useState("");
  const [valuePass, setValuePass] = useState("");
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async e => {
    e.preventDefault();
    try {
      const loginUser = { valueNat, valuePass };
      const loginRes = await Axios.post("/users/login", loginUser);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/vote");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  const fillValues = e => {
    setValue(e.target.value);
  };
  const fillValuesPass = e => {
    setValuePass(e.target.value);
  };

  const showMessage = () => {
    alert("please, check and enter valid data!");
  };

  return (
    <div className="sign">
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form onSubmit={submit}>
        <h2 className="title">Login</h2>
        <div className="address">
          <label for="inputAddress">National ID</label>
          <input
            type="text"
            className="nat-input"
            id="inputAddress"
            placeholder="xxxxxxxxxxxxxxxxxxxxxxxx"
            value={valueNat}
            onChange={fillValues}
          />
        </div>
        <div className="email-pass">
          <div className="pass">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className="pass-input"
              id="inputPassword4"
              placeholder="*********"
              value={valuePass}
              onChange={fillValuesPass}
            />
          </div>
        </div>
        {valueNat === "" || valuePass === "" || valueNat.length !== 14 ? (
          <Link to="/login">
            <button type="submit" className="submit" onClick={showMessage}>
              Login
            </button>
          </Link>
        ) : (
          <Link to="/vote">
            <button type="submit" className="submit">
              Login
            </button>
          </Link>
        )}

        <Link to="/sign">
          <button type="submit" className="submit-login">
            Don't have an account, Sign up
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
