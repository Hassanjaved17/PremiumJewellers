import React from 'react'
import { Fade } from "react-awesome-reveal";

const Buttons = () => {
  return (
    <>
      <div className='btns-area py-8'>
        <div className="flex justify-center p-1">
          <h5 className='header-heading title text-sm text-bold' >SHOP BY CATEGORY</h5>
        </div>
        <Fade direction='left'>
          <div className='btns flex gap-20 items-center p-2 overflow-scroll mt-2'>
            <button className='border-none p-4 text-gray-300 bg-[#333] text-sm'> Earings</button>
            <button className='border-none p-4 text-gray-300 bg-[#333] text-sm'> Rings</button>
            <button className='border-none p-4 text-gray-300 bg-[#333] text-sm'> ClutchBags</button>
            <button className='border-none p-4 text-gray-300 bg-[#333] text-sm'> Pendants</button>
            <button className='border-none p-4 text-gray-300 bg-[#333] text-sm'> Bracelets</button>
            <button className='border-none p-4 text-gray-300 bg-[#333] text-sm'> Sets</button>
            <button className='border-none p-4 text-gray-300 bg-[#333] text-sm'> Mens</button>
            <button className='border-none p-4 text-gray-300 bg-[#333] text-sm'> ReligiousPendants</button>
            <button className='border-none p-4 text-gray-300 bg-[#333] text-sm'> EthinicJewellery</button>
            <button className='border-none p-4 text-gray-300 bg-[#333] text-sm'> BridalClutches</button>

          </div>
        </Fade>
      </div>

    </>
  )
}

export default Buttons