import React from 'react'

const CommonBtn = ({className, text}) => {
  return (
    <button class={`${className} py-[14px] font-poppins border border-darkBlue shadow-2xl hover:shadow-none hover:border-black text-center leading-[27px] relative rounded-[100px] group overflow-hidden font-normal bg-darkBlue text-white inline-block`}>
      <span class="absolute top-0 left-0 flex w-full h-0 mb-0 ease-linear duration-200 transform translate-y-0 bg-white group-hover:h-full "></span>
      <span class="relative group-hover:text-black">{text}</span>
    </button>
  )
};
export default CommonBtn



