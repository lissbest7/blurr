import React from 'react'
import lg from "../../../assets/lg.png"
import { SiInstagram } from 'react-icons/si'
import { RiDribbbleLine } from 'react-icons/ri'
import { FiLinkedin } from 'react-icons/fi'

function footer() {
  return (
    <div className="border-t border-t-[#646467]/50 pl-10 flex justify-between items-center py-10">
        <img
          src={lg}
          className="pt-10 pr-[110px] pb-[146px] border-r w-[389px]"
        />
        <div className="flex flex-col w-full mt-auto">
          <div className="flex justify-end items-end pr-10 pb-10 border-b">
            <h4 className="uppercase font-light leading-tight text-2xl text-white">
              hello@ <br /> blurr.io
            </h4>
          </div>
          <div className="flex justify-between items-center p-10">
            <div className="flex items-center gap-6">
              <SiInstagram className='cursor-pointer' color="#646467" size={24} />
              <RiDribbbleLine className='cursor-pointer' color="#646467" size={24} />
              <FiLinkedin className='cursor-pointer' color="#646467" size={24} />
            </div>
            <h2 className="font-light text-lg leading-[32px] text-[#646467]">
              © 2024
            </h2>
          </div>
        </div>
      </div>
  )
}

export default footer