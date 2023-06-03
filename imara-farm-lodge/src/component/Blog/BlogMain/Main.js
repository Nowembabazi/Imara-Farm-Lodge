import { Link } from 'react-router-dom'
import React , { useState , useRef} from 'react'
import BGImg from "../../../assets/img/bg/bdrc-bg.jpg";
import Slider from "react-slick"

const Main = () => {

    const [yShow, setyShow] = useState()

  const carouselRef = useRef();

    const blog = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 1,
    }
  return (
    <>
        <main>
            <div className="modal fade bs-example-modal-lg search-bg popup1" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content search-popup">
                        <div className="text-center">
                            <Link to="#" className="close2" data-dismiss="modal" aria-label="Close">× close</Link>
                        </div>
                        <div className="row search-outer">
                            <div className="col-md-11"><input type="text" placeholder="Search for products..." /></div>
                            <div className="col-md-1 text-right"><Link to="#"><i className="fa fa-search" aria-hidden="true"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="breadcrumb-area d-flex align-items-center"  style={{ background : `url(${BGImg})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-center">
                                <div className="breadcrumb-title">
                                    <h2>Blog</h2>    
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Blog</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="inner-blog pt-120 pb-105">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="bsingle__post mb-50">
                                <div className="bsingle__post-thumb">
                                    <img src="assets/img/blog/inner_b1.jpg" alt=""/>
                                </div>
                                <div className="bsingle__content">
                                   <div className="date-home">
                                        24th March 2022
                                    </div>
                                    <h2><Link to="/blog-details">Lorem ipsum dolor sit amet, consectetur
                                            cing elit, sed do eiusmod tempor.</Link></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                                    <div className="blog__btn">
                                        <Link to="#">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bsingle__post mb-50">
                                <div className="bsingle__post-thumb video-p">
                                    <img src="assets/img/blog/inner_b2.jpg" alt=""/>
                                    <Link to="#" onClick={() => setyShow(true)}  className="video-i popup-video"><i className="fas fa-play"></i></Link>
                                </div>
                                <div className="bsingle__content">
                                    <div className="date-home">
                                        24th March 2022
                                    </div>
                                    <h2><Link to="/blog-details">There are many variations passages of like consectetur lorem ipsum available.</Link></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                                    <div className="blog__btn">
                                        <Link to="#">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bsingle__post mb-50">
                                <Slider className="bsingle__post-thumb blog-active" {...blog}>
                                    <div className="slide-post">
                                        <img src="assets/img/blog/inner_b3.jpg" alt="" />
                                    </div>
                                    <div className="slide-post">
                                        <img src="assets/img/blog/inner_b2.jpg" alt="" />
                                    </div>
                                    <div className="slide-post">
                                        <img src="assets/img/blog/inner_b1.jpg" alt="" />
                                    </div>
                                </Slider>
                                <div className="bsingle__content">
                                    <div className="date-home">
                                        24th March 2022
                                    </div>
                                    <h2><Link to="/blog-details">I must explain to you how all this mistaken idea of denouncing pleasure.</Link></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                                    <div className="blog__btn">
                                        <Link to="#">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-wrap">
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item"><Link to="#"><i className="fas fa-angle-double-left"></i></Link></li>
                                        <li className="page-item active"><Link to="#">1</Link></li>
                                        <li className="page-item"><Link to="#">2</Link></li>
                                        <li className="page-item"><Link to="#">3</Link></li>
                                        <li className="page-item"><Link to="#">...</Link></li>
                                        <li className="page-item"><Link to="#">10</Link></li>
                                        <li className="page-item"><Link to="#"><i className="fas fa-angle-double-right"></i></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                         <div className="col-sm-12 col-md-12 col-lg-4">
                           <aside className="sidebar-widget">
                              <section id="search-3" className="widget widget_search">
                                 <h2 className="widget-title">Search</h2>
                                 <form role="search" method="get" className="search-form" action="http://wordpress.zcube.in/finco/">
                                    <label>
                                    <span className="screen-reader-text">Search for:</span>
                                    <input type="search" className="search-field" placeholder="Search &hellip;" value="" name="s" />
                                    </label>
                                    <input type="submit" className="search-submit" value="Search" />
                                 </form>
                              </section>
                              <section id="custom_html-5" className="widget_text widget widget_custom_html">
                                 <h2 className="widget-title">Follow Us</h2>
                                 <div className="textwidget custom-html-widget">
                                    <div className="widget-social">
                                       <Link to="#"><i className="fab fa-twitter"></i></Link>
                                       <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                       <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                       <Link to="#"><i className="fab fa-instagram"></i></Link>
                                       <Link to="#"><i className="fab fa-wordpress"></i></Link>
                                    </div>
                                 </div>
                              </section>
                              <section id="categories-1" className="widget widget_categories">
                                 <h2 className="widget-title">Categories</h2>
                                 <ul>
                                    <li className="cat-item cat-item-16"><Link to="#">Branding</Link> (4)</li>
                                    <li className="cat-item cat-item-23"><Link to="#">Corporat</Link> (3)</li>
                                    <li className="cat-item cat-item-18"><Link to="#">Design</Link> (3)</li>
                                    <li className="cat-item cat-item-22"><Link to="#">Gallery</Link> (3)</li>
                                 </ul>
                              </section>
                              <section id="recent-posts-4" className="widget widget_recent_entries">
                                 <h2 className="widget-title">Recent Posts</h2>
                                 <ul>
                                    <li>
                                       <Link to="#">User Experience Psychology And Performance Smshing</Link>
                                       <span className="post-date">August 19, 2020</span>
                                    </li>
                                    <li>
                                       <Link to="#">Monthly Web Development Up Cost Of JavaScript</Link>
                                       <span className="post-date">August 19, 2020</span>
                                    </li>
                                    <li>
                                       <Link to="#">There are many variation passages of like available.</Link>
                                       <span className="post-date">August 19, 2020</span>
                                    </li>
                                 </ul>
                                </section>
                                <section id="tag_cloud-1" className="widget widget_tag_cloud">
                                    <h2 className="widget-title">Tag</h2>
                                    <div className="tagcloud">
                                        <Link to="#" className="tag-cloud-link tag-link-28 tag-link-position-1" style={{font_size: "8pt"}} aria-label="app (1 item)">app</Link>
                                        <Link to="#" className="tag-cloud-link tag-link-17 tag-link-position-2" style={{font_size: "8pt"}} aria-label="Branding (1 item)">Branding</Link>
                                        <Link to="#" className="tag-cloud-link tag-link-20 tag-link-position-3" style={{font_size: "8pt"}} aria-label="corporat (1 item)">corporat</Link>
                                        <Link to="#" className="tag-cloud-link tag-link-24 tag-link-position-4" style={{font_size: "16.4pt"}} aria-label="Design (2 items)">Design</Link>
                                        <Link to="#" className="tag-cloud-link tag-link-25 tag-link-position-5" style={{font_size: "22pt"}} aria-label="gallery (3 items)">gallery</Link>
                                        <Link to="#" className="tag-cloud-link tag-link-26 tag-link-position-6" style={{font_size: "8pt"}} aria-label="video (1 item)">video</Link>
                                        <Link to="#" className="tag-cloud-link tag-link-29 tag-link-position-7" style={{font_size: "16.4pt"}} aria-label="web design (2 items)">web design</Link>
                                    </div>
                                </section>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
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