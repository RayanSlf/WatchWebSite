import React from 'react'
import logo from "../../assets/rlxlogo.png"
import logo2 from "../../assets/rolex_2x.jpg"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-gray-100'>
            <div>
                <img src={logo} className='mx-auto py-5' alt="" />
            </div>
            <div className=' border-t-gray-400 border-2'  >
                <ul className='cursor-pointer flex justify-center gap-16 my-5  border-t-black border-2px'>
                    <li className='hover:scale-125'>Rolex</li>
                    <li  className='hover:scale-125'>Collection Rolex</li>
                    <li  className='hover:scale-125'>Nouvelle Collection</li>
                    <li className='text-green-600 hover:scale-125 '>Nos boutiques</li>
                    <li  className='hover:scale-125'>Nouveaux Modèles 2024</li>
                    <li  className='hover:scale-125'>Boutique</li>
                    <li  className='hover:scale-125'>Nous contacter</li>
                </ul>
            </div>
            <div className='flex border-t-gray-400 border-2   py-2' >
                <div>
                    <img src={logo2} className='mx-10' alt="" />
                </div>
                <div className='text-center mx-20'>
                    <div className='flex'>
                        <div>
                            <h6  className='text-bold text-xl'>Newsletter</h6>
                            <p  className='text-sm'>Inscrivez-vous pour être informé des actualités de notre Maison et de nos événements <br /> exclusifs.</p>
                            <input  placeholder='Votre adresse email' type="email" className='border-2 px-5 border-black' />
                            <button className='border-black border-2 mx-3 px-3 my-3'>Ok</button>
                        </div>

                        <div  className='text-xl flex gap-6 mx-20 my-10'>
                            <FaFacebook />
                            <FaInstagram />
                            <FaXTwitter />

                        </div>
                    </div>


                </div>

            </div>
            <div className='bg-gray-900 text-white py-2'>

                <ul className='flex justify-center gap-10'>
                    <li>MARQUES</li>
                    <li>CONTACT</li>
                    <li>MENTIONS LÉGALES</li>
                    <li>POLITIQUE DE CONFIDENTIALITÉ</li>
                    <li>RÉALISÉ PAR ROLEX</li>
                </ul>

            </div>
        </div>
    )
}

export default Footer