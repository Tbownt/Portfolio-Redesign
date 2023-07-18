import { useRef } from "react";
import englishResume from "../assets/images/CV_Andres_Salom_English.pdf";

export const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const handleLink = () => {
    window.location.assign("https://www.linkedin.com/in/andres-salom/");
  };
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center sticky__header">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              AS
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Andres Salom
              </h2>
              <p className="text-smallTextColor text-[16px] font-[500]">
                personal portfolio
              </p>
            </div>
          </div>
          {/* Logo End */}
          {/* menu start */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor font-[600]"
                  href={englishResume}
                  download={englishResume}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          {/* menu end */}

          {/* menu right */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLink()}
              className="flex items-center justify-center gap-2 text-smallTextColor font-[500] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-700"
            >
              <i className="ri-send-plane-fill"></i>
              <p className="sm:text-center text-[16px] leading-4">
                Let's Connect
              </p>
            </button>
            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i class="ri-menu-line"></i>
            </span>
          </div>
          {/* menu end */}
        </div>
      </div>
    </header>
  );
};
