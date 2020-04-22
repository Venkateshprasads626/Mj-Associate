import React, { Component } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import './mission.css'

class Mission extends Component{
    render() {
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content">
                        <h1 className="mission-header">MISSION</h1>
                        <div className="mission-text">
                            <p>To closely work with the client in developing and providing quality design work to meet<br/> acceptance standards.</p>
                            <p>To provide a competitive edge to our clients with our innovative designs and by providing<br/>
                                quality service and build a healthy relationship with each client.
                            </p>
                            <p>
                            To have the highest degree of integrity, professionalism and ethics in discharge of our<br/> duties.
                            </p>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Mission