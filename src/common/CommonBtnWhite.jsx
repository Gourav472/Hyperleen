import React from 'react'

const CommonBtnWhite = ({className, text}) => {
  return (
    <button class={`${className} py-[14px] font-poppins border hover:border-darkBlue border-black text-center leading-[27px] relative rounded-[100px] group overflow-hidden font-normal bg-white text-black inline-block`}>
      <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-darkBlue group-hover:h-full "></span>
      <span class="relative group-hover:text-white">{text}</span>
    </button>
  )
}

export default CommonBtnWhite
