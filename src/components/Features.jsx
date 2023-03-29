import React from "react";
import { features } from "../constants";

const Features = () => {
  return (
    <section className=" flex justify-center flex-col items-center sm:py-16 py-6">
      <div className="flex sm:justify-start justify-center items-center w-full">
        <h3 className="font-poppins font-bold xs:text-[60px] text-[40px] text-veryDarkViolet xs:leading-[76.8px] leading-[66.8px]">
          We're different
        </h3>
      </div>

      <div className=" flex flex-col sm:flex-row justify-start items-center gap-6 sm:my-[80px] my-[60px]">
        {features.map((feature) => {
          return (
            <div
              key={feature.id}
              className="flex-col sm:justify-start justify-center items-center px-4 py-2 sm:text-left text-center"
            >
              <div className="sm:w-[80px] w-full h-[80px] flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt="image-icon"
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="font-poppins font-semibold text-[25px] text-veryDarkViolet py-4">
                  {feature.title}
                </h1>
                <p className="font-poppins font-normal text-[15px] text-veryDarkViolet">
                  {feature.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
