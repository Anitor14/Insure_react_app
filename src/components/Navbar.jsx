import { useState } from "react";
import {
  bg_pattern_mobile_nav,
  close,
  hamburger,
  insure_logo,
} from "../assets/images";
import Button from "./Button";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-7 justify-between items-center">
      <img src={insure_logo} alt="nav-logo" />
      <div className="sm:flex hidden justify-between items-center gap-[25px]">
        <ul className="list-none flex justify-end items-center flex-1 leading-[20px]">
          {navLinks.map((nav, index) => {
            return (
              <li
                key={nav.id}
                className={`font-poppins font-[500] cursor-pointer text-[14px] text-darkGrayishViolet ${
                  index == navLinks.length - 1 ? "mr-0" : "mr-10"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            );
          })}
        </ul>
        <Button />
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : hamburger}
          alt="menu-logo"
          className={`w-[32px] h-[32px] object-contain`}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-veryDarkViolet w-screen h-screen absolute top-20 right-0  overflow-hidden`}
        >
          <ul className="list-none flex flex-col justify-start items-center py-[40px] flex-1">
            {navLinks.map((nav, index) => {
              return (
                <li
                  key={nav.id}
                  className={`font-poppins font-[400] cursor-pointer text-[25px] text-veryLightGray mb-10 `}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              );
            })}
            <button
              type="button"
              className={`px-[100px] py-[10px] max-w-[100%] bg-veryDarkViolet hover:bg-veryLightGray font-poppins  text-[25px] text-veryLightGray hover:text-veryDarkViolet font- border-solid border-2 border-veryLightGray active:cursor-progress ease-in-out duration-300`}
            >
              View Plans
            </button>
            <div className="flex justify-center items-center border-2 border-veryLightGray">
              <img
                src={bg_pattern_mobile_nav}
                alt="bg_patter_intro_left_mobile"
                className={`w-[100%] h-[100%] object-contain absolute bottom-[-40%]`}
              />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
