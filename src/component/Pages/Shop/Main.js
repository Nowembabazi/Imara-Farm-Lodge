import { Link } from 'react-router-dom'
import BGImg from "../../../assets/img/bg/bdrc-bg.jpg";
import React from 'react'

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
                                    <h2>Shop</h2>    
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Shop </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shop-area pt-120 pb-120 p-relative " data-animation="fadeInUp animated" data-delay=".2s">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                        <h6 className="mt-20 mb-30">Showing 1–9 of 10 results</h6>
                        </div>
                        <div className="col-lg-6 col-sm-6 text-right">
                            <select name="orderby" className="orderby" aria-label="Shop order">
                                <option value="menu_order" selected="selected">Default sorting</option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="rating">Sort by average rating</option>
                                <option value="date">Sort by latest</option>
                                <option value="price">Sort by price: low to high</option>
                                <option value="price-desc">Sort by price: high to low</option>
                            </select>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="product mb-40">
                                <div className="product__img">
                                    <Link to="/shop-details"><img src="assets/img/shop/img4.jpg" alt="" /></Link>
                                    <div className="product-action text-center">
                                        <Link to="/shop-details">Add Cart</Link>
                                    </div>
                                </div>
                                <div className="product__content text-center pt-30">
                                    <span className="pro-cat"><Link to="#">Chair</Link></span>
                                    <h4 className="pro-title"><Link to="/shop-details">Bakari Product</Link></h4>
                                    <div className="price">
                                        <span>$95.00</span>
                                        <span className="old-price">$120.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product mb-40">
                                <div className="product__img">
                                    <Link to="/shop-details"><img src="assets/img/shop/img5.jpg" alt="" /></Link>
                                    <div className="product-action text-center">
                                        <Link to="/shop-details">Add Cart</Link>
                                    </div>
                                </div>
                                <div className="product__content text-center pt-30">
                                    <span className="pro-cat"><Link to="#">Cloths</Link></span>
                                    <h4 className="pro-title"><Link to="/shop-details">Romada Product</Link></h4>
                                    <div className="price">
                                        <span>$95.00</span>
                                        <span className="old-price">$120.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product mb-40">
                                <div className="product__img">
                                    <Link to="/shop-details"><img src="assets/img/shop/img6.jpg" alt="" /></Link>
                                    <div className="product-action text-center">
                                        <Link to="/shop-details">Add Cart</Link>
                                    </div>
                                </div>
                                <div className="product__content text-center pt-30">
                                    <span className="pro-cat"><Link to="#">Light</Link></span>
                                    <h4 className="pro-title"><Link to="/shop-details">Sikkar Product</Link></h4>
                                    <div className="price">
                                        <span>$95.00</span>
                                        <span className="old-price">$120.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product mb-40">
                                <div className="product__img">
                                    <Link to="/shop-details"><img src="assets/img/shop/img7.jpg" alt="" /></Link>
                                    <div className="product-action text-center">
                                        <Link to="/shop-details">Add Cart</Link>
                                    </div>
                                </div>
                                <div className="product__content text-center pt-30">
                                    <span className="pro-cat"><Link to="#">Headphone</Link></span>
                                    <h4 className="pro-title"><Link to="/shop-details">Minners Product</Link></h4>
                                    <div className="price">
                                        <span>$95.00</span>
                                        <span className="old-price">$120.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product mb-40">
                                <div className="product__img">
                                    <Link to="/shop-details"><img src="assets/img/shop/img8.jpg" alt="" /></Link>
                                    <div className="product-action text-center">
                                        <Link to="/shop-details">Add Cart</Link>
                                    </div>
                                </div>
                                <div className="product__content text-center pt-30">
                                    <span className="pro-cat"><Link to="#">table</Link></span>
                                    <h4 className="pro-title"><Link to="/shop-details">Dolando Product</Link></h4>
                                    <div className="price">
                                        <span>$95.00</span>
                                        <span className="old-price">$120.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product mb-40">
                                <div className="product__img">
                                    <Link to="/shop-details"><img src="assets/img/shop/img9.jpg" alt="" /></Link>
                                    <div className="product-action text-center">                                        
                                        <Link to="/shop-details">Add Cart</Link>
                                    </div>
                                </div>
                                <div className="product__content text-center pt-30">
                                    <span className="pro-cat"><Link to="#">Cloths</Link></span>
                                    <h4 className="pro-title"><Link to="/shop-details">Romada Product</Link></h4>
                                    <div className="price">
                                        <span>$95.00</span>
                                        <span className="old-price">$120.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product mb-40">
                                <div className="product__img">
                                    <Link to="/shop-details"><img src="assets/img/shop/img1.jpg" alt="" /></Link>
                                    <div className="product-action text-center">
                                        <Link to="/shop-details">Add Cart</Link>
                                    </div>
                                </div>
                                <div className="product__content text-center pt-30">
                                    <span className="pro-cat"><Link to="#">Cloths</Link></span>
                                    <h4 className="pro-title"><Link to="/shop-details">Medidove Product</Link></h4>
                                    <div className="price">
                                        <span>$95.00</span>
                                        <span className="old-price">$120.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product mb-40">
                                <div className="product__img">
                                    <Link to="/shop-details"><img src="assets/img/shop/img2.jpg" alt="" /></Link>
                                    <div className="product-action text-center">
                                        <Link to="/shop-details">Add Cart</Link>
                                    </div>
                                </div>
                                <div className="product__content text-center pt-30">
                                    <span className="pro-cat"><Link to="#">Cloths</Link></span>
                                    <h4 className="pro-title"><Link to="/shop-details">Legend Product</Link></h4>
                                    <div className="price">
                                        <span>$95.00</span>
                                        <span className="old-price">$120.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="product mb-40">
                                <div className="product__img">
                                    <Link to="/shop-details"><img src="assets/img/shop/img3.jpg" alt="" /></Link>
                                    <div className="product-action text-center">
                                        <Link to="/shop-details">Add Cart</Link>                                        
                                    </div>
                                </div>
                                <div className="product__content text-center pt-30">
                                    <span className="pro-cat"><Link to="#">Table</Link></span>
                                    <h4 className="pro-title"><Link to="/shop-details">Akari Product</Link></h4>
                                    <div className="price">
                                        <span>$95.00</span>
                                        <span className="old-price">$120.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="pagination-wrap mt-50 text-center">
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
                    <div>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Main