import React from 'react';
import Link from 'next/link';
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="w-[820px] h-[48px] sm:w-full bg-myBlack flex items-center justify-center px-4">
  <p className="text-myWhite font-normal text-xl sm:text-sm leading-6 text-center">
    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
  </p>
  <Link
    className="text-myWhite underline text-xl sm:text-sm font-semibold leading-6 ml-4"
    href="/"
  >
    Shop Now
  </Link>
</div>
  )
}

export default Header