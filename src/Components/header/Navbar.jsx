import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import AddToCart from "./AddToCart";
import { motion } from "framer-motion";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [heartChecked, setHeartChecked] = useState(false);

  return (
    <>
      <div className="navbar w-full py-4 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="logo text-2xl font-bold">
            <motion.div
              whileInView={{
                translateY: [0, -10, 10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <Link to="/" className="flex items-center gap-1">
                <i className=" text-[#575757]">Premium</i>
                <i className=" text-[#162D5D]">Jeweller's</i>
              </Link>
            </motion.div>
          </div>

          {/* Search */}
          <div className="search-area flex items-center w-full sm:w-auto">
            <input
              className="bg-white border border-[#CCCCCC] focus:outline-none focus:border-[#162D5D] h-8 px-4 w-full sm:w-[300px]"
              placeholder="Search Products"
              type="text"
            />
            <button className="bg-[#162D5D] p-2 text-white">
              <CiSearch />
            </button>
          </div>

          {/* Auth Links */}
          <div className="login-register-section flex flex-col sm:flex-row gap-2 sm:gap-6 text-center">
            <Link to={"/login"}>
              <motion.p
                whileHover={{ translateY: -3 }}
                className="hover:text-[#162D5D] hover:font-bold"
              >
                Login
              </motion.p>
            </Link>
            <Link to={"/register"}>
              <motion.p
                whileHover={{ translateY: -3 }}
                className="hover:text-[#162D5D] hover:font-bold"
              >
                Register
              </motion.p>
            </Link>
            <Link to={"/products"}>
              <motion.p
                whileHover={{ translateY: -3 }}
                className="hover:text-[#162D5D] hover:font-bold"
              >
                Products
              </motion.p>
            </Link>
          </div>

          {/* Icons */}
          <div className="icons-section flex items-center gap-4">
            {heartChecked ? (
              <FaHeart
                className="text-2xl cursor-pointer"
                onClick={() => setHeartChecked(!heartChecked)}
              />
            ) : (
              <FaRegHeart
                className="text-2xl cursor-pointer"
                onClick={() => setHeartChecked(!heartChecked)}
              />
            )}

            <IoIosCart
              className="text-2xl cursor-pointer"
              onClick={() => setCartOpen(!cartOpen)}
            />
          </div>
        </div>
      </div>

      <AddToCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </>
  );
};

export default Navbar;
