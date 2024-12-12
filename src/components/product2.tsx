import React from 'react';
import Image from 'next/image';
import jaket from "../../public/images/jaket.png";
import bag from "../../public/images/bag.png";
import speaker from "../../public/images/speaker.png";
import book from "../../public/images/book.png";
import { BsHeart } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
<FaStar />


const Product2 = () => {
  return (
   <div>
     <div className='flex justify-center gap-9 mt-11'>
        <div className='h-[350px] w-[300px] bg-myWhite rounded-md '>
            <div className='h-[270px] bg-searh rounded-md'>
                <div className='flex justify-end'>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full '><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={jaket} alt = "game" className='ml-11'/>
            </div>
            <div className='mt-2'>
            <h2 className='font-bold text-myBlack'>The north coat</h2>
            <div className='flex gap-2'><h2 className='text-myRed font-bold'>$260</h2> <h2  className='font-bold text-slate-500 line-through'>$300</h2></div>
            <div className='mt-3'>
                <div className='flex text-yellow-600 gap-2'>
               <div className='flex'> <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /></div>
                <h2  className='font-bold text-slate-500'>(88)</h2>
                </div>
            </div>
            </div>
        </div>
        {/* //2 */}
        <div className='h-[350px] w-[300px] bg-myWhite rounded-md '>
            <div className='h-[270px] bg-searh rounded-md'>
                <div className='flex justify-end'>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full'><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={bag} alt = "keyboard" className='ml-11'/>
            </div>
            <div className='mt-2'>
            <h2 className='font-bold text-myBlack'>Gucci duffle bag</h2>
            <div className='flex gap-2'><h2 className='text-myRed font-bold'>$960</h2> <h2  className='font-bold text-slate-500 line-through'>$1160</h2></div>
            <div className='mt-3'>
                <div className='flex text-yellow-600 gap-2'>
               <div className='flex'> <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className='text-slate-500'/></div>
                <h2  className='font-bold text-slate-500'>(65)</h2>
                </div>
            </div>
            </div>
        </div>
        {/* 3 */}
        <div className='h-[350px] w-[300px] bg-myWhite rounded-md '>
            <div className='h-[270px] bg-searh rounded-md'>
                <div className='flex justify-end'>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full'><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={speaker} alt = "tv" className='ml-11'/>
            </div>
            <div className='mt-2'>
            <h2 className='font-bold text-myBlack'>RGB liquid CPU Cooler</h2>
            <div className='flex gap-2'><h2 className='text-myRed font-bold'>$370</h2> <h2  className='font-bold text-slate-500 line-through'>$400</h2></div>
            <div className='mt-3'>
                <div className='flex text-yellow-600 gap-2 '>
               <div className='flex'> <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /></div>
                <h2  className='font-bold text-slate-500'>(99)</h2>
                </div>
            </div>
            </div>
        </div>
        {/* 4 */}
        <div className='h-[350px] w-[300px] bg-myWhite rounded-md '>
            <div className='h-[270px] bg-searh rounded-md'>
                <div className='flex justify-end'>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full'><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={book} alt = "chair" className='ml-11'/>
            </div>
            <div className='mt-2'>
            <h2 className='font-bold text-myBlack'>Small BookSelf</h2>
            <div className='flex gap-2'><h2 className='text-myRed font-bold'>$375</h2></div>
            <div className='mt-3'>
                <div className='flex text-yellow-600 gap-2'>
               <div className='flex'> <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /></div>
                <h2  className='font-bold text-slate-500'>(99)</h2>
                </div>
            </div>
            </div>
        </div>
    </div>
   </div>
    
    
  )
}

export default Product2