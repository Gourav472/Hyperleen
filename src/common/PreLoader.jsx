import React, { useEffect, useState } from 'react';
import hyperLogo from "../assets/images/webp/preloader_logo.png";
import preloaderGif from "../assets/images/webp/preloader_gif.gif";

const PreLoader = () => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        const timer = setTimeout(() => {
            setVisible(false);
            document.body.classList.remove('overflow-hidden');
        }, 1500);
        return () => {
            clearTimeout(timer);
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
    if (!visible) return null;
    return (
        <div className='min-h-screen w-full bg-white z-50 fixed top-0 left-0 grid place-items-center'>
            <img src={hyperLogo} alt="hyperLogo" className=' animate-bounce relative z-10' />
            <img src={preloaderGif} alt="preloaderGif" className='w-1/4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-10' />
        </div>
    )
}

export default PreLoader
