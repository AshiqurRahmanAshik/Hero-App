import React from "react";
import { useParams } from "react-router";
import useApps from "./../Hooks/useApps";
import { FaDownload, FaRegStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  const findApp = apps?.find((app) => app.id === Number(id));
  console.log(findApp);

  if (loading)
    return <p className="text-center py-10 text-gray-600">Loading...</p>;
  if (!findApp)
    return <p className="text-center py-10 text-red-500">App not found.</p>;

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    ratings,
  } = findApp;

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white shadow-md rounded-2xl p-6">
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

          <button className="mt-6 bg-[#00D390] hover:bg-[#05b57a] text-white font-semibold px-6 py-2 rounded-lg">
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <div className="py-10">
        <h3 className="font-bold text-xl py-2">Ratings</h3>
        <div className="shadow-sm">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart
              layout="vertical"
              width={500}
              height={400}
              data={ratings}
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Bar dataKey="count" barSize={20} fill="#FF8811" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="py-10">
        <h2 className="font-bold">Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
