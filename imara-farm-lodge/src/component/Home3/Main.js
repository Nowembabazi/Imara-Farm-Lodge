import { Link } from 'react-router-dom'
import React , { useState } from 'react'
import BGImg from "../../assets/img/slider/slider_bg.png";
import BGTest from "../../assets/img/bg/testimonial-bg.png";
import BGVideo from "../../assets/img/bg/video-bg.png"
import Slider from "react-slick"
import FsLightbox from 'fslightbox-react';

const Main = () => {

    const [toggler, setToggler] = useState(false);
    const [activeImage , setActiveImage] = useState(1)
    const [images , setImages] = useState([
        'assets/img/gallery/room-img01.png',
        'assets/img/gallery/room-img02.png',
        'assets/img/gallery/room-img03.png',
        'assets/img/gallery/room-img04.png',
        'assets/img/gallery/room-img05.png',
        'assets/img/gallery/room-img06.png'
	])

    const [yShow, setyShow] = useState()
    const [hShow, sethShow] = useState()
    const [mobile, setmobile] = useState(false)
    const [show, setshow] = useState(false)
    const [show1, setshow1] = useState(false)
    const [show2, setshow2] = useState(false)
    const [show3, setshow3] = useState(false)
    const [show4, setshow4] = useState(false)

    const service = {
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
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-2 col-lg-3 pl-0 pr-0">
                    <header className="header-slidemenu">
                        <div className="logo mb-100">
                            <Link to="/"><img src="assets/img/logo/logo.png" alt="logo"/></Link>
                        </div>
                        <div className="main-menu slide-out">
                            <nav id="mobile-menu">
                                <ul>
                                    <li className="has-sub">
                                        <Link to="/">Home</Link>
                                        <ul>													
                                            <li><Link to="/">Home Page 01</Link></li>
                                            <li><Link to="/home-02">Home Page 02</Link></li>													
                                            <li><Link to="/home-03">Home Page Side Menu</Link></li>													
                                            <li><Link to="/home-04">Home Page Full Menu</Link></li>		
                                        </ul>
                                    </li>
                                    <li><Link to="/about">About</Link></li>        
                                    <li className="has-sub">
                                        <Link to="/room">our rooms</Link>
                                        <ul>													
                                            <li> <Link to="/room">Our Rooms</Link></li>
                                            <li> <Link to="/room-details">Rooms Details</Link></li>
                                        </ul>
                                    </li>     
                                    <li className="has-sub">
                                        <Link to="/service">Facilities</Link>
                                        <ul>													
                                            <li> <Link to="/service">Services</Link></li>
                                            <li> <Link to="/service-details">Services Details</Link></li>
                                        </ul>
                                    </li>  
                                    <li className="has-sub"><Link to="#">Pages</Link>
                                        <ul>
                                            <li><Link to="/gallery">Gallery</Link></li>
                                            <li><Link to="/faq">Faq</Link></li>
                                            <li><Link to="/team">Team</Link></li>
                                            <li><Link to="/team-details">Team Details</Link></li>
                                            <li><Link to="/pricing">Pricing</Link></li>
                                            <li><Link to="/shop">Shop</Link></li>
                                            <li><Link to="/shop-details">Shop Details</Link></li>
                                            </ul>
                                    </li>
                                    <li className="has-sub"> 
                                        <Link to="/blog">Blog</Link>
                                        <ul>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/blog-details">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/contact">Contact</Link></li>                                               
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-menu mean-container">
                            <div className="mean-bar"><Link to="#nav" className={`meanmenu-reveal ${mobile && "meanclose"}`} onClick = {() => setmobile(mobile === true ? false : true)} style={{ right: "0px" , left: "auto", textAlign: "center", textIndent: "0px", fontSize: "18px"}}>
                                {mobile ?
                                "X"
                                :
                                <>
                                    <span><span><span></span></span></span>
                                    </>
                                }
                            </Link>
                                <nav className="mean-nav">
                                    {mobile && 
                                    <ul style={{ display: mobile ? "block" : "none" }}>
                                        <li className="has-sub">
                                            <Link to="/">Home</Link>
                                            <ul style={{ display: show ? "block" : "none" }}>
                                                <li><Link to="/">Home Page 01</Link></li>
                                                <li><Link to="/home-02">Home Page 02</Link></li>
                                                <li><Link to="/home-03">Home Page Side Menu</Link></li>
                                                <li><Link to="/home-04">Home Page Full Menu</Link></li>
                                            </ul>
                                            <Link to="#" className={`mean-expand ${show && "mean-clicked"}`}  onClick = {() => setshow(show === true ? false : true)} style={{ fontSize: "18px" }}>{show ? "-" : "+" }</Link>
                                        </li>
                                        <li><Link to="/about">About</Link></li>
                                        <li className="has-sub">
                                            <Link to="/room">our rooms</Link>
                                            <ul style={{ display: show1 ? "block" : "none" }}>
                                                <li> <Link to="/room">Our Rooms</Link></li>
                                                <li> <Link to="/room-details">Rooms Details</Link></li>
                                            </ul>
                                            <Link to="#" className={`mean-expand ${show1 && "mean-clicked"}`} onClick = {() => setshow1(show1 === true ? false : true)} style={{ fontSize: "18px" }}>{show1 ? "-" : "+" }</Link></li>
                                        <li className="has-sub">
                                            <Link to="/service">Facilities</Link>
                                            <ul style={{ display: show2 ? "block" : "none" }}>
                                                <li> <Link to="/service">Services</Link></li>
                                                <li> <Link to="/service-details">Services Details</Link></li>
                                            </ul>
                                            <Link to="#" className={`mean-expand ${show2 && "mean-clicked"}`} onClick = {() => setshow2(show2 === true ? false : true)}  style={{ fontSize: "18px" }}>{show2 ? "-" : "+" }</Link></li>
                                        <li className="has-sub"><Link to="#">Pages</Link>
                                            <ul style={{ display: show3 ? "block" : "none" }}>
                                                <li><Link to="/gallery">Gallery</Link></li>
                                                <li><Link to="/faq">Faq</Link></li>
                                                <li><Link to="/team">Team</Link></li>
                                                <li><Link to="/team-details">Team Details</Link></li>
                                                <li><Link to="/pricing">Pricing</Link></li>
                                                <li><Link to="/shop">Shop</Link></li>
                                                <li><Link to="/shop-details">Shop Details</Link>
                                                </li></ul>
                                            <Link to="#"  className={`mean-expand ${show3 && "mean-clicked"}`} onClick = {() => setshow3(show3 === true ? false : true)} style={{ fontSize: "18px" }}>{show3 ? "-" : "+" }</Link></li>
                                        <li className="has-sub">
                                            <Link to="/blog/">Blog</Link>
                                            <ul style={{ display: show4 ? "block" : "none" }}>
                                                <li><Link to="/blog/">Blog</Link></li>
                                                <li><Link to="/blog-details/">Blog Details</Link></li>
                                            </ul>
                                            <Link to="#"  className={`mean-expand ${show4 && "mean-clicked"}`} onClick = {() => setshow4(show4 === true ? false : true)} style={{ fontSize: "18px" }}>{show4 ? "-" : "+" }</Link></li>
                                        <li className="mean-last"><Link to="/contact">Contact</Link></li>
                                    </ul> }
                                </nav>
                            </div>
                        </div>
                        <div className="footer-social">    
                            <Link to="#">FW</Link>
                            <Link to="#">DR</Link>
                            <Link to="#">BE</Link>
                            <Link to="#">PN</Link>
                        </div>
                    </header>
                </div>
                <div className="col-xl-10 col-lg-9 pl-0 pr-0">
                    <section id="home" className="slider-area fix p-relative">
                        <div className="slider-active" style={{background: "#101010"}}>
                            <div className="single-slider slider-bg d-flex align-items-center" style={{ background : `url(${BGImg})` , background_size: "cover"}}>
                                <div className="container">
                                    <div className="row justify-content-center align-items-center">                                    
                                        <div className="col-xl-7 col-lg-12 col-md-12">
                                            <div className="slider-content s-slider-content text-center">
                                                <h2 data-animation="fadeInUp" data-delay=".4s">Enjoy A Luxuary Experience</h2>
                                                <p data-animation="fadeInUp" data-delay=".6s">Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.</p>
                                                
                                                <div className="slider-btn mt-30 mb-105">     
                                                    <Link to="/contact" className="btn ss-btn active mr-15" data-animation="fadeInLeft" data-delay=".4s">Discover More </Link>
                                                    <Link to="#" onClick={() => sethShow(true)} className="video-i popup-video" data-animation="fadeInUp" data-delay=".8s" style={{animation_delay: "0.8s"}} tabIndex="0"><i className="fas fa-play"></i> Intro Video</Link>
                                                </div>             
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div id="booking" className="booking-area p-relative">
                        <div className="container">
                            <form action="#" className="contact-form" >
                                <div className="row align-items-center">
                                    <div className="col-lg-12"> 
                                        <ul>
                                            <li> 
                                                <div className="contact-field p-relative c-name">  
                                                <label><i className="fal fa-badge-check"></i> Check In Date</label>
                                                        <input type="date" id="chackin" name="date"/>
                                                </div>      
                                            </li>
                                            <li> 
                                                <div className="contact-field p-relative c-name">  
                                                    <label><i className="fal fa-times-octagon"></i> Check Out Date</label>
                                                        <input type="date" id="chackout" name="date"/>
                                                </div>      
                                            </li>
                                            <li> 
                                                <div className="contact-field p-relative c-name">  
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
                                            </li>
                                            <li> 
                                                <div className="contact-field p-relative c-name">  
                                                    <label><i className="fal fa-baby"></i> Child</label>
                                                    <select name="child" id="cld">
                                                    <option value="sports-massage">Child</option>
                                                    <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                </div>      
                                            </li>
                                            <li> 
                                                <div className="contact-field p-relative c-name">  
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
                                            </li>
                                            <li>
                                                <div className="slider-btn">    
                                                    <label><i className="fal fa-calendar-alt"></i></label>
                                                <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Check Availability</button>
                                            </div>     
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <section className="about-area about-p pt-120 pb-120 p-relative fix">
                        <div className="animations-02"><img src="assets/img/bg/an-img-02.png" alt="contact-bg-an-02"/></div>
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                                        <img src="assets/img/features/about_img_02.png" alt="img" />   
                                    <div className="about-icon">
                                            <img src="assets/img/features/about_img_03.png" alt="img" />   
                                        </div>
                                    </div>
                                </div>                                
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="about-content s-about-content  wow fadeInRight  animated pl-30" data-animation="fadeInRight" data-delay=".4s">
                                        <div className="about-title second-title pb-25">  
                                            <h5>About Us</h5>
                                            <h2>Most Safe & Rated Hotel In London.</h2>                                   
                                        </div>
                                        <p>Morbi tortor urna, placerat vel arcu quis, fringilla egestas neque. Morbi sit amet porta erat, quis rutrum risus. Vivamus et gravida nibh, quis posuere felis. In commodo mi lectus, Integer ligula lorem, finibus vitae lorem vitae tincidunt dolor consequat quis.</p>
                                        <p>Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget lorem tempus blandit. Aenean eu vulputate lorem, quis auctor lectus.</p>
                                        <div className="about-content3 mt-30">
                                            <div className="row justify-content-center align-items-center">
                                                <div className="col-md-12">
                                                    <ul className="green mb-30">                                              
                                                        <li> 24 Month / 24,000km Nationwide Warranty monotone</li>
                                                        <li> Curabitur dapibus nisl a urna congue, in pharetra urna accumsan.</li>     
                                                        <li> Customer Rewards Program and excellent technology</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="slider-btn">                                          
                                                        <Link to="/about" className="btn ss-btn smoth-scroll">Discover More</Link>				
                                                    </div>
                                                </div>
                                                <div className="col-md-6 text-right">
                                                    <div className="signature">
                                                        <img src="assets/img/features/signature.png" alt="img" />                                             
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="service-details2" className="pt-120 pb-90 p-relative" style={{background: "#f7f5f1"}}>
                        <div className="animations-01"><img src="assets/img/bg/an-img-01.png" alt="an-img-01" /></div>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="section-title center-align mb-50 text-center">
                                        <h5>Explore</h5>
                                        <h2>
                                            The Hotel
                                        </h2>
                                        <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                                    </div>
                                
                                </div>
                                <div className="col-lg-4 col-md-6">
                                        <div className="services-08-item mb-30">
                                            <div className="services-icon2">
                                                <img src="assets/img/icon/fe-icon01.png" alt="img" />
                                            </div>
                                            <div className="services-08-thumb">
                                                <img src="assets/img/icon/fe-icon01.png" alt="img" />
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
                                                <img src="assets/img/icon/fe-icon04.png" alt="img" />
                                            </div>
                                            <div className="services-08-thumb">
                                                <img src="assets/img/icon/fe-icon04.png" alt="img" />
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
                                            <img src="assets/img/icon/fe-icon05.png" alt="img" />
                                            </div>
                                            <div className="services-08-thumb">
                                            <img src="assets/img/icon/fe-icon05.png" alt="img" />
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
                                            <img src="assets/img/icon/fe-icon06.png" alt="img" />
                                            </div>
                                            <div className="services-08-thumb">
                                            <img src="assets/img/icon/fe-icon06.png" alt="img" />
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
                                            <img src="assets/img/icon/fe-icon07.png" alt="img" />
                                            </div>
                                            <div className="services-08-thumb">
                                        <img src="assets/img/icon/fe-icon07.png" alt="img" />
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
                                            <img src="assets/img/icon/fe-icon08.png" alt="img" />
                                            </div>
                                            <div className="services-08-thumb">
                                            <img src="assets/img/icon/fe-icon08.png" alt="img" />
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
                    <section id="services" className="services-area pt-113 pb-150">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-12">    
                                    <div className="section-title center-align mb-50 text-center">
                                        <h5>The pleasure of luxury</h5>
                                        <h2>Rooms & Suites</h2>
                                        <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                                    </div>
                                </div>
                            </div>
                            <Slider className="row services-active" {...service}> 
                                <div className="col-xl-4 col-md-6">
                                    <div className="single-services mb-30">
                                        <div className="services-thumb">
                                            <Link to="#" className="gallery-link popup-image" onClick={() => { 
                                            setToggler(!toggler)
                                            setActiveImage(1)
                                        }}>
                                            <img src="assets/img/gallery/room-img01.png" alt="img" />
                                            </Link>
                                        </div>
                                        <div className="services-content"> 
                                            <div className="day-book">
                                                <ul>
                                                    <li>$600/Night</li>
                                                    <li><Link to="/contact">Book Now</Link></li>
                                                </ul>
                                            </div>
                                            <h4><Link to="/room-details">classNameic Balcony Room</Link></h4>    
                                            <p>Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta place ullam ipsum. Morbi imperdiet, orci et dapibus.</p>
                                            <div className="icon">
                                                <ul>
                                                    <li><img src="assets/img/icon/sve-icon1.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon2.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon3.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon4.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon5.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon6.png" alt="img"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="single-services mb-30">
                                        <div className="services-thumb">
                                            <Link to="#" className="gallery-link popup-image" onClick={() => { 
                                            setToggler(!toggler)
                                            setActiveImage(2)
                                        }}>
                                            <img src="assets/img/gallery/room-img02.png" alt="img"/>
                                            </Link>
                                        </div>
                                        <div className="services-content"> 
                                            <div className="day-book">
                                                <ul>
                                                    <li>$400/Night</li>
                                                    <li><Link to="/contact">Book Now</Link></li>
                                                </ul>
                                            </div>
                                            <h4><Link to="/room-details">Superior Double Room</Link></h4>    
                                            <p>Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta ex, in imperdiet tortor feugiat at.</p>
                                            <div className="icon">
                                                <ul>
                                                    <li><img src="assets/img/icon/sve-icon1.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon2.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon3.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon4.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon5.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon6.png" alt="img"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="single-services mb-30">
                                        <div className="services-thumb">
                                            <Link to="#" className="gallery-link popup-image" onClick={() => { 
                                            setToggler(!toggler)
                                            setActiveImage(3)
                                        }} >
                                            <img src="assets/img/gallery/room-img03.png" alt="img"/>
                                            </Link>
                                        </div>
                                        <div className="services-content"> 
                                            <div className="day-book">
                                                <ul>
                                                    <li>$100/Night</li>
                                                    <li><Link to="/contact">Book Now</Link></li>
                                                </ul>
                                            </div>
                                            <h4><Link to="/room-details">Super Balcony Double Room</Link></h4>    
                                            <p>Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta place ullam ipsum. Morbi imperdiet, orci et dapibus.</p>
                                            <div className="icon">
                                                <ul>
                                                    <li><img src="assets/img/icon/sve-icon1.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon2.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon3.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon4.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon5.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon6.png" alt="img"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="single-services mb-30">
                                        <div className="services-thumb">
                                            <Link to="#" className="gallery-link popup-image" onClick={() => { 
                                            setToggler(!toggler)
                                            setActiveImage(4)
                                        }}>
                                            <img src="assets/img/gallery/room-img04.png" alt="img"/>
                                            </Link>
                                        </div>
                                        <div className="services-content"> 
                                            <div className="day-book">
                                                <ul>
                                                    <li>$300/Night</li>
                                                    <li><Link to="/contact">Book Now</Link></li>
                                                </ul>
                                            </div>
                                            <h4><Link to="/room-details">Delux Double Room</Link></h4>    
                                        <p>Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta place ullam ipsum. Morbi imperdiet, orci et dapibus.</p>
                                            <div className="icon">
                                                <ul>
                                                    <li><img src="assets/img/icon/sve-icon1.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon2.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon3.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon4.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon5.png" alt="img"/></li>
                                                    <li><img src="assets/img/icon/sve-icon6.png" alt="img"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
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
                                            <Link to="/about"  className="btn ss-btn smoth-scroll">Discover More</Link>				
                                        </div>
                                        
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </section>
                    <section id="pricing" className="pricing-area pt-120 pb-60 fix p-relative">
                        <div className="animations-01"><img src="assets/img/bg/an-img-01.png" alt="an-img-01"/></div>
                        <div className="animations-02"><img src="assets/img/bg/an-img-02.png" alt="contact-bg-an-01"/></div>
                        <div className="container"> 
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-4 col-md-12">
                                <div className="section-title mb-20">
                                        <h5>Best Prices</h5>
                                        <h2>Extra Services</h2>                               
                                    </div>
                                    <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                                    <p>Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget.</p>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-box pricing-box2 mb-60">
                                        <div className="pricing-head">  
                                            <h3>Room cleaning</h3>    
                                            <p>Perfect for early-stage startups</p>
                                            <div className="month">Monthly</div>
                                            <div className="price-count">
                                                <h2>$39.99</h2>
                                            </div> 
                                            <hr/>
                                        </div>

                                        <div className="pricing-body mt-20 mb-30 text-left">
                                        <ul>
                                                <li>Hotel quis justo at lorem</li>
                                                <li>Fusce sodales, urna et tempus</li>
                                                <li>Vestibulum blandit lorem quis</li>                                           
                                            </ul>
                                        </div>      
                                        

                                        <div className="pricing-btn">
                                        <Link to="/contact" className="btn ss-btn">Get Started <i className="fal fa-angle-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-box pricing-box2 mb-60">
                                        <div className="pricing-head">  
                                            <h3>Drinks included</h3>    
                                            <p>Perfect for early-stage startups</p>
                                            <div className="month">Monthly</div>
                                            <div className="price-count">
                                                <h2>$59.99</h2>
                                            </div> 
                                            <hr/>
                                        </div>
                                        <div className="pricing-body mt-20 mb-30 text-left">
                                        <ul>
                                            <li>Hotel quis justo at lorem</li>
                                                <li>Fusce sodales, urna et tempus</li>
                                                <li>Vestibulum blandit lorem quis</li> 
                                            </ul>
                                        </div> 
                                        <div className="pricing-btn">
                                        <Link to="/contact" className="btn ss-btn">Get Started <i className="fal fa-angle-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="testimonial-area  testimonial-area-one pt-120 pb-90 p-relative fix" style={{backgroundImage: `url(${BGTest})`, background_size: "cover"}}>
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
                                                <label>
                                                    <i className="fal fa-badge-check"></i> Check In Date</label>
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
                                        <img src="assets/img/bg/booking-img.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="video" className="video-area pt-150 pb-150 p-relative" style={{backgroundImage: `url(${BGVideo})`, background_repeat: "no-repeat", background_position: "bottom", background_size:"cover"}}>
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
                                            <Link to="#" onClick={() => setyShow(true)} className="popup-video"><img src="assets/img/bg/play-button.png" alt="circle_right"/></Link>
                                        
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
                    <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
                        <div className="animations-02"><img src="assets/img/bg/an-img-06.png" alt="contact-bg-an-05"/></div>
                        <div className="container">
                            <div className="row align-items-center"> 
                                <div className="col-lg-12">
                                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                        <h5>Our Blog</h5>
                                        <h2>
                                            Latest Blog & News
                                        </h2>
                                        <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-4 col-md-6">
                                    <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                        <div className="blog-thumb2">
                                            <Link to="/blog-details"><img src="assets/img/blog/inner_b1.jpg" alt="img" /></Link>
                                        </div>                    
                                        <div className="blog-content2">    
                                            <div className="date-home">
                                                24th March 2022
                                            </div>
                                            <h4><Link to="/blog-details">Cras accumsan nulla nec lacus ultricies placerat.</Link></h4> 
                                            <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                                            <div className="blog-btn"><Link to="/blog-details">Read More</Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                        <div className="blog-thumb2">
                                            <Link to="/blog-details"><img src="assets/img/blog/inner_b2.jpg" alt="img" /></Link>
                                        </div>
                                        <div className="blog-content2">                                    
                                            <div className="date-home">
                                            24th March 2022
                                            </div>
                                            <h4><Link to="/blog-details">Dras accumsan nulla nec lacus ultricies placerat.</Link></h4> 
                                            <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                                            <div className="blog-btn"><Link to="/blog-details">Read More</Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                        <div className="blog-thumb2">
                                            <Link to="/blog-details"><img src="assets/img/blog/inner_b3.jpg" alt="img" /></Link>
                                        </div>
                                        <div className="blog-content2">                                    
                                            <div className="date-home">
                                                24th March 2022
                                            </div>
                                            <h4><Link to="/blog-details">Seas accumsan nulla nec lacus ultricies placerat.</Link></h4> 
                                            <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                                            <div className="blog-btn"><Link to="/blog-details">Read More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="brand-area pt-60 pb-60" style={{background:"#f7f5f1"}}>
                        <div className="container">
                            <Slider className="row brand-active" {...brand}>
                                <div className="col-xl-2">
                                    <div className="single-brand">
                                        <img src="assets/img/brand/b-logo1.png" alt="img"/>
                                    </div>
                                </div>
                                <div className="col-xl-2">
                                    <div className="single-brand">
                                        <img src="assets/img/brand/b-logo2.png" alt="img"/>
                                    </div>
                                </div>
                                <div className="col-xl-2">
                                    <div className="single-brand">
                                        <img src="assets/img/brand/b-logo3.png" alt="img"/>
                                    </div>
                                </div>
                                <div className="col-xl-2">
                                    <div className="single-brand">
                                        <img src="assets/img/brand/b-logo4.png" alt="img"/>
                                    </div>
                                </div>
                                <div className="col-xl-2">
                                    <div className="single-brand">
                                        <img src="assets/img/brand/b-logo5.png" alt="img"/>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
        {hShow &&
            <>  
                <div className="mfp-bg mfp-ready"></div>
                <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabIndex="-1" style={{overflow: "hidden"}}>
                    <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                        <div className="mfp-content">
                            <div className="mfp-iframe-scaler">
                                <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => sethShow(false)}>×</button>
                                <iframe className="mfp-iframe" src="//www.youtube.com/embed/gyGsPlt06bo?autoplay=1" frameborder="0" allowFullScreen=""></iframe>
                            </div>
                        </div>
                        <div className="mfp-preloader">Loading...</div>
                    </div>
                </div>
            </>
        }

        <FsLightbox
            toggler={toggler}
            sources={images}
            slide={activeImage}
        />
    </>
  )
}

export default Main