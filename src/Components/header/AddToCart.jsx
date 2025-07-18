<<<<<<< HEAD
import React from 'react';
import { RxCross2 } from "react-icons/rx";

const AddToCart = ({ cartOpen, setCartOpen }) => {
  return (
    <>
      <div
        className={`bg-white text-black h-screen fixed right-0 top-0 z-50 transform transition-transform duration-300 ease-in-out 
          w-full sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[22%]
          ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className='flex justify-between items-center text-lg px-6 py-5 border-b border-gray-200'>
          <p className='font-bold'>ADD TO CART</p>
          <RxCross2
            className='text-2xl cursor-pointer hover:text-red-500'
            onClick={() => setCartOpen(false)}
          />
        </div>

        {/* Cart Items */}
        <div className="cart-items text-sm px-4 py-6 overflow-y-auto h-[calc(100vh-180px)] space-y-4">
          {[
            {
              img: "./productImages/product1.jpeg",
              title: "Bunched Leaves Earrings",
              price: "$ 6,600",
            },
            {
              img: "./productImages/product2.jpeg",
              title: "Delightful Flower Earrings",
              price: "$ 8,600",
            },
            {
              img: "./productImages/product3.jpeg",
              title: "Classic Solitaire Silver Tops",
              price: "$ 9,700",
            },
          ].map((item, index) => (
            <div key={index} className="cart-item flex items-center gap-3">
              <div className="border border-gray-200 rounded">
                <img src={item.img} alt={item.title} width={80} />
              </div>
              <div className="text-[#787878]">
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Checkout */}
        <div className="px-4 py-5 border-t border-gray-200">
          <div className="flex justify-between text-sm font-medium mb-4">
            <p>Total:</p>
            <p>$24,900</p>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-[#333] text-white rounded-2xl p-2 hover:bg-[#717FE0] font-bold text-sm">
              VIEW CART
            </button>
            <button className="flex-1 bg-[#333] text-white rounded-2xl p-2 hover:bg-[#717FE0] font-bold text-sm">
              CHECK OUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
=======
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const AddToCart = ({ cartOpen, setCartOpen }) => {

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}

          className={`bg-white text-black w-[22%] h-[100vh] fixed right-0 top-0 z-50 transform transition-transform duration-300 ease-in-out ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='cart-header flex justify-between items-center text-lg px-6 relative top-5'>
            <div className="heading">
              <p className='font-bold'>ADD TO CART</p>
            </div>
            <div className={`${cartOpen ? 'block' : 'hidden'} cart-icon`} >
              <RxCross2 className='text-2xl' onClick={() => setCartOpen(!cartOpen)} />
            </div>
          </div>
          <div>
            <div className="cart-items text-sm px-3 mt-40">
              <div className='cart-item flex justify-between items-center gap-3'>
                <div className="cart-img  border border-gray-200">
                  <img src="./productImages/product1.jpeg" width={80} />
                </div>
                <div className="cart-text text-[#787878] ">
                  <p>Bunched Leaves Earrings</p>
                  <p>$ 6,600</p>
                </div>
              </div>

              <div className='cart-item flex justify-between items-center mt-3 gap-3'>
                <div className="cart-img border border-gray-200">
                  <img src="./productImages/product2.jpeg" width={80} />
                </div>
                <div className="cart-text text-[#787878]">
                  <p>Delightful Flower Earrings</p>
                  <p>$ 8,600</p>
                </div>
              </div>

              <div className='cart-item flex justify-between items-center mt-3 gap-3'>
                <div className="cart-img border border-gray-200">
                  <img src="./productImages/product3.jpeg" width={80} />
                </div>
                <div className="cart-text text-[#787878]">
                  <p>Classic Solitaire Silver Tops</p>
                  <p>$ 9,700</p>
                </div>
              </div>
            </div>
          </div>

          <div className='px-3 flex justify-between mt-60'>
            <p>Total:$190000.00</p>
          </div>
          <div className='px-3 flex justify-between mt-7 '>
            <button className=' bg-[#333] text-white rounded-2xl p-2 hover:bg-[#717FE0] font-bold text-sm'>VIEW CART</button>
            <button className=' bg-[#333] text-white rounded-2xl p-2  hover:bg-[#717FE0] font-bold text-sm'>CHECK OUT</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
export default AddToCart
>>>>>>> 9b41e806283413e1ca4e426be24804e7d99e6c60
