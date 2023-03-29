import React from "react";
import { bg_pattern_how_we_work_desktop } from "../assets/images";

const Work = () => {
  return (
    <section className="flex-col flex sm:flex-row justify-center items-center bg-darkViolet sm:py-[20px] py-[75px] sm:px-[15px] px-[20px] gap-10 sm:gap-[120px] relative ">
      <div className="max-w-[500px]">
        <h3 className="font-poppins font-bold xs:text-[40px] text-[35px] xs:leading-[76.8px] leading-[66.8px] text-veryLightGray text-center">
          Find out more <br className="sm:block hidden" /> about how we work
        </h3>
      </div>
      <div className="">
        <button
          type="button"
          className={`px-[33px] py-[8px] bg-transparent hover:bg-veryLightGray font-poppins text-[14px] text-veryLightGray hover:text-veryDarkViolet font-semibold border-solid border-2 border-veryLightGray active:cursor-progress ease-in-out duration-300`}
        >
          How we work
        </button>
      </div>
      <img
        src={bg_pattern_how_we_work_desktop}
        alt="pattern-how-we-work-image"
        className="absolute w-[400px] h-[196px] right-[0px] overflow-auto"
      />
    </section>
  );
};

export default Work;
