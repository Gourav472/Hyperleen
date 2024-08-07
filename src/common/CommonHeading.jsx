import React from 'react'

const CommonHeading = (props) => {
  return (
   <h2 className={`${props.className} font-medium text-5xl leading-[57.6px] font-gilroy`}>{props.text}</h2>
  )
}

export default CommonHeading