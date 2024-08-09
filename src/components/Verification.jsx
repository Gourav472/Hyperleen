import React from 'react'
import previousSelected from '../assets/images/webp/previous_selected.webp'
import CommonBtn from '../common/CommonBtn'
import CommonBtnWhite from '../common/CommonBtnWhite'
const Verification = () => {
    return (
        <div className='container pt-[60px] lg:pb-[293px] md:pb-28 sm:pb-20 pb-16'>
            <div className='flex gap-[78px] lg:flex-row flex-col items-center'>
                <div className='max-w-[522px] w-full flex lg:justify-end justify-center lg:mb-0 sm:mb-20 mb-9'>
                    <div className='sm:max-w-[502px] sm:ms-0 ms-5 max-w-[400px] w-full relative'>
                        <p className='font_gilroy_semibold font-semibold md:text-3xl md:leading-9 lg:text-custom-32 text-2xl leading-7 lg:leading-[43px] text-center sm:ms-[1.5px] sm:max-w-[498.5px] max-w-[492px] w-full text-white bg-darkBlue rounded-tl-[8px] rounded-tr-[8px] p-4'>
                            Is Previous Selected Object is Correct?
                        </p>
                        <img className='sm:max-w-[502px] max-w-[400px] w-full sm:h-[365px] h-[280px]' src={previousSelected} alt="#" />
                        <div className='sm:max-w-[339px] max-w-[250px] w-full sm:h-[212px] h-[180px] bg-white shadow-4xl sm:py-4 py-3 sm:px-[14px] px-[10px] rounded-2xl absolute left-[-4%] sm:bottom-[-28%] bottom-[-22%]'>
                            <p className='font_gilroy_semibold font-semibold md:text-2xl text-xl leading-8 text-center text-black'>
                                Confirm your action
                            </p>
                            <p className='max-w-[293px] font-poppins font-normal text-base leading-6 text-center text-gray pt-1 sm:pb-9 pb-4'>
                                Confirm if the segmentation was performed correctly.
                            </p>
                            <div className='flex gap-4'>
                                <CommonBtn text="Yes" className="sm:max-w-[148px] max-w-[105px] w-full" />
                                <CommonBtnWhite text="No" className="sm:max-w-[148px] max-w-[105px] w-full" />
                            </div>
                        </div>
                        <div className='sm:max-w-[395px] max-w-[250px] w-full sm:h-[370px] h-[250px] rounded-2xl opacity-10 z-[-1] bg-darkBlue absolute left-[-4%] top-[-4%]'>
                        </div>
                    </div>
                </div>
                <div className='max-w-[540px] w-full flex flex-col lg:justify-start justify-center lg:items-start items-center'>
                    <p className='text-black font_gilroy_semibold lg:text-start text-center font-semibold text-custom-32 leading-[43px]'>
                        Verification
                    </p>
                    <p className='font-normal font-poppins lg:text-start text-center text-base text-gray leading-6 pt-4 md:pb-12 sm:pb-9 pb-7'>
                        Verification is a crucial step to ensure the accuracy of the labeled data. It involves reviewing the segmented image to confirm if the segmentation was performed correctly
                    </p>
                    <CommonBtn text="Learn More" className="max-w-[148px] w-full" />
                </div>
            </div>
        </div>
    )
}

export default Verification
