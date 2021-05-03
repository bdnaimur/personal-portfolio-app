import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';
import img1 from '../../../media/images/test3.png'
import img2 from '../../../media/images/test2.png'
import ProgressBar from './ProgressBar/ProgressBar'
import Testimonials from './Testmonials/Testimonials';
import About from '../../About/About'
// import ProgressBar from "@ramonak/react-progress-bar";
import './Home.css'
import Animation from '../../Animation/Animation';
import ScrollReveal from 'scrollreveal'

const testData = [
    { bgcolor: "#6a1b9a", completed: 80, name:"Javascript" },
    { bgcolor: "#00695c", completed: 60, name: "Node" },
    { bgcolor: "#ef6c00", completed: 53, name: "Mongodb" },
  ];
const Home = () => {
    var slideUp = {
        distance: '100px',
        origin: 'top',
        opacity: '.7',
        duration: 3000,
        reset: true
    };
    ScrollReveal().reveal('.image-slide', slideUp );
    return (
        <div>
            <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"  style={{ marginTop:"100px"}}>
                            {/* <h2 className="text-animation" style={{color:"chocolate", marginTop:"100px", fontSize:"50px"}}>
                                Hi! I am a <br/>  */}
                                {/* <span style={{color:"tomato"}}>Webdeveloper</span> */}
                                <Animation></Animation>
                            
                            <button className="btn btn-danger text-align"><a target="_blank" href="https://drive.google.com/file/d/1dt271vOquMXx8cB0W6by2oqkiKBclxdX/view?usp=sharing">Download CV</a></button>
                        </div>
                        <div className="col-md-6">
                            <img className="image-slide" style={{width:"100%"}} src={img1} alt=""/>
                        </div>
                    </div>
                   
                </div>
                <div className="container progressBar">
                    <h4 className="text-secondary mt-5">Knowledge</h4>
                    {testData.map((item, idx) => (
                    <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} name={item.name} />
                    ))}
                </div>
                <Testimonials/>
                <div className="message mt-5 mb-5">
                    <form>
                        <div class="container  shadow p-3">
                            <h4 className="text-secondary mb-3">Get in Touch</h4>
                            <div className="row">
                            <div class="col">
                            <input type="text" class="form-control" placeholder="Name"/>
                            </div>
                            <div class="col">
                            <input type="text" class="form-control" placeholder="Email"/>
                            </div>
                            </div>
                            <br/>
                            <textarea class="form-control" placeholder="Leave Your Message"></textarea>
                            <br/>
                            <button className="btn btn-primary">Send</button>
                        </div>

                    </form>
                </div>
                <div className="container mt-5 bg-white p-3">
                <h3 className="text-secondary">Myself</h3>
                <div className="row  shadow">
                    <div className="col-md-5 mt-2">
                        <h6 className="text-secondary mt-3 p-5">
                        Building up a challenging and rewarding frontend Web Development career in a
                        commercial software organization that provides striking career advancement within
                        the extent of a competitive and dynamic environment and willing to take challenging
                        opportunities with sincerity, punctuality and self-commitment.
                        </h6>
                        
                    </div>                    
                    <div className="col-md-5 mt-3">
                        <img style={{width:"100%"}} src={img2} alt=""/>
                    </div> 
                </div>
                
            </div>
            <Footer/>
        </div>
    );
};

export default Home;