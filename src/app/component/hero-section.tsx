import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Herosection() {
    return (
        <div className='bg-[#343434] relative h-[90vh]'>
            <div className="max-w-[1240px] mx-auto">
                <div className="">

                </div>
                <div className="max-w-[548px] absolute bottom-[86px] sm:block hidden xl:px-0 px-[16px]">
                    <h1 className='text-[#F6F6F6] text-[48px] pb-2 font-[400]'><span className='text-[#FFFF00]'>AI</span> That Works.  <span className='text-[#FFFF00]'>Innovation</span> That Leads.</h1>
                    <p className='text-[#E6E6E6] text-[16px] font-[400] pb-8'>From legal intelligence to cultural preservation — we’re building India’s very own Gen AI ecosystem.</p>
                    <div className="flex gap-8">
                        <button className="group bg-[#FFFF00] cursor-pointer py-[15px] px-[22px] text-[16px] font-[600] text-[#1B1B1B] relative transition-all duration-300">
                            <span className="inline-block transition-all duration-300 group-hover:pr-5">
                                Join the Movement
                            </span>
                            <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <FaArrowRightLong className='text-2xl'/>
                            </span>
                        </button>

                        <button className="group border-2 text-[#F6F6F6] border-[#F6F6F6] cursor-pointer py-[15px] px-[22px] text-[16px] font-[600]  relative transition-all duration-300">
                            <span className="inline-block transition-all duration-300 group-hover:pr-5">
                            Explore Our AI Products
                            </span>
                            <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <FaArrowRightLong className='text-2xl'/>
                            </span>
                        </button>

                        {/* <button className='border-2 cursor-pointer border-[#F6F6F6] py-[15px] px-[22px] text-[#F6F6F6] '>Exolore Our AI Products</button> */}
                    </div>
                </div>
                <div className="max-w-[548px] absolute bottom-[86px] sm:hidden block xl:px-0 px-[16px]">
                    <h1 className='text-[#F6F6F6] sm:text-[48px] text-[40px] sm:leading-0 leading-[52px] pb-2 font-[400]'><span className='text-[#FFFF00]'>AI</span> That Works.  <span className='text-[#FFFF00]'>Innovation</span> That Leads.</h1>
                    <p className='text-[#E6E6E6] text-[16px] font-[400] pb-8'>From legal intelligence to cultural preservation — we’re building India’s very own Gen AI ecosystem.</p>
                    <div className="flex-wrap flex gap-8">
                        <button className="group bg-[#FFFF00] cursor-pointer py-[15px] px-[22px] text-[16px] font-[600] text-[#1B1B1B] relative transition-all duration-300">
                            <span className="inline-block transition-all duration-300 group-hover:pr-5">
                                Join the Movement
                            </span>
                            <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <FaArrowRightLong className='text-2xl' />
                            </span>
                        </button>

                        <button className="group border-2 border-[#F6F6F6] cursor-pointer py-[15px] px-[22px] text-[16px] font-[600] text-[#F6F6F6] relative transition-all duration-300">
                            <span className="inline-block transition-all duration-300 group-hover:pr-5">
                            Explore Our AI Products
                            </span>
                            <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <FaArrowRightLong className='text-2xl' />
                            </span>
                        </button>

                        {/* <button className="group border-2 text-[#F6F6F6] border-[#F6F6F6] cursor-pointer py-[15px] px-[22px] text-[16px] font-[600]  relative transition-all duration-300">
                            <span className="inline-block transition-all duration-300 group-hover:pr-5">
                            Explore Our AI Products
                            </span>
                            <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <FaArrowRightLong className='text-2xl' />
                            </span>
                        </button> */}

                        {/* <button className='border-2 cursor-pointer border-[#F6F6F6] py-[15px] px-[22px] text-[#F6F6F6] '>Exolore Our AI Products</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
