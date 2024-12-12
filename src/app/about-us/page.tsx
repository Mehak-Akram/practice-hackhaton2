import Link from 'next/link'
import React from 'react';
import Image from 'next/image';
import about from "../../../public/images/about.png"
import pic1 from "../../../public/images/pic1.png"
import pic2 from "../../../public/images/pic2.png"
import pic3 from "../../../public/images/pic3.png"
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { CiShop } from "react-icons/ci";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { TbShoppingBag } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import Icons2 from '@/components/icons2';

const About = () => {
  return (
    <div>
              <p className='mt-24 ml-44'> <span className='text-slate-300'> <Link href={"/"}>Home</Link>  </span>  /  About</p>
              <div className='h-[609px] bg-myWhite flex justify-around items-center'>
                <div>
                  <h1 className='text-4xl font-bold text-black'>Our Story</h1>
                  <br />
                  <p className='text-black leading-7 text-sm'>Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data and service solutions, <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br /> millioons customers across the region. </p>
                  <br />
                  <p className='text-black leading-7 text-sm'>Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.</p>
                </div>
                <div>
                  <Image src={about} alt = "about us"/>
                </div>
              </div>
              <div className='flex justify-center'>
              <div className='h-[230px] w-[1170px] bg-myWhite flex justify-between mt-28'>
             <div className=' h-[230px] w-[270px] border-[1px] border-slate-300 hover:bg-myRed'>
                <div className='flex justify-center mt-7'>
                <div className='bg-slate-300 h-[80px] w-[80px] rounded-full flex justify-center items-center'>
                <div className='bg-myBlack h-[58px] w-[58px] rounded-full flex justify-center items-center hover:bg-myWhite'>
                <CiShop className='text-myWhite text-4xl hover:text-myBlack'/>
                </div>
                </div>
                </div>
                <h1 className='font-bold text-myBlack w-[249px] text-center mt-4 hover:text-myBlack'>10.5k </h1>
                <p className='text-myBlack text-sm w-[249px] text-center hover:text-myWhite'>Sallers active our site</p>

            </div>
           <div className=' h-[230px] w-[270px] border-[1px] border-slate-300 hover:bg-myRed'>
                <div className='flex justify-center mt-7'>
                <div className='bg-slate-300 h-[80px] w-[80px] rounded-full flex justify-center items-center'>
                <div className='bg-myBlack h-[58px] w-[58px] rounded-full flex justify-center items-center hover:bg-myWhite'>
                <PiCurrencyCircleDollar className='text-myWhite text-4xl hover:text-myBlack'/>
                </div>
                </div>
                </div>
                <h1 className='font-bold text-myBlack w-[249px] text-center mt-4 hover:text-myWhite'>33k</h1>
                <p className='text-myBlack text-sm w-[249px] text-center hover:text-myWhite'>Mopnthly Produduct Sale</p>

            </div>
            <div className=' h-[230px] w-[270px] border-[1px] border-slate-300 hover:bg-myRed'>
                <div className='flex justify-center mt-7'>
                <div className='bg-slate-300 h-[80px] w-[80px] rounded-full flex justify-center items-center'>
                <div className='bg-myBlack h-[58px] w-[58px] rounded-full flex justify-center items-center hover:bg-myWhite'>
                <TbShoppingBag  className='text-myWhite text-4xl hover:text-myBlack'/>
                </div>
                </div>
                </div>
                <h1 className='font-bold text-myBlack w-[249px] text-center mt-4 hover:text-myWhite'>45.5k</h1>
                <p className='text-myBlack text-sm w-[249px] text-center hover:text-myWhite'>Customer active in our site</p>

            </div>
            <div className=' h-[230px] w-[270px] border-[1px] border-slate-300 hover:bg-myRed'>
                <div className='flex justify-center mt-7'>
                <div className='bg-slate-300 h-[80px] w-[80px] rounded-full flex justify-center items-center'>
                <div className='bg-myBlack h-[58px] w-[58px] rounded-full flex justify-center items-center hover:bg-myWhite '>
                <FaSackDollar className='text-myWhite text-4xl hover:text-myBlack'/>
                </div>
                </div>
                </div>
                <h1 className='font-bold text-myBlack w-[249px] text-center mt-4 hover:text-myWhite'>25k</h1>
                <p className='text-myBlack text-sm w-[249px] text-center hover:text-myWhite'>Anual gross sale in our site</p>

            </div>
              </div>

              </div>
              <div className='flex justify-center mt-28'>
            <div className='w-[1170px] h-[564px] bg-myWhite flex justify-between'>
              <div className='w-[370px] h-[564px] '>
                <div className='h-[430px] bg-searh flex justify-center items-center'>
                <Image src={pic1} alt = "about us"/>
                </div>
                <br />
<h1 className='text-2xl'>Tom Cruise</h1>
<p className='text-sm'>Founder & Chairman</p>
<div className='flex gap-2 mt-3'>
                  <CiTwitter className='text-myBlack text-xl'/>
                  <CiInstagram className='text-myBlack text-xl'/>
                  <RiLinkedinLine className='text-myBlack text-xl'/>
                  </div>              </div>
              <div className='w-[370px] h-[564px] '>
              <div className='h-[430px] bg-searh flex justify-center items-center'>
              <Image src={pic2} alt = "about us"/>
              

              </div>
              <br />
<h1 className='text-2xl'>Emma Watson</h1>
<p className='text-sm'>Managing Director</p>
<div className='flex gap-2 mt-3'>
                  <CiTwitter className='text-myBlack text-xl'/>
                  <CiInstagram className='text-myBlack text-xl'/>
                  <RiLinkedinLine className='text-myBlack text-xl'/>
                  </div> 

              </div>
              <div className='w-[370px] h-[564px] '>
              <div className='h-[430px] bg-searh flex justify-center items-center'>
              <Image src={pic3} alt = "about us"/>
              </div>
              <br />
<h1 className='text-2xl'>Will Smith</h1>
<p className='text-sm'>Product Designer</p>
<div className='flex gap-2 mt-3'>
                  <CiTwitter className='text-myBlack text-xl'/>
                  <CiInstagram className='text-myBlack text-xl'/>
                  <RiLinkedinLine className='text-myBlack text-xl'/>
                  </div> 

              </div>
            </div>
        </div>
        <Icons2/>

    </div>
  )
}

export default About