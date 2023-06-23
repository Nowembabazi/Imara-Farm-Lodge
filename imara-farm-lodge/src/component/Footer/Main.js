import React from 'react'
import { Link } from 'react-router-dom'
import BGImg from "../../assets/img/bg/footer-bg.png";

const Main = () => {
  return (
    <>
        <footer className="footer-bg footer-p">
            <div className="footer-top  pt-90 pb-40" style={{background_color: "green", backgroundImage: `url(${BGImg})`}}>
                <div className="container">
                    <div className="row justify-content-between">                          
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title mb-30">
                                <h3 style={{ color: 'white' }}>IMARA FARM LODGE.</h3>
                                </div>
                                <div className="f-contact">
                                    <ul>
                                        <li>
                                            <i className="icon fal fa-phone"></i>
                                            <span>1800-121-3637<br/>+91-7052-101-786</span>
                                        </li>
                                        <li>
                                            <i className="icon fal fa-envelope"></i>
                                            <span>
                                                <Link to="#">info@example.com</Link><br/>
                                                <Link to="#">help@example.com</Link>
                                            </span>
                                        </li>
                                        <li>
                                            <i className="icon fal fa-map-marker-check"></i>
                                            <span>1247/Plot No. 39, 15th Phase,<br/> LHB Colony, Kanpur</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
						<div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>Our Links</h2>
                                </div>
                                <div className="footer-link">
                                    <ul>                                        
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about"> About Us</Link></li>
                                        <li><Link to="/services"> Services </Link></li>
                                        <li><Link to="/contact"> Contact Us</Link></li>
                                        <li><Link to="/blog">Blog </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>Our Services</h2>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        <li><Link to="/faq">FAQ</Link></li>
                                        <li><Link to="#">Support</Link></li>
                                        <li><Link to="#">Privercy</Link></li>
                                        <li><Link to="#">Term & Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                  <h2>Subscribe To Our Newsletter</h2>
                                </div>
                                <div className="footer-link">
                                <p>Subscribe our newsletter to get our latest update &amp; News</p>
                                    <div className="subricbe p-relative" data-animation="fadeInDown" data-delay=".4s" >
                                        <form action="news-mail.php" method="post" className="contact-form ">
                                            <input type="text" id="email2" name="email2"  className="header-input" placeholder="Your Email..." required />
                                            <button className="btn header-btn"> <i className="fas fa-location-arrow"></i> </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">                         
                           Copyright &copy; Riorelax 2022 . All rights reserved.         
                        </div>
                        <div className="col-lg-6 col-md-6 text-right text-xl-right">                       
                           <div className="footer-social">                                    
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Main
