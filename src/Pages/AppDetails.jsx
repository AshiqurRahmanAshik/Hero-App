import React from "react";
import { useParams } from "react-router";
import useApps from "./../Hooks/useApps";
import { FaDownload, FaRegStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  const findApp = apps?.find((app) => app.id === Number(id));

  console.log(findApp);
  if (loading) return <p>Loading..</p>;
  const { image, title, companyName, downloads, ratingAvg, reviews } = findApp;
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 w-11/12 mx-auto items-center py-10 shadow-sm">
        <div className="w-52">
          <img className="w-full" src={image} alt="{title}" />
        </div>
        <div>
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p>Developed by:{companyName}</p>
          </div>
          <div className="flex gap-10 py-2">
            <div>
              <p>
                <FaDownload /> Downloads
              </p>
              <p className="text-2xl font-bold"> {downloads}</p>
            </div>
            <div>
              <p>
                <FaRegStar /> Average Ratings
              </p>
              <p className="text-2xl font-bold"> {ratingAvg}</p>
            </div>
            <div>
              <p>
                <MdReviews /> Total Reviews
              </p>
              <p className="text-2xl font-bold"> {reviews}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDetails;
