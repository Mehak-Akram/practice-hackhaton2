import React from 'react';
import Image from 'next/image';
import hero from "../../public/images/hero.png";
import pic from "../../public/images/pic.png"
import speaker3 from "../../public/images/speaker3.png"
import perfume from "../../public/images/perfume.png"



const Mainfeatures = () => {
  return (
    <div className='flex justify-center'>
        <div className=' w-[1400px] h-[600px] mt-12 flex justify-between'>
            <div className='bg-black h-[600] w-[600] rounded-md flex justify-center'>

                <Image src={hero} alt ="gaming"/>

            </div>
            <div className='flex flex-col justify-between'>
            <div className='bg-black h-[284px] w-[650] rounded-md'>
                <div className='flex'>
                <div className='mt-28 ml-3'>
                <h2 className='text-myWhite font-bold text-3xl'>Women’s Collections</h2>
                <p className='text-myWhite font-normal 2xl'>Featured woman collections that <br />give you another vibe.</p>
                <h1 className='underline text-1xl text-myWhite'>Shop Now</h1>
                </div>
                <Image src={pic} alt = 'pic' className='mr-3 rounded-md'/>
                </div>
                                </div>

                <div className='flex gap-11'>
                    <div className='bg-black h-[284px] w-[300px] rounded-md flex justify-center items-center'>
                    <Image src={speaker3} alt = 'pic'/>


                    </div>
                    <div className='bg-black h-[284px] w-[300px] rounded-md flex justify-center items-center'>
                    <Image src={perfume} alt = 'perfume'/>

                    </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Mainfeatures