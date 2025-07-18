<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'
>>>>>>> 9b41e806283413e1ca4e426be24804e7d99e6c60
import { Fade } from "react-awesome-reveal";

const Buttons = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="btns-area py-8">
        <div className="flex justify-center">
          <h5 className="header-heading title text-sm font-bold tracking-wide uppercase">
            SHOP BY CATEGORY
          </h5>
        </div>

        <Fade direction="left">
          <div className="btns flex gap-4 sm:gap-6 items-center px-4 mt-4 overflow-x-scroll scrollbar-hide">
            {[
              "Earings",
              "Rings",
              "ClutchBags",
              "Pendants",
              "Bracelets",
              "Sets",
              "Mens",
              "ReligiousPendants",
              "EthenicJewellery",
              "BridalClutches"
            ].map((category, index) => (
              <button
                key={index}
                className="min-w-max px-6 py-2 text-sm text-white bg-[#333] rounded-lg hover:bg-[#555] transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Buttons;
=======
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
>>>>>>> 9b41e806283413e1ca4e426be24804e7d99e6c60
