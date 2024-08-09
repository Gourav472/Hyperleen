import React, { useState } from 'react'
import CommonHeading from '../common/CommonHeading';
import CommonBtn from '../common/CommonBtn';
import hyperleenBottom from "../assets/images/webp/hyperleen_bottom.webp";
const Hyperleen = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const HANDLE_SUBMIT = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => {
            setIsSubmitted(false);
        }, 1500);
    }
    return (
        <div className='pt-20 pb-1 max-w-[1920px] mx-auto relative overflow-hidden'>
            <div className="container mt-2.5 pb-5">
                <div className="flex flex-col items-center">
                    <CommonHeading text=" Get in touch with " blueText="Hyperleen" className="text-center" />
                    <p className='max-w-[731px] font-poppins text-base font-normal text-gray opacity-70 text-center mt-4'>
                        Take your experience a step further! Subscribe to our monthly newsletter for exclusive access to discounts, promotions, Hyperleen events and more. We’d hate to be annoying, please unsubscribe anytime! –
                    </p>
                    <form method="get" onSubmit={HANDLE_SUBMIT} className='flex items-center gap-[14px] mt-6'>
                        <input type="email" placeholder='Your e-mail' value={email} onChange={(e) => setEmail(e.target.value)} className='bg-mediumGray p-4 text-gray outline-none font-poppins text-base font-normal max-w-[323px] w-full rounded-2xl placeholder:text-gray' required />
                        <CommonBtn text="Submit Now" className="text-nowrap px-6 max-w-[156px] w-full " />
                    </form>
                    <div className={`${isSubmitted === true ? "right-[3%]" : "-right-full"} absolute bg-darkBlue py-5 px-5 text-nowrap shadow-4xl justify-center max-w-[400px] rounded-3xl w-1/2 border-b-2 border-green-600 flex items-center duration-300 ease-linear cursor-pointer bottom-0 sm:bottom-[5%] lg:bottom-[15%] xl:bottom-[30%]`}>
                        <p className='font-poppins font-normal text-white'>Submit successfully</p>
                    </div>
                </div>
            </div>
            <img src={hyperleenBottom} alt="hyperleenBottom" className='w-full' />
        </div>
    )
}
export default Hyperleen
