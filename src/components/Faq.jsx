import React, { useState } from 'react'
import CommonHeading from '../common/CommonHeading';
import { ACCORDION_DATA } from "../common/Helper";
import Icon from '../common/Icons';
const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const HANDLE_TOGGLE = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className='lg:pt-10 pt-2 sm:pt-5 pb-2 lg:pb-10 xl:pb-20'>
            <div className="container lg:mt-10 mb-2.5">
                <CommonHeading blueText="FAQs" className="text-center" />
                <p data-aos="zoom-in" className='sm:mt-4 mt-1 text-center font-poppins text-base font-normal text-gray'>You have got Question.  We have got Answer</p>
                <div className="sm:pt-7 pt-4 pb-3">
                    {ACCORDION_DATA.map((item, index) => (
                        <div key={index} className={`${openIndex === index ? 'border-transparent' : 'border-gray'} w-full border-[0.5px] overflow-hidden rounded-2xl flex mx-auto max-w-[973px] mt-3 sm:mt-5 justify-center relative duration-300 ease-linear`} data-aos="flip-up">
                            <div className="accordion w-full">
                                <div
                                    className={`${openIndex === index ? 'bg-darkBlue' : 'bg-white'} duration-300 ease-linear accordion-header relative z-[1] sm:px-6 px-3 flex items-center justify-between shadow-4xl gap-1.5 cursor-pointer py-4 sm:py-[23px]`}
                                    onClick={() => HANDLE_TOGGLE(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <div className="flex items-start sm:items-center gap-1.5">
                                        <h3 className={`${openIndex === index ? 'text-white' : 'text-black'} font-poppins font-medium text-sm sm:text-base`}>{item.title}</h3>
                                    </div>
                                    <Icon iconName="AccordionIcon" isOpen={openIndex === index} className={`${openIndex === index ? 'rotate-180 bg-white fill-darkBlue' : 'bg-darkBlue fill-white'} duration-500 ease-linear w-6 h-6 py-2 px-[7px]  rounded-full grid place-items-center`} />
                                </div>
                                <div className="overflow-hidden relative">
                                    <div
                                        className={`accordion-content flex items-start gap-3 pl-3 sm:pl-6 py-4 sm:py-6 bg-lightGray w-full duration-500 ease-linear ${openIndex === index ? ' relative top-0' : '-translate-y-full -top-5 absolute'}`}
                                    >
                                        <p className='text-gray text-base sm:text-lg md:text-xl font_gilroy_regular  max-w-[821px]'>{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Faq
