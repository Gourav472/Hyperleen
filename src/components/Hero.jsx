import React from 'react'
import Header from './Header'
import Icons from '../common/Icons'
import { BUTTONS_DATA } from '../common/Helper'
import CommonBtn from '../common/CommonBtn'
import CommonBtnWhite from '../common/CommonBtnWhite'
const Hero = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='flex-col items-center flex py-12 sm:py-14 md:py-16 lg:py-[68px] xl:py-[71px]'>
                    <div className='flex items-center gap-4'>
                        <Icons iconName="SolutionIconLeft" />
                        <p className='font-poppins font-normal text-base leading-6 text-center text-darkBlue'>AI Solutions</p>
                        <Icons iconName="SolutionIconRight" />
                    </div>
                    <div className=' flex items-center flex-wrap justify-center gap-4 sm:gap-5 md:gap-3 lg:gap-6 pt-6'>
                        {BUTTONS_DATA.map((item, index) => (
                            <button key={index} className=' font-poppins font-normal text-sm sm:text-base leading-6 text-darkBlue p-2 sm:p-[9.5px_12px] md:p-[9.5px_18px] lg:p-[9.5px_23.5px] bg-lightPink shadow-3xl border-[0.5px] border-darkBlue rounded-[122px] hover:shadow-none duration-300 ease-linear'>{item.text}</button>
                        ))}
                    </div>
                    <h1 className=' text-black sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[757px] font_gilroy_medium text-[32px] leading-10 sm:text-[40px] sm:leading-[48px] md:text-[52px] md:leading-[60px] lg:text-[62px] lg:leading-[70px] xl:text-custom-80 xl:leading-[80px] text-center pt-7 sm:pt-8 md:pt-9 lg:pt-10 xl:pt-11'>Transform Your <span className='text-darkBlue'>Data</span> <span className='text-darkBlue'>into AI</span> Insights</h1>
                    <p className=' font-poppins font-normal text-base leading-6 text-center text-gray max-w-[634px] pt-5'>Unlock the full potential of your AI models with our premium data labeling services. Our expert annotators ensure your data is meticulously labeled, enabling superior performance and insights.</p>
                    <div className=' flex items-center gap-4 pt-8 sm:pt-9 md:pt-10'>
                        <CommonBtn className="px-6" text="Get Started" />
                        <CommonBtnWhite className="px-6" text="Try For Free" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero