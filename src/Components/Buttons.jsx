import React from 'react';
import { Fade } from "react-awesome-reveal";

const Buttons = () => {
  return (
    <>
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
