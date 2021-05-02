import React from 'react';
import './Resume.css';
import Header from '../Home/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Resume = () => {
    return (
        <div className="resume-container">
            <Header />
            <div className="text-align">
                <button className="btn btn-danger text-align"><a target="_blank" href="https://drive.google.com/file/d/1dt271vOquMXx8cB0W6by2oqkiKBclxdX/view?usp=sharing">Download CV</a></button>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 shadow mt-3 mb-3 p-2 skill">
                        <h4 className="text-align  mt-2 mb-3 darkGreen"><FontAwesomeIcon className="color" icon="hashtag" /> SKILLS</h4>
                        <ul>
                            <li><span className="mr-5"><FontAwesomeIcon className="color" icon="star" /><span> HTML</span></span>
                                <span className="mr-5"><FontAwesomeIcon className="color" icon="star" /><span> CSS</span></span>
                                <span className="mr-5"><FontAwesomeIcon className="color" icon="star" /><span> BOOTSTRAP</span></span></li>

                            <li>
                                <span className="mr-5"><FontAwesomeIcon className="color" icon="star" /><span> JS</span></span>
                                <span className="mr-5"><FontAwesomeIcon className="color" icon="star" /><span> REACT JS</span></span>
                                <span className="mr-5"><FontAwesomeIcon className="color" icon="star" /><span> REACT ROUTE</span></span>
                            </li>

                            <li>
                                <span className="mr-5"><FontAwesomeIcon className="color" icon="star" /><span> NODE JS</span></span>
                                <span className="mr-5"><FontAwesomeIcon className="color" icon="star" /><span> EXPRESS JS</span></span>
                                <span className="mr-5"><FontAwesomeIcon className="color" icon="star" /><span> NEXT JS</span></span>
                            </li>

                            <li>
                                <span className="mr-5"><FontAwesomeIcon className="color" icon="star" /><span> MONGO DB</span></span>
                                <span className="mr-5"><FontAwesomeIcon className="color" icon="star" /><span> PHP</span></span>
                                <span className="mr-5 pb-3"><FontAwesomeIcon className="color" icon="star" /><span> MY SQL</span></span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 working-section">
                        <div className="inner-div shadow ms-3 p-3">
                        <h4 className="darkGreen">Working Exprience</h4>
                        <div className="experience-1">
                            <h6 className="color">Year 2016-2017</h6>
                            <p>Worked as a junior assistant in New Paltan Computers</p>
                        </div>
                        <div className="experience-2">
                            <h6 className="color">Year 2018-Till Date</h6>
                            <p>Working as a Pricirng Analyst in Biman Bangladesh Airlines</p>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Resume;