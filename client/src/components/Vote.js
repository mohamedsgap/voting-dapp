import React from 'react';
import {Link} from 'react-router-dom';
import './Vote.css'
import Footer from './Footer.js'


function Vote(){
    return(
        <React.Fragment>
            <div class="Vote text-center">
                <div className="container">
                    <h2 className="text-center">Vote</h2>
                    <p className="description text-center">Borlaug's life and achievement are testimony to the far-reaching contribution that one man's towering intellect
                    Borlaug's life and achievement are testimony to the far-reaching contribution that one man's towering intellect</p>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img-top" src="../images/man.jpg"  alt="man1"/>
                                <div className="card-body">
                                    <h4 className="card-title">Candidate 1 </h4>
                                    <p className="card-text">Borlaug's life and achievement are testimony to the far-reaching
                                        contribution that one man's towering intellect, 
                                        persistence and scientific vision can make to human peace and progress."</p>

                                        <div className="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Choose Candidate
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    <Link to="/" class="card-link">Vote</Link> 
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img-top" src="../images/man.jpg" alt="man2"/>
                                <div className="card-body">
                                    <h4 className="card-title">Candidate 2</h4>
                                    <p className="card-text">Borlaug's life and achievement are testimony to the far-reaching
                                        contribution that one man's towering intellect, 
                                        persistence and scientific vision can make to human peace and progress."</p>

                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Choose Candidate
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    <Link to="/" class="card-link">Vote</Link> 
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="card">
                                <img class="card-img-top" src="../images/man.jpg"  alt="cup"/>
                                <div class="card-body">
                                    <h4 class="card-title">Candidate 3</h4>
                                    <p class="card-text">Borlaug's life and achievement are testimony to the far-reaching
                                        contribution that one man's towering intellect, 
                                        persistence and scientific vision can make to human peace and progress."</p>

                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                               Choose Candidate
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    <Link to="/" class="card-link">Vote</Link> 
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

           
        
    </React.Fragment>
    )
}

export default Vote;