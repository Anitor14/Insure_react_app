import React from "react";
import styles from "../style";

const Button = () => {
  return (
    <button
      type="button"
      className={`px-[33px] py-[8px] bg-veryLightGray hover:bg-veryDarkViolet font-poppins  text-[14px] text-veryDarkViolet hover:text-veryLightGray font-semibold border-solid border-2 border-veryDarkViolet active:cursor-progress ease-in-out duration-300`}
    >
      View Plans
    </button>
  );
};

export default Button;
