import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTimes, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footerlogo from "../../../public/Group 44 (2).svg"

const Footer = () => {
    return (
        <>
        <footer style={{
            backgroundImage: 'url("/Banner BG Footer.png")',
          }} className=" text-white w-full bg-cover bg-center md:py-[80px] py-[48px] xl:px-0 px-[16px] overflow-hidden">
            {/* Optional background glow */}
            <div className="  max-w-[1240px] mx-auto sm:flex justify-between gap-[80px]   ">
                {/* Logo & About */}
                <div className="max-w-[335px] sm:mb-0 mb-[48px]">
                    <Image src={Footerlogo} alt="" className="mb-4" />
                    <p className="text-[#E2E2E4] text-[16px] font-[400] mb-4">
                        We’re revolutionizing the legal space with cutting-edge AI technology. Designed for individuals and startups, our tools bring legal clarity to your fingertips.
                    </p>
                    <div className="flex gap-2">
                        <a href="#" className="bg-[#FFFF00] text-black p-2 rounded-sm"><FaFacebookF /></a>
                        <a href="#" className="bg-[#FFFF00] text-black p-2 rounded-sm"><FaLinkedinIn /></a>
                        <a href="#" className="bg-[#FFFF00] text-black p-2 rounded-sm"><FaYoutube /></a>
                        <a href="#" className="bg-[#FFFF00] text-black p-2 rounded-sm"><FaTimes /></a>
                    </div>
                </div>

                {/* Explore */}
                <div className="max-w-[80px] sm:mb-0 mb-[48px]">
                    <h3 className="text-[23px] font-[400] text-[#E6E6E6] mb-6">Explore</h3>
                    <ul className=" ">
                        <li className="py-[10px] text-[14px] font-[400] text-[#F6F6F6] "><a href="#">Products</a></li>
                        <li className="py-[10px] text-[14px] font-[400] text-[#F6F6F6] "><a href="#">Vision</a></li>
                        <li className="py-[10px] text-[14px] font-[400] text-[#F6F6F6] "><a href="#">Team</a></li>
                        <li className="py-[10px] text-[14px] font-[400] text-[#F6F6F6] "><a href="#">Investors</a></li>
                    </ul>
                </div>

                {/* About Us */}
                <div className="max-w-[159px] sm:mb-0 mb-[48px]">
                <h3 className="text-[23px] font-[400] text-[#E6E6E6] mb-6">About us</h3>
                    <ul className=" ">
                        <li className="py-[10px] text-[14px] font-[400] text-[#F6F6F6] "><a href="#">Who We Are</a></li>
                        <li className="py-[10px] text-[14px] font-[400] text-[#F6F6F6] "><a href="#">Our Vision</a></li>
                        <li className="py-[10px] text-[14px] font-[400] text-[#F6F6F6] "><a href="#">Our Mission</a></li>
                        <li className="py-[10px] text-[14px] font-[400] text-[#F6F6F6] "><a href="#">Our AI Capabilities</a></li>
                        <li className="py-[10px] text-[14px] font-[400] text-[#F6F6F6] "><a href="#">Our Core Belief</a></li>
                        <li className="py-[10px] text-[14px] font-[400] text-[#F6F6F6] "><a href="#">Our Core AI Specialties</a></li>
                        <li className="py-[10px] text-[14px] font-[400] text-[#F6F6F6] "><a href="#">Our Tech Stack</a></li>    
                    </ul>
                </div>

                {/* Contact */}
                <div className="max-w-[426px]">
                    <h3 className="text-[23px] font-[400] text-[#E6E6E6] mb-6">Contact</h3>
                    <div className="">
                        <div className="flex items-center gap-2 py-[10px] text-[14px] font-[400] text-[#F6F6F6]"><FaPhoneAlt className="text-[#FFFF00]" /> +91 80588 88814</div>
                        <div className="flex items-center py-[10px] text-[14px] font-[400] text-[#F6F6F6] gap-2"><MdEmail className="text-[#FFFF00]" /> info@aasvaa.in</div>
                        <div className="flex items-start gap-2 py-[10px] text-[14px] font-[400] text-[#F6F6F6]">
                            <FaMapMarkerAlt className="text-[#FFFF00] mt-1" />
                            <div>
                                <strong className="text-white">HO Address</strong><br />
                                313, Subhash Colony, Shastri Nagar, Jaipur
                            </div>
                        </div>
                        <div className="flex items-start gap-2 py-[10px] text-[14px] font-[400] text-[#F6F6F6]">
                            <FaMapMarkerAlt className="text-[#FFFF00] mt-1" />
                            <div>
                                <strong className="text-white">Corporate and Branch office</strong><br />
                                313, Subhash Colony, Shastri Nagar, Jaipur
                            </div>
                        </div>
                        {/* Email Input */}
                        <form className="flex mt-4 max-w-[426px]">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full text-[#878680] text-[14px] px-[21px] py-[13px]  bg-[#fff] rounded-l-sm focus:outline-none"
                            />
                            <button type="submit" className="bg-[#FFFF00] p-[18px] rounded-r-sm text-black">
                                <FaPaperPlane />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
        </footer>

        <footer className="w-full bg-[#E6E6E6] py-4">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <div className="text-[14px] text-[#1B1B1B] font-[600]">
          © All Copyright 2025 by Aasyaa Ltd.
        </div>
        

        {/* Right Links */}
        <div className="text-[#1B1B1B] text-[14px] font-[600] flex items-center space-x-3">
          <a href="#" className="hover:underline">Terms of Use</a>
          <span>|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
        </>
    );
};

export default Footer;
