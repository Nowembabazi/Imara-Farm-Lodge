import { Link } from 'react-router-dom'
import React from 'react'
import Slider from "react-slick"

import BGImg from "../../assets/img/bg/bdrc-bg.jpg";

const Main = () => {

    const team = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 4
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
                                    <h2>Faq</h2>    
                                    <div className="breadcrumb-wrap">                              
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Faq </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="faq" className="faq-area pt-120 pb-120">             
                <div className="container">   
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="faq-wrap">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h2 className="mb-0">
                                                <button className="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                                    Breaking The Rules Using SQLite To Demo Web?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h2 className="mb-0">
                                                <button className="faq-btn" type="button" data-bs-toggle="collapse"  data-bs-target="#collapseTwo">
                                                    Monthly Web Development Update Pragmatic Releasing?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h2 className="mb-0">
                                                <button className="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                                    How To Use Underlined Text To Improve User Experience
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" >
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingFour">
                                            <h2 className="mb-0">
                                                <button className="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                                    Understanding CSS Layout And The Block Formatting
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="faq-wrap">
                                <div className="accordion" id="accordionExample1">
                                    <div className="card">
                                        <div className="card-header" id="headingfive">
                                            <h2 className="mb-0">
                                                <button className="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive">
                                                    Breaking The Rules Using SQLite To Demo Web?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapsefive" className="collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample1" >
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingSix">
                                            <h2 className="mb-0">
                                                <button className="faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                                                    Monthly Web Development Update Pragmatic Releasing?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseSix" className="collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample" >
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingSeveen">
                                            <h2 className="mb-0">
                                                <button className="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeveen">
                                                    How To Use Underlined Text To Improve User Experience
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseSeveen" className="collapse" aria-labelledby="headingSeveen" data-bs-parent="#accordionExample" >
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingEighte">
                                            <h2 className="mb-0">
                                                <button className="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighte">
                                                    Understanding CSS Layout And The Block Formatting
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseEighte" className="collapse" aria-labelledby="headingEighte" data-bs-parent="#accordionExample">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="newslater-area p-relative pt-120 pb-120" style={{background : "#f7f5f1"}}>
                <div className="animations-01"><img src="assets/img/bg/an-img-07.png" alt="contact-bg-an-05" /></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-xl-9 col-lg-9">
                            <div className="section-title center-align mb-40 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                 <h5>Newsletter</h5>
                                <h2>
                                    Get Best Offers On The Hotel
                                </h2>
                                <p>With the subscription, enjoy your favourite Hotels without having to think about it</p>
                            </div>
                            <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater">
                               <div className="form-group">
                                  <input className="form-control" id="email2" name="email" type="email" placeholder="Your Email Address" value="" required="" /> 
                                  <button type="submit" className="btn btn-custom" id="send2">Subscribe Now</button>
                               </div>
                            </form>
                        </div>
                    </div>                   
                </div>
            </section>
            <section className="team-area2 fix p-relative pt-105 pb-80">  
                <div className="container">  
                    <div className="row">   
                        <div className="col-lg-12 p-relative">
                            <div className="section-title center-align mb-40 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                 <h5>Our Team</h5>
                                <h2>
                                     Best Expert Hotel
                                </h2>
                                <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel </p>
                            </div>
                        </div> 
                    </div>
                   <Slider className="row team-active" {...team}>                   
                        <div className="col-xl-4 col-md-6">
                            <div className="single-team mb-40" >
                                <div className="team-thumb">
                                    <div className="brd">
                                         <img src="assets/img/team/team01.jpg" alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>Howard Holmes</h4>
                                    <p>Designer</p>
                                    <div className="team-social">
                                        <ul>
                                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li> 
                                            <li> <Link to="#"><i className="fab fa-twitter"></i></Link></li>   
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-team mb-40" >
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src="assets/img/team/team02.jpg" alt="img" />
                                    </div>                                     
                                </div>
                                <div className="team-info">
                                    <h4>Ella Thompson</h4>
                                    <p>Designer</p>
                                    <div className="team-social">
                                        <ul>
                                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li> 
                                            <li> <Link to="#"><i className="fab fa-twitter"></i></Link></li>   
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div className="col-xl-4 col-md-6">
                            <div className="single-team mb-40" >
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src="assets/img/team/team03.jpg" alt="img" />
                                    </div>
                                    
                                </div>
                                <div className="team-info">
                                    <h4>Vincent Cooper</h4>
                                    <p>Designer</p>
                                    <div className="team-social">
                                        <ul>
                                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li> 
                                            <li> <Link to="#"><i className="fab fa-twitter"></i></Link></li>   
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="col-xl-4 col-md-6">
                            <div className="single-team mb-40" >
                                <div className="team-thumb">
                                    <div className="brd">
                                         <img src="assets/img/team/team04.jpg" alt="img" />
                                    </div>
                                
                                </div>
                                <div className="team-info">
                                    <h4>Danielle Bryant</h4>
                                    <p>Designer</p>
                                    <div className="team-social">
                                        <ul>
                                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li> 
                                            <li> <Link to="#"><i className="fab fa-twitter"></i></Link></li>   
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div className="col-xl-4 col-md-6">
                            <div className="single-team mb-40" >
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src="assets/img/team/team05.jpg" alt="img" />
                                    </div>
                                    
                                </div>
                                <div className="team-info">
                                    <h4>Vincent Cooper</h4>
                                    <p>Designer</p>
                                    <div className="team-social">
                                        <ul>
                                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li> 
                                            <li> <Link to="#"><i className="fab fa-twitter"></i></Link></li>   
                                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </Slider>
                </div>
            </section>
        </main>
    </>
  )
}

export default Main