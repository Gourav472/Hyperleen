import React from 'react'
import Header from './Header'
import Icons from '../common/Icons'
import { BUTTONS_DATA } from '../common/Helper'
const Hero = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='flex-col items-center flex py-[71px]'>
                    <div className='flex items-center gap-4'>
                        <Icons iconName="SolutionIconLeft" />
                        <p className='font-poppins font-normal text-base leading-6 text-center text-darkBlue'>AI Solutions</p>
                        <Icons iconName="SolutionIconRight" />
                    </div>
                    <div className=' flex items-center gap-6 pt-6'>
                        {BUTTONS_DATA.map((item,index) => (
                        <button key={index} className=' font-poppins font-normal text-base leading-6 text-darkBlue p-[10px_24px] bg-lightPink shadow-3xl border-[0.5px] border-darkBlue rounded-[122px] hover:shadow-none duration-300 ease-linear'>{item.text}</button>
                        ))}
                    </div>
                    <h1 className=' text-black max-w-[757px] font_gilroy_medium text-custom-80 leading-[80px] text-center pt-11'>Transform Your <span className='text-darkBlue'>Data</span> <span className='text-darkBlue'>into AI</span> Insights</h1>
                    <p className=' font-poppins font-normal text-base leading-6 text-center text-gray max-w-[634px] pt-5'>Unlock the full potential of your AI models with our premium data labeling services. Our expert annotators ensure your data is meticulously labeled, enabling superior performance and insights.</p>
                </div>

            </div>
        </>
    )
}

export default Hero