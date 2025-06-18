
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import TestimonialCard from "./TestimonialCard"


//@ts-ignore
import "swiper/css"
//@ts-ignore
import "swiper/css/navigation"
//@ts-ignore
import "swiper/css/pagination"

export default function TestimonialsContinuous() {
 
     const testText =
    "\"Since partnering with [Your Company], our buildings have run more smoothly than ever. Maintenance issues are resolved quickly, communication is seamless, and tenant satisfaction is at an all-time high. They've taken the stress out of property management.\""
     const testText2 =
    "\"Since partnering with [Your Company]ess, and tenant satisfaction is at an all-time high. They've taken the stress out of property management.\""
  const author = "Spencer Toupin"
  const role = "COO Of Lynosoft"

  const testimonials = [
    { text: testText, author: author, role: role },
    { text: testText, author: "Jane Smith", role: "CEO of TechCorp" },
    { text: testText2, author: "Mike Johnson", role: "Property Manager" },
    { text: testText2, author: "Sarah Wilson", role: "Real Estate Director" },
    { text: testText, author: "David Brown", role: "Operations Manager" },
  ]

  return (
    <div className="testimonials-container">
      <div className="testimonials-intro">
        <h2>Join The Growing List of Satisfied Customers</h2>
      </div>
      <div className="testimonial-divider"></div>
      <div className="testimonials-card-container">
        <Swiper
          modules={[Autoplay,Pagination]}
          
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView="auto"
          centeredSlides={false}
        autoplay={{
          delay: 1, 
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: true,
        }}
        speed={5000} 
          loop={true}
          grabCursor={true}
          allowTouchMove={true}
          freeMode={true
          }
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 30,
            },
          }}
          className="testimonials-swiper-continuous"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} >
              <TestimonialCard text={testimonial.text} author={testimonial.author} role={testimonial.role} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
