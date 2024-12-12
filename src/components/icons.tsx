import React from 'react';
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { LuHeadphones } from "react-icons/lu";
import { TbDeviceGamepad } from "react-icons/tb";


const Icons = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <div className='w-[1400px] h-[145px] mt-24 flex justify-between'>
            <div className='w-[170px] h-[145px] rounded-md border-[2px] border-searh flex  flex-col justify-center items-center hover:bg-myRed hover:text-myWhite'>
            <CiMobile4 className='w-[38px] h-[53px]  font-bold text-9xlxl mt-5'/>
            <br />
            <div> <h2 className='pb-5 text-center'>Phones</h2>
            </div>
            </div>
            {/* 2 */}
            <div className='w-[170px] h-[145px] rounded-md border-[2px] border-searh flex  flex-col justify-center items-center hover:bg-myRed hover:text-myWhite'>
            <HiOutlineComputerDesktop className='w-[38px] h-[53px]  font-bold text-9xlxl mt-5'/>
            <br />
            <div> <h2 className='pb-5 text-center'>Computers</h2>
            </div>
            </div>
            {/* 3 */}
            <div className='w-[170px] h-[145px] rounded-md border-[2px] border-searh flex  flex-col justify-center items-center hover:bg-myRed hover:text-myWhite'>
            <BsSmartwatch className='w-[38px] h-[53px]  font-bold text-9xlxl mt-5'/>
            <br />
            <div> <h2 className='pb-5 text-center'>SmartWatch</h2>
            </div>
            </div>
            {/* 4 */}
            <div className='w-[170px] h-[145px] rounded-md border-[2px] border-searh flex  flex-col justify-center items-center hover:bg-myRed hover:text-myWhite'>
            <CiCamera  className='w-[38px] h-[53px]  font-bold text-9xlxl mt-5'/>
            <br />
            <div> <h2 className='pb-5 text-center'>Camera</h2>
            </div>
            </div>
            {/* 5 */}
            <div className='w-[170px] h-[145px] rounded-md border-[2px] border-searh flex  flex-col justify-center items-center hover:bg-myRed hover:text-myWhite'>
            <LuHeadphones className='w-[38px] h-[53px]  font-bold text-9xlxl mt-5'/>
            <br />
            <div> <h2 className='pb-5 text-center'>HeadPhones</h2>
            </div>
            </div>
            {/* 6 */}
            <div className='w-[170px] h-[145px] rounded-md border-[2px] border-searh flex  flex-col justify-center items-center hover:bg-myRed hover:text-myWhite'>
            <TbDeviceGamepad className='w-[38px] h-[53px]  font-bold text-9xlxl mt-5'/>
            <br />
            <div> <h2 className='pb-5 text-center'>Gaming</h2>
            </div>
            </div>
        </div>
    </div>
    <hr  className='mt-16'/>
    </div>
  )
}

export default Icons