import { Link } from 'react-router-dom'
import React  from 'react'
import BGImg from "../../../assets/img/bg/bdrc-bg.jpg";

const Main = () => {
  return (
    <>
        <main>
            <section className="breadcrumb-area d-flex align-items-center" style={{ background : `url(${BGImg})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-center">
                                <div className="breadcrumb-title">
                                    <h2>Team</h2>    
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Team </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-area fix p-relative pt-120 pb-90" >    
                <div className="container">  
                   <div className="row">                   
                        <div className="col-xl-3">
                            <div className="single-team mb-45" >
                                <div className="team-thumb">
                                    <div className="brd">
                                         <img src="assets/img/team/team01.jpg" alt="img" />
                                    </div>                                   
                                </div>
                                <div className="team-info">
                                    <h4><Link to="/team-details">Bableo Dablo</Link></h4>
                                    <p>Worker</p>
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
                        <div className="col-xl-3">
                            <div className="single-team mb-45" >
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src="assets/img/team/team02.jpg" alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4><Link to="/team-details">Dawon Crisen</Link></h4>
                                    <p>Worker</p>
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
                       <div className="col-xl-3">
                            <div className="single-team mb-45" >
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src="assets/img/team/team03.jpg" alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4><Link to="/team-details">David Suarez</Link></h4>
                                    <p>Worker</p>
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
                         <div className="col-xl-3">
                            <div className="single-team mb-45" >
                                <div className="team-thumb">
                                    <div className="brd">
                                         <img src="assets/img/team/team04.jpg" alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4><Link to="/team-details">Gerard Peano</Link></h4>
                                    <p>Worker</p>
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
                        <div className="col-xl-3">
                            <div className="single-team mb-45" >
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src="assets/img/team/team05.png" alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4><Link to="/team-details">Ostin Green</Link></h4>
                                   <p>Worker</p>
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
                       <div className="col-xl-3">
                            <div className="single-team mb-45" >
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src="assets/img/team/team06.png" alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4><Link to="/team-details">Norman Colins</Link></h4>
                                    <p>Worker</p>
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
                         <div className="col-xl-3">
                            <div className="single-team mb-45" >
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src="assets/img/team/team07.png" alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4><Link to="/team-details">Ostin Green</Link></h4>
                                   <p>Worker</p>
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
                       <div className="col-xl-3">
                            <div className="single-team mb-45" >
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src="assets/img/team/team08.png" alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4><Link to="/team-details">Norman Colins</Link></h4>
                                    <p>Worker</p>
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
                    </div>
                </div>
            </section>
            <section id="skill" className="skill-area p-relative fix" style={{background: "#644222"}}>
                <div className="animations-01"><img src="assets/img/bg/an-img-05.png" alt="contact-bg-an-05" /></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
					    <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="skills-content s-about-content">
                                <div className="skills-title pb-20">                               
                                    <h5>Hotel We Use</h5>
                                    <h2>
                                    We Offer Wide Selection of Hotel
                                    </h2>                             
                                </div>
                                <p>Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum consequat porttitor.</p>
                                <div className="skills-content s-about-content mt-20">
                                    <div className="skills">
                                        <div className="skill mb-30">
                                            <div className="skill-name">Qulity Production</div>
                                            <div className="skill-bar">
                                                <div className="skill-per" id="80" style={{ width: "80%" }}></div>
                                            </div>
                                        </div>
                                        <div className="skill mb-30">
                                            <div className="skill-name">Maintenance Services</div>
                                            <div className="skill-bar">
                                                <div className="skill-per" id="90" style={{ width: "90%" }}></div>
                                            </div>
                                        </div>
                                        <div className="skill mb-30">
                                            <div className="skill-name">Product Managment</div>
                                            <div className="skill-bar">
                                                <div className="skill-per" id="70" style={{ width: "70%" }}></div>
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                           <div className="skills-img">                               
                                <img src="assets/img/bg/skills-img.png" alt="img" className="img" />              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="newslater-area p-relative pt-120 pb-120" style={{background: "#f7f5f1"}}>
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
                                  <input className="form-control" id="email3" name="email" type="email" placeholder="Your Email Address" value="" required="" /> 
                                  <button type="submit" className="btn btn-custom" id="send2">Subscribe Now</button>
                               </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Main