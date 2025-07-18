import React from 'react';
import { IoShareSocialOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import productsData from '../Data/ProductsData';

const DetailedPage = () => {
  const { id } = useParams();
  const details = productsData.find(product => product.id === parseInt(id));

  return (
    <div className="products-details bg-white flex flex-col md:flex-row px-4 sm:px-10 py-10 gap-8">
      {/* Product Image */}
      <div className="product-img overflow-hidden relative border border-[#E5E5E5] group shadow-md rounded-3xl w-full md:w-[60%]">
        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10">
          <IoShareSocialOutline className="text-gray-400 w-5 h-5" />
        </button>
        <img
          src={details.product_img}
          alt={details.product_name}
          className="group-hover:scale-[.85] scale-100 transition-transform duration-[900ms] ease-in-out rounded-3xl w-full"
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-[40%]">
        <div className="product-heading mt-5">
          <p className="font-semibold text-lg">{details.product_name}</p>
          <p className="text-sm text-[#636563] mt-1">STYLE # 15413</p>
          <p className="mt-5 text-[#162D5D] text-lg">{details.product_price}</p>

          <p className="mt-9 font-semibold">DIMENSIONS</p>
          <p className="mt-4 text-sm text-[#636563]">Length: 5.0cm &nbsp; Width: 1.6cm</p>
          <p className="text-[#636563] text-sm mt-4">CLUTCH ALL CRYST-SLVR</p>

          <button className="mt-8 bg-[#162D5D] hover:bg-[#0f1d3c] transition-all text-white py-3 px-6 w-[12rem] rounded-md">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
