import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';
import shoe from '../../media/images/shoe-project.JPG';
import pitha from '../../media/images/pitha-project.JPG';
import fly from '../../media/images/discover-fly.JPG';
import vraman from '../../media/images/vraman-project.JPG';
import './Projects.css'

const Projects = () => {
    return (
        <div>
            <Header/>
                <div className="container">
                    <div className="row">
                        <h2 className="text-muted mb-3">PROJECTS</h2>
                    <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src={shoe} alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Shoe Project</h5>
                    <p class="card-text">This app allows the users to buy shoes for travelling to any destination where he may login system is vailable and the app hwlp the user to find the convenient way to find any destination within the reasonable price.</p>
                    </div>
                    <div class="card-footer d-flex">
                    <button className="btn btn-warning ml-3 mr-5"><a className="text-white" target="_blank" href="https://fire-authentication-e06b5.web.app/">Visit</a></button>
                    <button className="btn btn-primary ml-5"><a className="text-white" target="_blank" href="https://github.com/Porgramming-Hero-web-course/full-stack-client-bdnaimur">Code</a></button>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={fly} alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Discover Fly</h5>
                    <p class="card-text">This app allows the users to book a flight for travelling to any destination where he may login system is vailable and the app hwlp the user to find the convenient way to find any destination within the reasonable price.</p>
                    </div>
                    <div class="card-footer d-flex">
                    <button className="btn btn-warning ml-3 mr-5"><a className="text-white" target="_blank" href="https://fire-authentication-e06b5.web.app/">Visit</a></button>
                    <button className="btn btn-primary ml-5"><a className="text-white" target="_blank" href="https://github.com/Porgramming-Hero-web-course/full-stack-client-bdnaimur">Code</a></button>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={pitha} alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Testy Pitha App</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer d-flex">
                    <button className="btn btn-warning ml-3 mr-5"><a className="text-white" target="_blank" href="https://fire-authentication-e06b5.web.app/">Visit</a></button>
                    <button className="btn btn-primary ml-5"><a className="text-white" target="_blank" href="https://github.com/Porgramming-Hero-web-course/full-stack-client-bdnaimur">Code</a></button>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default Projects;