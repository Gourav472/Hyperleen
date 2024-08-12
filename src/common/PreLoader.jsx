import React, { useEffect, useState } from 'react';
import hyperLogo from "../assets/images/webp/preloader_logo.webp";
import preloaderGif from "../assets/images/webp/preloader_gif.gif";
const PreLoader = () => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        const TIMER = setTimeout(() => {
            setVisible(false);
            document.body.classList.remove('overflow-hidden');
        }, 200000);
        return () => {
            clearTimeout(TIMER);
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
    if (!visible) return null;
    return (
        <div className='min-h-screen w-full bg-white z-50 fixed top-0 left-0 grid place-items-center'>
            <div className='animate-pulse flex flex-col gap-5 items-center'>
                <img src={hyperLogo} alt="hyperLogo" className='w-[160px] sm:w-[180px] relative z-10' />
                <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
                    <svg className="h-16 w-16 animate-spin stroke-darkBlue" viewBox="0 0 256 256">
                        <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="24"></line>
                        <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                        </line>
                        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="24"></line>
                        <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                        </line>
                        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="24"></line>
                        <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                        </line>
                    </svg>
                    <span className="text-2xl font_gilroy_semibold text-black">Loading...</span>
                </div>
            </div>
        </div>
    )
}
export default PreLoader
