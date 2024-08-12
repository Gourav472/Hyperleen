import React from 'react'
import CommonHeading from '../common/CommonHeading'
import labelingPiz from '../assets/images/webp/labeling_piz.webp'
import labelingCar from '../assets/images/webp/labeling_car.webp'
import blueTick from '../assets/images/webp/blue_tick.webp'
import cross from '../assets/images/webp/cross.webp'
import verificationCar from '../assets/images/webp/verification_car.webp'
import verificationMan from '../assets/images/webp/verification_man.webp'
import verificationTomato from '../assets/images/webp/verification_tomato.webp'
import verificationPiz from '../assets/images/webp/verification_piz.webp'
import relabelingPiz from '../assets/images/webp/relabeling_piz.webp'
import relabelingQuiche from '../assets/images/webp/relabeling_quiche.webp'
import blueArrow from '../assets/images/svg/blue_arrow.svg'
import Icons from '../common/Icons'
const HighQuality = () => {
  return (
    <div className='container lg:pb-40 md:pb-28 sm:pb-20 pb-16'>
      <div className='flex flex-col items-center justify-center'>
        <CommonHeading text="How We " blueText="Ensure High Quality" className="text-center" />
        <p data-aos="zoom-in" className='max-w-[674px] font-normal text-center text-base text-gray leading-6 pt-4'>
          Our rigorous quality assurance process ensures that our data labeling services provide accurate and reliable results. Here’s a breakdown of our process:
        </p>
      </div>
      <div data-aos="zoom-in-up" className='flex lg:flex-row flex-col max-lg:items-center gap-5 z-10 lg:pt-[100px] md:pt-20 sm:pt-16 pt-11 relative'>
        <div className='bg-regularWhite rounded-2xl duration-300 hover:shadow-4xl border-[0.5px] border-darkBlue lg:max-w-[326px] max-w-[550px] w-full lg:h-[380px] p-5'>
          <p className='font-semibold font_gilroy_semibold sm:text-2xl text-xl sm:leading-[34px] leading-7 text-black'>
            Step 01
          </p>
          <p className='font-semibold font_gilroy_semibold sm:text-xl text-lg leading-7 text-gray py-2'>
            Data Labeling
          </p>
          <div className='flex lg:flex-col sm:flex-row flex-col lg:gap-0 gap-2'>
            <img loading="lazy" decoding="async" className='lg:max-w-[285px] sm:max-w-[250px] w-[90%] sm:w-full pointer-events-none' src={labelingPiz} alt="#" />
            <img loading="lazy" decoding="async" className='lg:pt-7 lg:max-w-[285px] w-[90%] sm:max-w-[250px] sm:w-full pointer-events-none' src={labelingCar} alt="#" />
          </div>
        </div>
        <div className='lg:max-w-[449px] max-w-[550px] w-full 2xl:h-[415px] xl:h-[410px] lg:h-[360px] p-5 duration-300 hover:shadow-4xl bg-regularWhite rounded-2xl border-[0.5px] border-darkBlue lg:mt-[52px]'>
          <div className='flex justify-between items-center'>
            <p className='font-semibold font_gilroy_semibold sm:text-2xl text-xl sm:leading-[34px] leading-7 text-black'>
              Step 02
            </p>
            <div className='flex gap-3'>
              <div className='flex items-center gap-1 bg-lightBlue border-[0.5px] rounded-xl border-darkBlue p-[6px_12px] max-w-[86px]'>
                <p className='font-semibold font_gilroy_semibold text-xl leading-7 text-black'>
                  90%
                </p>
                <img loading="lazy" decoding="async" className='h-[20px] w-[20px] pointer-events-none' src={blueTick} alt="#" />
              </div>
              <div className='flex items-center gap-1 bg-lightBlue border-[0.5px] rounded-xl border-darkBlue p-[6px_12px] max-w-[86px]'>
                <p className='font-semibold font_gilroy_semibold text-xl leading-7 text-black'>
                  10%
                </p>
                <img loading="lazy" decoding="async" className='h-[20px] w-[20px] pointer-events-none' src={cross} alt="#" />
              </div>
            </div>
          </div>
          <p className='font-semibold font_gilroy_semibold sm:text-xl text-lg leading-7 text-gray py-2'>
            Verification
          </p>
          <div className='flex justify-between gap-2 xl:gap-[47px] pb-[10px] w-full'>
            <img loading="lazy" decoding="async" className='xl:w-full w-[48%] xl:max-w-[258px] pointer-events-none' src={verificationCar} alt="#" />
            <img loading="lazy" decoding="async" className='xl:w-full w-[48%] xl:max-w-[258px] pointer-events-none' src={verificationMan} alt="#" />
          </div>
          <div className='flex justify-between gap-2 xl:gap-[47px] pb-[10px] w-full'>
            <img loading="lazy" decoding="async" className='xl:w-full w-[48%] xl:max-w-[258px] pointer-events-none' src={verificationTomato} alt="#" />
            <img loading="lazy" decoding="async" className='xl:w-full w-[48%] xl:max-w-[258px] pointer-events-none' src={verificationCar} alt="#" />
          </div>
          <div className='flex justify-between xl:gap-[47px] gap-2 w-full'>
            <img loading="lazy" decoding="async" className='xl:w-full w-[48%] xl:max-w-[258px] pointer-events-none' src={verificationMan} alt="#" />
            <img loading="lazy" decoding="async" className='xl:w-full w-[48%] xl:max-w-[258px] pointer-events-none' src={verificationPiz} alt="#" />
          </div>
        </div>
        <div className='bg-regularWhite rounded-2xl duration-300 hover:shadow-4xl border-[0.5px] border-darkBlue xl:max-w-[326px] max-w-[550px] w-full 2xl:h-[380px] lg:h-[380px] p-5 lg:mt-[147px]'>
          <p className='font-semibold font_gilroy_semibold sm:text-2xl text-xl sm:leading-[34px] leading-7 text-black'>
            Step 03
          </p>
          <p className='font-semibold font_gilroy_semibold sm:text-xl text-lg leading-7 text-gray py-2'>
            Data Labeling
          </p>
          <p className='font-normal  text-gray text-base leading-6 pb-2'>
            Incorrectly labeled data is reviewed and relabeled correctly
          </p>
          <div className='flex lg:flex-col sm:flex-row flex-col lg:gap-0 gap-2'>
            <img className='xl:w-full w-[90%] xl:max-w-[258px] pointer-events-none' src={relabelingPiz} alt="#" />
            <Icons iconName="ArrowIcon" className="lg:ps-20 lg:flex hidden" />
            <img className='xl:w-full w-[90%] xl:max-w-[258px] pointer-events-none' src={relabelingQuiche} alt="#" />
          </div>
        </div>
        <img loading="lazy" decoding="async" className='absolute top-[4%] left-[28%] lg:flex hidden pointer-events-none' src={blueArrow} alt="#" />
        <img loading="lazy" decoding="async" className='absolute pointer-events-none top-[16%] xl:left-[69%] left-[64%] rotate-[10.5deg] lg:flex hidden ' src={blueArrow} alt="#" />
      </div>
    </div>
  )
}
export default HighQuality
