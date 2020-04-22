import React, { Component } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import './vission.css'

class Vissionpage extends Component{
    render() {
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content">
                        <h1 className="mission-header">VISION</h1>
                        <div className="mission-text">
                            <p>To be the preferred choice of a Pharmaceutical Industry in the field of Engineering consultancy<br/>
                                and to continually upgrade the skills of our employees towards achieving this.
                            </p>
                          
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Vissionpage