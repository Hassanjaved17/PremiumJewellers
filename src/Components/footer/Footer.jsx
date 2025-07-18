<<<<<<< HEAD
import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white px-4 sm:px-16 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div className="space-y-4 text-center md:text-left">
          {/* Animated Brand Text */}
          <motion.div
            animate={{
              translateY: [0, -10, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <i className="text-[#575757] w-36 sm:w-44 text-lg sm:text-2xl font-bold block mx-auto md:mx-0">
              Premium
            </i>
            <i className="text-[#162D5D] w-36 sm:w-44 text-lg sm:text-2xl font-bold block mx-auto md:mx-0">
              Jeweller's
            </i>
          </motion.div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 sm:gap-4 pt-2">
            <GrInstagram className="text-2xl hover:scale-110 transition-all cursor-pointer" />
            <FaFacebookSquare className="text-2xl hover:scale-110 transition-all cursor-pointer" />
          </div>

          {/* Contact Info */}
          <div className="text-sm text-gray-600 space-y-1 break-words">
            <p className="hover:text-[#E90D8B] cursor-pointer">📞 042-111 801 800</p>
            <p className="hover:text-[#E90D8B] cursor-pointer">
              📧 wecare@tesoro.pk
            </p>
            <p className="hover:text-[#E90D8B] cursor-pointer">📍 3-Z DHA Lahore</p>
            <p className="hover:text-[#E90D8B] cursor-pointer">
              🕒 11:00 AM - 7:00 PM (Mon-Sat)
            </p>
          </div>
        </div>

        {/* Right Side - Help Links */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="font-bold text-lg text-black">HELP</h2>
          <div className="flex flex-col text-sm text-gray-600 space-y-1">
            <Link className="hover:text-[#E90D8B] cursor-pointer">
              Jewellery Care
            </Link>
            <Link className="hover:text-[#E90D8B] cursor-pointer">
              After Sales Service
            </Link>
            <Link className="hover:text-[#E90D8B] cursor-pointer">About Us</Link>
            <Link className="hover:text-[#E90D8B] cursor-pointer">
              Exchange Policy
            </Link>
            <Link className="hover:text-[#E90D8B] cursor-pointer">
              Order & Shipping
            </Link>
            <Link className="hover:text-[#E90D8B] cursor-pointer">Stores</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======
import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <>
            <div className="footer grid md:grid-cols-2 grid-cols-1 px-20 py-20 place-items-center">
                <div className="section1">
                    <motion.div //Transition Effect Infinity,
                        whileInView={{
                            translateY: [0, -10, 10, 0],
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }}
                        className="footer-logo   p-8 ">
                        {/* <img className='w-[35%] ' src="./footer-image/footer-logo.png" alt="" /> */}
                        <i className='text-[#575757] text-3xl font-bold '>Premium</i>
                        <i className='text-[#0B21BF] text-3xl font-bold'>Jeweller's</i>
                    </motion.div>

                    <div className="icons flex items-center p-4  gap-2 group ">

                        <GrInstagram className='text-2xl group-hover:scale-80 transition-all duration-400 ease-in-out' />
                        <FaFacebookSquare className='text-2xl group-hover:scale-80 transition-all duration-400 ease-in-out' />
                    </div>


                    <div className="section md:w-[70%] w-[30%]">
                        <p className='text-gray-600 hover:text-[#0B21BF] cursor-pointer'>Contact Us: 042-111 801 800</p>
                        <p className='text-gray-600 hover:text-[#0B21BF] cursor-pointer'>Email: wecare@tesoro.pk</p>
                        <p className='text-gray-600 hover:text-[#0B21BF] cursor-pointer'>Address: 3-Z DHA Lahore</p>
                        <p className='text-gray-600 hover:text-[#0B21BF] cursor-pointer'>Available From: 11:00 AM to 7:00 PM (Mon-Sat)</p>
                    </div>
                </div>


                <div className="section2 mt-17  md:w-[70%] w-[30%]">
                    <Link className='font-bold'>HELP</Link>
                    <div className='flex flex-col'>
                        <Link className='text-gray-600 hover:text-[#0B21BF] cursor-pointer '>Jewellery Care</Link>
                        <Link className='text-gray-600 hover:text-[#0B21BF] cursor-pointer '>After Sales Service</Link>
                        <p className='text-gray-600 hover:text-[#0B21BF] cursor-pointer'>About Us</p>
                        <p className='text-gray-600 hover:text-[#0B21BF] cursor-pointer'>Exchange Policy</p>
                        <p className='text-gray-600 hover:text-[#0B21BF] cursor-pointer'>Order & Shipping</p>
                        <p className='text-gray-600 hover:text-[#0B21BF] cursor-pointer'>Stores</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
>>>>>>> 9b41e806283413e1ca4e426be24804e7d99e6c60
