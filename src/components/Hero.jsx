import React from "react";
import heroImg from "../assets/images/hero.png";
import CountUp from "react-countup";

export const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* hero left content */}
          <div className="w-full md:basis-1/2">
            <h5 className="animate__animated animate__fadeInLeft text-headingColor font-[600] text-[16px]">
              Hi There!
            </h5>
            <h1 className="animate__animated animate__fadeInLeft animate__delay-1s text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">
              I'm Andres Salom <br />
              Web Developer
            </h1>

            <div className="animate__animated animate__fadeInRight animate__delay-2s flex items-center gap-6 mt-7">
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJbPfwBnBKSfhcjsZDvVlNLnpcWnrRnptWkTVtbVSpjtsKLjRPfCjwTVWsFVrmRgfPxg"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextcolor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-add-line"></i> Get in touch
                </button>
              </a>

              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See projects
              </a>
            </div>
            <p className="animate__animated animate__fadeInUp animate__delay-3s flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10">
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              I am a Web Developer oriented to Front-End graduated from Bootcamp
              SoyHenry and self-taught, I have specialized in the React library
              for all my projects and practices. I am available to work
              remotely. I am motivated to learn effectively and confident to
              complete challenging tasks.
            </p>
            <div className="flex items-center gap-4 mt-14">
              <span className="text-smallTextColor text-[18px] font-[600]">
                My profiles:
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/andres-salom/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600] cursor-pointer"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/Tbownt"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600] cursor-pointer"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* hero left end */}
          {/* hero img */}

          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="animate__animated animate__fadeInRight flex items-center justify-center">
              <img src={heroImg} alt="hero img" />
            </figure>
          </div>
          {/* hero img end */}
          {/* hero content right */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <h2 className="text-headingColor font-[700] text-[32px]">
              <CountUp start={0} end={5} duration={2} suffix="+" />
            </h2>
            <h4 className="text-headingColor font-[600] text-[18px]">
              Projects made
            </h4>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={1200} duration={3} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Hours of Coding
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
