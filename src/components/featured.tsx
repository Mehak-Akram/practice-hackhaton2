import React from 'react'
import Mainfeatures from './main-features'

const Featured = () => {
  return (
    <div>
        <div className='h-[103px]'> <div className='flex items-center gap-2 ml-36 mt-20'>
    <div className='bg-myRed w-[20px] h-[40px] rounded-sm'></div>
    <h1 className='text-myRed text-normal font-bold'>Featured</h1>
    </div>
    <div className='flex justify-between items-end mt-4'>
    <h1 className='text-4xl font-bold ml-32'>New Arrival</h1>
    </div>
    </div>
    <Mainfeatures/>
    </div>
  )
}

export default Featured