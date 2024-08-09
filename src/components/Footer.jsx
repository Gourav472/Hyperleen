import React from 'react';
import HyperleenLogo from "../assets/images/webp/Hyperleen_logo.webp";
import { FOOTER_DATA, SOCIAL_ICONS } from '../common/Helper';
import Icons from '../common/Icons';
const Footer = () => {
    const CURRENT_YEAR = new Date().getFullYear();
    return (
        <div className='pt-1 pb-5 sm:pb-7 bg-black -mt-2'>
            <div className="container">
                <div className="flex gap-10 lg:flex-nowrap flex-wrap justify-between">
                    <div className="max-w-[279px] w-full">
                        <a href="/" className='max-w-[117px] w-full flex'>
                            <img src={HyperleenLogo} alt="HyperleenLogo" className='w-full' />
                        </a>
                        <p className='font-poppins font-normal text-base text-white opacity-70 mt-5'>Lorem ipsum dolor sit amet consectetur. Massa ac commodo duis amet et ut. Tincidunt faucibus integer risus id at.</p>
                    </div>
                    <div className="flex w-full justify-between lg:w-auto gap-10 xl:gap-[72px] flex-wrap md:flex-nowrap text-nowrap">
                        {FOOTER_DATA.map((index) => (
                            <div key={index} className="flex flex-col">
                                <h4 className='font-poppins font-normal text-lg text-white'>{index.heading}</h4>
                                <div className="flex flex-col mt-5 gap-5">
                                    {index.items.map((e) => (
                                        <a key={e} href="/" className='font-poppins w-fit after:duration-300 after:ease-linear after:[] after:absolute after:w-0 hover:after:w-full  after:-bottom-1 after:h-0.5 after:right-0 hover:after:right-auto hover:after:left-0 hover:opacity-100 relative after:bg-darkBlue font-normal text-base text-white opacity-70'>{e.text}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="max-w-[164px] w-full">
                            <h4 className='font-poppins font-normal text-lg text-white'>Follow us on</h4>
                            <div className="mt-5 flex items-center gap-3">
                                {SOCIAL_ICONS.map((index) => (
                                    <a key={index} href={index.link} rel="noreferrer" target='_blank' className='w-8 h-8 rounded-full bg-white grid place-items-center border-darkBlue border duration-300 ease-linear group hover:border-white hover:shadow-9xl relative overflow-hidden'>  <span className="absolute top-0 left-0 rounded-full flex w-full mb-0 ease-linear duration-200 transform -translate-y-full group-hover:translate-y-0 bg-darkBlue h-full "></span><Icons iconName={index.icon} /></a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className='bg-gradientBorder h-px w-full sm:mt-10 mt-7 md:mt-14 flex opacity-10'></span>
            <p className='mt-5 cursor-pointer font-poppins font-normal text-white text-base opacity-70 text-center px-10 sm:mb-4'>© {CURRENT_YEAR} Hyperleen, All Rights reserved.</p>
        </div>
    )
}
export default Footer;