import React from 'react'
import markButler from '../assets/images/webp/mark_butler.webp'
import corinneCrabtree from '../assets/images/webp/corinne_crabtree.webp'
import teamLineVector from '../assets/images/webp/team_line_vector.webp'
import Icons from '../common/Icons'
const OurTeam = () => {
    return (
        <div className='bg-our_team bg-no-repeat lg:bg-full bg-cover lg:py-[183px] py-32 relative overflow-hidden'>
            <div className='container z-10'>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='font-medium font_gilroy_semibold md:text-5xl text-4xl leading-10 md:leading-[57px] text-white text-center'>
                        Our Team
                    </h3>
                    <p className='max-w-[411px] w-full font-normal font-poppins text-base text-white opacity-70 text-center leading-6 pt-4 md:pb-14 sm:pb-9 pb-7'>
                        Meet our dedicated team of experts ensuring precision and quality in every data labeling task.
                    </p>
                </div>
                <div className='flex gap-5 lg:flex-row flex-col lg:items-start items-center'>
                    <div className='max-w-[560px] w-full'>
                        <div className='bg-white w-full rounded-2xl relative'>
                            <img className='w-full xl:h-[393px] sm:h-[380px]' src={markButler} alt="#" />
                            <div className='w-[48px] sm:h-[160px] bg-lightWhite flex flex-col sm:gap-4 gap-2 sm:p-[16px_8px] p-[8px_6px] rounded-tr-3xl shadow-5xl absolute top-0 right-0'>
                                <a href="https://in.linkedin.com/" target='blank' className='duration-300 hover:scale-110'><Icons iconName="LinkedinIcon" /></a>
                                <a href="https://www.facebook.com/" target='blank' className='duration-300 hover:scale-110'><Icons iconName="FacebookIcon" /></a>
                                <a href="https://www.instagram.com/" target='blank' className='duration-300 hover:scale-110'><Icons iconName="InstagramIcon" /></a>
                            </div>
                            <div className='flex xl:justify-between xl:flex-row flex-col xl:items-center lg:pt-[34px] sm:pt-6 pt-4 px-4'>
                                <div className='xl:pb-6 sm:pb-4 pb-2'>
                                    <p className='font-semibold font_gilroy_semibold text-2xl leading-[33px] text-black'>
                                        Mark Butler
                                    </p>
                                    <p className='font-normal text-gray text-lg font-poppins leading-7 pt-1'>
                                        Lead Data Annotator
                                    </p>
                                </div>
                                <div className='xl:pb-6 sm:pb-4 pb-3'>
                                    <a href="tel:972.215.8214" className='font-normal font-poppins text-base leading-6 text-darkBlue flex items-center gap-3'>
                                        <Icons iconName="PhoneIcon" />
                                        972.215.8214
                                    </a>
                                    <a href="mailto:darrin.araki@cbpacific.com" className='font-normal font-poppins text-base leading-6 text-darkBlue flex items-center gap-3 pt-2'>
                                        <Icons iconName="MailIcon" />
                                        darrin.araki@cbpacific.com
                                    </a>
                                </div>
                            </div>
                            <p className='font-normal font-poppins text-base text-gray leading-6 px-4 pb-4'>
                                Sarah Thompson brings over five years of experience in data labeling and annotation to our team. With a keen eye for detail and a passion for precision, Sarah leads our team of annotators, ensuring every piece of data is meticulously labeled and verified.
                            </p>
                        </div>
                    </div>
                    <div className='max-w-[560px] w-full'>
                        <div className='bg-white w-full rounded-2xl relative'>
                            <img className='w-full xl:h-[393px] sm:h-[380px]' src={corinneCrabtree} alt="#" />
                            <div className='w-[48px] sm:h-[160px] bg-lightWhite flex flex-col sm:gap-4 gap-2 sm:p-[16px_8px] p-[8px_6px] rounded-tr-3xl shadow-5xl absolute top-0 right-0'>
                                <a href="https://in.linkedin.com/" target='blank' className='duration-300 hover:scale-110'><Icons iconName="LinkedinIcon" /></a>
                                <a href="https://www.facebook.com/" target='blank' className='duration-300 hover:scale-110'><Icons iconName="FacebookIcon" /></a>
                                <a href="https://www.instagram.com/" target='blank' className='duration-300 hover:scale-110'><Icons iconName="InstagramIcon" /></a>
                            </div>
                            <div className='flex xl:justify-between xl:flex-row flex-col xl:items-center lg:pt-[34px] sm:pt-6 pt-4 px-4'>
                                <div className='xl:pb-6 sm:pb-4 pb-2'>
                                    <p className='font-semibold font_gilroy_semibold text-2xl leading-[33px] text-black'>
                                        Corinne Crabtree
                                    </p>
                                    <p className='font-normal text-gray text-lg font-poppins leading-7 pt-1'>
                                        Lead Data Annotator
                                    </p>
                                </div>
                                <div className='xl:pb-6 sm:pb-4 pb-3'>
                                    <a href="tel:972.215.8214" className='font-normal font-poppins text-base leading-6 text-darkBlue flex items-center gap-3'>
                                        <Icons iconName="PhoneIcon" />
                                        972.215.8214
                                    </a>
                                    <a href="mailto:darrin.araki@cbpacific.com" className='font-normal font-poppins text-base leading-6 text-darkBlue flex items-center gap-3 pt-2'>
                                        <Icons iconName="MailIcon" />
                                        darrin.araki@cbpacific.com
                                    </a>
                                </div>
                            </div>
                            <p className='font-normal font-poppins text-base text-gray leading-6 px-4 pb-4'>
                                Sarah Thompson brings over five years of experience in data labeling and annotation to our team. With a keen eye for detail and a passion for precision, Sarah leads our team of annotators, ensuring every piece of data is meticulously labeled and verified.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img className='absolute top-[-57px] min-h-full left-[-32px] rotate-[-16.43deg] lg:flex hidden ' src={teamLineVector} alt="#" />
        </div>
    )
}
export default OurTeam
