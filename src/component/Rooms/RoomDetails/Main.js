// import { Link } from 'react-router-dom'
// import React from 'react'
// import BGImg from "../../../assets/img/bg/bdrc-bg.jpg";

// const Main = () => {
//   return (
//     <>
//         <main>
//             <section className="breadcrumb-area d-flex align-items-center" style={{ background : `url(${BGImg})`}}>
//                 <div className="container">
//                     <div className="row align-items-center">
//                         <div className="col-xl-12 col-lg-12">
//                             <div className="breadcrumb-wrap text-center">
//                                 <div className="breadcrumb-title">
//                                     <h2>Room Deatils</h2>    
//                                     <div className="breadcrumb-wrap">
//                                     <nav aria-label="breadcrumb">
//                                         <ol className="breadcrumb">
//                                             <li className="breadcrumb-item"><Link to="/">Home</Link></li>
//                                             <li className="breadcrumb-item active" aria-current="page">Services Details</li>
//                                         </ol>
//                                     </nav>
//                                 </div>
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <div className="about-area5 about-p p-relative">
//                 <div className="container pt-120 pb-40">
//                     <div className="row">
//                         <div className="col-sm-12 col-md-12 col-lg-4 order-2">
//                             <aside className="sidebar services-sidebar">
//                                 <div className="sidebar-widget categories">
//                                     <div className="widget-content">
//                                         <h2 className="widget-title">  Book A Room  </h2>
//                                         <div className="booking">
//                                             <div className="contact-bg"> 
//                                                 <form action="mail.php" method="post" className="contact-form mt-30">
//                                                     <div className="row">
//                                                     <div className="col-lg-12">
//                                                         <div className="contact-field p-relative c-name mb-20">                                    
//                                                             <label><i className="fal fa-badge-check"></i> Check In Date</label>
//                                                             <input type="date" id="chackin" name="date"/>
//                                                         </div>                               
//                                                     </div>
//                                                     <div className="col-lg-12">                               
//                                                         <div className="contact-field p-relative c-subject mb-20">                                   
//                                                         <label><i className="fal fa-times-octagon"></i> Check Out Date</label>
//                                                             <input type="date" id="chackout" name="date"/>
//                                                         </div>
//                                                     </div>		
//                                                     <div className="col-lg-12">                               
//                                                         <div className="contact-field p-relative c-subject mb-20">                                   
//                                                             <label><i className="fal fa-users"></i> Adults</label>
//                                                             <select name="adults" id="adu">
//                                                             <option value="sports-massage">Adults</option>
//                                                             <option value="1">1</option>
//                                                                 <option value="2">2</option>
//                                                                 <option value="3">3</option>
//                                                                 <option value="4">4</option>
//                                                                 <option value="5">5</option>
//                                                             </select>
//                                                         </div>
//                                                     </div>	
//                                                     <div className="col-lg-12">                               
//                                                         <div className="contact-field p-relative c-option mb-20">                                   
//                                                             <label><i className="fal fa-concierge-bell"></i> Room</label>
//                                                             <select name="room" id="rm">
//                                                             <option value="sports-massage">Room</option>
//                                                             <option value="1">1</option>
//                                                                 <option value="2">2</option>
//                                                                 <option value="3">3</option>
//                                                                 <option value="4">4</option>
//                                                                 <option value="5">5</option>
//                                                             </select>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-lg-12">
//                                                         <div className="slider-btn mt-15">                                          
//                                                             <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"><span>Book Table Now</span></button>				
//                                                         </div>                             
//                                                     </div>
//                                                 </div>
//                                             </form>                            
//                                             </div>  
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="service-detail-contact wow fadeup-animation" data-wow-delay="1.1s">
//                                     <h3 className="h3-title">If You Need Any Help Contact With Us</h3>
//                                     <Link to="javascript:void(0);" title="Call now">+91 705 2101 786</Link>
//                                 </div>
//                             </aside>
//                         </div>
// 					    <div className="col-lg-8 col-md-12 col-sm-12 order-1">
//                             <div className="service-detail">
//                                 <div className="two-column">
//                                     <div className="row">
//                                         <div className="image-column col-xl-6 col-lg-12 col-md-12">
//                                         <figure className="image"><img src="assets/img/bg/single-room-img01.png" alt=""/></figure>
//                                         </div>
//                                         <div className="text-column col-xl-6 col-lg-12 col-md-12">
//                                             <figure className="image"><img src="assets/img/bg/single-room-img02.png" alt=""/></figure>
//                                             <figure className="image"><img src="assets/img/bg/single-room-img03.png" alt=""/></figure>
//                                         </div>                                   
//                                     </div>
//                                 </div>
//                                 <div className="content-box">
//                                     <div className="row align-items-center mb-50">
//                                         <div className="col-lg-6 col-md-6">
//                                             <div className="price">
//                                                 <h2>Double Room</h2>
//                                                 <span>$400/Night</span>
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-6 text-right">
//                                             <img src="assets/img/testimonial/review-icon.png" alt="img"/>
//                                         </div>
//                                     </div>
//                                     <p>Understated seaside elegance, traditional grace, complemented by warm homely touches and pops of modern flair, Rest Detail Hotel Hua Hin
//                                     invites you to discover our exquisitely designed resort set in a peaceful enclave just out of Hua Hin town. A charming setting, spacious yet incredibly cozy rooms, luxurious two – four bedroom Pavilions with private swimming pools. Recreational facilities to help you relax, delicious local and European dishes delicately plated for you to taste, meticulously put together for you to have the perfect break.</p>
//                                     <p>Interdum et malesu they adamale fames ac anteipsu pimsine faucibus curabitur arcu site feugiat in tortor in, volutpat sollicitudin libero. Hotel non lorem acer suscipit bibendum vulla facilisi nedeuter nunc volutpa mollis sapien velet conseyer turpeutionyer masin libero sempe mollis.</p>
//                                     <h3>Room Feature.</h3>
//                                     <ul className="room-features d-flex align-items-center">
//                                         <li>
//                                         <i className="fal fa-tv-retro"></i> TV
//                                         </li>
//                                         <li>
//                                         <i className="fal fa-wifi"></i> Free Wifi
//                                         </li>
//                                         <li>
//                                         <i className="fal fa-air-conditioner"></i> Air Condition
//                                         </li>
//                                         <li>
//                                         <i className="fal fa-dumpster-fire"></i> Heater
//                                         </li>
//                                         <li>
//                                         <i className="fal fa-phone-rotary"></i> Phone
//                                         </li>
//                                         <li>
//                                         <i className="fal fa-dryer-alt"></i> Laundry
//                                         </li>
//                                         <li>
//                                         <i className="fal fa-user"></i> Adults: 2
//                                         </li>
//                                         <li>
//                                             <i className="fal fa-square"></i> Size: 24m²
//                                         </li>
//                                         <li>
//                                             <i className="fal fa-bed"></i> Bed Type: One bed
//                                         </li>
//                                     </ul>
//                                     <h3>Children and extra beds.</h3>
//                                     <p>Children are welcome Kids stay free! Children stay free when using existing bedding; children may not be eligible for complimentary breakfast Rollaway/extra beds are available for $ 10 per day.Interdum et malesu they adamale fames ac anteipsu pimsine faucibus curabitur arcu site feugiat in tortor in, volutpat sollicitudin libero. Hotel non lorem acer suscipit bibendum vulla facilisi nedeuter nunc volutpa mollis sapien velet conseyer turpeutionyer masin libero sempe mollis.</p>
//                                     <div className="mb-50">
//                                         <Link to="/contact" className="btn ss-btn">Book This Room</Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     </>
//   )
// }

// export default Main