import React, { Component } from 'react'
import './home.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'
import Cards from '../../components/Cards'
import Mapimage from '../../Images/Mapimage.png'
import logo1 from '../../Images/logo1.png'
import logo2 from '../../Images/logo2.png'
import logo3 from '../../Images/logo3.png'
import logo4 from '../../Images/logo4.png'
import logo5 from '../../Images/logo5.png'







class Home extends Component{
    render() {
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content">
                        <Carousel />
                        <div className="">
                            <h1 className="about-text">ABOUT US</h1>
                            <p className="about-text2">
                                M.J ASSOCIATES is a Technical consultancy Organization operating since 1993 and offering Technical 
                                Services in all Engineering disciplines relating mainly to the setting up of Pharmaceuticals, Bulk drugs
                                and Drug Intermediates, speciality chemicals and food processing. Operating from our office at
                                Bengaluru, we have successfully executed over a hundred projects relating to Formulations in all
                                Dosage Forms, Bulk Drugs or API’s and Intermediates, Pilot Plants and
                                Research Laboratories and Confectionery and Food.
                            </p>
                            <button type="button" className="btn" style={{backgroundColor: "#307672", color: "white"}}>Read more</button>
                        </div>
                        <div>
                            <Cards />
                        </div>
                        <div className="Clients-sections">
                            <h1 style={{fontFamily: "Poppins", letterSpacing: "5px"}}>CLIENTS</h1>
                            <div className="wrapper">
                            <div class="slider1">
                                 <div class="slide1">
                                    <img src={logo1} />
                                    <img src={logo2} />
                                    <img src={logo3} />
                                    <img src={logo4} />
                                    <img src={logo5} />
                                    <img src={logo4} />
                                    <img src={logo2} />
                                </div> 
                            </div>
                            </div>
                        </div>
                        <div className="">
                            <img src={Mapimage} className="mapImage"/>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Home