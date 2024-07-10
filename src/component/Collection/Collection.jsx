import React from 'react'

import { Link } from 'react-router-dom'
import { CollectionData } from '../../products'



const Collection = () => {
    return (
        <>
            <div className=' grid grid-cols-5'>
                
                {CollectionData.map(({ id, image, title, subtitle, aosDelay }) =>
                    <div key={id} data-aos="fade-up" data-aos-delay={aosDelay} className='p-4 text-center flex space-y-6'>
                        <div>
                            <Link to={`/Product/${id}`}><img src={image} alt="" className='max-w-[200px] my-5 mx-auto hover:scale-110 duration-300 img-shadow2 ' /></Link>
                            <h1 className='text-xl font-semibold my-5 text-primary'>{title}</h1>
                        </div>

                        

                    </div>)}
                    
            </div>
            

        </>
    )
}

export default Collection