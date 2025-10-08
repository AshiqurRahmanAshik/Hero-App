import React from "react";
import { FaDownload, FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;
  return (
    <Link to={`/app-details/${id}`}>
      <div>
        <div className="card bg-base-100 shadow-sm p-5 border hover:scale-105 transition ease-in-out">
          <div className="card-body">
            <figure className="h-45 overflow-hidden">
              <img src={image} alt="Apps" className="w-full object-cover" />
            </figure>
          </div>
          <div>
            <h2 className="card-title">{title}</h2>
          </div>
          <div className="flex justify-between py-1">
            <p className="flex items-center gap-2 bg-gray-100 p-1 rounded text-green-600">
              <FaDownload />
              {downloads}
            </p>
            <p className="flex items-center gap-2 bg-gray-100 p-1 rounded text-orange-400">
              <FaRegStar style={{ color: "orange" }} />
              {ratingAvg}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
