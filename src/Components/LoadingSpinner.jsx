import React from "react";
import logo from "/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white text-[#00D390] text-6xl font-bold animate-spin">
      <span>L</span>
      <img src={logo} alt="O" className="w-10 h-10 mx-1 animate-spin" />
      <span>ADING</span>
    </div>
  );
};

export default LoadingSpinner;
