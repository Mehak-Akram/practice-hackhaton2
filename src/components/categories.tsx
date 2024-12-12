import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Icons from './icons';


const  Categories= () => {
  return (
    <div>
        <div className='h-[103px]'> <div className='flex items-center gap-2 ml-36 mt-56'>
        <div className='bg-myRed w-[20px] h-[40px] rounded-sm'></div>
        <h1 className='text-myRed text-normal font-bold'>Categories</h1>
        </div>
        <div className='flex justify-between items-end mt-4'>
        <h1 className='text-4xl font-bold ml-32'>Browse By Category</h1>

        <div className='flex gap-2 mr-11'>
        <div className='bg-searh h-[46px] w-[46px] flex items-center justify-center rounded-full'><FaArrowRight/></div>
        <div className='bg-searh h-[46px] w-[46px] flex items-center justify-center rounded-full'><FaArrowRight/></div>
        </div>

        </div>
        </div>
        <Icons/>
    </div>
  )
}

export default Categories