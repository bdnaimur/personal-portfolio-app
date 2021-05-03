import React from 'react';
import img2 from '../../media/images/test2.png'
import Animation from '../Animation/Animation';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header'
import ScrollReveal from 'scrollreveal'
const About = () => {

    var slideUp = {
        distance: '200%',
        origin: 'top',
        opacity: null
    };
    ScrollReveal().reveal('.slide-up', slideUp);
    // ScrollReveal().reveal('.slide-up', slideUp);

    return (
        <div>
            <Header/>
            <div className="container mt-5">
                
                <div className="row">
                    <div className="col-md-5 mt-5">
                        <h4 className="text-secondary slide-up">
                        Building up a challenging and rewarding frontend Web Development career in a
                        commercial software organization that provides striking career advancement within
                        the extent of a competitive and dynamic environment and willing to take challenging
                        opportunities with sincerity, punctuality and self-commitment.
                        </h4>
                        
                    </div>                    
                    <div className="col-md-5 slide-up">
                        <img style={{width:"600px"}} src={img2} alt=""/>
                    </div> 
                </div>
                
            </div>
            <Footer/>
            
        </div>
    );
};

export default About;