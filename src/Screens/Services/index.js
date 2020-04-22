import React, { Component } from 'react'
import './services.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import image1 from '../../Images/image1.svg'
import image2 from '../../Images/image2.svg'
import image3 from '../../Images/image3.svg'
import image4 from '../../Images/image4.svg'
import image5 from '../../Images/image5.svg'
import image6 from '../../Images/image6.svg'

class Services extends Component{
    render() {
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content1">
                        <h1 className="mission-header">SERVICES</h1>
                        <div className="card1">
                            <div className="left-img">
                                <img src={image1} alt="" className="profile-image"/>
                            </div>
                            <div className="right-text">
                                <h1 className="service-header">Bulk Drugs</h1>
                                <p className="service-text">
                                    We provide total design package for setting up a finished facility for manufacture 
                                    of Sterile and Non-Sterile APIS And HPAPIS, Drug Intermediates and Speciality Chemicals, 
                                    Herbal Extracts and Biotech and Biopharma Products.
                                </p>
                            </div>
                         </div>
                        <div className="card1">
                        <div className="left-img">
                                <img src={image2} alt="" className="profile-image"/>
                            </div>
                            <div className="right-text">
                            <h1 className="service-header">Formulations</h1>
                                <p className="service-text">
                                    We have total expertise in facility design for manufacturing
                                    plants for Oral Solid Dosage Forms, Liquid Orals, Injectables, 
                                    Semi-Solids, Soft Gel Filling and Nutraceuticals considering all aspects of cross contamination controls.
                                </p>
                            </div>
                        </div>
                        <div className="card1">
                        <div className="left-img">
                                <img src={image3} alt="" className="profile-image"/>
                            </div>
                            <div className="right-text">
                            <h1 className="service-header">Research & Development</h1>
                                <p className="service-text">
                                    We have to our credit successful completion of R and D facilities for Bulk Drugs 
                                    and Formulation, Research Institutions, and labs for special products, incorporating 
                                    latest technologies in Fume hood design and meeting world standards.
                                </p>
                            </div>
                        </div>
                        <div className="card1">
                        <div className="left-img">
                                <img src={image4} alt="" className="profile-image"/>
                            </div>
                            <div className="right-text">
                            <h1 className="service-header">Clean Room Design</h1>
                                <p className="service-text">
                                    This is the core of all activities connected with Pharma facility design.
                                     Design of clean room infrastructure and equipment, meeting the latest 
                                     standards of HVAC design and controls, Clean room validation assistance 
                                     to meet Regulatory expectations, design of water systems are all incorporated here.
                                </p>
                            </div>
                        </div>
                        <div className="card1">
                        <div className="left-img">
                                <img src={image5} alt="" className="profile-image"/>
                            </div>
                            <div className="right-text">
                            <h1 className="service-header">Food and Confectionery</h1>
                                <p className="service-text">
                                 We have to our credit the design of such facility for many MNC and local clients 
                                 comprising material handling systems, manufacturing and high speed packing lines.
                                </p>
                            </div>
                        </div>
                        <div className="card1">
                        <div className="left-img">
                                <img src={image6} alt="" className="profile-image"/>
                            </div>
                            <div className="right-text">
                            <h1 className="service-header">Office and Interiors</h1>
                                <p className="service-text">
                                    Through our associate Architects, we take up such projects, 
                                    mainly as part of a total Pharma support facility, incorporating Energy efficient
                                     design in services and highest standards of fire and safety.
                                </p>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Services
