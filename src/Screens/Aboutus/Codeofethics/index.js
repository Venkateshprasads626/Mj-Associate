import React, { Component } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import './ethics.css'

class Codeofethics extends Component{
    render() {
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content">
                        <h1 className="ethics-header">CODE OF ETHICS</h1>
                        <div className="ethics-text">
                            <p>Accept responsibility to society and to the profession of consulting services.</p>
                            <p>Look for solutions confirming to principles of sustainable development.</p>
                            <p>Uphold the dignity, standing and reputations of the consulting industry while carrying out<br/>
                                our services.
                            </p>
                            <p>
                                Maintain the knowledge and skills at the highest levels consistent with the developments<br/>
                                in technology, legislation and management.
                            </p>
                            <p>
                                Ensure utmost care and diligence in all services rendered to the client.
                            </p>
                            <p>
                                Act at all times in the legitimate interest of the client by providing all services with full<br/>
                                integrity and faithfulness.
                            </p>
                            <p>Ensure confidentiality of any secrecy agreement entered into with the client.</p>
                            <p>Be impartial at all times in providing professional advice, judgement or decision.</p>
                            <p>Inform client of any potential conflict of interest that may arise while performing our<br/>
                                services.
                            </p>
                            <p>Not accept any remuneration which will prejudice our independent judgement.</p>
                            <p>Always promote concept of quality-based selection without injuring the reputation or<br/>
                                business of others.
                            </p>
                            <p>
                                In the event of being officially asked to review the work of another consultant, behave in<br/>
                                accordance with appropriate conduct and courtesy without harming the professional<br/>
                                reputation of any fellow consultant.
                            </p>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Codeofethics