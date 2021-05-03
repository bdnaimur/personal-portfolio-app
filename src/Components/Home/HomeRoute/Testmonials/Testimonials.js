import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import wilson from '../../../../media/images/wilson.png';
import ema from '../../../../media/images/ema.png';
import aliza from '../../../../media/images/aliza.png';
import ScrollReveal from 'scrollreveal'

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]

const Testimonials = () => {
  
    // var slideUp = {
    //     distance: '300%',
    //     origin: 'top',
    //     opacity: '.7',
    //     duration: 2000
    // };
    // const myFunction = () =>{
    //     setInterval(function(){ ScrollReveal().reveal('.testmonials-sildeUp', slideUp ); }, 3000);
    // }
    // myFunction();
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h1>What Our Clients Think</h1>
               </div>
               <div className="card-deck mt-5 testmonials-sildeUp">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;