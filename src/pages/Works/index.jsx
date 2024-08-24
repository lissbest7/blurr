import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Card1 from "../../assets/Card1.png"
import Card2 from "../../assets/Card2.png"
import Card3 from "../../assets/Card3.png"
import Card4 from "../../assets/Card4.png"

function works() {
  return (
    <>
    <div><div className="px-10 flex flex-col gap-10">
    <div className="flex justify-between items-center mb-8">
      <h2 className="uppercase mx-auto text-[400px] font-bold text-white">Works</h2>
    </div>
    <div className="flex flex-col gap-24 w-full items-center">
      <img src={Card1} className="transition-transform transform hover:scale-105 hover:shadow-lg" />
      <img src={Card2} className="transition-transform transform hover:scale-105 hover:shadow-lg" />
      <img src={Card3} className="transition-transform transform hover:scale-105 hover:shadow-lg" />
      <img src={Card4} className="transition-transform transform hover:scale-105 hover:shadow-lg" />
      <button className="text-white border-2 p-1 border-[#646467]/50 uppercase py-2 leading-8 font-semibold tracking-wider flex rounded-full justify-center items-center gap-2 hover:bg-white hover:text-black transition-all">
        View All Works <FiArrowUpRight size={24} />
      </button>
    </div>
  </div></div>
    </>
  )
}

export default works