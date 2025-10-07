import React from "react";
import { FaDownload, FaRegStar } from "react-icons/fa";

const AppCard = ({ app }) => {
  const { companyName, description, downloads, ratingAvg } = app;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-5 border hover:scale-105 transition ease-in-out">
        <div className="card-body">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
        </div>
        <div>
          <h2 className="card-title">{companyName}</h2>
          <p>{description}</p>
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
  );
};

export default AppCard;
