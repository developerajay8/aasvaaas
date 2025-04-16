"use client";

import Link from "next/link";
import Image from "next/image";
import Arrow from "../../../public/Arrow 1.png"

const caseStudies = [
    {
        title: "Gojuris AI Legal Research",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2124&auto=format&fit=crop",
        category: "AI & Legal",
        content: "Discover how we helped transform this business through innovative solutions."

    },
    {
        title: "Lumex - Computer Vision",
        image: "https://images.unsplash.com/photo-1542459630-b55e1012e02d?q=80&w=2070&auto=format&fit=crop",
        category: "Computer Vision",
        content: "Discover how we helped transform this business through innovative solutions."

    },
    {
        title: "VentureNxt - Business idea validation",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop",
        category: "Business",
        content: "Discover how we helped transform this business through innovative solutions."
    }
];

export default function Casestudies() {
    return (
        <main className=" bg-[#FFFFFF] md:py-[80px] py-[48px]">
            <section className="max-w-[1240px] mx-auto xl:px-0 px-[16px]  ">
                <div className="sm:flex justify-between items-center mb-[48px]">
                    <h1 className=" text-[#000000] text-[40px] text-center sm:text-[48px] font-[400] ">Case studies</h1>

                    <div className="sm:block hidden">
                        <Link
                            href="#" className="flex items-center"
                        >
                            <h5 className="group flex text-[#343434] text-[23px] font-[400] items-center text-lg  hover:text-primary transition-colors">
                                All Cases
                            </h5>
                            <Image src={Arrow} alt="" className="ml-2" />
                        </Link>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            className="group relative block aspect-[4/3] overflow-hidden bg-black/5"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${study.image})` }}
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-70" />

                            {/* Default Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300 translate-y-0 group-hover:translate-y-[-100%]">
                                <h3 className="text-white text-2xl font-bold">{study.title}</h3>
                            </div>

                            {/* Hover Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                                <div className="space-y-2">
                                    <span className="inline-block py-1 text-sm text-white bg-primary/30 backdrop-blur-sm rounded-full">
                                        {study.category}
                                    </span>
                                    <h3 className="text-white text-2xl font-bold">{study.title}</h3>
                                    <p className="text-white/80">
                                        {study.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="sm:hidden block mt-[48px]">
                    <div className=" flex justify-center">
                        <Link href="#" className="flex items-center text-center">
                            <h5 className="group flex text-[#343434] text-[23px] font-[400] items-center text-lg hover:text-primary underline transition-colors">
                                All Cases
                            </h5>
                            <Image src={Arrow} alt="" className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}