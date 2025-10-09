import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa6";
import heroImage from "/hero.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div>
      <div className="pt-10 md:pt-20 ">
        <div className="text-center px-1 space-y-3 md:space-y-5">
          <h1 className="text-3xl md:text-5xl font-bold">
            We Build <br />
            <span className="bg-linear-65 from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mr-2">
              Productive
            </span>
            Apps
          </h1>
          <p className="text-slate-800">
            <i>
              {" "}
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. <br />
              Our goal is to turn your ideas into digital experiences that truly
              make an impact.
            </i>
          </p>
        </div>
        <div className="flex gap-5 justify-center py-3 md:py-5 items-center ">
          <Link
            to="https://play.google.com/store/apps?hl=en"
            className="btn btn-outline bg-white text-xl text-slate-800"
          >
            <BiLogoPlayStore style={{ color: "red" }} />
            Google Play
          </Link>
          <Link
            to="https://play.google.com/store/apps?hl=en"
            className="btn btn-outline bg-white text-xl text-slate-800"
          >
            <FaAppStoreIos style={{ color: "blue" }} />
            App Store
          </Link>
        </div>
        <div className="flex justify-center items-center pt-5 md:pt-10">
          <img src={heroImage} alt="mobileApp" className="px-5" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
