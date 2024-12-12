import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import game from "../../../public/images/game.png";
import tv from "../../../public/images/tv.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";



const Cart = () => {
  return (
    <div>
                <p className='mt-28 ml-44'> <span className='text-slate-500'> <Link href={"/"}>Home</Link> </span>  /  Cart</p>
                <div className=' flex flex-col justify-around items-center gap-16 mt-20'>
                    <div className='bg-myWhite h-[72px] w-[1170px] flex justify-around items-center'>
                        <h2>Product</h2>
                        <h2>Price</h2>
                        <h2>Quantity</h2>
                        <h2>Subtotal</h2>
                    </div>
                    <div className='bg-myWhite h-[72px] w-[1170px] flex justify-around items-center'>
                    <div className='flex items-center gap-2'>                <Image src={tv} alt = "game" className='h-[42px] w-[48px]'/>    <h2>LCD Monitor</h2>
                    </div>                         <h2>$650</h2>
                    <div className='h-[44px] w-[72px] border-[1px] border-slate-500 rounded-md flex justify-center items-center gap-2'>
                                <div>01</div>
                                <div>
                                <RiArrowDropUpLine className='text-2xl'/>
                                  <RiArrowDropDownLine className='text-2xl'/>
                               </div>
                              </div>                        <h2>$650</h2>
                    </div>
                    <div className='bg-myWhite h-[72px] w-[1170px] flex justify-around items-center'>
<div className='flex items-center gap-2'>                <Image src={game} alt = "game" className='h-[42px] w-[48px]'/>    <h2>H1 Gamepad</h2>
</div>                        <h2>$650</h2>
                              <div className='h-[44px] w-[72px] border-[1px] border-slate-500 rounded-md flex justify-center items-center gap-2'>
                                <div>02</div>
                                <div>
                                <RiArrowDropUpLine className='text-2xl'/>
                                  <RiArrowDropDownLine className='text-2xl'/>
                               </div>
                              </div>
                        <h2>$1100</h2>
                    </div>
                    <div className='bg-myWhite h-[56px] w-[1170px] flex justify-between'>
                    <button className='h-[56px] w-[218px] font-semibold rounded-md text-myBlack  text-center border-[1px] border-slate-500'>Return To Shop</button>
                    <button className='h-[56px] w-[218px] font-semibold rounded-md text-myBlack  text-center border-[1px] border-slate-500'>Update Cart</button>

                    </div>

                </div>
                <div className='flex justify-center  mt-16 mb-32'>
                <div className='bg-white h-[334px] w-[1170px] flex justify-between '>
                  <div>
                  <button className='h-[56px] w-[300px] font-semibold rounded-md text-slate-400 border-[1px] border-myBlack '>Coupon Code</button>
                  <button className='bg-myRed h-[56px] w-[211px] font-semibold rounded-md text-myWhite ml-4'>Apply Coupon</button>
                  </div>
                  <div className='h-[334px] w-[470px]  rounded-md  border-[1px] border-myBlack'>
                    <div className='ml-6 mt-1'>
                      <h1 className='text-2xl font-semibold'>Cart Total</h1>
                      <br />
                      <div className='flex justify-between h-[24px] w-[422px]'><h2 className='text-1xl'>Subtotal:</h2>
                      <h2 className='text-1xl'>$1750</h2></div>
                      <br />
                      <hr className='w-[422px]'/>
                      <br />
                      <div className='flex justify-between h-[24px] w-[422px]'><h2 className='text-1xl'>Shipping:</h2>
                      <h2 className='text-1xl'>Free</h2></div>
                      <br />
                      <hr className='w-[422px]'/>
                      <br />
                      <div className='flex justify-between h-[24px] w-[422px]'><h2 className='text-1xl'>Total:</h2>
                      <h2 className='text-1xl'>$1750</h2></div>
                      <br />
                      <hr className='w-[422px]'/>

                    </div>
                    <div className='flex justify-center'>                    <button className='bg-myRed h-[56px] w-[260px] font-semibold rounded-md text-red mt-4'>Procees checkout</button>
                    </div>
                    
                  </div>

                </div>
                </div>
                
    </div>
  )
}

export default Cart