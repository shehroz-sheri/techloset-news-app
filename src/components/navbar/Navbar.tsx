import React from "react";
import { Link } from "react-router-dom";
import { useNavbar } from "./useNavbar";

export const Navbar: React.FC = () => {
  const navLinks = [
    "Politics",
    "Business",
    "Sports",
    "World",
    "Travel",
    "Podcasts",
  ];
  const { isOpen, toggleIsOpen } = useNavbar();

  return (
    <>
      <div className="bg-light sticky top-0 z-10 shadow-md h-20">
        <div className="md:w-[94%] lg:w-[95%] 2xl:w-[1368px] mx-auto font-nunito">
          <nav className="bg-light h-20">
            <div className="mx-auto max-sm:pl-3 max-sm:pr-1">
              <div className="relative flex items-center justify-between h-20">
                <div className="flex items-center w-full">
                  <div className="flex-shrink-0">
                    <Link to={"/"}>
                      <img
                        className="h-[40px] w-[49.33px] xl:w-[62.79px] xl:h-[52px]"
                        src={require("../../assets/images/Logo.png")}
                        alt="Workflow"
                      />
                    </Link>
                  </div>
                  <div className="hidden lg:block lg:mx-auto lg:w-[793px] 2xl:w-[893px]">
                    <div className="flex text-dark justify-between">
                      <Link
                        to={"#"}
                        className="hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-[600]"
                      >
                        <img
                          className="inline me-[6px] w-2"
                          src={require("../../assets/images/Checkbox.png")}
                          alt=""
                        />
                        Corona Updates
                      </Link>
                      {navLinks.map((link, i) => (
                        <Link
                          key={i}
                          to={`/search?query=${link}`}
                          className="hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-[600]"
                        >
                          {link}
                        </Link>
                      ))}
                      <span className="lg:flex items-center hidden">
                        <img
                          className="inline w-[12.01px] h-[12.01px]"
                          src={require("../../assets/images/NavVector.png")}
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <>
                      <span className="cursor-pointer mx-3 py-2 rounded-md text-sm font-medium">
                        <img
                          className="w-3"
                          src={require("../../assets/images/Profile.png")}
                          alt="user"
                        />
                      </span>

                      <span className="cursor-pointer mx-3 py-2 rounded-md text-sm font-medium">
                        <Link to={"/search"}>
                          <img
                            className="w-4"
                            src={require("../../assets/images/SearchIcon.png")}
                            alt="search"
                          />
                        </Link>
                      </span>
                      <button
                        onClick={toggleIsOpen}
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                      >
                        <img
                          className="block h-4 w-4 ms-2"
                          src={require("../../assets/images/MenuLines.png")}
                          alt="menu"
                        />
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="cursor-pointer mx-3 py-2 rounded-md text-sm font-medium">
                        <img
                          className="w-3"
                          src={require("../../assets/images/Profile.png")}
                          alt="user"
                        />
                      </span>

                      <span className="cursor-pointer mx-3 py-2 rounded-md text-sm font-medium">
                        <Link to={"/search"}>
                          <img
                            className="w-4"
                            src={require("../../assets/images/SearchIcon.png")}
                            alt="search"
                          />
                        </Link>
                      </span>
                      <button
                        onClick={toggleIsOpen}
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                      >
                        <img
                          className="block h-4 w-4 ms-2"
                          src={require("../../assets/images/MenuLines.png")}
                          alt="menu"
                        />
                      </button>
                    </>
                  )}
                </div>
                <div className="hidden lg:block lg:ml-auto">
                  <div className="flex space-x-5">
                    <span className="cursor-pointer mx-3 py-2 rounded-md text-sm font-medium">
                      <img
                        className="w-4"
                        src={require("../../assets/images/Profile.png")}
                        alt="user"
                      />
                    </span>

                    <span className="cursor-pointer mx-3 py-2 rounded-md text-sm font-medium">
                      <Link to={"/search"}>
                        <img
                          className="w-5"
                          src={require("../../assets/images/SearchIcon.png")}
                          alt="search"
                        />
                      </Link>
                    </span>

                    <span className="ps-3 flex items-center">
                      <img
                        className="w-6 h-4"
                        src={require("../../assets/images/MenuLines.png")}
                        alt="menu"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`lg:hidden fixed top-[80px] inset-0 bg-gray-900 bg-opacity-80 z-20 transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              id="mobile-menu"
            >
              <div
                className="absolute text-white inset-0 p-2 flex flex-col space-y-1 z-30"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleIsOpen}
              >
                <Link
                  to={"#"}
                  className="px-3 py-2 rounded-md text-sm block font-medium"
                >
                  Corona Updates
                </Link>
                {navLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={`/search?query=${link}`}
                    className="px-3 py-2 rounded-md text-sm block font-medium"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
