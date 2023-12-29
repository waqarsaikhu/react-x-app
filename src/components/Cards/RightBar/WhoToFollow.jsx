import React from "react";
import { useSelector } from "react-redux";

const WhoToFollowCard = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="flex flex-col mt-3 bg-gray-100 rounded-xl cursor-pointer">
      <div className="ml-3 mt-2">
        <span className="text-black text-xl font-bold">You might like</span>
      </div>
      <div className="flex flex-row hover:bg-gray-200 p-2 my-1">
        <img
          src={user.user.image}
          alt="profileimg"
          className="w-10 h-10 object-cover ml-1 rounded-full"
        />
        <div className="flex flex-col flex-1  px-2">
          <p className="text-base font-bold">{user.user.displayName}</p>
          <p className="text-sm text-gray-500 -my-1">@{user.user.userName}</p>
        </div>

        <button className="bg-black text-sm text-white rounded-full mt-2 mr-3 px-5 py-1 h-fit">
          Follow
        </button>
      </div>
      <div className="flex flex-row  hover:bg-gray-200 p-2 my-1">
        <img
          src={user.user.image}
          alt="profileimg"
          className="w-10 h-10 object-cover ml-1 rounded-full"
        />
        <div className="flex flex-col flex-1  px-2">
          <p className="text-base font-bold">{user.user.displayName}</p>
          <p className="text-sm text-gray-500 -my-1">@{user.user.userName}</p>
        </div>

        <button className="bg-black text-sm text-white rounded-full mt-2 mr-3 px-5 py-1 h-fit">
          Follow
        </button>
      </div>
      <div className="flex flex-row  hover:bg-gray-200 p-2 my-1">
        <img
          src={user.user.image}
          alt="profileimg"
          className="w-10 h-10 object-cover ml-1 rounded-full"
        />
        <div className="flex flex-col flex-1  px-2">
          <p className="text-base font-bold">{user.user.displayName}</p>
          <p className="text-sm text-gray-500 -my-1">@{user.user.userName}</p>
        </div>

        <button className="bg-black text-sm text-white rounded-full mt-2 mr-3 px-5 py-1 h-fit">
          Follow
        </button>
      </div>
      <span className="text-base  ml-4 mb-1 text-blue-400">Show more</span>
    </div>
  );
};

export default WhoToFollowCard;
