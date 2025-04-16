"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CircleIcon, CircleDotIcon } from "lucide-react";
import Image from "next/image";


const tabs = [
    {
        id: "incorporated",
        label: "incorporated",
        date: "Jan 2024",
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
        id: "launch",
        label: "launch",
        date: "April 2024",
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
                image: "/assets/Frame 145.png",
                description: "Serverless compute service by Amazon"
            },
            {
                title: "Google Cloud Functions",
                icon: CircleIcon,
                image: "/assets/Frame 145.png",
                description: "Event-driven serverless compute platform"
            }
        ]
    },
    {
        id: "Vision AI (Lumex)",
        label: "Vision AI (Lumex)",
        date: "June 2024",
        content: [
            {
                title: "OpenCV",
                icon: CircleDotIcon,
                image: "/assets/Frame 145.png",
                description: "Open source computer vision and machine learning library"
            },
            {
                title: "GPT-4",
                icon: CircleDotIcon,
                image: "/assets/Frame 145.png",
                description: "Large multimodal model developed by OpenAI"
            },
            {
                title: "GPT-3",
                icon: CircleDotIcon,
                image: "/assets/Frame 145.png",
                description: "Large multimodal model developed by OpenAI"
            }
        ]
    },
    {
        id: "legal assistant development",
        label: "legal assistant development",
        date: "August 2024",
        content: [
            {
                title: "OpenCV",
                icon: CircleDotIcon,
                image: "/assets/Frame 145.png",
                description: "Open source computer vision and machine learning library"
            },
            {
                title: "GPT-4",
                icon: CircleDotIcon,
                image: "/assets/Frame 145.png",
                description: "Large multimodal model developed by OpenAI"
            },
            {
                title: "GPT-3",
                icon: CircleDotIcon,
                image: "/assets/Frame 145.png",
                description: "Large multimodal model developed by OpenAI"
            }
        ]
    },
    {
        id: "GoJuris.ai goes live.",
        label: "GoJuris.ai goes live.",
        date: "March 2025",
        content: [
            {
                title: "OpenCV",
                icon: CircleDotIcon,
                image: "/assets/Frame 145.png",
                description: "Open source computer vision and machine learning library"
            },
            {
                title: "GPT-4",
                icon: CircleDotIcon,
                image: "/assets/Frame 145.png",
                description: "Large multimodal model developed by OpenAI"
            },
            {
                title: "GPT-3",
                icon: CircleDotIcon,
                image: "/assets/Frame 145.png",
                description: "Large multimodal model developed by OpenAI"
            }
        ]
    },
    {
        id: "Dashboard",
        label: "Dashboard",
        date: "June 2025",
        content: [
            {
                title: "OpenCV",
                icon: CircleDotIcon,
                image: "/assets/Frame 145.png",
                description: "Open source computer vision and machine learning library"
            },
            {
                title: "GPT-4",
                icon: CircleDotIcon,
                image: "/assets/Frame 145.png",
                description: "Large multimodal model developed by OpenAI"
            },
            {
                title: "GPT-3",
                icon: CircleDotIcon,
                image: "/assets/Frame 145.png",
                description: "Large multimodal model developed by OpenAI"
            }
        ]
    }
];



export default function Ourjourney() {
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
                <h1 className="sm:text-[60px] text-[40px] text-[#000000] font-[400] ">Our Journey</h1>
                <h5 className="text-[23px] text-[#343434] font-[400] ">From Startup to AI Powerhouse</h5>
                <div className="pt-6">
                    <div className="relative">
                        {/* <div className=" flex-row flex overflow-x-scroll px-10 space-x-8 mb-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={(e) => handleTabClick(tab.id, e)}
                                    className={`text-[#343434] text-[23px] font-[400]  relative ${activeTab === tab.id ? "text-foreground" : "text-muted-foreground"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div> */}
                        <div className="overflow-x-auto overflow-hidden">
                            <div className="flex  whitespace-nowrap space-x-8 sm:space-x-15 mb-1">
                                {tabs.map((tab) => (
                                    <div className="flex cursor-pointer flex-col" key={tab.id}>
                                        <span className="text-[#343434] text-[14px] font-[400] ">{tab.date}</span>
                                        <button

                                            onClick={(e) => handleTabClick(tab.id, e)}
                                            className={`text-[#343434] cursor-pointer text-[18px] sm:text-[23px] font-[400] whitespace-nowrap ${activeTab === tab.id ? "text-black" : "text-muted-foreground"
                                                }`}
                                        >
                                            {tab.label}
                                        </button>
                                    </div>
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
                        className="sm:mt-12 mt-6 flex overflow-x-scroll sm:gap-5 gap-2 "
                    >
                        {activeContent?.map((item, index) => (
                            <div
                                key={index}

                            >

                                {item.image && (
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={240}
                                        height={185}
                                        className=""
                                    />
                                )}


                            </div>
                        ))}
                    </motion.div>


                </div>
            </div>
        </div>
    );
}