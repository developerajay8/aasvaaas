import Image from 'next/image'
import React from 'react'
import Solvings from "../../../public/image (3).png"
import Solvings2 from "../../../public/image (4).png"
import Solvings3 from "../../../public/image (5).png"
import Solvings4 from "../../../public/image 2 (5).png"

export default function Solving() {
  return (
    <div style={{
      backgroundImage: 'url("/Banner BG.png")',
    }}    className=' w-full bg-center bg-cover '>
      <div className="max-w-[1240px] mx-auto py-[48px] sm:py-[80px] lg:px-[0px] px-[16px]">
        <div className="font-[400]">
        <h1 className='text-[#FFFF00] text-[40px] md:text-[60px] sm:leading-[76px] leading-[40px]'>Problems We Solve</h1>
        <h5 className='text-[#F6F6F6] text-[23px] '>The Gap We’re Closing</h5>
        </div>

        <div className="mt-[32px] sm:mt-[48px] grid grid-cols-1 sm:grid-cols-2 gap-[21px] ">
            <div className="col-span-1 bg-[#999900] p-4 flex items-center gap-4">
                <Image src={Solvings} alt='' className='flex-shrink-0'/>
                <h5 className='text-[#E6E6E6] text-[23px] font-[400]'>Western-trained models dominate global AI</h5>
            </div>
            <div className="col-span-1 bg-[#999900] p-4 flex items-center gap-4">
                <Image src={Solvings2} alt='' className='flex-shrink-0'/>
                <h5 className='text-[#E6E6E6] text-[23px] font-[400]'>No local datasets for law, governance, heritage</h5>
            </div>
            <div className="col-span-1 bg-[#999900] p-4 flex items-center gap-4">
                <Image src={Solvings3} alt='' className='flex-shrink-0' />
                <h5 className='text-[#E6E6E6] text-[23px] font-[400]'>Enterprises need vertical AI, not generic chatbots</h5>
            </div>
            <div className="col-span-1 bg-[#999900] p-4 flex items-center gap-4">
                <Image src={Solvings4} alt='' className='flex-shrink-0'/>
                <h5 className='text-[#E6E6E6] text-[23px] font-[400]'>India is one of the largest consumers of AI, yet most of our data is stored outside the country.</h5>
            </div>
        </div>
      </div>
    </div>
  )
}
