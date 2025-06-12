
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import "../../styles/pageStyles/home/testimonials.css"
interface TestimonialCardProps{

    text:string;
    author:string;
    role:string;
}

export default function TestimonialCard({text ="",author="",role="" }: TestimonialCardProps){
    
    return (
        <div className="testminonial-card">
            <div className="testimonial-author">{author}</div>
            <div className="testimonial-authore-role">{role}</div>
            <div className="testimonial-text-box">
                <span className="testimonial-quote-left">
                    <FontAwesomeIcon  icon={faQuoteLeft} /> 
                </span>
                <div className="testimonial-text">
                     {text}
               </div>
                        
                <span className="testimonial-quote-right">
                    <FontAwesomeIcon icon={faQuoteRight} /> 
                </span>
            </div>

        </div>
    )
}