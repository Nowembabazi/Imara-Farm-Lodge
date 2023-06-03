import { Link } from 'react-router-dom'
import React from 'react'
import BGImg from "../../../assets/img/bg/bdrc-bg.jpg";


const Main = () => {
  return (
    <>
        <main>
            <section className="breadcrumb-area d-flex align-items-center"  style={{ background : `url(${BGImg})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-left">
                                <div className="breadcrumb-title">
                                    <h2>Team Details</h2>    
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Team Details </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-area-content" >
                <div className="container">
                    <div className="lower-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="team-img-box">
                                    <img src="assets/img/team/team01.jpg" alt="img"/>
                                </div>
                                <div className="per-info">
                                    <h4>Personal Info</h4> 
                                    <ul>
                                        <li>
                                            <div className="icon"><i className="fal fa-envelope"></i> <strong>Email</strong></div>
                                            <div className="text">info@webexample.com</div>
                                        </li>    
                                        <li>
                                            <div className="icon"><i className="fal fa-phone"></i> <strong>Phone</strong></div>
                                            <div className="text">980-786-098-09</div>
                                        </li>    
                                        <li>
                                            <div className="icon"><i className="fal fa-map-marker-alt"></i><strong>Address</strong></div>
                                            <div className="text">12/A, Miranda City Hall, NYC</div>
                                        </li>    
                                        <li>
                                            <div className="icon"><i className="fal fa-globe"></i><strong>Website</strong></div>
                                            <div className="text">www.webexample.com</div>
                                        </li>    
                                    </ul>     
                                </div>
                            </div>
                            <div className="text-column col-lg-8 col-md-12 col-sm-12">
                               <div className="s-about-content pl-30 wow fadeInRight" data-animation="fadeInRight" data-delay=".2s">  
                                    <p>Pleasure and praising pain was born and I will give you a complete account of the systems, and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally Nor who loves or pursues or desires to obtain pain of itself.</p>
                                    <p>Tempor nonummy metus lobortis. Sociis velit etiam, dapibus lectus vehicula pele llentesque cras pat fusce pharetra felis sapien varius Integer dis ads se purus sollicitudin dapibus et vivamus pharetra sit integer dictum in dise natoque an mus quis in. Facilisis inceptos nec, potenti nostra aenean lacinia varius semper ant nullam nulla primis placerat facilisis. Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. </p>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="skills-content s-about-content mt-20">
                                                <div className="skills">
                                                    <div className="skill mb-30">
                                                        <div className="skill-name">Design</div>
                                                        <div className="skill-bar">
                                                        <div className="skill-per" id="80" style={{ width : "80%"}}></div>
                                                        </div>
                                                    </div>
                                                        <div className="skill mb-30">
                                                        <div className="skill-name">Easy Manage</div>
                                                        <div className="skill-bar">
                                                        <div className="skill-per" id="90" style={{ width : "90%"}}></div>
                                                        </div>
                                                    </div>
                                                        <div className="skill mb-30">
                                                        <div className="skill-name">Project Organize</div>
                                                        <div className="skill-bar">
                                                        <div className="skill-per" id="70" style={{ width : "70%"}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="two-column mt-30">
                                        <div className="row">
                                                <div className="image-column col-xl-6 col-lg-12 col-md-12">
                                                <figure className="image"><img src="assets/img/gallery/protfolio-img02.png" alt=""/></figure>
                                            </div>
                                            <div className="text-column col-xl-6 col-lg-12 col-md-12">
                                                <figure className="image"><img src="assets/img/gallery/protfolio-img03.png" alt=""/></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Main