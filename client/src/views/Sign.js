import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign.css";

const Sign = () => {
  const [valueEmail, setValueEmail] = useState("");
  const [valuePass, setValuePass] = useState("");
  const [valueMeta, setValueMeta] = useState("");
  const [valueNat, setValueNat] = useState("");

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

  return (
    <div className="sign">
      <form>
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
            <button type="submit" className="submit">
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
