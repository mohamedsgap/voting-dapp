import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const  Navbar = () => {
    return(
         <div className="navbar">
            <div className="container">
                
                <div className="logo">
                    <h2 className="logo-text"><span>Voting</span> System</h2>
                </div>
                <ul className="ul-list">
                    <li className="list-item"><NavLink activeClassName="selected"  exact to="/"> Home</NavLink></li>
                    <li className="list-item"><NavLink activeClassName="selected" to="/about">About Us</NavLink></li>
                    <li className="list-item"><NavLink activeClassName="selected" to="/Vote">Vote</NavLink></li>
                    <li className="list-item"><NavLink activeClassName="selected" to="/contact">Contact</NavLink></li>
                </ul>   
            </div> 
        </div> 
    )
}
 
export default Navbar;

