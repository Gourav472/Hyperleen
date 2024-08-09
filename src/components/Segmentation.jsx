import React from 'react'
import CommonHeading from '../common/CommonHeading'
import CommonBtn from '../common/CommonBtn'
import selectedCar from '../assets/images/webp/selected_car.webp'
const Segmentation = () => {
    return (
        <div id='about' className='container'>
            <div className='flex flex-col'>
                <div className='flex flex-col items-center'>
                    <CommonHeading className="max-w-[506px] text-center" text="Image" blueText="Segmentation and" blackText="Verification" />
                    <p className='max-w-[740px] font-poppins font-normal text-base leading-6 text-center pt-4 '>In the realm of sentiment analysis, human judgment plays a crucial role. While our methods may not be extravagant, they are designed to ensure precise and reliable results.</p>
                </div>
            </div>
            <div className='flex flex-row flex-wrap pt-7 sm:pt-9 md:pt-12 lg:pt-[60px]'>
                <div className='w-full lg:w-6/12 flex max-lg:justify-center lg:items-center'>
                    <div className='flex max-lg:items-center flex-col'>
                        <h2 className='font_gilroy_semibold text-[26px] leading-9 sm:text-3xl md:text-custom-32 md:leading-[43px] text-black'>Image Segmentation</h2>
                        <p className='max-w-[540px] font-poppins font-normal text-base leading-6 gray pt-4 max-lg:text-center'>Image segmentation is the process of partitioning an image into multiple segments to simplify its representation and make it more meaningful. This technique is essential for identifying and analyzing objects within an image, such as cars in autonomous driving applications.</p>
                        <CommonBtn text="Learn More" className="px-6 mt-8 sm:mt-10 md:mt-12 max-w-[148px] text-nowrap" />
                    </div>
                </div>
                <div className='w-full lg:w-6/12 flex justify-center lg:justify-end ps-0 mt-10 md:mt-12 lg:mt-0 lg:ps-6 xl:ps-0'>
                    <div className='max-w-[502px] w-full rounded-2xl border-[0.5px] border-darkBlue relative'>
                        <img className='max-w-[502px] pointer-events-none w-full' src={selectedCar} alt="car" />
                        <div className='max-w-[502px] rounded-[16px_16px_0px_0px] flex flex-col w-full bg-darkBlue p-4 absolute top-0'>
                            <p className='font-poppins font-normal text-lg leading-[27px] text-white'>Selected All Squares With</p>
                            <p className='pt-[7px] font_gilroy_semibold text-custom-32 leading-[43px] text-white'>Car</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Segmentation