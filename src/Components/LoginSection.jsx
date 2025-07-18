import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";
import { Fade } from "react-awesome-reveal";

const LoginSection = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {/* Back Button */}
      <div className='flex items-center'>
        <button
          onClick={goBack}
          className='underline underline-offset-2 text-sm text-blue-700 px-4 py-2 flex items-center hover:text-blue-900 transition-colors'
          aria-label="Go Back"
        >
          <TiArrowBack className='mr-2 text-lg' />
          Back
        </button>
      </div>

      {/* Login Form */}
      <div className="registration-form mt-5 mb-5 w-full sm:w-[80%] md:w-[60%] lg:w-[35%] mx-auto py-10 px-6 rounded-2xl shadow-2xl bg-white">
        <p className='font-bold text-center text-3xl italic mb-7'>Login Form</p>

        <Fade cascade damping={0.3}>
          <form className='space-y-4'>
            <div>
              <label className='font-semibold block mb-1'>Name</label>
              <input
                type="text"
                placeholder='Enter your Name'
                className='w-full mb-2 focus:outline-none focus:border-[#0B21BF] shadow-sm border border-gray-300 py-2 px-4 rounded'
              />
            </div>

            <div>
              <label className='font-semibold block mb-1'>Email</label>
              <input
                type="email"
                placeholder='Enter your Email'
                className='w-full mb-2 focus:outline-none focus:border-[#0B21BF] shadow-sm border border-gray-300 py-2 px-4 rounded'
              />
            </div>

            <div>
              <label className='font-semibold block mb-1'>Password</label>
              <input
                type="password"
                placeholder='Enter your Password'
                className='w-full mb-2 focus:outline-none focus:border-[#0B21BF] shadow-sm border border-gray-300 py-2 px-4 rounded'
              />
            </div>

            <input
              type="submit"
              value="Login"
              className='bg-[#333] mt-3 w-full text-white px-5 py-3 rounded hover:bg-[#0B21BF] font-semibold transition-colors'
            />
          </form>
        </Fade>
      </div>
    </>
  );
};

export default LoginSection;
