import React from 'react'

const CommonHeading = (props) => {
  return (
   <h2 className={`${props.className} text-5xl leading-[57.6px] font_gilroy_medium`}>{props.text}</h2>
  )
}

export default CommonHeading