import { useState } from "react";
import { Link } from "react-router-dom";
import UserButton from "./UserButton";

const Header = ({ backgroundColor, darkBackgroundColor, hoverColor }) => {
  const username = localStorage.getItem("username").toUpperCase();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Regular header for large screens */}
      <header
        className={`hidden lg:flex md:flex justify-between ${backgroundColor} ${darkBackgroundColor} text-white`}
      >
        <Link to="/Cards">
          <img
            src="../../logo_square.png"
            className="ml-4 h-20 my-1"
            alt="logo"
          />
        </Link>
        <div className="flex mr-6 py-6 space-x-4">
          <Link
            to="/About"
            className={`${hoverColor} duration-150 rounded-2xl px-4 py-1`}
          >
            About
          </Link>
          <Link
            to="/Contact"
            className={`${hoverColor} duration-150 rounded-2xl px-4 py-1`}
          >
            Contact
          </Link>
          <UserButton
            userName={username}
            backgroundColor={backgroundColor}
            darkBackgroundColor={darkBackgroundColor}
            hoverColor={hoverColor}
          />
        </div>
      </header>

      {/* Hamburger menu icon for small screens */}
      <header className="md:hidden absolute right-2 -top-3">
        <button
          className={`${backgroundColor} ${darkBackgroundColor} ${hoverColor} p-2 rounded-md`}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Background overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Hamburger menu content */}
        {isOpen && (
          <div
            className={`${backgroundColor} ${darkBackgroundColor} fixed top-0 right-0 h-full w-2/5 border-l border-gray-800 text-white z-50`}
          >
            <ul className="flex flex-col items-center h-full justify-center p-4 space-y-4">
              <li>
                <Link
                  to="/Cards"
                  className={`${hoverColor} text-3xl duration-150 rounded-2xl px-4 py-1`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className={`${hoverColor} text-3xl duration-150 rounded-2xl px-4 py-1`}
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className={`${hoverColor} text-3xl duration-150 rounded-2xl px-4 py-1`}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <UserButton
                  userName={username}
                  backgroundColor={backgroundColor}
                  darkBackgroundColor={darkBackgroundColor}
                  hoverColor={hoverColor}
                  onClick={toggleMenu}
                />
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute top-2 right-2 h-8 w-8 text-white ${hoverColor} rounded-lg`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={toggleMenu}
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
