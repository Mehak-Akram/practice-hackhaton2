import React from 'react'
import Product2 from './product2'

const Month = () => {
  return (
    <div><div className='h-[103px]'> <div className='flex items-center gap-2 ml-36 mt-20'>
    <div className='bg-myRed w-[20px] h-[40px] rounded-sm'></div>
    <h1 className='text-myRed text-normal font-bold'>This Month</h1>
    </div>
    <div className='flex justify-between items-end mt-4'>
    <h1 className='text-4xl font-bold ml-32'>Best Selling Products</h1>

    <button className='h-[56px] w-[159px] bg-myRed hover:bg-red-400 font-semibold rounded-md text-myWhite  text-center mr-6'>View All</button>
    </div>
    </div>
    <Product2/>
    </div>
  )
}

export default Month