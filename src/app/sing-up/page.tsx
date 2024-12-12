import React from 'react';
import Image from 'next/image';
import singup from "../../../public/images/singup.png";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <div className=' mt-16 mb-24 flex justify-center'>
      <div className='w-[1305px] h-[781px] bg-myWhite flex flex-col sm:flex sm:flex-row sm:justify-between sm:items-center'>
          <Image src = {singup} alt = "singup" className=''/>
          <div>
          <h1 className='text-myBlack text-4xl font-semibold'>Create an account</h1>
          <br />
          <p>Enter your details below</p>
          <br />

          <br />
          <form className=''> <div>
                <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    required
                   className='w-[360px] h-[32px] bg-myWhite border-b-1 border-myBlack'/>
                </div>
                <br />
                <br />

                 <div>
                 <input
                    type="text"
                    name="Name"
                    placeholder="Email or Phone Number"
                    required
                    className='w-[360px] h-[32px] bg-myWhite border-b-1 border-myBlack'/>
                 </div>
                 <br />
                 <br />

                 <div>
                 <input
                    type="text"
                    name="Name"
                    placeholder="Your Phone *"
                    required
                    className='w-[360px] h-[32px] bg-myWhite border-b-1 border-myBlack'/>
                 </div>
                  </form>
                 <div>
                 <button className='h-[56px] w-[371px] bg-myRed hover:bg-red-400 font-semibold rounded-md text-myWhite mt-14 text-center'>Create Account</button>
                 <br />
          <button className='h-[56px] w-[371px] font-semibold rounded-md text-myBlack  text-center border-[1px] border-myBlack mt-4'>
          <FcGoogle className='inline text-2xl mr-3'/>
                   Sign up with Google</button>
                   <div className='flex justify-center gap-2 mt-6'>
                    <p>Already have account?</p>
                    <h2> Log in</h2>
                   </div>
                 </div>
          </div>
          
        </div>
      </div>
  )
}

export default page