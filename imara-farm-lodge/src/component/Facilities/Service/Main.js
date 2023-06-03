import { Link } from 'react-router-dom'
import React from 'react'
import Slider from "react-slick"
import BGImg from "../../../assets/img/bg/bdrc-bg.jpg";
import BGTestimonial from "../../../assets/img/bg/testimonial-bg.png";


const Main = () => {

    const testimonial = {
        initialIndex: 2,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
  return (
    <>
        <main>
            <section className="breadcrumb-area d-flex align-items-center" style={{ background : `url(${BGImg})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-center">
                                <div className="breadcrumb-title">
                                    <h2>Service</h2>    
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Service</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="service-details2" className="pt-120 pb-90 p-relative">
                <div className="animations-01"><img src="assets/img/bg/an-img-01.png" alt="an-img-01" /></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6">
                                <div className="services-08-item mb-30">
                                    <div className="services-icon2">
                                       <img src="assets/img/icon/fe-icon01.png" alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src="assets/img/icon/fe-icon01.png" alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details"> Qulity Room</Link></h3>
                                        <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                        <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-4 col-md-6">                                  
                                <div className="services-08-item mb-30">
                                     <div className="services-icon2">
                                       <img src="assets/img/icon/fe-icon04.png" alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                   <img src="assets/img/icon/fe-icon04.png" alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details">Privet Beach</Link></h3>
                                       <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                         <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-4 col-md-6">
                               <div className="services-08-item mb-30">
                                     <div className="services-icon2">
                                       <img src="assets/img/icon/fe-icon05.png" alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src="assets/img/icon/fe-icon05.png" alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details">Best Accommodation</Link></h3>
                                        <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                         <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                         <div className="col-lg-4 col-md-6">
                               <div className="services-08-item mb-30">
                                     <div className="services-icon2">
                                       <img src="assets/img/icon/fe-icon06.png" alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src="assets/img/icon/fe-icon06.png" alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details"> Wellness & Spa</Link></h3>
                                        <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                        <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-4 col-md-6">
                               <div className="services-08-item mb-30">
                                   <div className="services-icon2">
                                       <img src="assets/img/icon/fe-icon07.png" alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                   <img src="assets/img/icon/fe-icon07.png" alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details">Restaurants & Bars</Link></h3>
                                       <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                         <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-4 col-md-6">
                                <div className="services-08-item mb-30">
                                    <div className="services-icon2">
                                       <img src="assets/img/icon/fe-icon08.png" alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src="assets/img/icon/fe-icon08.png" alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details">Special Offers</Link></h3>
                                        <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                         <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
            <section className="feature-area2 p-relative fix" style={{background: "#f7f5f1"}}>
                <div className="animations-02"><img src="assets/img/bg/an-img-02.png" alt="contact-bg-an-05"/></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                         <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                           <div className="feature-img">                               
                                <img src="assets/img/features/feature.png" alt="img" className="img"/>              
                            </div>
                        </div>
					    <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="feature-content s-about-content">
                                <div className="feature-title pb-20">                               
                                    <h5>Luxury Hotel & Resort</h5>
                                <h2>
                                 Pearl Of The Adriatic.
                                </h2>                             
                                </div>
                                <p>Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum consequat porttitor.Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta ex, in imperdiet tortor feugiat at.</p>
                                <p>Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget.</p>
                                <div className="slider-btn mt-15">                                          
                                    <Link to="/about" className="btn ss-btn smoth-scroll">Discover More</Link>				
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="booking pt-120 pb-120 p-relative fix">
                <div className="animations-01"><img src="assets/img/bg/an-img-01.png" alt="an-img-01"/></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact-bg02">
                                <div className="section-title center-align">
                                    <h5>make appointment</h5>
                                    <h2>
                                       Book A Room
                                    </h2>
                                </div>                                
                                <form action="mail.php" method="post" className="contact-form mt-30">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="contact-field p-relative c-name mb-20">                                    
                                                <label><i className="fal fa-badge-check"></i> Check In Date</label>
                                                <input type="date" id="chackin" name="date"/>
                                            </div>                               
                                        </div>
                                        <div className="col-lg-6 col-md-6">                               
                                            <div className="contact-field p-relative c-subject mb-20">                                   
                                            <label><i className="fal fa-times-octagon"></i> Check Out Date</label>
                                                <input type="date" id="chackout" name="date"/>
                                            </div>
                                        </div>		
                                        <div className="col-lg-6 col-md-6">                               
                                            <div className="contact-field p-relative c-subject mb-20">                                   
                                                <label><i className="fal fa-users"></i> Adults</label>
                                                <select name="adults" id="adu">
                                                    <option value="sports-massage">Adults</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                        </div>	
                                        <div className="col-lg-6 col-md-6">                               
                                            <div className="contact-field p-relative c-option mb-20">                                   
                                                <label><i className="fal fa-concierge-bell"></i> Room</label>
                                                <select name="room" id="rm">
                                                    <option value="sports-massage">Room</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="slider-btn mt-15">                                          
                                                <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"><span>Book Table Now</span></button>				
                                            </div>                             
                                        </div>
                                    </div>
                                </form>                            
                            </div>           
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="booking-img">
                                 <img src="assets/img/bg/booking-img.png" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial-area pt-120 pb-90 p-relative fix" style={{ background: `url(${BGTestimonial})` , background_size: "cover"}} >
                <div className="container">
                    <div className="row">
                         <div className="col-lg-12">
                              <div className="section-title center-align mb-50 text-center">
                                <h5>Testimonial</h5>
                                <h2>What Our Clients Says</h2>
                                <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                            </div>
                           
                        </div>
                        <div className="col-lg-12">
                            <Slider className="testimonial-active" {...testimonial}>
                                <div className="single-testimonial">
                                     <div className="testi-author">
                                        <img src="assets/img/testimonial/testi_avatar.png" alt="img"/>
                                        <div className="ta-info">
                                            <h6>Jina Nilson</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                    <div className="review-icon">
                                        <img src="assets/img/testimonial/review-icon.png" alt="img"/>
                                     </div>
                                    <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                                    
                                    <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img"/>
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                     <div className="testi-author">
                                        <img src="assets/img/testimonial/testi_avatar_02.png" alt="img"/>
                                        <div className="ta-info">
                                            <h6>Braitly Dcosta</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                   <div className="review-icon">
                                        <img src="assets/img/testimonial/review-icon.png" alt="img"/>
                                     </div>
                                      <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                                    
                                    <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img"/>
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                     <div className="testi-author">
                                        <img src="assets/img/testimonial/testi_avatar_03.png" alt="img"/>
                                        <div className="ta-info">
                                            <h6>Roboto Dose</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                    <div className="review-icon">
                                        <img src="assets/img/testimonial/review-icon.png" alt="img"/>
                                     </div>
                                        <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                                        
                                        <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img"/>
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                     <div className="testi-author">
                                        <img src="assets/img/testimonial/testi_avatar_02.png" alt="img"/>
                                        <div className="ta-info">
                                            <h6>Braitly Dcosta</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                    <div className="review-icon">
                                        <img src="assets/img/testimonial/review-icon.png" alt="img"/>
                                    </div>
                                      <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                                    
                                    <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img"/>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Main