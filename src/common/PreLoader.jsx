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
        }, 2000);
        return () => {
            clearTimeout(TIMER);
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
    if (!visible) return null;
    return (
        <div className='min-h-screen w-full bg-white z-[100] fixed top-0 left-0 grid place-items-center'>
            <img src={hyperLogo} alt="hyperLogo" className='w-[180px] animate-pulse relative z-10' />
            <img src={preloaderGif} alt="preloaderGif" className='w-full max-w-[360px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-10' />
        </div>
    )
}
export default PreLoader
