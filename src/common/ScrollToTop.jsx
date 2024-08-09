import React, { useEffect, useState } from 'react'
import upArrow from "../assets/images/svg/scroll_to_top.svg";
const ScrollToTop = () => {
    const SCROLL_TO_TOP = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const [visible, setVisible] = useState(false);
    const TOGGLE_VISIBLE = () => {
        const scrolled = window.scrollY;
        if (scrolled > 400) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', TOGGLE_VISIBLE);
        return () => {
            window.removeEventListener('scroll', TOGGLE_VISIBLE);
        };
    }, []);
    return (
        <button onClick={SCROLL_TO_TOP} className="animate-bounce bg-white place-items-center xl:w-16 xl:h-16 lg:w-14 lg:h-14 md:w-12 md:h-12 sm:w-10 sm:h-10 w-8 h-8 rounded-full fixed right-[3%] bottom-[4%] cursor-pointer shadow-[0_0_10px_darkBlue_inset] duration-300 ease-linear z-10" style={{ display: visible ? 'grid' : 'none' }}>
            <img src={upArrow} alt="upArrow" className='w-1/2' />
        </button>
    )
}
export default ScrollToTop
