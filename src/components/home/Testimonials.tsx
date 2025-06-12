import Slider from "react-slick";
import "../../styles/pageStyles/home/testimonials.css"
import TestimonialCard from "./TestimonialCard"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials(){

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:5000
  };
const testText = "Since partnering with [Your Company], our buildings have run more smoothly than ever. Maintenance issues are resolved quickly, communication is seamless, and tenant satisfaction is at an all-time high. They’ve taken the stress out of property management."
const author = "Spencer Toupin"
const role = "COO Of Lynosoft";
return(
    <>
        <div className = "testimonials-container">

            <div className="testimonials-intro">
                <h2>Join The Growing List of Satisfied Customers</h2>
            </div>
            <div className="testimonial-divider"></div>
            <div className="testimonials-card-container">
                <Slider {...settings}>
                    <TestimonialCard text ={testText} author ={author} role ={role} ></TestimonialCard>
                    <TestimonialCard text ={testText} author ={author} role ={role} ></TestimonialCard>
                    <TestimonialCard text ={testText} author ={author} role ={role} ></TestimonialCard>
                </Slider>
            </div>
        </div>
    </>
)
    
}