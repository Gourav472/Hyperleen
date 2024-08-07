import React from 'react';
import HyperleenLogo from "../assets/images/webp/Hyperleen_logo.png";

const Footer = () => {
    return (
        <div className='py-1 bg-black -mt-2 max-w-[1920px] mx-auto'>
            <div className="container">
                <div className="">
                    <div className="max-w-[279px] w-full">
                        <a href="/" className='max-w-[117px] w-full flex'>
                            <img src={HyperleenLogo} alt="HyperleenLogo" className='w-full' />
                        </a>
                        <p className='font-poppins font-normal text-base text-white opacity-70 mt-5'>Lorem ipsum dolor sit amet consectetur. Massa ac commodo duis amet et ut. Tincidunt faucibus integer risus id at.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
