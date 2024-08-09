import React from 'react'

const CommonBtn = ({className, text}) => {
  return (
    <button className={`${className} py-[14px] border border-darkBlue shadow-2xl hover:shadow-none hover:border-black text-center relative rounded-[100px] group overflow-hidden bg-darkBlue text-white inline-block`}>
      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full "></span>
      <span className="relative group-hover:text-black font-poppins leading-[27px] text-lg font-normal">{text}</span>
    </button>
  )
};
export default CommonBtn



