import React from "react";
import Hero from "../Components/Hero";
import Stats from "../Components/Stats";
import useApps from "../Hooks/useApps";
import AppCard from "./AppCard";
import { Link } from "react-router";

const Home = () => {
  const { apps } = useApps();
  const trendingApps = apps.slice(0, 8);
  console.log(trendingApps);

  return (
    <div>
      <Hero />
      <Stats />
      <div>
        <div className="text-center pt-10 md:pt-20">
          <h3 className="text-3xl font-bold">Trending Apps</h3>
          <p className="text-slate-600">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 md:py-20 w-11/12 mx-auto">
          {trendingApps?.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="flex justify-center pb-10 px-5">
          <Link to="/apps">
            <button className="btn btn-outline bg-gradient-to-br text-white from-[#632EE3] to-[#9F62F2]">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
