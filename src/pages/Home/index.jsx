import { motion } from "framer-motion";
import React from "react";
import { FiArrowUpRight, FiLinkedin } from "react-icons/fi";
import { RiDribbbleLine } from "react-icons/ri";
import image2 from "../../assets/image2.png";
import image1 from "../../assets/image1.png";
import { SiInstagram } from "react-icons/si";
import Card1 from "../../assets/Card1.png"
import Card2 from "../../assets/Card2.png"
import Card3 from "../../assets/Card3.png"
import Card4 from "../../assets/Card4.png"
import lg from "../../assets/lg.png"
import bg from "../../assets/bg.png"


export default function Homepage() {
  return (
    <div className="flex flex-col">
        <img
        src={bg}
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />
      <div className="relative px-10 flex flex-col -top-20 justify-between h-[835px] pb-10">
      

      <div className="relative z-10 flex flex-col justify-between h-full">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          src={lg}
          className="w-fit z-0 rounded-lg"
        />
        <div className="flex yukari justify-between items-center">
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="uppercase font-bold leading-tight text-4xl text-white"
          >
            Design Studio Based in Osaka — Tokyo
          </motion.h4>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white border-white border-2 px-5 py-2 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-white hover:text-black transition-all uppercase"
          >
            Get in touch <FiArrowUpRight size={24} />
          </motion.button>
        </div>
      </div>
    </div>
      <div className="flex flex-col px-10 py-20">
        <h1 className="text-white uppercase font-bold text-[100px] tracking-tight leading-tight">
          Pixel Obsession
        </h1>
        <h1 className="uppercase font-bold text-[#565656] text-[100px] tracking-tight leading-tight">
          — since
        </h1>
        <h1 className="uppercase font-bold text-[#565656] text-[100px] tracking-tight leading-tight flex items-center gap-5">
          1996 <img src={image2} alt="1996" className="w-16" />
        </h1>
      </div>

      <div className="px-10 flex flex-col gap-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="uppercase text-[100px] font-bold text-white">Works</h2>
          <p className="font-light text-[42px] text-[#B6B6B6] w-[478px]">
            Photographer Based in Osaka — Tokyo
          </p>
        </div>
        <div className="flex flex-col gap-24 w-full items-center">
          <img
            src={Card1}
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
          />
          <img
            src={Card2}
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
          />
          <img
            src={Card3}
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
          />
          <img
            src={Card4}
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
          />
          <button className="p-1 text-white border-2 border-[#646467]/50 uppercase py-2 leading-8 font-semibold tracking-wider flex rounded-full justify-center items-center gap-2 hover:bg-white hover:text-black transition-all">
            View All Works <FiArrowUpRight size={24} />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-20 justify-center py-20">
        <p className="text-white font-bold text-[100px] text-white text-center leading-tight w-full max-w-screen-xl">
          Photographer Based in Osaka — Tokyo
        </p>
        <div className="flex items-center w-full max-w-screen-xl justify-between">
          <div className="flex flex-col gap-6">
            <p className="uppercase flex gap-5 items-center leading-[98px] font-bold text-[100px] text-white">
              <img src={image1} alt="Art" className="w-24" /> Art
            </p>
            <p className="text-white uppercase flex gap-5 items-center font-light leading-[98px] text-[100px]">
              Fashion
            </p>
            <p className="text-white uppercase flex gap-5 items-center font-light leading-[98px] text-[100px]">
              Music
            </p>
            <p className="text-white uppercase flex gap-5 items-center font-light leading-[98px] text-[100px]">
              Cinema
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-white uppercase flex gap-5 items-center font-light leading-[98px] text-[100px]">
              Business
            </p>
            <p className="text-white uppercase flex gap-5 items-center font-light leading-[98px] text-[100px]">
              Fashion
            </p>
            <p className="text-white uppercase flex gap-5 items-center font-light leading-[98px] text-[100px]">
              Music
            </p>
            <p className="text-white uppercase flex gap-5 items-center font-light leading-[98px] text-[100px]">
              Cinema
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}
