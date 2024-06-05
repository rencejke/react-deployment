import React from 'react'
import { Link } from 'react-router-dom'

const ReceiveUpdates = () => {
  return (
    <div>
        <section className='receiveUpdates mt-12 mb-20'>
          <div className="container">
          <h3 className='text-center md:text-[35px] xs:text-[28px] relative'>Receive Updates</h3>
            <div className="wrapper md:text-center">
              <div className='mt-10 space-y-[70px]'>
              <h5 className='text-[22px] font-extralight'>Get Every Update Abour Our Courses</h5>
              <div>
                <div className='relative'>
                <input type="text" placeholder='Enter Your Email Address' className='md:w-[50%] xs:w-[100%]
                 py-[20px] px-6 md:rounded-2xl rounded-md outline-none placeholder:pl-3 md:placeholder:text-[18px] xs:placeholder:text-[14px]'/>
                 <Link><button className=' btn md:absolute md:left-[960px] xs:left-[210px] md:top-[8px] xs:top-[7px] md:bottom-[8px] xs:bottom-[7px] 
                  md:px-11  md:text-[18px] md:mt-0
                  z-[9999] xs:px-3 md:py-2 md:rounded-2xl xs:text-[16px]
                  w-full mt-5 rounded-md
                  
                  '>Subscribe</button></Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ReceiveUpdates
