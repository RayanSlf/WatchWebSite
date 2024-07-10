import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './Navbar';
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";





function Navbar2() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, [])

  return (
    <div className='flex justify-center gap-20'>

      <Navbar />
      <div className='flex gap-4 text-xl '>
        <div data-aos='zoom-in' datat-aos-duration='1000' className='hover:scale-125 cursor-pointer'><HiMiniShoppingBag /></div>
        <div data-aos='zoom-in' datat-aos-duration='1000' className='hover:scale-125 cursor-pointer'><FaSearch /></div>
        </div>

    </div>
  )
}

export default Navbar2