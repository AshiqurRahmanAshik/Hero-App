import React from "react";
import { Link, useRouteError } from "react-router";
import errorImg from "/error-404.png";
import Navbar from "../Components/Navbar";
import Footer from "./../Components/Footer";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center space-y-2">
        {error.message}
        <img src={errorImg} alt="" />
        <p className="font-bold text-2xl">Oops, page not found!</p>
        <p className="text-slate-500">
          The page you are looking for is not available.
        </p>
        <Link
          to="/"
          className="btn bg-gradient-to-br px-8 from-[#632EE3] to-[#9F62F2] opacity-80 text-white"
        >
          Go Back!
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
