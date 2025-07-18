import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from 'framer-motion';

const AddToCart = ({ cartOpen, setCartOpen }) => {
  const cartItems = [
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
  ];

  return (
    <AnimatePresence>
      {cartOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="bg-white text-black fixed right-0 top-0 z-50 h-screen w-full sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[22%]"
        >
          {/* Header */}
          <div className="flex justify-between items-center text-lg px-6 py-5 border-b border-gray-200">
            <p className="font-bold">ADD TO CART</p>
            <RxCross2
              className="text-2xl cursor-pointer hover:text-red-500"
              onClick={() => setCartOpen(false)}
            />
          </div>

          {/* Cart Items */}
          <div className="cart-items text-sm px-4 py-6 overflow-y-auto h-[calc(100vh-180px)] space-y-4">
            {cartItems.map((item, index) => (
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddToCart;
