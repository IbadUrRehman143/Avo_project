import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="tw-w-full tw-bg-transparent tw-fixed  tw-top-0 tw-z-50">
      <div className="container tw-mx-auto tw-px-4">
        <div className="tw-flex tw-justify-between tw-items-center tw-py-5">
          {/* Logo */}
          <div className="tw-text-white  tw-font-bold">
            <a href="#" className="tw-no-underline tw-text-white">
              <h4>a<span className="tw-text-red-600">v</span>o</h4>
            </a>
          </div>

          {/* Toggle Button for Mobile */}
          <div className="lg:tw-hidden">
            <button
              onClick={toggleMenu}
              className="tw-text-white tw-bg-black tw-py-2 tw-px-4 tw-rounded focus:tw-outline-none"
            >
              Menu
            </button>
          </div>

          {/* Navigation Menu */}
          <nav
            className={`lg:tw-flex tw-flex-col lg:tw-flex-row tw-absolute lg:tw-static tw-bg-gray-800 lg:tw-bg-transparent tw-w-full lg:tw-w-auto tw-top-16 lg:tw-top-0 tw-left-0 lg:tw-left-auto tw-p-5 lg:tw-p-0 ${isMenuOpen ? 'tw-flex' : 'tw-hidden'}`}
          >
            <ul className="tw-flex lg:tw-flex-row tw-flex-col tw-gap-5  lg:tw-gap-10">
              <li className="tw-list-none">
                <a
                  href="#"
                  className="tw-no-underline hover:tw-text-red-600 tw-font-lightbold tw-text-white"
                >
                  Home
                </a>
              </li>
              <li className="tw-list-none">
                <a
                  href="#"
                  className="tw-no-underline hover:tw-text-red-600 tw-font-lightbold tw-text-white"
                >
                  About
                </a>
              </li>
              <li className="tw-list-none">
                <a
                  href="#"
                  className="tw-no-underline hover:tw-text-red-600 tw-font-lightbold tw-text-white"
                >
                  Work
                </a>
              </li>
              <li className="tw-list-none">
                <a
                  href="#"
                  className="tw-no-underline hover:tw-text-red-600 tw-font-lightbold tw-text-white"
                >
                  Blog
                </a>
              </li>
              <li className="tw-list-none">
                <a
                  href="#"
                  className="tw-no-underline hover:tw-text-red-600 tw-font-lightbold tw-text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
