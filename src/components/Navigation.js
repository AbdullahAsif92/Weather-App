import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='bg-gray-700 flex justify-around py-6 fixed bottom-0 w-full md:relative md:flex-col md:w-[8%] md:rounded-2xl md:mx-4 md:justify-center md:gap-12 md:h-[64vh]'>
      <Link className='flex flex-col items-center text-1xl md:text-2xl md:gap-2' to="/">
        <i className="fa-regular fa-house text-2xl md:3xl"></i>
        Home
      </Link>
      <Link className='flex flex-col items-center text-1xl md:text-2xl md:gap-2' to="/allcities">
        <i className="fa-solid fa-mountain-city text-2xl md:3xl"></i>
        Cities
      </Link>
      <Link className='flex flex-col items-center text-1xl md:text-2xl md:gap-2'>
        <i className="fa-solid fa-temperature-full text-2xl md:3xl"></i>
        Cast
      </Link>
    </div>
  )
}

export default Navigation
