import React from 'react'
import banner3 from '../../assets/banner3.webp'
import green from '../../assets/green.webp'

const Singin = () => {
  return (
    <div>
        <div>
            <img src={banner3} alt="" />
        </div>
        <div>
            <img src={green} className='bg-cover' alt="" />
        </div>
    </div>
  )
}

export default Singin