import React from 'react';
import Image from 'next/image';
import game from "../../public/images/game.png";
import keyboard from "../../public/images/keyboard.png";
import tv from "../../public/images/tv.png";
import chair from "../../public/images/chair.png";
import { BsHeart } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import Button from './button';
<FaStar />


const Product = () => {
  return (
   <div>
     <div className='flex justify-center gap-9 mt-11'>
        <div className='h-[350px] w-[300px] bg-myWhite rounded-md '>
            <div className='h-[270px] bg-searh rounded-md'>
                <div className='flex justify-between'><div className='w-[55px] h-[26px] rounded-md bg-myRed text-sm text-myWhite p-1 text-center ml-3 mt-1'>-40%</div>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full'><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={game} alt = "game" className='ml-11'/>
            </div>
            <div className='mt-2'>
            <h2 className='font-bold text-myBlack'>HAVIT HV-G92 Gamepad</h2>
            <div className='flex gap-2'><h2 className='text-myRed font-bold'>$120</h2> <h2  className='font-bold text-slate-500 line-through'>$160</h2></div>
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
                <div className='flex justify-between'><div className='w-[55px] h-[26px] rounded-md bg-myRed text-sm text-myWhite p-1 text-center ml-3 mt-1'>-35%</div>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full'><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={keyboard} alt = "keyboard" className='ml-11'/>
                <br />
                <br />
                <button className='bg-myBlack w-[300px] h-[41px] rounded-md text-myWhite'>Add To Cart</button>
            </div>
            <div className='mt-2'>
            <h2 className='font-bold text-myBlack'>AK-900 Wired Keyboard</h2>
            <div className='flex gap-2'><h2 className='text-myRed font-bold'>$960</h2> <h2  className='font-bold text-slate-500 line-through'>$1160</h2></div>
            <div className='mt-3'>
                <div className='flex text-yellow-600 gap-2'>
               <div className='flex'> <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className='text-slate-500'/></div>
                <h2  className='font-bold text-slate-500'>(75)</h2>
                </div>
            </div>
            </div>
        </div>
        {/* 3 */}
        <div className='h-[350px] w-[300px] bg-myWhite rounded-md '>
            <div className='h-[270px] bg-searh rounded-md'>
                <div className='flex justify-between'><div className='w-[55px] h-[26px] rounded-md bg-myRed text-sm text-myWhite p-1 text-center ml-3 mt-1'>-30%</div>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full'><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={tv} alt = "tv" className='ml-11'/>
            </div>
            <div className='mt-2'>
            <h2 className='font-bold text-myBlack'>IPS LCD Gaming Monitor</h2>
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
                <div className='flex justify-between'><div className='w-[55px] h-[26px] rounded-md bg-myRed text-sm text-myWhite p-1 text-center ml-3 mt-1'>-25%</div>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full'><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={chair} alt = "chair" className='ml-11'/>
            </div>
            <div className='mt-2'>
            <h2 className='font-bold text-myBlack'>S-Series Comfort Chair </h2>
            <div className='flex gap-2'><h2 className='text-myRed font-bold'>$375</h2> <h2  className='font-bold text-slate-500 line-through'>$400</h2></div>
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
    <Button/>
   </div>
    
    
  )
}

export default Product