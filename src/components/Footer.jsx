import {
  insure_logo,
  facebook_logo,
  pinterest,
  instagram,
  twitter,
} from "../assets/images";

import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center ">
      <div>
        <img src={insure_logo} alt="insure-logo" />
        <div className="flex items-center justify-center">
          <img src={facebook_logo} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="interest" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink, index) => {
          return (
            <div
              key={index}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-black">
                {footerLink.title}
              </h4>
              {footerLink.links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className={`text-black font-normal font-poppins text-[18px]`}
                  >
                    {link.name}
                  </li>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Footer;
