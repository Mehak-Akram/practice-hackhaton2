import React from 'react';
import Link from 'next/link';
import { LuSearch } from "react-icons/lu";
import { BsHeart } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
        <div className=' h-[38px] mt-[30px] flex items-center justify-around'>
        <h1 className='text-xl font-bold'>Exclusive</h1>
        <div className="">
            <ul className='flex gap-9 font-normal text-sm'>
              <Link href={"/"}>
                <li className='hover:underline'>Home</li>
              </Link>
              <Link href="/contact-us">
                <li className='hover:underline'>Contact</li>
              </Link>
              <Link href="/about-us">
                <li className='hover:underline'>About</li>
              </Link>
              <Link href="/sing-up">
                <li className='hover:underline'>Sing Up</li>
              </Link>
            </ul>
          </div>

         <div className='flex items-center gap-9'>
         <div className='bg-searh w-[243px] h-[38px] flex items-center justify-around'>
            <p className='font-normal text-sm'>What are you looking for?</p>
            <LuSearch className='h-[24px] w-[24px]'/>
          </div>
        <BsHeart className='h-[232px] w-[32px]'/>
                     
                        <Link href="/cart">

          <IoCartOutline className='h-[232px] w-[32px]'/>
  </Link>

         </div>
    </div>
    <hr className='mt-3'/>
    </div>
  
  )
}

export default Navbar