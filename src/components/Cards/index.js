import React, { Component } from 'react'
import './cards.css'
import image1 from '../../Images/image1.svg'
import image2 from '../../Images/image2.svg'
import image3 from '../../Images/image3.svg'
import image4 from '../../Images/image4.svg'
import image5 from '../../Images/image5.svg'
import image6 from '../../Images/image6.svg'
import Steps from '../../Images/Steps.svg';

class Cards extends Component{
    render() {
        return(
            <div className="Cards">
                <div className="row">
                    <div className="col-md-4">
                        <div class="card">
                            <img src={image1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"  style={{textAlign: "start"}}>Bulk Drugs</h5>
                                    <p class="card-text" style={{textAlign: "start"}}>We provide total design package for setting up a finished facility</p>
                                    <a href="#" class="btn">Read more</a>
                                </div>
                        </div>
                        <div class="card">
                            <img src={image2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                    <h5 class="card-title"  style={{textAlign: "start"}}>Formulation</h5>
                                    <p class="card-text" style={{textAlign: "start"}}>We have total expertise in facility design for manufacturing plants.</p>
                                    <a href="#" class="btn">Read more</a>
                                </div>
                        </div>
                        <div class="card">
                            <img src={image3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                    <h5 class="card-title"  style={{textAlign: "start"}}>Clean Rooms</h5>
                                    <p class="card-text" style={{textAlign: "start"}}>This is the core of all activities connected with Pharma facility design.</p>
                                    <a href="#" class="btn">Read more</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 red">
                        <img src={Steps} alt="" className="Steps"/>
                    </div>
                    <div className="col-md-4 ">
                        <div class="card">
                            <img src={image4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                    <h5 class="card-title"  style={{textAlign: "start"}}>R & D Labs</h5>
                                    <p class="card-text" style={{textAlign: "start"}}>We have to our credit successful completion of R and D facilities</p>
                                    <a href="#" class="btn">Read more</a>
                                </div>
                        </div>
                        <div class="card">
                            <img src={image5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                    <h5 class="card-title"  style={{textAlign: "start"}}>Food & Confectionery</h5>
                                    <p class="card-text" style={{textAlign: "start"}}>We have to our credit the design of such facility for many MNC and local clients</p>
                                    <a href="#" class="btn">Read more</a>
                                </div>
                        </div>
                        <div class="card">
                            <img src={image6} class="card-img-top" alt="..." />
                            <div class="card-body">
                                    <h5 class="card-title"  style={{textAlign: "start"}}>Office & Interiors</h5>
                                    <p class="card-text" style={{textAlign: "start"}}>Through our associate Architects, we take up such projects, mainly as part of a total Pharma support facility.</p>
                                    <a href="#" class="btn">Read more</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards

