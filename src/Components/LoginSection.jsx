import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";
import { Fade } from "react-awesome-reveal";
const LoginSection = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <>

      <div className='flex items-center'>

        <button className='underline underline-offset-2 text-sm text-blue-700 px-25 flex items-center ' onClick={goBack}>
          <TiArrowBack className='mr-2' />Back
        </button>
      </div>
      <div className="registration-form mt-5 mb-5 form-container w-[35%] mx-auto py-20 rounded-2xl shadow-2xl">
        <p className='font-bold text-center text-3xl  italic mb-7'>Login Form </p>
        <form>
          <Fade cascade damping={3.6}>
            <div>
              <form className='w-[80%] mx-auto leading-7'>
                <label className='font-semibold'>Name</label>
                <input type="text " className='w-[100%] mb-2 focus:outline-none focus:border-[#0B21BF] shadow-sm border border-gray-300 py-2 px-4' placeholder='Enter your Name' />

                <label className='font-semibold' >Email</label>
                <input type="email" className='w-[100%] mb-2 focus:outline-none focus:border-[#0B21BF] shadow-sm border border-gray-300 py-2 px-4' placeholder='Enter your Email' />

                <label className='font-semibold'>Password</label>
                <input type="password " className='w-[100%] mb-2 focus:outline-none focus:border-[#0B21BF] shadow-sm border border-gray-300 py-2 px-4' placeholder='Enter your Password' />

                <input type="Submit" value="Login" className='bg-[#333] mt-3 w-[100%] text-white px-5 py-3' />

              </form>
            </div>
          </Fade>
        </form>
      </div>
    </>
  )
}

export default LoginSection
