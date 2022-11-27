import React from "react";

// Logo
import Logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto">
      <div>
        {/* Footer logo */}
        <img src={Logo} alt="Footer Logo" />

        {/* Product */}
        <div>
          <h3>Product</h3>
          <ul>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3>Connect</h3>
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
