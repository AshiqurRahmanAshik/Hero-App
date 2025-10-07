import React from "react";

const Stats = () => {
  return (
    <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-center py-10 space-y-5 px-1">
      <h2 className="text-2xl font-bold">Trusted By Millions, Built For You</h2>
      <div className="flex justify-center items-center gap-15">
        <div>
          <small>Total Downloads</small>
          <p className="text-3xl font-bold ">29.6M</p>
          <small>21% More than last Month</small>
        </div>
        <div>
          <small>Total Reviews</small>
          <p className="text-3xl font-bold ">906K</p>
          <small>46% More than last Month</small>
        </div>
        <div>
          <small>Active Apps</small>
          <p className="text-3xl font-bold ">132+</p>
          <small>31 more will launch</small>
        </div>
      </div>
    </div>
  );
};

export default Stats;
