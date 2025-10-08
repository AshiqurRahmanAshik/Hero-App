import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "./../Hooks/useApps";
import { FaDownload, FaRegStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import {
  Bar,
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";
import AppNotFound from "./AppNotFound";
import LoadingSpinner from "../Components/LoadingSpinner";

const AppDetails = () => {
  const { id } = useParams();
  const [install, setInstall] = useState("Install Now");
  const [isDisabled, setIsDisabled] = useState(false);
  const { apps, loading } = useApps();

  const findApp = apps?.find((app) => app.id === Number(id));

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isAlreadyInstalled = existingList.some((p) => p.id === Number(id));
    if (isAlreadyInstalled) {
      setInstall("Installed");
      setIsDisabled(true);
    }
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!findApp) return <AppNotFound />;

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
    ratings,
  } = findApp;

  const handleInstallBtn = () => {
    const existingList = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isDuplicate = existingList.some((p) => p.id === findApp.id);

    if (isDuplicate) {
      toast(`${title} is already installed.`);
      setInstall("Installed");
      setIsDisabled(true);
      return; 
    }

    const updatedList = [...existingList, findApp];
    localStorage.setItem("wishlist", JSON.stringify(updatedList));

    toast(`${title} installed successfully.`);
    setInstall("Installed");
    setIsDisabled(true);
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex flex-col md:flex-row items-center gap-10 shadow-sm rounded-2xl p-6">
        <div className="w-48 flex-shrink-0">
          <img className="w-full rounded-xl" src={image} alt={title} />
        </div>

        <div className="flex-1">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-500 mt-1">
              Developed by: <span className="font-semibold">{companyName}</span>
            </p>
          </div>

          <div className="h-[2px] w-full bg-gray-100 my-4"></div>

          <div className="flex flex-wrap gap-8 text-gray-700">
            <div className="flex flex-col items-center">
              <FaDownload className="text-2xl text-[#632EE3]" />
              <p className="font-medium">Downloads</p>
              <p className="text-xl font-bold">{downloads}</p>
            </div>

            <div className="flex flex-col items-center">
              <FaRegStar className="text-2xl text-[#9F62F2]" />
              <p className="font-medium">Avg. Rating</p>
              <p className="text-xl font-bold">{ratingAvg}</p>
            </div>

            <div className="flex flex-col items-center">
              <MdReviews className="text-2xl text-[#00D390]" />
              <p className="font-medium">Total Reviews</p>
              <p className="text-xl font-bold">{reviews}</p>
            </div>
          </div>

          <button
            onClick={handleInstallBtn}
            disabled={isDisabled}
            className={`mt-6 font-semibold px-6 py-2 rounded-lg ${
              isDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00D390] hover:bg-[#05b57a] text-white"
            }`}
          >
            {install}
          </button>
        </div>
      </div>

      <div className="py-10">
        <h3 className="font-bold text-xl py-2">Ratings</h3>
        <div className="shadow-sm rounded-2xl">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart layout="vertical" data={ratings}>
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Bar dataKey="count" barSize={20} fill="#00D390" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="py-10">
        <h2 className="font-bold text-xl">Description</h2>
        <p>{description}</p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetails;
