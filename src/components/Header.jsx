import React, { useEffect, useState } from 'react'
import { NAV_ITEMS_DATA } from '../common/Helper';
import hyperLogo from '../assets/images/svg/hyper_logo.svg'
import CommonBtn from '../common/CommonBtn';
import CommonBtnWhite from '../common/CommonBtnWhite';
const Header = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const HANDLE_RESIZE = () => {
      if (window.innerWidth < 992) {
        document.body.style.overflow = show ? "" : "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };
    HANDLE_RESIZE();
    window.addEventListener("resize", HANDLE_RESIZE);
    return () => {
      window.removeEventListener("resize", HANDLE_RESIZE);
      document.body.style.overflow = "";
    };
  }, [show]);
  const HANDLE_CLICK = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (window.innerWidth < 992) {
      setShow(!show);
    } else {
      e.preventDefault();
    }
  };
  return (
    <>
      <div className='container'>
        <div className={`${!show ? "min-h-screen" : ""} `}>
          <div className="flex justify-between items-center bg-white py-1 sm:py-2 md:py-3 lg:py-[17px] rounded-3xl">
            <a href="/"><img src={hyperLogo} alt="logo" /></a>
            <ul
              className={`flex flex-col lg:flex-row items-center max-lg:gap-5 lg:gap-[10px] max-lg:fixed max-lg:justify-center duration-300 ease-linear top-0 max-lg:-right-full max-lg:bg-white max-lg:z-[90] max-lg:h-screen max-lg:w-full ${show ? "" : " !right-0"
                }`}
            >
              {NAV_ITEMS_DATA.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => HANDLE_CLICK(e, item.href.substring(1))}
                    className={item.className}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
              <li className='flex max-lg:flex-col items-center max-lg:gap-4 lg:gap-3 ps-2 xl:ps-[34px]'>
                <CommonBtnWhite className="px-6 text-nowrap" text="Sign Up" />
                <CommonBtn className="px-6 text-nowrap" text="Contact Us" />
              </li>
            </ul>
            <div
              className={`cursor-pointer relative z-[100] lg:hidden ${show ? "" : "cross"}`}
              onClick={() => setShow(!show)}>
              <span className="nav-toggle-items "></span>
              <span className="nav-toggle-items my-[7px]"></span>
              <span className="nav-toggle-items "></span>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header