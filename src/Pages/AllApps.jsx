import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "./AppCard";

const AllApps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.companyName.toLowerCase().includes(term))
    : apps;
  return (
    <div>
      <div className="text-center pt-10">
        <h3 className="text-3xl font-bold">Our All Applications</h3>
        <p className="text-slate-600">
          Explore All Trending Apps on the Market developed by us. We code for
          millions of dream.
        </p>
      </div>
      <div className="flex justify-between w-11/12 mx-auto pt-10">
        <p className="font-bold md:text-xl">
          Apps found({searchedApps.length})
        </p>
        <label className="input input-bordered">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 w-11/12 mx-auto">
        {searchedApps?.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default AllApps;
