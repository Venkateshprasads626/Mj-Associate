import React, { Component } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'


class About extends Component{
    render() {
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content">
                        <h1 className="mission-header">ABOUT US</h1>
                        <div className="mission-text">
                            <p>
                            M.J ASSOCIATES is a Technical consultancy Organization operating since 1993 and offering Technical<br/>
                            Services in all Engineering disciplines relating mainly to the setting up of Pharmaceuticals,<span style={{fontWeight:"bold"}}>Bulk drugs</span><br/> 
                            and Drug Intermediates, speciality chemicals and food processing. Operating from our office at<br/>
                            Bengaluru, we have successfully executed over a hundred projects relating to <span style={{fontWeight:"bold"}}>Formulations</span> in all<br/>
                            Dosage Forms,<span style={{fontWeight:"bold"}}>Bulk Drugs or API’s and Intermediates, Pilot Plants </span> and<br/>
                            <span style={{fontWeight:"bold"}}>Research Laboratories</span> and <span style={{fontWeight:"bold"}}> Food & Confectionery</span>
                            </p>
                            <p>
                            We have a team of competent Engineers experienced in various disciplines connected with<br/>
                            setting up of Pharmaceutical plants, Clean Rooms, HVAC designs, Piping, Electrical and LV<br/>
                            systems. We have a strong record in designing and executing R&D laboratories for major clients.
                            </p>    
                            <p>
                                The company was promoted by a group of Engineers with a long record of service in<br/>
                                Pharmaceutical plants both in plant Engineering and project Engineering. Over the years, many<br/>
                                of the facilities designed by us have been inspected and cleared by regulatory agencies such as<br/>
                                USFDA, UKMHRA, TGV Australia, EU, WHO.
                            </p>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default About
