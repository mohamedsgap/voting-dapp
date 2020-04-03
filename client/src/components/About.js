import React from 'react'
import {Link} from 'react-router-dom';
import './About.css'
import Footer from './Footer.js'


 function About(){
    return(
        <React.Fragment>
            <div class="about-us">
            <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <img src="../images/messi.jpg" alt="choose us" title="Messi" />
                        </div>
                        <div class="col-md-6 col-sm-12 ">
                            <h1> Why Blockchain?</h1 >
                            <p>Borlaug's life and achievement are testimony to the far-reachin
                                r-reaching contribution thr-reaching contribution thr-reaching contribution th
                                Borlaug's life and achievement are testimony to the far-reachin
                                r-reaching contribution thr-reaching contribution thr-reaching contribution th
                                Borlaug's life and achievement are testimony to the far-reachin
                                r-reaching contribution thr-reaching contribution thr-reaching contribution th</p>    
                                
                            <a href="#" class="read-more">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
    
    </React.Fragment>
    )
}

export default About;