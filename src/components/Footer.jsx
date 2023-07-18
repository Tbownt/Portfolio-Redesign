export const Footer = () => {
  return (
    <footer className="bg-slate-700 pt-10 pb-5">
      {/* footer top */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Let's make wonderful experiences together
            </h2>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJbPfwBnBKSfhcjsZDvVlNLnpcWnrRnptWkTVtbVSpjtsKLjRPfCjwTVWsFVrmRgfPxg"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextcolor ease-in duration-300 py-2 px-4 rounded-[8px]">
                <i class="ri-mail-line"></i> Hire me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              In you think that i'm a good fit in your company or project, don't
              hesitate to contact me!
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me:
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/Tbownt"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.linkedin.com/in/andres-salom/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
