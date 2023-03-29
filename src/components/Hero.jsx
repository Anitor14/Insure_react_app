import React from "react";
import {
  bg_pattern_intro_left_desktop,
  image_intro_desktop,
} from "../assets/images";

import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`flex sm:flex-row flex-col-reverse sm:px-10  py-[0px] bg-darkViolet sm:max-h-[600px] w-[100%]`}
    >
      <div
        className={`flex-1 flex justify-center items-center flex-col xl:px-0 sm:px-16 px-6 max-w-[700px] text-center sm:text-left py-[90px]`}
      >
        <h1
          className={`font-poppins font-[700] text-[60px] text-veryLightGray`}
        >
          Humanizing your insurance.
        </h1>
        <p
          className={`font-poppins font-normal text-[15px] text-veryLightGray mb-10 leading-[30px]`}
        >
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <div className="flex sm:justify-start justify-center items-center w-full">
          <button
            type="button"
            className={`px-[33px] py-[8px] bg-transparent hover:bg-veryLightGray font-poppins text-[14px] text-veryLightGray hover:text-veryDarkViolet font-semibold border-solid border-2 border-veryLightGray active:cursor-progress ease-in-out duration-300`}
          >
            View Plans
          </button>
        </div>
      </div>
      {/* <div className="flex justify-center items-center sm:absolute sm:top-[185px] sm:right-[80px] w-screen left-0"> */}
      <img
        src={image_intro_desktop}
        alt="image_intro_desktop"
        className="sm:h-[650px] sm:w-[54%] w-[100%] object-contain md:absolute right-[-40px] top-[185px] "
      />
      {/* </div> */}
    </section>
  );
};

export default Hero;
