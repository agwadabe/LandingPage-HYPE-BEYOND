import React from "react";
import logoDark from "../assets/Hype-Beyond Logo Horizontal Dark Mode.svg";

const Navbar = () => {
  return (
    <div className="navbar fixed z-50 left-0 top-0 w-full bg-[#130d28] shadow-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <div className="navbar-start flex items-center gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Services</a>
              </li>

              <li>
                <a>Portfolio</a>
              </li>

              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="flex shrink-0 items-center">
            <img src={logoDark} alt="Hype & Beyond Logo" className="block h-6 w-auto" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>Services</a>
            </li>

            <li>
              <a>Portfolio</a>
            </li>

            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
