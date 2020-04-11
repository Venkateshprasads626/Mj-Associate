import React, { Component } from 'react'
import './about.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

class Aboutus extends Component{
    render() {
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content">
                        <div className="Aboutus-content">
                            <h1 className="aboutus-header"> ABOUT US</h1>
                            <p className="aboutus-text">
                            M.J ASSOCIATES is a Technical consultancy Organization operating since 1993 and offering 
                            Technical Services in all Engineering disciplines relating mainly to the setting up of Pharmaceuticals,
                            Bulk drugs and Drug Intermediates, speciality chemicals and food processing. Operating from our office at Bengaluru,
                            we have successfully executed over a hundred projects relating to Formulations in all Dosage Forms, Bulk Drugs or API’s and Intermediates,
                            Pilot Plants and Research Laboratories and Confectionery and Food.``
                            </p>
                            <p className="aboutus-text" style={{marginTop: "5%"}}>
                                We have a team of competent Engineers experienced in various disciplines connected with
                                setting up of Pharmaceutical plants, Clean Rooms, HVAC designs, Piping, Electrical and LV
                                systems. We have a strong record in designing and executing R&amp;D laboratories for major clients.
                            </p>
                            <p className="aboutus-text" style={{marginTop: "5%"}}>
                                The company was promoted by a group of Engineers with a long record of service in
                                Pharmaceutical plants both in plant Engineering and project Engineering. Over the years, many
                                of the facilities designed by us have been inspected and cleared by regulatory agencies such as
                                USFDA, UKMHRA, TGV Australia, EU, WHO.
                            </p>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Aboutus