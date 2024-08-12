import React from 'react'

const CommonBtnWhite = ({className, text}) => {
  return (
    <button className={`${className} max-md:py-3 md:py-[14px] hover:shadow-2xl border hover:border-darkBlue border-black text-center relative rounded-[100px] group overflow-hidden font-normal bg-white text-black inline-block`}>
      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 ease-linear duration-300 transform translate-y-0 bg-darkBlue group-hover:h-full "></span>
      <span className="relative group-hover:text-white font-poppins !leading-[26px] max-md:text-base md:text-lg font-normal">{text}</span>
    </button>
  )
}

export default CommonBtnWhite
