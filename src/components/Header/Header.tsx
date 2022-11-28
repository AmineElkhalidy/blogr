import React, { useState } from "react";

// Logo
import Logo from "../../assets/images/logo.svg";

// Arrow down
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const [changeArrowOne, setChangeArrowOne] = useState(false);
  const [changeArrowTwo, setChangeArrowTwo] = useState(false);
  const [changeArrowThree, setChangeArrowThree] = useState(false);

  return (
    <header className="relative w-full h-full bg-gradient-to-r from-lightRed to-lighterRed">
      <nav className="h-16 max-w-6xl mx-auto flex justify-between items-center px-6 2xl:px-0">
        <img
          className="h-6 md:h-8"
          src={Logo}
          alt="Blogr navbar logo"
          loading="lazy"
        />
        {/* Mobile menu */}
        {active && (
          <div className="absolute top-20 left-0 w-full md:hidden">
            <div className="px-6">
              <div className="bg-white rounded-md p-8">
                {/* Navigation Links */}
                <ul className="flex flex-col items-center justify-center gap-6 border-b-2 border-gray-200 py-4">
                  <li>
                    {changeArrowOne ? (
                      <>
                        <a
                          className="inline-flex items-center gap-1 text-darkBlue font-semibold duration-300 hover:text-lightRed"
                          href="#product"
                          onClick={() => setChangeArrowOne(false)}
                        >
                          Product{" "}
                          <span>
                            <ChevronUpIcon className="w-4 h-4 text-lightRed" />
                          </span>
                        </a>

                        <ul className="text-center space-y-2 mt-3 text-darkGrayishBue">
                          <li>Overview</li>
                          <li>Pricing</li>
                          <li>Marketplace</li>
                          <li>Features</li>
                          <li>Integrations</li>
                        </ul>
                      </>
                    ) : (
                      <a
                        className="inline-flex items-center gap-1 text-darkBlue font-semibold duration-300 hover:text-lightRed"
                        href="#product"
                        onClick={() => setChangeArrowOne(true)}
                      >
                        Product{" "}
                        <span>
                          <ChevronDownIcon className="w-4 h-4 text-lightRed" />
                        </span>
                      </a>
                    )}
                  </li>

                  <li>
                    {changeArrowTwo ? (
                      <>
                        <a
                          className="inline-flex items-center gap-1 text-darkBlue font-semibold duration-300 hover:text-lightRed"
                          href="#product"
                          onClick={() => setChangeArrowTwo(false)}
                        >
                          Company{" "}
                          <span>
                            <ChevronUpIcon className="w-4 h-4 text-lightRed" />
                          </span>
                        </a>

                        <ul className="text-center space-y-2 mt-3 text-darkGrayishBue">
                          <li>About</li>
                          <li>Team</li>
                          <li>Blog</li>
                          <li>Careers</li>
                        </ul>
                      </>
                    ) : (
                      <a
                        className="inline-flex items-center gap-1 text-darkBlue font-semibold duration-300 hover:text-lightRed"
                        href="#product"
                        onClick={() => setChangeArrowTwo(true)}
                      >
                        Company{" "}
                        <span>
                          <ChevronDownIcon className="w-4 h-4 text-lightRed" />
                        </span>
                      </a>
                    )}
                  </li>

                  <li>
                    {changeArrowThree ? (
                      <>
                        <a
                          className="inline-flex items-center gap-1 text-darkBlue font-semibold duration-300 hover:text-lightRed"
                          href="#product"
                          onClick={() => setChangeArrowThree(false)}
                        >
                          Connect{" "}
                          <span>
                            <ChevronUpIcon className="w-4 h-4 text-lightRed" />
                          </span>
                        </a>

                        <ul className="text-center space-y-2 mt-3 text-darkGrayishBue">
                          <li>Contact</li>
                          <li>Newsletter</li>
                          <li>LinkedIn</li>
                        </ul>
                      </>
                    ) : (
                      <a
                        className="inline-flex items-center gap-1 text-darkBlue font-semibold duration-300 hover:text-lightRed"
                        href="#product"
                        onClick={() => setChangeArrowThree(true)}
                      >
                        Connect{" "}
                        <span>
                          <ChevronDownIcon className="w-4 h-4 text-lightRed" />
                        </span>
                      </a>
                    )}
                  </li>
                </ul>

                {/* Login & Sign Up buttons container */}
                <div className="flex flex-col justify-center items-center gap-4 mt-6">
                  <a
                    className="text-darkBlue font-semibold duration-300 hover:text-lightRed"
                    href="#login"
                  >
                    Login
                  </a>
                  <a
                    className="text-white font-semibold py-3 px-8 rounded-full bg-gradient-to-l from-bg-lightRed to-bg-lighterRed/30"
                    href="#sign-up"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Toggle nav icon */}
        {active ? (
          <span
            onClick={() => setActive(false)}
            className="md:hidden inline-flex items-center justify-center"
          >
            <XMarkIcon className="h-7 w-7 cursor-pointer text-white duration-300 hover:text-darkBlue" />
          </span>
        ) : (
          <span
            onClick={() => setActive(true)}
            className="md:hidden inline-flex items-center justify-center"
          >
            <Bars3Icon className="h-7 w-7 cursor-pointer text-white duration-300 hover:text-darkBlue" />
          </span>
        )}

        {/* Desktop menu */}
        <div className="hidden md:flex justify-between items-center w-full">
          {/* Navigation Links */}
          <ul className="flex ml-12 gap-6 text-gray-100 font-semibold">
            <li>
              <a className="inline-flex items-center gap-1" href="#product">
                Product{" "}
                <span>
                  <ChevronDownIcon className="w-4 h-4" />
                </span>
              </a>
            </li>

            <li>
              <a className="inline-flex items-center gap-1" href="#company">
                Company{" "}
                <span>
                  <ChevronDownIcon className="w-4 h-4" />
                </span>
              </a>
            </li>

            <li>
              <a className="inline-flex items-center gap-1" href="#connect">
                Connect{" "}
                <span>
                  <ChevronDownIcon className="w-4 h-4" />
                </span>
              </a>
            </li>
          </ul>

          {/* Login & Sign Up buttons container */}
          <div className="flex justify-center items-center gap-6">
            <a className="text-white font-semibold" href="#login">
              Login
            </a>
            <a
              className="text-lightRed font-semibold py-2 px-6 rounded-full bg-white"
              href="#sign-up"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
