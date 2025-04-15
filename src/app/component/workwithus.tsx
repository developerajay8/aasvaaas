import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import work1 from "../../../public/Group 181.png"

export default function Workwithus() {
    return (
        <>
            <div className='bg-[#FFFFFF] py-[48px] sm:py-[80px]'>
                <div className="max-w-[1240px] mx-auto xl:px-0 px-[16px]">
                    <div className="mb-[48px]">
                        <h1 className='text-[#000000] text-[40px] md:text-[60px] font-[400]'>Work With Us</h1>
                        <h5 className='text-[#343434] text-[23px] font-[400]'>Be Part of India’s AI Future</h5>
                    </div>
                    <div className="">
                        <div className="sm:flex items-center justify-between">
                            <h5 className='text-[#1B1B1B] sm:pb-0 pb-[16px] my-auto text-[23px] font-[400] '>Investors & Partners</h5>
                            <div className="text-[16px] max-w-[465px] text-[#343434] font-[400]">We’re open for funding, partnerships, and collaborators. Join us as we scale innovation rooted in India.</div>
                            <button className="group bg-[#FFFF00] sm:mt-0 mt-[32px] cursor-pointer py-[15px] px-[22px] text-[16px] font-[600] text-[#1B1B1B] relative transition-all duration-300">
                                <span className="inline-block transition-all duration-300 group-hover:pr-5">
                                    Learn More
                                </span>
                                <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <FaArrowRightLong className='text-2xl' />
                                </span>
                            </button>
                        </div>
                        <div className="border-1 border-[#9A9A9A] my-6"></div>

                        <div className="sm:flex items-center justify-between">
                            <h5 className='text-[#1B1B1B] my-auto sm:pb-0 pb-[16px]  text-[23px] font-[400] '>Enterprises & Governments</h5>
                            <div className="text-[16px] max-w-[465px] text-[#343434] font-[400]">AI-powered solutions tailored for your needs.</div>
                            <div className="">
                                <button className="group border-1 sm:mt-0 mt-[32px] border-[#1B1B1B] cursor-pointer py-[15px] px-[22px] text-[16px] font-[600] text-[#1B1B1B] relative transition-all duration-300">
                                    <span className="inline-block transition-all duration-300 group-hover:pr-5">
                                        Explore AI Solutions
                                    </span>
                                    <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <FaArrowRightLong className='text-2xl' />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="border-1 border-[#9A9A9A] my-6"></div>

                        <div className="sm:flex items-center justify-between">
                            <h5 className='text-[#1B1B1B] my-auto sm:pb-0 pb-[16px] text-[23px] font-[400] '>Investors & Partners</h5>
                            <div className="text-[16px] max-w-[465px] text-[#343434] font-[400]">Join our cutting-edge AI R&D team.</div>
                            <button className="group border-1 sm:mt-0 mt-[32px] border-[#1B1B1B] cursor-pointer py-[15px] px-[22px] text-[16px] font-[600] text-[#1B1B1B] relative transition-all duration-300">
                                <span className="inline-block transition-all duration-300 group-hover:pr-5">
                                    Careers at Aasvaa
                                </span>
                                <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <FaArrowRightLong className='text-2xl' />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>





            <div className="bg-[#FFFFFF] md:pt-[80px] sm:pb-0 pb-[48px] pt-[48px]">
                <div className="max-w-[1240px] mx-auto xl:px-0 px-[16px] sm:flex justify-between ">
                    <div className="sm:hidden block">
                        <Image src={work1} alt='' />
                    </div>
                    <div className="sm:max-w-[542px]">
                        <div className="">
                            <h1 className='text-[#000000] sm:text-[60px] text-[40px] font-[400]'>Final Thoughts</h1>
                            <span className='text-[#000000] text-[23px] font-[400] italic'>Let’s Build the Future, Together.</span>
                        </div>

                        <div className="pt-4">
                            <p className='text-[#000000] text-[16px] font-[400] '>Aasvaa Innovation Labs is not just an AI company—it’s the future of India’s AI revolution. With a vision to lead AI, GenAI, and Computer Vision, we are building the next era of intelligent systems for governance, defence, law, and society.</p>
                            <button className="group sm:mt-[48px] mt-[32px]  text-[#1B1B1B] bg-[#FFFF00] cursor-pointer py-[15px] px-[22px] text-[16px] font-[600]  relative transition-all duration-300">
                                <span className="inline-block transition-all duration-300 group-hover:pr-5">
                                    Join the Movement
                                </span>
                                <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <FaArrowRightLong className='text-2xl' />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="sm:block hidden">
                        <Image src={work1} alt='' />
                    </div>
                </div>
            </div>

            <section className="bg-black text-white md:py-[80px] py-[48px] relative overflow-hidden">
                {/* Optional background glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 pointer-events-none z-0" />

                <div className="relative z-10 max-w-[1240px] mx-auto xl:px-0 px-[16px] text-center">
                    <h2 className="sm:text-[60px] text-[52px] font-[400] text-[#FFFF00]">2026 Vision</h2>

                    <p className=" text-[23px]  italic font-[400] text-[#E6E6E6]">
                        A unified AI framework that understands India – <span className="font-[400]">law, policy, heritage, and enterprise.</span>
                    </p>

                    <p className="mt-4 text-[16px] text-[#E6E6E6] font-[400] leading-relaxed">
                        Built with strategic partnerships and exclusive datasets. Designed to scale<br />
                        across Southeast Asia, Africa & more.
                    </p>

                    <button className="group border-1 mt-[48px] border-[#F6F6F6] cursor-pointer py-[15px] px-[22px] text-[16px] font-[600] text-[#F6F6F6] relative transition-all duration-300">
                        <span className="inline-block transition-all duration-300 group-hover:pr-5">
                            Read Our 2026 Roadmap
                        </span>
                        <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <FaArrowRightLong className='text-2xl' />
                        </span>
                    </button>
                </div>
            </section>

        </>
    )
}
