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

  return (
    <header className="relative w-full h-full bg-lighterRed from-r to-lightRed">
      <nav className="h-16 flex justify-between items-center px-6">
        <img
          className="h-6"
          src={Logo}
          alt="Blogr navbar logo"
          loading="lazy"
        />

        {/* Mobile menu */}
        {active ? (
          <div className="flex justify-center items-center h-full w-full px-6">
            <div className="absolute top-20 left-0 w-full bg-white shadow-md">
              {/* Navigation Links */}
              <ul className="flex flex-col items-center justify-center gap-6 border-b-2/80">
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
              <div className="flex flex-col justify-center items-center gap-4">
                <a className="" href="#login">
                  Login
                </a>
                <a className="" href="#sign-up">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        ) : active ? (
          <span
            onClick={() => setActive(false)}
            className="inline-flex items-center justify-center"
          >
            <XMarkIcon className="h-7 w-7 cursor-pointer text-white" />
          </span>
        ) : (
          <span
            onClick={() => setActive(true)}
            className="inline-flex items-center justify-center"
          >
            <Bars3Icon className="h-7 w-7 cursor-pointer text-white" />
          </span>
        )}

        {/* Desktop menu */}
        <div className="hidden">
          {/* Navigation Links */}
          <ul>
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
          <div>
            <a className="" href="#login">
              Login
            </a>
            <a className="" href="#sign-up">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
