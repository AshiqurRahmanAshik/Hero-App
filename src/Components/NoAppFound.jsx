import { Link } from "react-router";

const NoAppFound = () => {
  return (
    <div className=" w-11/12 mx-auto pt-10 flex flex-col gap-10 ">
      <div className="flex justify-between border ">
        <p className="font-bold md:text-xl">Apps found(0)</p>
        <label className="input input-bordered">
          <input type="search" placeholder="Search Apps" />
        </label>
      </div>
      <div className="flex flex-col items-center justify-center space-y-5 border">
        <h3 className="text-center text-4xl font-bold">No Apps Found</h3>
        <Link to="/">
          <button className="btn w-max bg-gradient-to-br text-white from-[#632EE3] to-[#9F62F2]">
            Show All Apps
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoAppFound;
