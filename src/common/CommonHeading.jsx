import React from 'react';

const CommonHeading = ({text,blackText,blueText,className}) => {
  return (
    <h2 data-aos="zoom-in" className={`${className} text-[30px] leading-9 sm:text-4xl sm:leading-[45px] md:text-[42px] md:leading-[52px] lg:text-[45px] lg:leading-[55px] xl:text-5xl xl:leading-[57.6px] font_gilroy_medium`}>{text} <span className='text-darkBlue'>{blueText}</span> <span>{blackText}</span>
    </h2>
  );
}

export default CommonHeading;
