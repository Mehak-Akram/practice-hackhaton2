import React from 'react';
import { PiPhoneThin } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import Link from 'next/link';

const Contact = () => {
  return (
    <div>
        <p className='mt-28 ml-44'> <span className='text-slate-500'> <Link href={"/"}>Home</Link>  </span>  /  Cantact</p>

        <div className=' flex justify-center gap-20 mt-28 mb-32'>

<div className='w-[340px] h-[457px] bg-white'>
<div className=' ml-8 mt-8'>
                <div className='flex items-center gap-4'>
                    <div className='w-[40px] h-[40px] bg-myRed rounded-full flex justify-center items-center'>
                    <PiPhoneThin className=' text-myWhite text-3xl'/>
                    </div>
                    <h1 className='font-semibold text-2xl'> Call To Us</h1>
                </div>
                <div>
                    <br />
                    <h2 className=''>We are available 24/7, 7 days a week.</h2>
                    <br />
                    <h2>Phone: +8801611112222</h2>
                </div>
                <br />
                <br />
                <hr className='w-[270px]'/>
                <div>
                    <br />
                <div className='flex items-center gap-4'>
                    <div className='w-[40px] h-[40px] bg-myRed rounded-full flex justify-center items-center'>
                    <AiOutlineMail className=' text-myWhite text-3xl'/>
                    </div>
                    <h1 className='font-semibold text-2xl'> Write To US</h1>
                </div>
                </div>
                <div>
                    <br />
                    <h2 className=''>Fill out our form and we will contact <br /> you within 24 hours.</h2>
                    <br />
                    <h2>Emails: customer@exclusive.com</h2>
                    <br />
                    <h2>Emails: support@exclusive.com</h2>
                </div>
            </div>
</div>
            <div className='w-[800px] h-[457px] bg-white'>
            <form className='flex justify-around mt-11'> <div>
                <input
                    type="text"
                    name="Name"
                    placeholder="Your Name *"
                    required
                   className='w-[234px] h-[50px] bg-searh rounded-md'/>
                </div>
                 <div>
                 <input
                    type="text"
                    name="Name"
                    placeholder="Your Email *"
                    required
                    className='w-[234px] h-[50px] bg-searh rounded-md'/>
                 </div>
                 <div>
                 <input
                    type="text"
                    name="Name"
                    placeholder="Your Phone *"
                    required
                    className='w-[234px] h-[50px] bg-searh rounded-md'/>
                 </div>
                  </form>
                 <div className='flex justify-center'>
                 <textarea
                    name="message"
                    placeholder="Your Message"
                  className='w-[757px] h-[207px] bg-searh rounded-md mt-11'></textarea>
                 </div>  
<div className='flex justify-end'>
<button className='h-[56px] w-[234px] bg-myRed hover:bg-red-400 font-semibold rounded-md text-myWhite mt-11 mr-5 text-center'>Send Massage</button>
</div>              
            </div>
            </div>
        </div>


  )
}

export default Contact