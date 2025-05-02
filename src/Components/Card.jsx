import React from 'react'
import { motion } from 'framer-motion'
import { Rotate } from 'react-awesome-reveal'

const Card = () => {
    return (
        <>
            <motion.div
                whileHover={{
                    translateY: -20
                }}
                className="card mx-auto w-[300px] border border-gray-300 mt-20 bg-blue-500">
                <div className="card-img p-3">
                    <img src="./product.jpg" className='w-[100%] ' alt="" />
                </div>
                <div className="card-text p-3 font-stretch-50% text-white ">

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aperiam vel quos necessitatibus officia eligendi.</p>

                </div>
            </motion.div>
        </>
    )
}

export default Card
