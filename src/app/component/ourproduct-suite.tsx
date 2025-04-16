"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CircleIcon, Star, CircleDotIcon } from "lucide-react";
import Image from "next/image";
import Frame from "../../../public/Frame 128.png"
import Frame2 from "../../../public/Frame 129.png"
import Frame3 from "../../../public/Frame 133.png"
import Frame4 from "../../../public/Frame 134.png"
import Frame5 from "../../../public/Frame 135.png"
import { FaArrowRightLong } from "react-icons/fa6";


const tabs = [
    {
        id: "gen ai",
        label: "Gen AI",
        content: [
            {
                title: "TensorFlow",
                icon: CircleIcon,
                image: "/assets/Frame 88.png",
                description: "Open-source machine learning framework developed by Google"
            },
            {
                title: "Keras",
                icon: CircleIcon,
                image: "/assets/Frame 144.png",
                description: "Deep learning API written in Python, runs on top of TensorFlow"
            },
            {
                title: "Scikit-learn",
                icon: CircleIcon,
                image: "/assets/Frame 145.png",
                description: "Machine learning library for Python built on NumPy, SciPy, and matplotlib"
            }
        ]
    },
    {
        id: "vision ai",
        label: "Vision AI",
        content: [
            {
                title: "PyTorch",
                icon: CircleIcon,
                image: "/assets/Frame 145.png",
                description: "Open source machine learning library developed by Facebook"
            },
            {
                title: "AWS Lambda",
                icon: CircleIcon,
                image: "/assets/Frame 144.png",
                description: "Serverless compute service by Amazon"
            },
            {
                title: "Google Cloud Functions",
                icon: CircleIcon,
                image: "/assets/Frame 88.png",
                description: "Event-driven serverless compute platform"
            }
        ]
    }
];


export default function Ourproductsuite() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [indicatorWidth, setIndicatorWidth] = useState(0);
    const [indicatorOffset, setIndicatorOffset] = useState(0);

    const handleTabClick = (tabId: string, event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget;
        const buttonRect = button.getBoundingClientRect();
        setIndicatorWidth(buttonRect.width);
        setIndicatorOffset(button.offsetLeft);
        setActiveTab(tabId);
    };

    const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

    return (
        <div className=" bg-[#FFFFFF] ms:py-[80px] py-[48px] overflow-auto  ">
            <div className="max-w-[1240px] mx-auto xl:px-0 px-[16px] ">
                <h1 className="sm:text-[60px] text-[40px] text-[#000000] font-[400] leading-[50px] sm:leading-[75px] mb-6">Our Product Suite</h1>

                <div className="">
                    <div className="relative">
                        <div className="overflow-x-auto overflow-hidden">
                            <div className="flex whitespace-nowrap space-x-6 sm:space-x-8  mb-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={(e) => handleTabClick(tab.id, e)}
                                        className={`text-[#343434]  text-[18px] sm:text-[23px] font-[400] whitespace-nowrap ${activeTab === tab.id ? "text-black" : "text-muted-foreground"
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>


                        <div className="h-[2px] sm:w-full relative overflow-auto">
                            <motion.div
                                className="absolute h-[2px] border-2 border-[#FFFF00] "
                                animate={{
                                    width: indicatorWidth,
                                    x: indicatorOffset,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                }}
                            />
                        </div>
                    </div>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sm:mt-12 mt-6 flex  sm:gap-5 gap-2 "
                    >



                        <div className="">
                            <div className="sm:flex ">
                                <div className="sm:w-[30%] gap-6 sm:mb-0  w-[100%] sm:flex-none flex items-center sm:border-r-[0.4px] sm:border-[#9A9A9A] sm:mr-[80px]">
                                    <div className="sm:text-[40px] text-[28px] font-[400] text-[#343434]">GoJuris.ai</div>
                                    <div className="sm:text-[40px] text-[28px] font-[400] sm:pt-[24px] text-[#9A9A9A]">AasvaaEra</div>
                                    <div className="border[2px] border-b sm:hidden block border-[#9A9A9A] py-[32px]"></div>
                                </div>

                                <div className="sm:w-[70%] w-[100%] "> 
                                    <div className="grid grid-cols-2 gap-5">
                                        {/* Left Column - Logo and Title */}
                                        <Image src={Frame} alt="" />

                                        {/* Right Column - What it does */}
                                        <Image src={Frame2} alt="" />
                                    </div>

                                    <div className="mt-8">
                                        <h2 className="text-[23px] text-[#343434] font-[400] mb-6">Key Features</h2>
                                        <div className="grid grid-cols-3 gap-5">
                                            <Image src={Frame3} alt="" />
                                            <Image src={Frame4} alt="" />
                                            <Image src={Frame5} alt="" />

                                        </div>
                                    </div>

                                    <button className="mt-[24px] group bg-[#FFFF00] cursor-pointer py-[15px] px-[22px] text-[16px] font-[600] text-[#1B1B1B] relative transition-all duration-300">
                                        <span className="inline-block transition-all duration-300 group-hover:pr-5">
                                            Explore
                                        </span>
                                        <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <FaArrowRightLong className='text-2xl' />
                                        </span>
                                    </button>
                                </div>
                            </div>

                        </div>




                    </motion.div>


                </div>
            </div>
        </div>
    );
}