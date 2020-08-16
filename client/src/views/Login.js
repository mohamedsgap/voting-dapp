/*
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { set } from "lodash";

const Login = () => {
  const [value, setValue] = useState("");
  const [valuePass, setValuePass] = useState("");

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
      <form>
        <h2 className="title">Login</h2>
        <div className="address">
          <label for="inputAddress">MetaMask Address</label>
          <input
            type="text"
            className="meta-input"
            id="inputAddress"
            placeholder="0xxxxxxxxxxxxxxxxxxxxxxxx"
            value={value}
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
        {value === "" ||
        valuePass === "" ||
        !value.includes("0x") ||
        value.length !== 42 ? (
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
*/
