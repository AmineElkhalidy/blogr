import React from "react";

// Logo
import Logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-darkBlackBlue rounded-tr-[6rem] md:rounded-tr-[10rem]">
      <div className="max-w-6xl mx-auto">
        <div className="py-20 h-full flex justify-center items-center">
          <div className="grid sm:grid-cols-4 sm:gap-14 md:gap-28 lg:gap-48">
            {/* Footer logo */}
            <img className="mb-14 sm:mb-0" src={Logo} alt="Footer Logo" />

            {/* Product */}
            <div className="text-center mb-12 sm:text-left sm:mb-0">
              <h3 className="text-xl font-semibold text-white mb-6">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a className="text-lg text-grayishBlue font-medium" href="#">
                    Overview
                  </a>
                </li>
                <li>
                  <a className="text-lg text-grayishBlue font-medium" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="text-lg text-grayishBlue font-medium" href="#">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a className="text-lg text-grayishBlue font-medium" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a className="text-lg text-grayishBlue font-medium" href="#">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="text-center mb-12 sm:text-left sm:mb-0">
              <h3 className="text-xl font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a className="text-lg text-grayishBlue font-medium" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-lg text-grayishBlue font-medium" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a className="text-lg text-grayishBlue font-medium" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="text-lg text-grayishBlue font-medium" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-white mb-6">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a className="text-lg text-grayishBlue font-medium" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="text-lg text-grayishBlue font-medium" href="#">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a className="text-lg text-grayishBlue font-medium" href="#">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
