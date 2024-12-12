import React from 'react';
import Image from 'next/image';
import speaker2 from "../../public/images/speaker2.png"
 

const Categories2 = () => {
     return (
      <div>
        <div className='flex justify-center'>
           <div className='bg-myBlack w-[1400px] h-[500] mt-28 flex items-center justify-around'>
         <div className='flex flex-col gap-9'>
         <div>
         <h1 className='text-myGreen text-xl font-bold'> Categories</h1>
         </div>
         <div>
         <h1 className='text-myWhite text-6xl'>Enhance Your <br /> Music Experience</h1>
         </div>
         <div className='flex gap-4'>
          <div className='h-[64px] w-[64px] rounded-full bg-myWhite text-center font-extrabold text-sm'>
            23 <br /> Hours
          </div>
          <div className='h-[64px] w-[64px] rounded-full bg-myWhite text-center font-extrabold text-sm'>
            05 <br /> Days
          </div>
          <div className='h-[64px] w-[64px] rounded-full bg-myWhite text-center font-extrabold text-sm'>
            59 <br /> Minutes
          </div>
          <div className='h-[64px] w-[64px] rounded-full bg-myWhite text-center font-extrabold text-sm'>
            35 <br /> Seconds
          </div>
         </div>
         <div>
         <button className='h-[56px] w-[159px] bg-myGreen hover:bg-red-400 font-semibold rounded-md text-myWhite  text-center mr-6'>Buy Now!</button>
         </div>
         </div>
         <div><Image src = {speaker2} alt='speaker'className='shadow-md'/></div>

      </div>
      </div>
      </div>


     )
}

export default Categories2