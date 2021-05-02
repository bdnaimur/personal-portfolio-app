import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';
import img from '../../../media/images/test3.png'
import ProgressBar from './ProgressBar/ProgressBar'
import Testimonials from './Testmonials/Testimonials';
// import ProgressBar from "@ramonak/react-progress-bar";
import './Home.css'
const testData = [
    { bgcolor: "#6a1b9a", completed: 80, name:"Javascript" },
    { bgcolor: "#00695c", completed: 60, name: "Node" },
    { bgcolor: "#ef6c00", completed: 53, name: "Mongodb" },
  ];
const Home = () => {
    return (
        <div>
            <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="text-animation" style={{color:"chocolate", marginTop:"200px", fontSize:"50px"}}>
                                HI! I am a Fullstack <br/> <span style={{color:"tomato"}}>Webdeveloper</span>
                            </h2>
                        </div>
                        <div className="offset-md-2 col-md-6">
                            <img src={img} alt=""/>
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
                            <h4 className="text-secondary mb-3">Leave Your Message</h4>
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

            <Footer/>
        </div>
    );
};

export default Home;