import React from "react";
import { Link } from "react-router";
import appErrorImg from "/App-Error.png";

const AppNotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center space-y-2 py-5">
        <img src={appErrorImg} alt="" />
        <p className="font-bold text-2xl">App is not found you</p>
        <Link
          to="/"
          className="btn bg-gradient-to-br px-8 from-[#632EE3] to-[#9F62F2] opacity-80 text-white"
        >
          Back to Home!
        </Link>
      </div>
    </div>
  );
};

export default AppNotFound;
