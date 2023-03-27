import { useState } from "react";
import {
  bg_pattern_intro_left_mobile,
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
      </div>
    </nav>
  );
};

export default Navbar;
