import React, { Component } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import mjlogo from '../../Images/mjlogo.svg'

class Header extends Component{


    render() {
        return(
                
    <div className="header sticky-top">
       
    <nav class="navbar navbar-expand-lg navbar-dark ">
        
            <a class="navbar-brand" href="/">
                <img src={mjlogo} className="mjlogo" />
            </a>
        
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item dropdown">
            <Link to="/Aboutus" className="nav-link">About Us</Link>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Vission</a>
                    <a class="dropdown-item" href="#">Mission</a>
                    <a class="dropdown-item" href="#">Code of Ethics</a>
                </div> 
        </li>
        <li className="nav-item">
            <Link to="/Whatwedo" className="nav-link" >Services</Link>
        </li>
        <li className="nav-item ">
            <Link to="/Gallery" className="nav-link">Gallery</Link>
                {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">E-COMMERCE</a>
                    <a class="dropdown-item" href="#">CAMPAIGN SHOOTS</a>
                    <a class="dropdown-item" href="#">FASHION</a>
                    <a class="dropdown-item" href="#">FOOD PHOTOGRAPHY</a>
                    <a class="dropdown-item" href="#">WEDDING-PRE & POST</a>
                    <a class="dropdown-item" href="#">BABY, MATERNITY & KIDS</a>
                    <a class="dropdown-item" href="#">REAL-ESTATE</a>
                    <a class="dropdown-item" href="#">CORPORATE & EVENTS</a>
                    <a class="dropdown-item" href="#">AERIAL PHOTOGRAPHY</a>
                    <a class="dropdown-item" href="#">VIDEOS</a>
                   
                </div> */}
        </li>
        <li className="nav-item">
            <Link to="/Contact" className="nav-link">Careers</Link>
        </li>
        <li className="nav-item">
            <Link to="/Contact" className="nav-link">Contact Us</Link>
        </li>

   
        </ul>
    </div>
</nav>
</div>
        );
    }
}




export default Header