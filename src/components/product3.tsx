import React from 'react';
import Image from 'next/image';
import box from "../../public/images/box.png";
import camera from "../../public/images/camera.png";
import laptop from "../../public/images/laptop.png";
import cream from "../../public/images/cream.png";
import car from "../../public/images/car.png";
import shoes from "../../public/images/shoes.png";
import game2 from "../../public/images/game2.png";
import jaket2 from "../../public/images/jaket2.png";

import { BsHeart } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import Button from './button';
<FaStar />


const Product3 = () => {
  return (
   <div>
     <div className='flex justify-center gap-9 mt-11'>
        <div className='h-[350px] w-[300px] bg-myWhite rounded-md '>
            <div className='h-[270px] bg-searh rounded-md'>
                <div className='flex justify-end'>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full'><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={box} alt = "game" className='ml-11'/>
            </div>
            <div className='mt-2'>
            <h2 className='font-bold text-myBlack'>Breed Dry Dog Food</h2>
            <div className='flex gap-2'><h2 className='text-myRed font-bold'>$100</h2> <div className=''>
                <div className='flex text-yellow-600 gap-2 '>
               <div className='flex'> <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className='text-slate-500'/>
                <FaStar className='text-slate-500'/></div>
                <h2  className='font-bold text-slate-500'>(35)</h2>
                </div>
            </div></div>
           
            </div>
        </div>
        {/* //2 */}
        <div className='h-[350px] w-[300px] bg-myWhite rounded-md '>
            <div className='h-[270px] bg-searh rounded-md'>
                <div className='flex justify-end'>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full'><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={camera} alt = "camera" className='ml-11 '/>
                <button className='bg-myBlack w-[300px] h-[41px] rounded-md text-myWhite'>Add To Cart</button>
            </div>
            <div className='mt-8'>
            <h2 className='font-bold text-myBlack'>CANON EOS DSLR Camera</h2>
            <div className='flex gap-2'><h2 className='text-myRed font-bold'>$360</h2><div className=''>
                <div className='flex text-yellow-600 gap-2 '>
               <div className='flex'> <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className='text-slate-500'/></div>
                <h2  className='font-bold text-slate-500'>(95)</h2>
                </div>
            </div></div>
            
            </div>
        </div>
        {/* 3 */}
        <div className='h-[350px] w-[300px] bg-myWhite rounded-md '>
            <div className='h-[270px] bg-searh rounded-md'>
                <div className='flex justify-end'>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full'><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={laptop} alt = "tv" className='ml-11'/>
            </div>
            <div className='mt-2'>
            <h2 className='font-bold text-myBlack'>ASUS FHD Gaming Laptop</h2>
            <div className='flex gap-2'><h2 className='text-myRed font-bold'>$700</h2><div className=''>
                <div className='flex text-yellow-600 gap-2 '>
               <div className='flex'> <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /></div>
                <h2  className='font-bold text-slate-500'>(325)</h2>
                </div>
            </div></div>

            </div>
        </div>
        {/* 4 */}
        <div className='h-[350px] w-[300px] bg-myWhite rounded-md '>
            <div className='h-[270px] bg-searh rounded-md'>
                <div className='flex justify-end'>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full'><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={cream} alt = "chair" className='w-[172px] h-[159] ml-11'/>
            </div>
            <div className='mt-2'>
            <h2 className='font-bold text-myBlack'>Curology Product Set  </h2>
            <div className='flex gap-2'><h2 className='text-myRed font-bold'>$500</h2> <div className=''>
                <div className='flex text-yellow-600 gap-2 '>
               <div className='flex'> <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className='text-slate-500'/></div>
                <h2  className='font-bold text-slate-500'>(145)</h2>
                </div>
            </div></div>
           
            </div>
        </div>
    </div>
    <div className='flex justify-center gap-9 mt-11'>
        <div className='h-[350px] w-[300px] bg-myWhite rounded-md '>
            <div className='h-[270px] bg-searh rounded-md'>
                <div className='flex justify-between'><div className='w-[55px] h-[26px] rounded-md bg-myGreen text-sm text-myWhite p-1 text-center ml-3 mt-1'>NEW</div>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full'><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={car} alt = "game" className='ml-11'/>
            </div>
            <div className='mt-2'>
            <h2 className='font-bold text-myBlack'>Kids Electric Car</h2>
            <div className='flex gap-2'><h2 className='text-myRed font-bold'>$960</h2><div className=''>
                <div className='flex text-yellow-600 gap-2 '>
               <div className='flex'> <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /></div>
                <h2  className='font-bold text-slate-500'>(65)</h2>
                </div>
            </div></div>
           
            </div>
        </div>
        {/* //2 */}
        <div className='h-[350px] w-[300px] bg-myWhite rounded-md '>
            <div className='h-[270px] bg-searh rounded-md'>
                <div className='flex justify-end'>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full'><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={shoes} alt = "keyboard" className='ml-11'/>
            </div>
            <div className='mt-2'>
            <h2 className='font-bold text-myBlack'>Jr. Zoom Soccer Cleats</h2>
            <div className='flex gap-2'><h2 className='text-myRed font-bold'>$1160</h2> <div className=''>
                <div className='flex text-yellow-600 gap-2 '>
               <div className='flex'> <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /></div>
                <h2  className='font-bold text-slate-500'>(35)</h2>
                </div>
            </div></div>
          
            </div>
        </div>
        {/* 3 */}
        <div className='h-[350px] w-[300px] bg-myWhite rounded-md '>
            <div className='h-[270px] bg-searh rounded-md'>
                <div className='flex justify-between'><div className='w-[55px] h-[26px] rounded-md bg-myGreen text-sm text-myWhite p-1 text-center ml-3 mt-1'>NEW</div>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full'><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={game2} alt = "tv" className='ml-11'/>
            </div>
            <div className='mt-2'>
            <h2 className='font-bold text-myBlack'>GP11 Shooter USB Gamepad</h2>
            <div className='flex gap-2'><h2 className='text-myRed font-bold'>$660</h2> <div className=''>
                <div className='flex text-yellow-600 gap-2 '>
               <div className='flex'> <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /></div>
                <h2  className='font-bold text-slate-500'>(55)</h2>
                </div>
            </div></div>
           
            </div>
        </div>
        {/* 4 */}
        <div className='h-[350px] w-[300px] bg-myWhite rounded-md '>
            <div className='h-[270px] bg-searh rounded-md'>
                <div className='flex justify-end'>
                <div className='mr-4'><div className='w-[34px] h-[34px] rounded-full'><BsHeart className='text-myBlack font-extrabold text-3xl mt-2'/></div>
                <div className='w-[34px] h-[34px] rounded-full'><IoEyeOutline className='text-myBlack font-extrabold text-3xl mt-2'/></div></div>
                </div>
                <Image src={jaket2} alt = "chair" className='ml-11'/>
            </div>
            <div className='mt-2'>
            <h2 className='font-bold text-myBlack'>Quilted Satin Jacket </h2>
            <div className='flex gap-2'><h2 className='text-myRed font-bold'>$660</h2><div className=''>
                <div className='flex text-yellow-600 gap-2 '>
               <div className='flex'> <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /></div>
                <h2  className='font-bold text-slate-500'>(65)</h2>
                </div>
            </div></div>
           
            </div>
        </div>
    </div>
    <Button/>
   </div>
    
    
  )
}

export default Product3