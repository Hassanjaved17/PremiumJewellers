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
