import React from 'react'
import CommonHeading from '../common/CommonHeading'
import carImg from '../assets/images/webp/car_img.webp'
import Icons from '../common/Icons'
import yourProject from '../assets/images/webp/your_project.webp'
import CommonBtn from '../common/CommonBtn'
const SystemWorks = () => {
    return (
        <div id='works' className='container lg:py-40 md:py-20 py-16'>
            <div className='flex lg:gap-[97px] gap-16 lg:items-end items-center lg:flex-row flex-col'>
                <div data-aos="fade-right" className='max-w-[525px] w-full relative flex flex-col lg:items-start items-center lg:justify-start justify-center'>
                    <CommonHeading text="How the " blueText="System " blackText="Works" className="lg:text-start text-center" />
                    <p data-aos="zoom-in" className='font-normal font-poppins text-base lg:text-start text-center leading-6 text-gray pt-4'>
                        Effortless Data Labeling: Streamlined, Accurate, and Scalable Solutions for AI Development
                    </p>
                    <div className='min-h-[359px] max-w-[400px] w-full p-5 border-[0.5px] border-darkBlue rounded-2xl shadow-4xl mt-10 lg:mb-[151px] mb-6'>
                        <p className='font-semibold font-poppins text-base text-black leading-6 pb-5'>
                            Project Request
                        </p>
                        <img loading="lazy" decoding="async" className='lg:max-w-[361px]' src={carImg} alt="#" />
                        <div className='flex gap-3 items-center border-[0.5px] border-lighterGray rounded-xl w-full p-3 mt-4'>
                            <p className='font-normal font-poppins opacity-40 text-black text-base leading-6'>
                                Car..
                            </p>
                            <Icons iconName="PenIcon" />
                        </div>
                    </div>
                    <div className='bg-white rounded-2xl shadow-4xl p-[28px_24px] max-w-[381px] lg:absolute right-0 bottom-[14%]'>
                        <img loading="lazy" decoding="async" className='lg:max-w-[332px] w-full' src={yourProject} alt="#" />
                    </div>
                    <CommonBtn text="Get Started Now" className="max-w-[195px] w-full lg:mt-0 mt-5" />
                </div>
                <div data-aos="fade-left" className='max-w-[515px] w-full'>
                    <div className="relative flex gap-4 pb-7 group">
                        <div className='before:absolute before:left-[26px] before:top-6 before:border before:h-full before:border-dashed before:border-darkBlue'>
                            <div className="duration-300 ease-linear group-hover:bg-darkBlue z-10 relative h-[54px] w-[54px] flex justify-center items-center bg-offBlue rounded-full">
                                <Icons iconName="ProjectRequestIcon"/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold font_gilroy_semibold text-xl leading-[29px] text-black pb-3">
                                Project request
                            </p>
                            <p className="max-w-[445px] font-normal font-poppins leading-6 text-base text-gray">
                                Send us information about your project and your annotation needs. Our team will work with you to define the Scope of Work and to determine the best way to deliver the results that you require.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex gap-4 pb-7 group">
                        <div className='before:absolute before:left-[26px] before:top-6 before:border before:h-full before:border-dashed before:border-darkBlue'>
                            <div className="duration-300 ease-linear group-hover:bg-darkBlue z-10 relative h-[54px] w-[54px] flex justify-center items-center bg-offBlue rounded-full">
                                <Icons iconName="InterfaceSetup"/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold font_gilroy_semibold text-xl leading-[29px] text-black pb-3">
                            Interface setup
                            </p>
                            <p className="max-w-[445px] font-normal font-poppins leading-6 text-base text-gray">
                            Our team will develop a custom interface for your use case and will hand-pick the most suitable workforce based on your requirements in terms of geography, demographics, etc
                            </p>
                        </div>
                    </div>
                    <div className="relative flex gap-4 pb-7 group">
                        <div className='before:absolute before:left-[26px] before:top-6 before:border before:h-full before:border-dashed before:border-darkBlue'>
                            <div className="duration-300 ease-linear group-hover:bg-darkBlue z-10 relative h-[54px] w-[54px] flex justify-center items-center bg-offBlue rounded-full">
                                <Icons iconName="SendRequest"/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold font_gilroy_semibold text-xl leading-[29px] text-black pb-3">
                            Send request
                            </p>
                            <p className="max-w-[445px] font-normal font-poppins leading-6 text-base text-gray">
                            Once the integration is complete, you can start sending requests to our workforce which contain bounding box, tag, polygon assignments, and more.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex gap-4 group">
                    <div className="duration-300 ease-linear group-hover:bg-darkBlue z-10 relative h-[54px] w-[54px] flex justify-center items-center bg-offBlue rounded-full">
                                <Icons iconName="ReceiveData"/>
                            </div>
                        <div className="flex flex-col">
                            <p className="font-semibold font_gilroy_semibold text-xl leading-[29px] text-black pb-3">
                            Receive data
                            </p>
                            <p className="max-w-[445px] font-normal font-poppins leading-6 text-base text-gray">
                            Get the appropriate data annotated.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SystemWorks
