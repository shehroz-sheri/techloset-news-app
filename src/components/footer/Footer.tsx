import React from "react";
import { Link } from "react-router-dom";
import { TiWiFi } from "react-icons/ti";
import { FaFacebook, FaRedditAlien, FaTwitter } from "react-icons/fa6";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="bg-primary text-white font-poppins">
        <div className="container w-[95%] lg:w-[85%] 2xl:w-[80%] mx-auto max-md:h-[290px] md:h-[250px] flex items-center text-center">
          <div className="grid lg:grid-cols-3 w-full max-md:gap-0 max-lg:gap-6 lg:h-[117px] lg:w-[1133px] mx-auto">
            <div className="flex justify-start max-lg:h-[73px] items-start lg:w-max flex-col">
              <p className="mx-auto">
                <Link to={"/"}>
                  <img
                    className="w-[66px] h-[40px]"
                    src={require("../../assets/images/FooterLogo.png")}
                    alt="News-App"
                  />
                </Link>
              </p>
              <p className="text-gray-400 my-auto text-[12px] max-lg:text-center max-lg:w-full">
                copyright &copy; {year} |{" "}
                <Link
                  to={"https://www.linkedin.com/in/shehroz-arshad/"}
                  target="_blank"
                >
                  Shehroz Arshad
                </Link>
              </p>
            </div>
            <div className="hidden text-start lg:flex flex-col max-lg:my-4">
              <div className="text-[15px] font-[500]">
                <p className="mb-1">Privacy Policy</p>
                <p className="mb-1">Do not sell my personal info</p>
                <p className="mb-1">Terms of service</p>
                <p className="mb-1">
                  <Link to={"/"} target="_blank">
                    nbcnews.com
                  </Link>{" "}
                  Site Map
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-1 lg:gap-9">
              <div className="flex max-sm:flex-col justify-center max-sm:my-3 lg:justify-end md:gap-10 lg:gap-14 lg:w-[387px] text-[15px] font-[500]">
                <Link
                  className="hover:underline hover:underline-offset-2"
                  to={"#"}
                >
                  About
                </Link>
                <Link
                  className="hover:underline hover:underline-offset-2"
                  to={"#"}
                >
                  Contact
                </Link>
                <Link
                  className="hover:underline hover:underline-offset-2"
                  to={"#"}
                >
                  Careers
                </Link>
                <Link
                  className="hover:underline hover:underline-offset-2"
                  to={"#"}
                >
                  Coupons
                </Link>
              </div>
              <div className="flex justify-center lg:ms-auto gap-8 lg:gap-14 max-lg:my-3">
                <TiWiFi
                  className="cursor-pointer hover:text-gray-400"
                  size={"28"}
                  style={{ transform: "rotate(45deg)" }}
                />{" "}
                <FaTwitter
                  className="cursor-pointer hover:text-gray-400"
                  size={"28"}
                />{" "}
                <FaRedditAlien
                  className="cursor-pointer hover:text-gray-400"
                  size={"28"}
                />{" "}
                <Link to={"https://fb.com/shehroz.arshad.376"} target="_blank">
                  <FaFacebook
                    className="cursor-pointer hover:text-gray-400"
                    size={"28"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
