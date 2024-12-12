import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Product from './product';


const Today = () => {
  return (
    <div className=' h-[493px] mt-20'>
<div className='h-[103px]'> <div className='flex items-center gap-2 ml-36'>
        <div className='bg-myRed w-[20px] h-[40px] rounded-sm'></div>
        <h1 className='text-myRed text-normal font-bold'>Today’s</h1>
        </div>
        <div className='flex justify-around items-end'>
        <h1 className='text-4xl font-bold'>Flash Sales</h1>
        <div className='mr-60'>
          <ul className='flex gap-4 mr-16'>
            <li className='text-sm text-myBlack'>Days <br /><p className='text-4xl font-bold text-myBlack'>03</p></li>
            <li className='text-sm text-myBlack'>Hours <br /><p className='text-4xl font-bold text-myBlack'>23</p></li>
            <li className='text-sm text-myBlack'>Minutes <br /><p className='text-4xl font-bold text-myBlack'>19</p></li>
            <li className='text-sm text-myBlack'>Seconds <br /><p className='text-4xl font-bold text-myBlack'>56</p></li>
          </ul>
        </div>
        <div className='flex gap-2'>
        <div className='bg-searh h-[46px] w-[46px] flex items-center justify-center rounded-full'><FaArrowRight/></div>
        <div className='bg-searh h-[46px] w-[46px] flex items-center justify-center rounded-full'><FaArrowRight/></div>
        </div>

        </div>
        </div>
        <Product/>
    </div>
  )
}

export default Today