import React from 'react'
import CommonHeading from '../common/CommonHeading';
import CommonBtn from '../common/CommonBtn';
import hyperleenBottom from "../assets/images/webp/hyperleen_bottom.png";

const Hyperleen = () => {
    return (
        <div className='pt-20 pb-1 max-w-[1920px] mx-auto'>
            <div className="container mt-2.5 pb-5">
                <div className="flex flex-col items-center">
                    <CommonHeading text=" Get in touch with " blueText="Hyperleen" className="text-center" />
                    <p className='max-w-[731px] font-poppins text-base font-normal text-gray opacity-70 text-center mt-4'>
                        Take your experience a step further! Subscribe to our monthly newsletter for exclusive access to discounts, promotions, Hyperleen events and more. We’d hate to be annoying, please unsubscribe anytime! –
                    </p>
                    <form method="get" className='flex items-center gap-[14px] mt-6'>
                        <input type="email" placeholder='Your e-mail' className='bg-offGray p-4 text-gray outline-none font-poppins text-base font-normal max-w-[323px] w-full rounded-2xl placeholder:text-gray' required />
                        <CommonBtn text="Submit Now" className="text-nowrap px-6 max-w-[156px] w-full " />
                    </form>
                </div>
            </div>
            <img src={hyperleenBottom} alt="hyperleenBottom" className='w-full' />
        </div>
    )
}

export default Hyperleen
