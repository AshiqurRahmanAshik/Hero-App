import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import LoadingSpinner from "../Components/LoadingSpinner";

const InstallApp = () => {
  const { loading } = useApps();
  const [wishlist, setWishList] = useState([]);
  const [sortOption, setSortOption] = useState("none");
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishList(savedList);
  }, []);

  const handleRemove = (id) => {
    const updatedList = wishlist.filter((item) => item.id !== id);
    setWishList(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };

  const handleSort = (value) => {
    setSortOption(value);
    let sortedList = [...wishlist];

    if (value === "price-asc") {
      sortedList.sort((a, b) => a.size - b.size);
    } else if (value === "price-desc") {
      sortedList.sort((a, b) => b.size - a.size);
    }

    setWishList(sortedList);
  };
  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6 w-11/12 mx-auto py-10">
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
            <option value="none">Sort by Size</option>
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
              className="card card-side bg-base-100 shadow flex justify-between items-center"
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
                  <h3 className="card-title">{p.title}</h3>
                  <p className="text-base-content/70">{p.companyName}</p>
                  <p>{p.size} MB</p>
                </div>
              </div>

              <div className="pr-4 flex items-center gap-3">
                <button
                  onClick={() => handleRemove(p.id)}
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
    </div>
  );
};

export default InstallApp;
