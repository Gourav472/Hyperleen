import React, { useEffect, useState } from 'react'
import { NAV_ITEMS_DATA } from '../common/Helper';
import hyperLogo from '../assets/images/svg/hyper_logo.svg'
import Icon from '../common/Icons';
import CommonBtn from '../common/CommonBtn';
const Header = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const HANDLE_RESIZE = () => {
      if (window.innerWidth < 992) {
        document.body.style.overflow = show ? "visible" : "hidden";
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
      <div className=' container'>
        <div className={`${!show ? "min-h-screen" : ""}`}>
          <div className="flex justify-between items-center bg-white py-[17px] rounded-3xl ">
            <a href="/"><img src={hyperLogo} alt="logo" /></a>
            <ul
              className={`flex flex-col lg:flex-row items-center  max-lg:fixed max-lg:justify-center custom_duration top-0 max-lg:-right-full max-lg:bg-white max-lg:z-[90] max-lg:h-screen max-lg:w-full ${show ? "" : " !right-0"
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
            </ul>
            <div className="flex items-center sm:gap-6 gap-3">
              <CommonBtn className="px-6" text="Contact Us" />
              <div
                className={`cursor-pointer relative z-[100] lg:hidden ${show ? "" : "cross"}`}
                onClick={() => setShow(!show)}>
                <span className="nav-toggle-items "></span>
                <span className="nav-toggle-items my-2"></span>
                <span className="nav-toggle-items "></span>
              </div>
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