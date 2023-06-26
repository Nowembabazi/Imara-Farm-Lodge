import React ,{ useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import BGImg from "../../../assets/img/bg/bdrc-bg.jpg";
import BGVideo from "../../../assets/img/bg/video-bg.png"
import BGTestimonial from "../../../assets/img/bg/testimonial-bg.png"

const Main = () => {

    const [yShow, setyShow] = useState()

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
    const brand = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
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
                                    <h2>Pricing</h2>    
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Pricing</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="pricing" className="pricing-area pt-120 pb-60 fix p-relative">
                <div className="animations-01"><img src="assets/img/bg/an-img-01.png" alt="an-img-01" /></div>
                <div className="animations-02"><img src="assets/img/bg/an-img-02.png" alt="contact-bg-an-01" /></div>
                <div className="container"> 
                   <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-box pricing-box2 mb-60">
                                <div className="pricing-head">  
                                    <h3> Room cleaning </h3>    
                                    <p>Perfect for early-stage startups</p>
                                    <div className="month">Monthly</div>
                                    <div className="price-count">
                                        <h2>$29.99</h2>
                                    </div> 
                                    <hr/>
                                </div>
                                <div className="pricing-body mt-20 mb-30 text-left">
                                    <ul>
                                        <li>Aliquam quis justo at lorem</li>
                                        <li>Fusce sodales, urna et tempus</li>
                                        <li>Vestibulum blandit lorem quis</li>
                                        <li>Orci varius natoque penatibus</li>
                                        <li>Aliquam a nisl congue, auctor</li>
                                    </ul>
                                </div>  
                                <div className="pricing-btn">
                                    <Link to="contact.html" className="btn ss-btn">Get Started <i className="fal fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-box pricing-box2 active mb-60">
                                <div className="pricing-head">  
                                    <h3> Drinks included </h3>    
                                    <p>Perfect for early-stage startups</p>
                                    <div className="month">Monthly</div>
                                    <div className="price-count">
                                        <h2>$39.99</h2>
                                    </div> 
                                    <hr/>
                                </div>
                                <div className="pricing-body mt-20 mb-30 text-left">
                                    <ul>
                                        <li>Aliquam quis justo at lorem</li>
                                        <li>Fusce sodales, urna et tempus</li>
                                        <li>Vestibulum blandit lorem quis</li>
                                        <li>Orci varius natoque penatibus</li>
                                        <li>Aliquam a nisl congue, auctor</li>
                                    </ul>
                                </div>   
                                <div className="pricing-btn">
                                    <Link to="contact.html" className="btn ss-btn">Get Started <i className="fal fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-box pricing-box2 mb-60">
                                <div className="pricing-head">  
                                    <h3>Premium Offer</h3>    
                                    <p>Perfect for early-stage startups</p>
                                    <div className="month">Monthly</div>
                                    <div className="price-count">
                                        <h2>$59.99</h2>
                                    </div> 
                                    <hr/>
                                </div>
                                <div className="pricing-body mt-20 mb-30 text-left">
                                    <ul>
                                        <li>Aliquam quis justo at lorem</li>
                                        <li>Fusce sodales, urna et tempus</li>
                                        <li>Vestibulum blandit lorem quis</li>
                                        <li>Orci varius natoque penatibus</li>
                                        <li>Aliquam a nisl congue, auctor</li>
                                    </ul>
                                </div>  
                                <div className="pricing-btn">
                                    <Link to="contact.html" className="btn ss-btn">Get Started <i className="fal fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="video" className="video-area pt-150 pb-150 p-relative" style={{ background : `url(${BGVideo})` , background_repeat: "no-repeat" , background_position: "center", background_size:"cover"}} >
                <div className="content-lines-wrapper2">
                    <div className="content-lines-inner2">
                        <div className="content-lines2"></div>
                    </div>
                </div>
                <div className="container">                   
                    <div className="row">
                        <div className="col-12">
                            <div className="s-video-wrap">
                                <div className="s-video-content">
                                    <Link to="#" onClick={() => setyShow(true)} className="popup-video">
                                    <img src="assets/img/bg/play-button.png" alt="circle_right" /></Link>
                                </div>
                            </div>
                            <div className="section-title center-align text-center">
                                <h2>
                                 Take A Tour Of Luxuri
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial-area pt-120 pb-90 p-relative fix" style={{ background : `url(${BGTestimonial})` , background_size: "cover"}}>
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
                                        <img src="assets/img/testimonial/testi_avatar.png" alt="img" />
                                        <div className="ta-info">
                                            <h6>Jina Nilson</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                    <div className="review-icon">
                                        <img src="assets/img/testimonial/review-icon.png" alt="img" />
                                     </div>
                                    <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                                    
                                    <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                    <div className="testi-author">
                                        <img src="assets/img/testimonial/testi_avatar_02.png" alt="img" />
                                        <div className="ta-info">
                                            <h6>Braitly Dcosta</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                    <div className="review-icon">
                                        <img src="assets/img/testimonial/review-icon.png" alt="img" />
                                    </div>
                                    <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                                    
                                    <div className="qt-img">
                                        <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                    <div className="testi-author">
                                        <img src="assets/img/testimonial/testi_avatar_03.png" alt="img" />
                                        <div className="ta-info">
                                            <h6>Roboto Dose</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                    <div className="review-icon">
                                        <img src="assets/img/testimonial/review-icon.png" alt="img" />
                                     </div>
                                    <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                                    
                                    <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                     <div className="testi-author">
                                        <img src="assets/img/testimonial/testi_avatar_02.png" alt="img" />
                                        <div className="ta-info">
                                            <h6>Braitly Dcosta</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                   <div className="review-icon">
                                        <img src="assets/img/testimonial/review-icon.png" alt="img" />
                                     </div>
                                      <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                                    
                                    <div className="qt-img">
                                    <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <div className="brand-area pt-60 pb-60" style={{background:"#f7f5f1"}}>
                <div className="container">
                    <Slider className="row brand-active" {...brand}>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                <img src="assets/img/brand/b-logo1.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src="assets/img/brand/b-logo2.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src="assets/img/brand/b-logo3.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                  <img src="assets/img/brand/b-logo4.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src="assets/img/brand/b-logo5.png" alt="img" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </main>

        {yShow &&
        <>
            <div className="mfp-bg mfp-ready"></div>
            <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabIndex="-1" style={{overflow: "hidden"}}>
                <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                    <div className="mfp-content">
                        <div className="mfp-iframe-scaler">
                            <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => setyShow(false)}>×</button>
                            <iframe className="mfp-iframe" src="//www.youtube.com/embed/gyGsPlt06bo?autoplay=1" frameborder="0" allowFullScreen=""></iframe>
                        </div>
                    </div>
                    <div className="mfp-preloader">Loading...</div>
                </div>
            </div>
        </>
        }
    </>
  )
}

export default Main