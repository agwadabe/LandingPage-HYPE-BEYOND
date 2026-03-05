import React from "react";
import logoDark from "../assets/Hype&Beyond Logo Horizontal Dark Mode.svg";


const Navbar = () => {
  return (
    <div className="navbar fixed z-1000 left-0 top-0 w-full  bg-base-900 shadow-sm">
      <div className="navbar-start">
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
        <a className="pl-2 text-xl"><img src={logoDark} alt="Hype & Beyond Logo" className="h-5 w-auto" /></a>
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
  );
};

export default Navbar;
