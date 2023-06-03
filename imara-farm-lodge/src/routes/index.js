import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from '../component/Navbar/Main'
import Footer from '../component/Footer/Main'
import Home from '../component/Home/Main'
import Home2 from '../component/Home2/Main'
import Home3 from '../component/Home3/Main'
import Home4 from '../component/Home4/Main'
import About from '../component/About/Main'
import OurRoom from '../component/Rooms/OurRoom/Main'
import RoomDetails from '../component/Rooms/RoomDetails/Main'
import Service from '../component/Facilities/Service/Main'
import ServiceDetails from '../component/Facilities/ServiceDetails/Main'
import Gallery from '../component/Pages/Gallary/Main'
import Faq from '../component/Faq/Main'
import Team from '../component/Pages/Team/Main'
import TeamDetails from '../component/Pages/TeamDetails/Main'
import Pricing from '../component/Pages/Pricing/Main'
import Shop from '../component/Pages/Shop/Main'
import ShopDetails from '../component/Pages/ShopDetails/Main'
import Blog from '../component/Blog/BlogMain/Main'
import BlogDetails from '../component/Blog/BlogDetails/Main'
import Contact from '../component/Contact/Main'


const Routing = () => {
    const [homepage, sethomepage] = useState(false)
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === "/home-03" || location.pathname === "/home-04"){
        sethomepage(false)
      }else{
        sethomepage(true)
      }
    }, [location])
    
    const [footerpage, setfooterpage] = useState(false)
    useEffect(() => {
      if (location.pathname === "/home-03"){
        setfooterpage(false)
      }else{
        setfooterpage(true)
      }
    }, [location])

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {homepage && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home-02" element={<Home2 />} />
                <Route path="/home-03" element={<Home3 />} />
                <Route path="/home-04" element={<Home4 />} />
                <Route path="/about" element={<About />} />
                <Route path="/room" element={<OurRoom />} />
                <Route path="/room-details" element={<RoomDetails />} />
                <Route path="/service" element={<Service />} />
                <Route path="/service-details" element={<ServiceDetails />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/team" element={<Team />} />
                <Route path="/team-details" element={<TeamDetails />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop-details" element={<ShopDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog-details" element={<BlogDetails />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {footerpage && <Footer />}
        </>
    )
}

export default Routing