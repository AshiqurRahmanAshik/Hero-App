import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router";

const AppNotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center space-y-2 py-5">
        <p className="font-bold text-2xl">App is not found you</p>
        <Link
          to="/"
          className="btn bg-gradient-to-br px-8 from-[#632EE3] to-[#9F62F2] opacity-80 text-white"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default AppNotFound;
