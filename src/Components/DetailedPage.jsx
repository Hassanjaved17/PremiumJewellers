import React from 'react'
import { IoShareSocialOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import productsData from '../Data/ProductsData';

const DetailedPage = () => {

    const { id } = useParams();

    const details = productsData.find(product => product.id === parseInt(id));

    return (
        <>
            <div className="products-details bg-white flex px-10 py-20 gap-8">
                <div className="product-img overflow-hidden relative border border-[#E5E5E5] group shadow-md rounded-4xl w-[60%]">
                    <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10">
                        <IoShareSocialOutline className="text-gray-400 w-5 h-5" />
                    </button>
                    <img
                        src={details.product_img}
                        className="group-hover:scale-85 scale-80 transition-transform duration-900 ease-in-out rounded-4xl w-[100%]"
                    />
                </div>

                <div className='w-[40%]'>
                    <div className="product-heading mt-5">
                        <p className='font-semibold'>{details.product_name}</p>
                        <p className='text-sm text-[#636563] mt-1 '>STYLE # 15413</p>
                        <p className='mt-5 text-[#0B21BF]'>{details.product_price}</p>
                        <p className='mt-9 font-semibold'>DIMENSIONS</p>
                        <p className='mt-4 text-sm text-[#636563] '>Length:5.0 Width:1.6 cm</p>
                        <p className='text-[#636563] text-sm mt-4'
                        >CLUTCH ALL CRYST-SLVR</p>
                        <button className='mt-8 bg-[#0B21BF] text-white p-4 w-[12rem] leading-3'>CHECKOUT</     button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DetailedPage
