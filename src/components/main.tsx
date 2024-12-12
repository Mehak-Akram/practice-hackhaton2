import React from 'react';
import Image from 'next/image';
import apple from "../../public/images/apple.png"
import { FaArrowRight } from "react-icons/fa";
import iphone from "../../public/images/iphone.png"


const Main = () => {
  return (
    <div className='flex  justify-around mt-[30px]'>
        <ul className='leading-10 normal text-sm'>
            <li className='flex'>Womans Fashion </li>
            <li className='flex'>Mens Fashion </li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Babys & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
        </ul>
       
       <div className='bg-myBlack w-[892px] h-[344px] flex justify-evenly'>
       <div className='flex flex-col justify-around ml-9'>
          <div className='flex'><Image src={apple} alt="logo" width={40} height={49}/>
          <h2 className='text-myWhite mt-3'>iPhone 14 Series</h2>
          </div>
          <h1 className='text-myWhite text-6xl'>Up to 10%  <br /> off Voucher</h1>
          <div className='flex gap-2 font-thin'><h1 className='text-myWhite font-bold underline'>Shop Now</h1>
          <FaArrowRight className='text-myWhite mt-1'/></div>
       </div>
       <Image src = {iphone} alt ="phone"/>
        </div>
    </div>
  )
}

export default Main