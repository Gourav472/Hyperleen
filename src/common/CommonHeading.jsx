import React from 'react';

const CommonHeading = ({className,text ,blackText,blueText}) => {
  return (
    <h2 className={`${className} text-5xl leading-[57.6px] font_gilroy_semibold`}>
      {text}
      <span className='text-darkBlue'>{blueText}</span>
      <span>{blackText}</span>
    </h2>
  );
}

export default CommonHeading;
