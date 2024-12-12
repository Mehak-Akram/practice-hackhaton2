import React from 'react';
import { VscSend } from "react-icons/vsc";
import Image from 'next/image';
import Qrcode from "../../public/images/Qrcode.png"
import playstore from "../../public/images/playstore.png"
import appstore from "../../public/images/appstore.png";
import { BiLogoFacebook } from "react-icons/bi";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";


const Footer = () => {
  return (
    <div >
        <div className='bg-black h-[440px] flex justify-center items-center'>
            <div className=' w-[1400px] h-[236px] flex justify-between'>
                <div>
                    <h1 className='text-xl font-bold text-myWhite'>Exclusive</h1>
                    <br />
                    <h2 className=' font-semibold text-myWhite'>Subscribe</h2>
                    <br />
                    <p className='text-myWhite'>Get 10% off your first order</p>
                    <button className='bg-myBlack border-[2px] border-myWhite h-[48px] w-[217px] mt-6 '>Enter your email <VscSend className='inline font-bold text-myWhite text-3xl ml-4'/>
</button>
                </div>
                <div className='leading-9'>
                  <h1 className='text-xl font-bold text-myWhite'>Support</h1>
                  <br />
                  <p className='text-myWhite'>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>
                  <p className='text-myWhite'>exclusive@gmail.com</p>
                  <p className='text-myWhite'>+88015-88888-9999</p>
                </div>
                <div className='leading-9'>
                  <h1 className='text-xl font-bold text-myWhite'>Account</h1>
                  <br />
                  <p className='text-myWhite'>My Account</p>
                  <p className='text-myWhite'>Login / Register</p>
                   <p className='text-myWhite'>Cart</p>
                   <p className='text-myWhite'>Wishlist</p>
                    <p className='text-myWhite'>Shop</p>
                </div>
                <div className='leading-9'>
                  <h1 className='text-xl font-bold text-myWhite'>Quick Link</h1>
                  <br />
                  <p className='text-myWhite'>Privacy Policy</p>
                  <p className='text-myWhite'>Terms Of Use</p>
                   <p className='text-myWhite'>FAQ</p>
                   <p className='text-myWhite'>Contact</p>
                </div>
                <div>
                <h1 className='text-xl font-bold text-myWhite'>Download App</h1>
                  <br />
                  <p className='text-slate-600 text-sm'>Save $3 with App New User Only</p>
                  <div className='flex mt-3'>
                  <Image src={Qrcode} alt="Qr scan"/>
                  <div>
                  <Image src={playstore} alt="Qr scan"/>
                  <Image src={appstore} alt="Qr scan" className='mt-2'/>
                  </div>
                  </div>
                  <div className='flex gap-8 mt-3'>
                  <BiLogoFacebook className='text-myWhite text-2xl'/>
                  <CiTwitter className='text-myWhite text-2xl'/>
                  <CiInstagram className='text-myWhite text-2xl'/>
                  <RiLinkedinLine className='text-myWhite text-2xl'/>
                  </div>
                </div>

            </div>
        </div>
        <hr className='border-[0] bg-slate-800'/>
        <div className=' bg-black flex items-center justify-center'><p className='mt-7 mb-7'>© Copyright Rimel 2022. All right reserved</p></div>

    </div>
  )
}

export default Footer