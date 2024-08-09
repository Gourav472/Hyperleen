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
        <div id='faqs' className='lg:pt-10 pt-5 pb-2 lg:pb-10 xl:pb-20'>
            <div className="container mt-10 mb-2.5">
                <CommonHeading blueText="FAQs" className="text-center" />
                <p className='mt-4 text-center font-poppins text-base font-normal text-gray'>You have got Question.  We have got Answer</p>
                <div className="pt-7 pb-3">
                    {ACCORDION_DATA.map((item, index) => (
                        <div key={index} className={`${openIndex === index ? 'border-transparent' : 'border-gray'} w-full border-[0.5px] overflow-hidden rounded-2xl flex mx-auto max-w-[973px] mt-5 justify-center relative duration-300 ease-linear`} data-aos="zoom-in-up" data-aos-duration="1500">
                            <div className="accordion w-full">
                                <div
                                    className={`${openIndex === index ? 'bg-darkBlue' : 'bg-white'} duration-300 ease-linear accordion-header relative z-[1] px-6 flex items-center justify-between shadow-4xl gap-1.5 cursor-pointer p-[22px]`}
                                    onClick={() => HANDLE_TOGGLE(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <div className="flex items-start sm:items-center gap-1.5">
                                        <h3 className={`${openIndex === index ? 'text-white' : 'text-black'} font-poppins font-medium text-base`}>{item.title}</h3>
                                    </div>
                                    <Icon iconName="AccordionIcon" isOpen={openIndex === index} className={`${openIndex === index ? 'rotate-180 bg-white fill-darkBlue' : 'bg-darkBlue fill-white'} duration-500 ease-linear w-6 h-6 py-2 px-[7px]  rounded-full grid place-items-center`} />
                                </div>
                                <div className="overflow-hidden relative">
                                    <div
                                        className={`accordion-content flex items-start gap-3 pl-6 py-6 bg-lightGray w-full duration-500 ease-linear ${openIndex === index ? ' relative top-0' : '-translate-y-full -top-5 absolute'}`}
                                    >
                                        <p className='text-gray text-lg sm:text-xl font_gilroy_regular  max-w-[821px]'>{item.content}</p>
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
