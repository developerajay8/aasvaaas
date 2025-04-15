// "use client";

// import React, { useState } from "react";
// import { Menu, Search, User } from "lucide-react";
// import Image from "next/image";
// import Logo from "../../../public/Group 44 (4).png"
// import Mobilelogo from "../../../public/Group 44 (1).svg"
// import Users from "../../../public/iconamoon_profile-light.png"
// import Searchs from "../../../public/material-symbols_search (1).png"



// import Link from "next/link";

// export default function Navbar() {


//   return (
// <div className="bg-[#1B1B1B] ">
//     <div className="max-w-[1440px] mx-auto ">
//         <div className="py-4 px-8 flex justify-between ">
//             <div className="">
//                 <Image src={Logo} alt="Aasvaa Logo"/>
//             </div>
//             <div className="">
//                 <ul className="flex items-center gap-6 text-[#F6F6F6] text-[16px] py-[5px] justify-between ">
//                     <li className="px-[10px] py-[10px]">
//                     About us
//                     </li>
//                     <li className="px-[10px] py-[10px]">
//                     Products
//                     </li>
//                     <li className="px-[10px] py-[10px]">
//                     Vision
//                     </li>
//                     <li className="px-[10px] py-[10px]">
//                     Team
//                     </li>
//                     <li className="px-[10px] py-[10px]">
//                     Investors
//                     </li>

//                     <div className="">
//                         <Image src={Users} alt=""/>
//                     </div>

//                     <button className="bg-[#FFFF00] text-[#1B1B1B] text-[16px] font-[600] py-[15px] px-[22px] ">
//                         Contact us
//                     </button>

//                     <div className="">
//                         <Image src={Searchs} alt=""/>
//                     </div>
//                 </ul>
//             </div>
//         </div>
//     </div>
// </div>


//   );
// }





'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Mobilelogo from "../../../public/Group 44 (1).svg"
import Logo from "../../../public/Group 44 (4).png"
import Users from "../../../public/iconamoon_profile-light.png"
import Searchs from "../../../public/material-symbols_search (1).png"
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-[#1B1B1B]">
            <div className="max-w-[1440px] mx-auto">
                {/* Desktop & Mobile Header */}
                <div className="py-4 sm:px-8 px-[9px] flex items-center justify-between">
                    {/* Menu Button and Logo */}
                    <div className="flex items-center ">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white lg:hidden block pr-[8px]"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                        <Link href="/" className="lg:block hidden">
                            <Image src={Logo} alt='' />
                        </Link>
                        <Link href="/" className="lg:hidden block">
                            <Image src={Mobilelogo} alt='' />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="">
                        <ul className="flex items-center lg:gap-6 gap-2 text-[#F6F6F6] text-[16px] py-[5px] justify-between ">
                            <li className="hidden lg:block px-[10px] py-[10px]">
                                About us
                            </li>
                            <li className="hidden lg:block px-[10px] py-[10px]">
                                Products
                            </li>
                            <li className="hidden lg:block px-[10px] py-[10px]">
                                Vision
                            </li>
                            <li className="hidden lg:block px-[10px] py-[10px]">
                                Team
                            </li>
                            <li className="hidden lg:block px-[10px] py-[10px]">
                                Investors
                            </li>

                            <div className="">
                                <Image src={Users} alt="" />
                            </div>

                            <button className="bg-[#FFFF00] hidden lg:block text-[#1B1B1B] text-[16px] font-[600] py-[15px] px-[22px] ">
                                Contact us
                            </button>

                            <div className="">
                                <Image src={Searchs} alt="" />
                            </div>
                        </ul>
                    </div>


                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed inset-0 bg-[#1B1B1B] z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="px-4 py-[9px]">
                        <div className="flex items-center justify-between mb-8">
                            <Link href="/" className="">
                                <Image src={Mobilelogo} alt='' />
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <ul className="flex flex-col text-[#F6F6F6] text-[16px] lg:gap-4">
                            <li>
                                <Link href="/about" className="block py-6 hover:text-yellow-300">
                                    About us
                                </Link>
                                <div className="border-[0.7px] border-[#FFFFFF]"></div>
                            </li>
                            <li>
                                <Link href="/products" className="block py-6 hover:text-yellow-300">
                                    Products
                                </Link>
                                <div className="border-[0.7px] border-[#FFFFFF]"></div>

                            </li>
                            <li>
                                <Link href="/vision" className="block py-6 hover:text-yellow-300">
                                    Vision
                                </Link>
                                <div className="border-[0.7px] border-[#FFFFFF]"></div>

                            </li>
                            <li>
                                <Link href="/team" className="block py-6 hover:text-yellow-300">
                                    Team
                                </Link>
                                <div className="border-[0.7px] border-[#FFFFFF]"></div>

                            </li>
                            <li>
                                <Link href="/investors" className="block py-6 hover:text-yellow-300">
                                    Investors
                                </Link>
                                <div className="border-[0.7px] border-[#FFFFFF]"></div>

                            </li>
                            <li className="mt-4">
                                <Link href="#" className="block">
                                    <button className="group bg-[#FFFF00] sm:mb-0 mb-[24px] cursor-pointer py-[15px] px-[22px] text-[16px] font-[600] text-[#1B1B1B] relative transition-all duration-300">
                                        <span className="inline-block transition-all duration-300 group-hover:pr-5">
                                            Contact us
                                        </span>
                                        <span className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <FaArrowRightLong className='text-2xl' />
                                        </span>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}