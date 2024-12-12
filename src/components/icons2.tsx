import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdHeadsetMic } from "react-icons/md";
import { MdSecurity } from "react-icons/md";


const Icons2 = () => {
  return (
    <div className='mt-24 mb-20 flex justify-center'>
        <div className=' h-[161px] w-[934px] flex justify-around'>
            <div className=' h-[161px] w-[249px]'>
                <div className='flex justify-center'>
                <div className='bg-slate-300 h-[80px] w-[80px] rounded-full flex justify-center items-center'>
                <div className='bg-myBlack h-[58px] w-[58px] rounded-full flex justify-center items-center'>
                <TbTruckDelivery className='text-myWhite text-4xl'/>
                </div>
                </div>
                </div>
                <h1 className='font-bold text-myBlack w-[249px] text-center mt-4'>FREE AND FAST DELIVERY</h1>
                <p className='text-myBlack text-sm w-[249px] text-center'>Free delivery for all orders over $140</p>

            </div>
            <div className=' h-[161px] w-[249px]'>
                <div className='flex justify-center'>
                <div className='bg-slate-300 h-[80px] w-[80px] rounded-full flex justify-center items-center'>
                <div className='bg-myBlack h-[58px] w-[58px] rounded-full flex justify-center items-center'>
                <MdHeadsetMic className='text-myWhite text-4xl'/>
                </div>
                </div>
                </div>
                <h1 className='font-bold text-myBlack w-[249px] text-center mt-4'>24/7 CUSTOMER SERVICE</h1>
                <p className='text-myBlack text-sm w-[249px] text-center'>Friendly 24/7 customer support</p>

            </div>
            <div className=' h-[161px] w-[249px]'>
                <div className='flex justify-center'>
                <div className='bg-slate-300 h-[80px] w-[80px] rounded-full flex justify-center items-center'>
                <div className='bg-myBlack h-[58px] w-[58px] rounded-full flex justify-center items-center'>
                <MdSecurity className='text-myWhite text-4xl'/>
                </div>
                </div>
                </div>
                <h1 className='font-bold text-myBlack w-[249px] text-center mt-4'>MONEY BACK GUARANTEE</h1>
                <p className='text-myBlack text-sm w-[249px] text-center'>We reurn money within 30 days</p>

            </div>
        </div>
    </div>
  )
}

export default Icons2