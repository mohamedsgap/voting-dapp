import React from 'react'
import './Contact.css'
import Footer from './Footer.js'
function Contact(){
    return(
        <div>
             <div class="drop">
            <div class="container">
                <h2 class="drop-title"><span>Put </span> A message</h2>
                <form action="">
                    <input type="email" class="sub" placeholder="Your Email"/>
                    <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
                    <input  type="submit" value="Send Message"/>
                </form>
            </div>
        </div>
        
        </div>   
    )
}

export default Contact;