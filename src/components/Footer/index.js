import React from 'react'
import './footer.css'
import mjlogo from '../../Images/mjlogo.svg'


const Footer = props =>(
  
    <footer className="page-footer font-small blue pt-4 footer">
            
             
    <div className="container-fluid text-center text-md-left footer1">
  
    
      <div className="row">
  
      
        <div className="col-md-4 mt-md-0 mt-4">
           <img src={mjlogo} className="mjlogo" alt="Mj Logo" />
           <p className="copyright">&copy; 2016 Created by Rushbee Studios</p>

           <h3 className="h3-footer">SUBSCRIBE TO OUR NEWS</h3>
           <div className="input-group mb-3">
            <input type="text" class="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="button-addon2" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-4">
            <div className="row row12">
              <div className="mr-4">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
              </div>
              <div className="ml-4">
                  <li>Gallery</li>
                  <li>Careers</li>
                  <li>Contact Us</li>
              </div>
            </div>
            <p className="footer-email">E-mail:projects@mjassociates.in</p>
        </div>
        <div className="col-md-4 mt-md-0 mt-4 address">
            <p className="">
              #45, 1st floor,<br/>
              5th Cross, 8th Main Road<br/>
              Vasanthnagar,<br/>
              Bangalore- 560 052
            </p>
            <p>
              Phone: +91 080 22204636, +91 080 22284583<br/>
                     +91 080 32712760, +91 080 41131518
            </p>
        </div>
      </div>
 
    </div>   
 

  
  </footer>
  

);
export default Footer;