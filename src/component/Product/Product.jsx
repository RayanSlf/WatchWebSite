import React from 'react'
import Navbar2 from '../Navbar.jsx/Navbar2'
import Rolex1 from '../../assets/rolex1.png'
import { FaPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import { CollectionData } from '../../products';

const Product = () => {
    const {id} = useParams()
    const product = CollectionData.find(p=>p.id==id)
    
    return (
        <div>
            <div>
                <nav>
                    <p data-aos='zoom-in' datat-aos-duration='1000' className='text-center text-xs text-white bg-black'>PAIEMENT À LA LIVRAISON APRÈS SATISFACTION</p>
                </nav>
            </div>
            <div block>
                <div className='py-7  '>
                    <Navbar2 />
                </div>
            </div>
            <div className='border-black border-2 mt-5 mb-10 mx-2 pl-5 py-5 flex'>
                <div className='border-2 border-black'>
                    <img  data-aos='zoom-in' datat-aos-duration='1000' src={product.image} className='w-[500px]' alt="" />
                </div>
                <div className='space-x-20 pt-20'>
                    <h5  data-aos='zoom-in' datat-aos-duration='1000' className='text-4xl tracking-wider py-10 px-10'>{product.title} </h5>
                    <p  data-aos='zoom-in' datat-aos-duration='1000' className='tracking-wider'><span className='text-2xl space-x-20 text-red-500'>{product.price}DH</span><span className='text-xl line-through pl-6 text-gray-500'>{product.discountedprice}DH</span>  </p>
                    <div>
                        <button  data-aos='zoom-in' datat-aos-duration='1000' className='border-gray-500 border-2 text-gray-500 py-2 px-10 mx-6 mt-10' >AJOUTER AU PANIER </button>
                    </div>
                    <div>
                        <button  data-aos='zoom-in' datat-aos-duration='1000' className=' border-2 border-black bg-black text-white hover:scale-110 py-2 px-10 mx-6 my-10' >ACHETER MAINTENANT </button>

                    </div>
                    <div>
                        <div className='flex mx-32 gap-5'>
                            <FaPaypal  data-aos='zoom-in' datat-aos-duration='1000' className=' text-2xl' />
                            <FaCcVisa  data-aos='zoom-in' datat-aos-duration='1000' className='text-2xl' />
                            <FaCcMastercard  data-aos='zoom-in' datat-aos-duration='1000' className='text-2xl' />
                        </div>
                        <div className='flex mx-32 my-5 gap-3'>
                            <RiSecurePaymentLine  data-aos='zoom-in' datat-aos-duration='1000' className='text-2xl  ' />
                            <p  data-aos='zoom-in' datat-aos-duration='1000' className='text-sm font-semibold'>100% SECURE</p>
                        </div>

                    </div>


                </div>

            </div>
            <Footer/>
        </div>

    )
}

export default Product