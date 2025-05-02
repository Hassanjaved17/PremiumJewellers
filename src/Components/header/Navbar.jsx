import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { motion } from 'framer-motion';
import { HiMenu, HiX } from "react-icons/hi";
import AddToCart from './AddToCart';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [heartChecked, setHeartChecked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar bg-white shadow-md px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            whileInView={{
              translateY: [0, -10, 10, 0],
              transition: { duration: 2, repeat: Infinity, ease: "linear" }
            }}
            className="text-2xl font-bold"
          >
            <Link to="/">
              <i className='text-[#575757] md:text-xl text-sm'>Premium</i>
              <i className='text-[#0B21BF] md:text-xl text-sm'>Jeweller's</i>
            </Link>
          </motion.div>


          <div className="hidden md:flex items-center gap-8">

            <div className='search-area flex items-center md:text-xl text-sm'>
              <input className='bg-white border focus:outline-none focus:border-[#CE8B39] h-8 w-xl border-[#CCCCCC] px-4' placeholder='Search Products' type="text" />
              <button className='bg-[#0B21BF] p-2 text-white'><CiSearch /></button>
            </div>


            <div className='flex gap-6'>
              <Link to='/login'><motion.p whileHover={{ translateY: -3 }} className='hover:text-[#0B21BF]'>Login</motion.p></Link>
              <Link to='/register'><motion.p whileHover={{ translateY: -3 }} className='hover:text-[#0B21BF]'>Register</motion.p></Link>
              <Link to='/products'><motion.p whileHover={{ translateY: -3 }} className='hover:text-[#0B21BF]'>Products</motion.p></Link>
            </div>
          </div>


          <div className='flex items-center gap-4 md:gap-6'>
            {heartChecked
              ? <FaHeart className='md:text-2xl text-sm' onClick={() => setHeartChecked(!heartChecked)} />
              : <FaRegHeart className='md:text-2xl text-sm' onClick={() => setHeartChecked(!heartChecked)} />
            }
            <IoIosCart className='md:text-2xl text-sm' onClick={() => setCartOpen(!cartOpen)} />


            <div className='md:hidden'>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden mt-4 space-y-3 px-4">
              <div className='search-area flex'>
                <input className='bg-white border focus:outline-none focus:border-[#0B21BF] h-8 w-full border-[#CCCCCC] px-4' placeholder='Search Products' type="text" />
                <button className='bg-[#0B21BF] p-2 text-white'><CiSearch /></button>
              </div>
              <Link to='/login'><p className='hover:text-[#0B21BF]'>Login</p></Link>
              <Link to='/register'><p className='hover:text-[#0B21BF]'>Register</p></Link>
              <Link to='/products'><p className='hover:text-[#0B21BF]'>Products</p></Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AddToCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </>
  );
};

export default Navbar