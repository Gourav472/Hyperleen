import React from 'react'
import Header from './Header'
import Icons from '../common/Icons'
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
                    <div className=' flex items-center gap-6'>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero