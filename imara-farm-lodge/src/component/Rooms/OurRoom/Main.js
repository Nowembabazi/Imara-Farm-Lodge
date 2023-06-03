import { Link } from 'react-router-dom'
import React , { useState } from 'react'
import BGImg from "../../../assets/img/bg/bdrc-bg.jpg";
import BGVImg from "../../../assets/img/bg/video-bg.png";
import FsLightbox from 'fslightbox-react';

const Main = () => {
    const [yShow, setyShow] = useState()
    const [toggler, setToggler] = useState(false);


    const [img, setImg] = useState()
    const [img1, setImg1] = useState()
    const [img2, setImg2] = useState()
    const [img3, setImg3] = useState()
    const [img4, setImg4] = useState()
    const [img5, setImg5] = useState()
    
    const [activeImage , setActiveImage] = useState(1)

    const [images , setImages] = useState([
   
        'assets/img/gallery/room-img01.png',
        'assets/img/gallery/room-img02.png',
        'assets/img/gallery/room-img03.png',
        'assets/img/gallery/room-img04.png',
        'assets/img/gallery/room-img05.png',
        'assets/img/gallery/room-img06.png'
	])


  return (
    <>
        <main>
            <section className="breadcrumb-area d-flex align-items-center" style={{background : `url(${BGImg})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-center">
                                <div className="breadcrumb-title">
                                    <h2>Our Menu</h2>    
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Our Menu</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
            <section id="services" className="services-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services ser-m mb-30">
                                <div className="services-thumb"  onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(1)
                                }}
                                >
									<Link to="#" onClick={() => setImg(true)} className="gallery-link popup-image" >
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
                                            <li><img src="assets/img/icon/sve-icon1.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon2.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon3.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon4.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon5.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon6.png" alt="img" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                           <div className="single-services ser-m mb-30">
                                <div className="services-thumb"  onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(2)
                                }}>
									<Link to="#"  onClick={() => setImg1(true)} className="gallery-link popup-image" >
                                    <img src="assets/img/gallery/room-img02.png" alt="img" />
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
                                            <li><img src="assets/img/icon/sve-icon1.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon2.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon3.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon4.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon5.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon6.png" alt="img" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services ser-m mb-30">
                                <div className="services-thumb"  onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(3)
                                }}>
									<Link to="#" onClick={() => setImg2(true)} className="gallery-link popup-image" >
                                    <img src="assets/img/gallery/room-img03.png" alt="img" />
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
                                            <li><img src="assets/img/icon/sve-icon1.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon2.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon3.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon4.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon5.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon6.png" alt="img" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                           <div className="single-services ser-m mb-30">
                                <div className="services-thumb"  onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(4)
                                }}>
									<Link to="#" onClick={() => setImg3(true)} className="gallery-link popup-image" >
                                    <img src="assets/img/gallery/room-img04.png" alt="img" />
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
                                            <li><img src="assets/img/icon/sve-icon1.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon2.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon3.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon4.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon5.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon6.png" alt="img" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                           <div className="single-services ser-m mb-30">
                                <div className="services-thumb"  onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(5)
                                }}>
									<Link to="#" onClick={() => setImg4(true)} className="gallery-link popup-image">
                                    <img src="assets/img/gallery/room-img05.png" alt="img" />
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
                                            <li><img src="assets/img/icon/sve-icon1.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon2.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon3.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon4.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon5.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon6.png" alt="img" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services ser-m mb-30">
                                <div className="services-thumb"  onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(6)
                                }}>
									<Link to="#" onClick={() => setImg5(true)} className="gallery-link popup-image" >
                                    <img src="assets/img/gallery/room-img06.png" alt="img" />
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
                                            <li><img src="assets/img/icon/sve-icon1.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon2.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon3.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon4.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon5.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon6.png" alt="img" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-area2 p-relative fix" style={{background: "#f7f5f1"}}>
                 <div className="animations-02"><img src="assets/img/bg/an-img-02.png" alt="contact-bg-an-05" /></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                         <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                           <div className="feature-img">                               
                                <img src="assets/img/features/feature.png" alt="img" className="img" />              
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
                <div className="animations-01"><img src="assets/img/bg/an-img-01.png" alt="an-img-01" /></div>
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
                                            <input type="date" id="chackin" name="date" />
                                        </div>                               
                                    </div>

                                    <div className="col-lg-6 col-md-6">                               
                                        <div className="contact-field p-relative c-subject mb-20">                                   
                                           <label><i className="fal fa-times-octagon"></i> Check Out Date</label>
                                            <input type="date" id="chackout" name="date" />
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
            <section id="video" className="video-area pt-150 pb-150 p-relative" style={{background : `url(${BGVImg})` , background_repeat: "no-repeat" ,background_position: "center" , background_size:"cover"}} >
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
                                    <Link to="#" onClick={() => setyShow(true)} className="popup-video"><img src="assets/img/bg/play-button.png" alt="circle_right" /></Link>
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
        </main>

        <FsLightbox
            toggler={toggler}
            sources={images}
            slide={activeImage}
        />

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