import React, { useState } from 'react'
import CommonHeading from '../common/CommonHeading';
import CommonBtn from '../common/CommonBtn';
import hyperleenBottom from "../assets/images/webp/hyperleen_bottom.webp";
const Hyperleen = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => {
            setIsSubmitted(false);
        }, 1500);
    }
    return (
        <div className='lg:pt-20 sm:pt-8 md:pt-12 pt-2 pb-1 relative overflow-hidden' id='services'>
            <div className="container mt-2.5 pb-5">
                <div className="flex flex-col items-center">
                    <CommonHeading text=" Get in touch with " blueText="Hyperleen" className="text-center" />
                    <p data-aos="fade-right" className='max-w-[731px] font-poppins text-base font-normal text-gray opacity-70 text-center mt-4'>
                        Take your experience a step further! Subscribe to our monthly newsletter for exclusive access to discounts, promotions, Hyperleen events and more. We’d hate to be annoying, please unsubscribe anytime! –
                    </p>
                    <form data-aos="fade-left" method="get" onSubmit={handleSubmit} className='flex items-center flex-col sm:flex-row mb-12 lg:mb-0 gap-[14px] w-full justify-center mt-6'>
                        <input type="email" placeholder='Your e-mail' value={email} onChange={(e) => setEmail(e.target.value)} className='bg-mediumGray p-4 text-gray outline-none font-poppins text-base font-normal max-w-[323px] w-full rounded-2xl placeholder:text-gray' required />
                        <CommonBtn text="Submit Now" className="text-nowrap px-6 max-w-[156px] w-full " />
                    </form>
                    <div className={`${isSubmitted === true ? "right-[3%]" : "-right-full"} fixed bg-white py-5 px-5 text-nowrap shadow-3xl justify-center max-w-[400px] rounded-3xl w-1/2 border-b-2 border-darkBlue flex items-center duration-300 ease-linear cursor-pointer bottom-8`}>
                        <p className='font-poppins font-normal text-black'>Submit successfully</p>
                    </div>
                </div>
            </div>
            <img src={hyperleenBottom} alt="hyperleenBottom" className='w-full'/>
        </div>
    )
}
export default Hyperleen
