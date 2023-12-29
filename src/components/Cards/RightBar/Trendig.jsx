import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

const TrendingCard = () => {
  return (
    <div className=" flex flex-col p-3 rounded-xl bg-gray-100 cursor-pointer">
      <div>
        <span className="font-bold text-lg">Trends for you </span>
      </div>
      <div className=" flex flex-row">
        <div>
          <p className="flex flex-row text-xs text-slate-500 justify-between">
            Lorem ipsum,
          </p>

          <p className="text-lg  text-black font-bold">#Lorem</p>
          <p className="text-xs text-slate-500">1k tweets</p>
        </div>
        <div className="ml-56">
          <span>
            <FiMoreHorizontal />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
