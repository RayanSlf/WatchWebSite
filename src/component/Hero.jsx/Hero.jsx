import Navbar from '../Navbar.jsx/Navbar'

import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Rolex1 from "../../assets/rolex1.png"
import Guide from '../../assets/expertGuide.jpg'
import Men from '../../assets/rolex-men.jpg'
import { Link } from 'react-router-dom';
import Collection from '../Collection/Collection';
import banner1 from '../../assets/banner.webp'
import banner2 from '../../assets/banner2.webp'
import Footer from '../Footer/Footer';
import wrist1 from '../../assets/wristwatch2.jpg'
import pexels from '../../assets/bgrnd.jpg'






function Hero() {
    useEffect(() => {
        AOS.init({});
    }, [])

    return (
        <div>
            <div class="bg-[url('/src/assets/pexels.jpg')] bg-no-repeat bg-cover bg-center h-[1200px] ">
                <div className='bg-black'>
                    <p className='text-white text-center'>-10% POUR VOTRE 1ÈRE COMMANDE.</p>
                </div>
                {/*<div className='flex  gap-20 space-x-44 '>

                    <div data-aos="zoom-in" className='hidden sm:flex pl-12 py-20 space-x-6 text-sm oppacity-0'>
                        <select className='bg-transparent border-none' name="" id="" >
                            <option value="">USD</option>
                            <option value="">EU</option>
                        </select>
                        <select className='bg-transparent' name="" id="">
                            <option value="">CS</option>
                            <option value="">CZ</option>
                        </select>
                    </div>
                    
                    
                </div>*/}
                {/*Navbar section */}
                <Navbar />
                <div className='md:py-20 px-20 '>
                    <div className=' mb-10'>
                        <h1 data-aos='fade-up' datat-aos-duration='1000' className='md:mb-20 mb-8 top-0'>
                            <span data-aos='zoom-in' datat-aos-duration='1000' className='text-5xl text-2xs  text-semibold'>LUXURY WATCHES</span> <br />
                            <span data-aos='zoom-in' datat-aos-duration='1000' className='text-2xs text-2xl '>& JEWELLERY</span>
                        </h1>
                        <p data-aos='zoom-in' datat-aos-duration='1000' className='text-2xs  '>Lorem ipsum dolor sit,
                            adipisicing elit. Ratione  fuga <br />
                            esse fugiat impedit necessitatibus
                            ullam, laborum eius dolores <br />
                            voluptatum vel omnis officiis nam quasi.</p>
                    </div>

                </div>
            </div>
            <div className='flex'>
                <div >
                    <h1 data-aos='fade-up' datat-aos-duration='1000' className='text-6xl px-20 py-20' >Nouvelle <br />
                        <span className="text-blue-500 text-6xl">Collection</span>
                    </h1>
                    <p data-aos='fade-up' datat-aos-duration='1000' className='px-32'>
                        Lorem ipsum dolor sit,
                        adipisicing elit. Ratione  fuga <br />
                        esse fugiat impedit necessitatibus
                        ullam, laborum eius dolores <br />
                        voluptatum vel omnis officiis nam quasi.
                    </p>
                    <Link to='/Product'><button data-aos='fade-up' datat-aos-duration='1000' className='bg-blue-400 border-2 py-2 px-2 mx-36 my-16'>Commander</button></Link>

                </div>
                <div>
                    <img data-aos='fade-up' datat-aos-duration='1000' src={Rolex1} className='h-[500px]' />
                </div>

            </div>
            <div className='bg-gray-100 pb-20'>
                <div className='text-center py-14 px-44'>
                    <h1 data-aos='fade-up' datat-aos-duration='1000' className='py-10 text-3xl'>GET YOUR OWN WATCH</h1>
                    <p data-aos='fade-up' datat-aos-duration='1000' className='font-extralight'>Get your own watche today and elevate your style to
                        the next level! With a stunning array of designs and functionalities,
                        watche offers the perfect timepiece for every occasion. Whether you're seeking
                        classic elegance, modern flair, or cutting-edge technology</p>
                </div>
                <div >
                    <img data-aos='fade-up' datat-aos-duration='1000' src={pexels} className='mx-auto my-auto divide-transparent h-[500px]' />
                </div>
            </div>
            <div className='py-20 px-5 flex'>
                <div>
                    <img data-aos='fade-up' datat-aos-duration='1000' className='w-[1000px]  mx-15' src={wrist1} alt="" />
                </div>
                
                <div  className='mx-10'>
                    
                    <h1 data-aos='fade-up' datat-aos-duration='1000' className='text-center  text-4xl pb-5'>Rolex men</h1>
                    <p data-aos='fade-up' datat-aos-duration='1000' className='text-center  text-base'>For the discerning gentleman who values 
                        timeless elegance and unparalleled craftsmanship, <br />
                        Rolex presents a collection of exquisite timepieces
                         that epitomize luxury and prestige.Each Rolex watch  <br />
                         
                         technology with iconic design elements. From the iconic Submariner, 
                         with its robust functionality and aquatic allure, to the sophisticated Datejust, 
                          a symbol of refinement and sophistication,</p>
                </div>
                

            </div>
            <div>
                <div className='my-10'>
                    <img data-aos='fade-up' datat-aos-duration='1000' src={banner1} alt="" />
                </div>
                <div>
                <h1 data-aos='fade-up' datat-aos-duration='1000' className='text-center text-4xl font-bold my-10'>Collection</h1>
                    <p data-aos='fade-up' datat-aos-duration='1000' className='text-center text-xl'>Les montres Rolex sont réalisées à partir des meilleurs 
                        matériaux et sont assemblées avec une <br /> minutieuse attention au détail.
                         Chaque composant est conçu et produit selon les normes les plus <br /> rigoureuses.</p>
                </div>
            </div>
            <div>
                <Collection/>
            </div>
            <div className='space-y-10 my-20'> 
                <div>
                    <img data-aos='fade-up' datat-aos-duration='1000' src={banner2} alt="" />
                </div>
                <div>
                    <h4 data-aos='fade-up' datat-aos-duration='1000' className='text-center my-6 font-bold text-3xl'>Performance et prestige</h4>
                    <p data-aos='fade-up' datat-aos-duration='1000' className='text-center text-xl'>Les montres Rolex présentées ci-dessous proviennent du catalogue officiel et ne représentent pas la <br />disponibilité des modèles en stock. Si vous souhaitez vous renseigner sur un modèle en particulier, <br />veuillez nous contacter.</p>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
            
            
        
        </div>

    )
}

export default Hero
