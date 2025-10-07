import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa6";
import heroImage from "/hero.png";

const Hero = () => {
  return (
    <div>
      <div className="py-10 md:py-20 ">
        <div className="text-center px-1 space-y-3 md:space-y-5">
          <h1 className="text-3xl md:text-5xl font-bold">
            We Build <br />
            <span className="bg-linear-65 from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mr-2">
              Productive
            </span>
            Apps
          </h1>
          <p className="text-slate-800">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
        </div>
        <div className="flex gap-5 justify-center py-3 md:py-5">
          <button className="btn btn-outline">
            <BiLogoPlayStore />
            Google Play
          </button>
          <button className="btn btn-outline">
            <FaAppStoreIos />
            App Store
          </button>
        </div>
        <div className="flex justify-center items-center pt-5 md:pt-10">
          <img src={heroImage} alt="mobileApp" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
