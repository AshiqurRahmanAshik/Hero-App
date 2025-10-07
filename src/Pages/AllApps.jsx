import React from "react";
import useApps from "../Hooks/useApps";
import AppCard from "./AppCard";

const AllApps = () => {
  const { apps } = useApps();
  return (
    <div>
      <div className="text-center pt-10">
        <h3 className="text-3xl font-bold">Trending Apps</h3>
        <p className="text-slate-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 w-11/12 mx-auto">
        {apps?.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <div className="flex justify-center pb-10 px-5">
        <button className="btn btn-outline bg-gradient-to-br text-white from-[#632EE3] to-[#9F62F2]">
          Show All
        </button>
      </div>
    </div>
  );
};

export default AllApps;
