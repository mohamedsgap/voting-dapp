import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "../userContext";
import ErrorNotice from "../errorNotice";

import "./Sign.css";

const Sign = () => {
  const [valueEmail, setValueEmail] = useState("");
  const [valuePass, setValuePass] = useState("");
  const [valueMeta, setValueMeta] = useState("");
  const [valueNat, setValueNat] = useState("");
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const fillValueEmail = e => {
    setValueEmail(e.target.value);
  };
  const fillValuesPass = e => {
    setValuePass(e.target.value);
  };
  const fillValueMeta = e => {
    setValueMeta(e.target.value);
  };
  const fillValueNat = e => {
    setValueNat(e.target.value);
  };
  const showMessage = () => {
    alert("please, check and enter valid data!");
  };

  const submit = async e => {
    e.preventDefault();

    try {
      const newUser = {
        valueEmail,
        valuePass,
        valueMeta,
        valueNat
      };
      await Axios.post("/users/sign", newUser);
      const loginRes = await Axios.post("/users/login", {
        valueNat,
        valuePass
      });
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

  return (
    <div className="sign">
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form onSubmit={submit}>
        <h2 className="title">Create voting account</h2>
        <div className="email-pass">
          <div className="email">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              className="email-input"
              id="inputEmail4"
              placeholder="name@email.com"
              value={valueEmail}
              onChange={fillValueEmail}
            />
          </div>
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
        <div className="address">
          <label for="inputAddress">MetaMask Address</label>
          <input
            type="text"
            className="meta-input"
            id="inputAddress"
            placeholder="0xxxxxxxxxxxxxxxxxxxxxxxx"
            value={valueMeta}
            onChange={fillValueMeta}
          />
        </div>
        <div className="nat-id">
          <label for="inputAddress2">National ID</label>
          <input
            type="text"
            className="nat-input"
            id="inputAddress2"
            placeholder="298000000000"
            value={valueNat}
            onChange={fillValueNat}
          />
        </div>

        {valueEmail === "" ||
        valueMeta === "" ||
        valuePass === "" ||
        valueNat === "" ||
        !valueEmail.includes("@") ||
        !valueEmail.includes(".com") ||
        !valueMeta.includes("0x") ||
        valueMeta.length !== 42 ||
        valueNat.length !== 14 ? (
          <Link to="/sign">
            <button type="submit" className="submit" onClick={showMessage}>
              Sign up
            </button>
          </Link>
        ) : (
          <Link to="/vote">
            <button type="submit" className="submit" onSubmit={submit}>
              Sign up
            </button>
          </Link>
        )}

        <Link to="/login">
          <button type="submit" className="submit-login">
            Already have an account, Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Sign;
