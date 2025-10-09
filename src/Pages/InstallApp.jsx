import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import LoadingSpinner from "../Components/LoadingSpinner";
import { FaDownload, FaRegStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const InstallApp = () => {
  const { loading } = useApps();
  const [wishlist, setWishList] = useState([]);
  const [sortOption, setSortOption] = useState("none");
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishList(savedList);
  }, []);

  const handleRemove = (id, title) => {
    const updatedList = wishlist.filter((item) => item.id !== id);
    setWishList(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    toast(`${title} is uninstalled`);
  };

  const handleSort = (value) => {
    setSortOption(value);
    let sortedList = [...wishlist];

    if (value === "price-asc") {
      sortedList.sort((a, b) => a.ratingAvg - b.ratingAvg);
    } else if (value === "price-desc") {
      sortedList.sort((a, b) => b.ratingAvg - a.ratingAvg);
    }

    setWishList(sortedList);
  };
  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6 w-11/12 mx-auto py-10">
      <div className="text-center pt-5 space-y-1">
        <h3 className="text-3xl font-bold">Your Installed Apps</h3>
        <p className="text-slate-600">
          Explore All Trending Apps on the Market developed by us.
        </p>
      </div>
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-xl font-semibold">
          <span className="">{wishlist.length} Apps Found.</span>
        </h1>

        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="none">Sort By Rating</option>
            <option value="price-asc">Low → High</option>
            <option value="price-desc">High → Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-3">
        {wishlist.length > 0 ? (
          wishlist.map((p) => (
            <div
              key={p.id}
              className="card card-side bg-base-100 shadow flex flex-col md:flex-row md:justify-between md:items-center"
            >
              <div className="flex items-center p-2">
                <figure>
                  <img
                    className="w-40 h-28 object-cover"
                    src={p.image}
                    alt={p.title}
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-2xl">{p.title}</h3>
                  <p className="text-base-content/70">{p.companyName}</p>
                  <div className="flex gap-5">
                    <p className="flex items-center justify-center gap-1 text-xl text-slate-700 ">
                      <FaRegStar fill="orange" size={28} />
                      {p.ratingAvg}
                    </p>
                    <p className="flex items-center justify-center gap-1 text-xl text-slate-700 ">
                      <FaDownload className="text-[#9F62F2]" size={28} />
                      {p.size}
                    </p>
                    <p className="flex items-center justify-center gap-1 text-xl text-slate-700 ">
                      <MdReviews className="text-[#00D390]" size={28} />
                      {p.reviews}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pr-4 flex items-center justify-center gap-3 pb-5 md:pb-0">
                <button
                  onClick={() => handleRemove(p.id, p.title)}
                  className="btn btn-outline btn-sm text-white bg-[#00D390]"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-10">
            No apps installed yet.
          </p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default InstallApp;
