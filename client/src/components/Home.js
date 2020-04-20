import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home" id="home">
        <div className="container">
          <div className="home-information">
            <h2 className="home-title margin-bottom">Voting System</h2>
            <h4 className="home-info">Ethereum Blockchain </h4>
            <p className="home-description">
              We're a professional <span>UX Designers</span> and Front-End
              Developers creating modern and resposive designs to Web and
              Mobile.
            </p>
            <Link to="/vote" className="home-btn">
              {" "}
              Let's Vote
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
