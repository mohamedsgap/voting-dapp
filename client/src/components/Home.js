import React from 'react';
import'./Home.css';
import Footer from './Footer.js'

function Home(){
    return(
        <React.Fragment>
            <div className="home" id="home">
                <div className="container">
                    <div className="home-information">
                        <h2 className="home-title margin-bottom">Voting System</h2>
                        <h4 className="home-info">Ethereum Blockchain </h4>
                        <p className="home-description">
                        We're a professional <span>UX Designers</span> and Front-End Developers creating modern and resposive designs to Web and Mobile.                    
                        </p>
                        <button className="home-btn">
                         Let's Vote
                        </button>
                    </div>
                </div>
            </div> 
        </React.Fragment>
    )
}

   

export default Home;