<<<<<<< HEAD
import React from 'react';
import { Fade } from "react-awesome-reveal";
import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";

const Registration = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {/* Back Button */}
      <div className="flex items-center">
        <button
          onClick={goBack}
          className="underline underline-offset-2 text-sm text-blue-700 px-4 py-2 flex items-center hover:text-blue-900 transition-colors"
          aria-label="Go Back"
        >
          <TiArrowBack className="mr-2 text-lg" />
          Back
        </button>
      </div>

      {/* Registration Form */}
      <div className="registration-form mt-5 mb-5 w-full sm:w-[80%] md:w-[60%] lg:w-[35%] mx-auto py-10 px-6 rounded-2xl shadow-2xl bg-white">
        <p className="font-bold text-center text-3xl italic mb-7">Registration Form</p>

        <Fade direction="right">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="font-semibold block mb-1">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="w-full mb-2 focus:outline-none focus:border-[#162D5D] shadow-sm border border-gray-300 py-2 px-4 rounded"
              />
            </div>

            <div>
              <label htmlFor="email" className="font-semibold block mb-1">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="w-full mb-2 focus:outline-none focus:border-[#162D5D] shadow-sm border border-gray-300 py-2 px-4 rounded"
              />
            </div>

            <div>
              <label htmlFor="password" className="font-semibold block mb-1">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="w-full mb-2 focus:outline-none focus:border-[#162D5D] shadow-sm border border-gray-300 py-2 px-4 rounded"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="font-semibold block mb-1">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your Password"
                className="w-full focus:outline-none focus:border-[#162D5D] shadow-sm border border-gray-300 py-2 px-4 rounded"
              />
            </div>

            <input
              type="submit"
              value="Register"
              className="bg-[#333] mt-3 w-full text-white px-5 py-3 rounded hover:bg-[#162D5D] font-semibold transition-colors"
            />
          </form>
        </Fade>
      </div>
    </>
  );
};

export default Registration;
=======
import React from 'react'
import { Fade } from "react-awesome-reveal";
import { Link, useNavigate } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";


const Registration = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    return (
        <>
            <div className='flex items-center'>
            
          <button className='underline underline-offset-2 text-sm text-blue-700 px-25 flex items-center' onClick={goBack}>    
          <TiArrowBack className='mr-2 '/>Back
            </button>
            </div>

            <div className="registration-form mt-5 mb-5 form-container w-[35%] mx-auto py-20 rounded-2xl shadow-2xl">
            <p className='font-bold text-center text-3xl  italic mb-7'>Registration Form </p>
                <form>
                    <Fade direction="right">
                        <div>
                            <form className='w-[80%] mx-auto leading-7'>
                                <label className='font-semibold'>Name</label>
                                <input type="text " className='w-[100%] mb-2 focus:outline-none focus:border-[#0B21BF] shadow-sm border border-gray-300 py-2 px-4' placeholder='Enter your Name' />

                                <label className='font-semibold' >Email</label>
                                <input type="email" className='w-[100%] mb-2 focus:outline-none focus:border-[#0B21BF] shadow-sm border border-gray-300 py-2 px-4' placeholder='Enter your Email' />
 
                                <label className='font-semibold'>Password</label>
                                <input type="password " className='w-[100%] mb-2 focus:outline-none focus:border-[#0B21BF] shadow-sm border border-gray-300 py-2 px-4' placeholder='Enter your Password' />

                                <label className='font-semibold'>Confirm Password</label>
                                <input type="password " className='w-[100%] focus:outline-none focus:border-[#0B21BF] shadow-sm border border-gray-300 py-2 px-4' placeholder='Enter your Password' />

                                <input type="Submit" value="Register" className='bg-[#333] mt-3 w-[100%] text-white px-5 py-3' />

                            </form>
                        </div>
                    </Fade>


                </form>
            </div>
        </>
    )
}

export default Registration
>>>>>>> 9b41e806283413e1ca4e426be24804e7d99e6c60
