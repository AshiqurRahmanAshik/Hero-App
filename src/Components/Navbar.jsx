import React from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";
import logo from "/logo.png";
import { FaGithub, FaHome } from "react-icons/fa";
import { RiAppsFill } from "react-icons/ri";
import { MdInstallMobile } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="navbar bg-base-100 w-11/12 mx-auto ">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/apps">Apps</Link>
              </li>
              <li>
                <Link to="/install-apps">Installation</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center justify-center">
              <img className="w-8" src={logo} />
              <h2 className="text-xl font-bold bg-linear-65 from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                HERO.IO
              </h2>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <NavLink to="/home">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps">
                <RiAppsFill />
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/install-apps">
                <MdInstallMobile />
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="https://github.com/AshiqurRahmanAshik"
            className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] opacity-80 text-white"
          >
            <FaGithub />
            Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
