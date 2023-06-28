import { Link } from 'react-router-dom'
import BGImg from "../../../assets/img/bg/bdrc-bg.jpg";
import React , { useState } from 'react'
import FsLightbox from 'fslightbox-react';


const Main = () => {
    const [activeImage , setActiveImage] = useState(1)

    const [images] = useState([
   
        'assets/img/gallery/protfolio-img02.png',
        'assets/img/gallery/protfolio-img03.png',
        'assets/img/gallery/protfolio-img01.png',
        'assets/img/gallery/protfolio-img04.png',
        'assets/img/gallery/protfolio-img05.png',
        'assets/img/gallery/protfolio-img06.png',
        'assets/img/gallery/protfolio-img07.png',
        'assets/img/gallery/protfolio-img08.png',
        'assets/img/gallery/protfolio-img09.png',
        'assets/img/gallery/protfolio-img10.png',
	])


    const [setImg] = useState()
    const [setImg1] = useState()
    const [setImg2] = useState()
    const [setImg3] = useState()
    const [setImg4] = useState()
    const [setImg5] = useState()
    const [setImg6] = useState()
    const [setImg7] = useState()
    const [setImg8] = useState()
    const [setImg9] = useState()

    const [toggler, setToggler] = useState(false);

    const [tabMenu, tabActive] = useState({all : true})

    const galleryHeight=()=>{
        if(tabMenu.all){
            return "h1200"
        }else if(tabMenu.financial){
            return "h600"
        }else {
            return "h300"
        }
    }
    
   
  return (
    <>
        <main>
            <section className="single-slider slider-bg d-flex align-items-center" style={{backgroundImage: `url(${BGImg})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-center">
                                <div className="breadcrumb-title">
                                    <h2>Gallery</h2>    
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Gallery </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="profile fix pt-120">
                <div className="container-fluid"> 
                    <div className="row">
                        {/* <div className="col-xl-12 col-lg-12">
                            <div className="my-masonry text-center mb-50">
                                <div className="button-group filter-button-group ">
                                    <button className={`${tabMenu.all && "active"}`} onClick={()=>tabActive({all:true})} data-filter="*">All</button>
                                    <button className={`${tabMenu.financial && "active"}`} onClick={()=>tabActive({financial:true})} data-filter=".financial">Room </button>
                                    <button className={`${tabMenu.banking && "active"}`} onClick={()=>tabActive({banking:true})} data-filter=".banking">Hall </button>	
                                    <button className={`${tabMenu.insurance && "active"}`} onClick={()=>tabActive({insurance:true})} data-filter=".insurance">Guardian </button>
                                    <button className={`${tabMenu.family && "active"}`} onClick={()=>tabActive({family:true})} data-filter=".family">Hotel </button>
                                    <button className={`${tabMenu.business && "active"}`} onClick={()=>tabActive({business:true})} data-filter=".business">Event Hall</button>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-12">
                            <div className="masonry-gallery-huge">
                                <div className={`grid col2 ${galleryHeight()}`} style={{position: "relative"}}>
                                   {tabMenu.banking &&
                                    <div className="grid-item banking" style={{position: "absolute", left: "0%", top: "0px"}}>
                                        <Link to="#" onClick={() => setImg(true)} className="popup-image">
                                            <figure className="gallery-image" onClick={() => {
                                                setToggler(!toggler)
                                                setActiveImage(1)
                                            }}>
                                                <img src="https://pbs.twimg.com/media/FodrWNnWIA4VAlx.jpg" alt="img" className="img" /> 
                                            </figure>
                                        </Link>
                                    </div> 
                                    }
                                    {tabMenu.insurance &&
                                    <div className="grid-item insurance" style={{position: "absolute", left: "0%", top: "0px"}}>
                                        <Link to="#" onClick={() => setImg1(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(2)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img03.png" alt="img" className="img" />     
                                            </figure>
                                        </Link>
                                    </div>
                                    }
                                    {tabMenu.financial &&
                                    <div className="grid-item financial" style={{position: "absolute", left: "0%", top: "0px"}}>   
                                        <Link to="#" onClick={() => setImg2(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(3)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img01.png" alt="img" className="img" />   
                                            </figure>
                                        </Link>
                                    </div>
                                    }
                                    {tabMenu.family &&
                                    <div className="grid-item family" style={{position: "absolute", left: "0%", top: "0"}}>    
                                        <Link to="#" onClick={() => setImg3(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(4)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img04.png" alt="img" className="img" />    
                                            </figure>
                                        </Link>
                                    </div>
                                    }
                                    {tabMenu.business &&
                                    <div className="grid-item business" style={{position: "absolute", left: "0%", top: "0"}}>
                                        <Link to="#" onClick={() => setImg4(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(5)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img05.png" alt="img" className="img" />
                                            </figure>
                                        </Link>
                                    </div>
                                    }
                                    {tabMenu.financial &&
                                    <div className="grid-item financial" style={{position: "absolute", left: "49.922%", top: "0px"}}>   
                                        <Link to="#" onClick={() => setImg5(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(6)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img06.png" alt="img" className="img" />   
                                            </figure>
                                        </Link>
                                    </div>
                                    }
                                    {tabMenu.banking &&
                                    <div className="grid-item banking" style={{position: "absolute", left: "24.961%", top: "0"}}>
                                        <Link to="#" onClick={() => setImg6(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(7)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img07.png" alt="img" className="img" /> 
                                            </figure>
                                        </Link>
                                    </div>
                                    }
                                    {tabMenu.insurance &&
                                    <div className="grid-item insurance" style={{position: "absolute", left: "24.961%", top: "0"}}>
                                        <Link to="#" onClick={() => setImg7(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(8)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img08.png" alt="img" className="img" />     
                                            </figure>
                                        </Link>
                                    </div>
                                    }
                                    {tabMenu.family &&
                                    <div className="grid-item family" style={{position: "absolute", left: "24.961%", top: "0"}}>    
                                        <Link to="#" onClick={() => setImg8(true)} className="popup-image">
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(9)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img09.png" alt="img" className="img" />    
                                            </figure>
                                        </Link>
                                    </div>
                                    }
                                    {tabMenu.business &&
                                    <div className="grid-item business" style={{position: "absolute", left: "24.961%", top: "0"}}>
                                        <Link to="#" onClick={() => setImg9(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(10)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img10.png" alt="img" className="img" />
                                            </figure>
                                        </Link>
                                    </div>}

                                    
                                    {tabMenu.all &&
                                    <> 
                                    <div className="grid-item banking" style={{position: "absolute", left: "0%", top: "0px"}}>
                                        <Link to="#" onClick={() => setImg(true)} className="popup-image">
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(1)
                                                 setToggler(!toggler)}}>
                                                <img src="https://pbs.twimg.com/media/FodrWNnWIA4VAlx.jpg" alt="img" className="img" /> 
                                            </figure>
                                        </Link>
                                    </div> 
                                    
                                    <div className="grid-item insurance" style={{position: "absolute", left: "24.961%", top: "0px"}}>
                                        <Link to="#" onClick={() => setImg1(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(2)
                                                 setToggler(!toggler)}}>
                                                <img src="https://pbs.twimg.com/media/FodrWNnWIA4VAlx.jpg" alt="img" className="img" />     
                                            </figure>
                                        </Link>
                                    </div>
                                    <div className="grid-item family" style={{position: "absolute", left: "49.922%", top: "0px"}}>   
                                        <Link to="#" onClick={() => setImg2(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(3)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img01.png" alt="img" className="img" />   
                                            </figure>
                                        </Link>
                                    </div>
                                    <div className="grid-item family" style={{position: "absolute", left: "0%", top: "300px"}}>    
                                        <Link to="#" onClick={() => setImg3(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(4)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img04.png" alt="img" className="img" />    
                                            </figure>
                                        </Link>
                                    </div>
                                    <div className="grid-item business" style={{position: "absolute", left: "24.961%", top: "300px"}}>
                                        <Link to="#" onClick={() => setImg4(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(5)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img05.png" alt="img" className="img" />
                                            </figure>
                                        </Link>
                                    </div>
                                    <div className="grid-item financial" style={{position: "absolute", left: "0%", top: "600px"}}>   
                                        <Link to="#" onClick={() => setImg5(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(6)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img06.png" alt="img" className="img" />   
                                            </figure>
                                        </Link>
                                    </div>
                                    <div className="grid-item banking" style={{position: "absolute", left: "49.922%", top: "600px"}}>
                                        <Link to="#" onClick={() => setImg6(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(7)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img07.png" alt="img" className="img" /> 
                                            </figure>
                                        </Link>
                                    </div>
                                    <div className="grid-item insurance" style={{position: "absolute", left: "74.883%", top: "600px"}}>
                                        <Link to="#" onClick={() => setImg7(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(8)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img08.png" alt="img" className="img" />     
                                            </figure>
                                        </Link>
                                    </div>
                                    <div className="grid-item family" style={{position: "absolute", left: "49.922%", top: "900px"}}>    
                                        <Link to="#" onClick={() => setImg8(true)} className="popup-image">
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(9)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img09.png" alt="img" className="img" />    
                                            </figure>
                                        </Link>
                                    </div>
                                    <div className="grid-item business" style={{position: "absolute", left: "74.883%", top: "900px"}}>
                                        <Link to="#" onClick={() => setImg9(true)} className="popup-image" >
                                            <figure className="gallery-image" onClick={() =>{
                                                setActiveImage(10)
                                                 setToggler(!toggler)}}>
                                                <img src="assets/img/gallery/protfolio-img10.png" alt="img" className="img" />
                                            </figure>
                                        </Link>
                                    </div>
                                    </>}
                                </div>
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
        
    </>
  )
}

export default Main