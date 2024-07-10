
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import logo from "../../assets/rlxlogo.png"
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";



function Navbar() {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, [])




  return (

    <div className=''>

      <div className=' md:bg-transparent  items-center    '>
        <nav data-aos='fade-up' className={`bg-black/50 h-screen flex justify-between w-screen md:content-center z-50 lg:h-44 backdrop-blur-sm lg:backdrop-blur-0 ${navbar ? "block" : "lg:hidden"
          }`} >
          <div className=''    >
            <img data-aos='zoom-in' datat-aos-duration='500' src={logo} className='size-24' alt="" />
          </div>
          <div className=""
          >
            <ul className='md:flex md:flex-row md:mx-36  text-white lg:text-black pt-20  gap-16 cols  justify-center     ' >
              <Link to='/Homepage'><li className='lg:hover:scale-125 lg:text-xl my-5 text-2xl cursor-pointer'>Home</li></Link>
              <li className=' lg:hover:scale-125  my-5 text-2xl cursor-pointer lg:text-green-700'>New Arrival</li>
              <Link to='/Collection'><li className='lg:hover:scale-125 lg:text-xl my-5 text-2xl cursor-pointer'>Collections</li></Link>
              <li className='lg:hover:scale-125 my-5 lg:text-xl text-2xl cursor-pointer'>About Us</li>
              <li className='lg:hover:scale-125 my-5 lg:text-xl text-2xl cursor-pointer'>Contact Us</li>

            </ul>
          </div>
          <div className='flex gap-6  py-10 text-2xl '>
            <div data-aos='zoom-in' datat-aos-duration='1000' ><HiMiniShoppingBag className='hover:scale-125 cursor-pointer' /></div>
            <div data-aos='zoom-in' datat-aos-duration='1000' ><FaSearch className='hover:scale-125 cursor-pointer' /></div>
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

        </nav>
      </div>
    </div>
  )
}

export default Navbar