import React from "react";
import { useNavigate } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { MdHomeFilled, MdOutlineMailOutline } from "react-icons/md";
import { FiSearch, FiMoreHorizontal } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { RiFileList2Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import { LiaSignOutAltSolid } from "react-icons/lia";

import { auth } from "../../firebase.config";

import { useSelector } from "react-redux";
import Button from "../../stories/Button";

const Sidebar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const signOutAndNavigate = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
  const profileClick = async () => {
    navigate("SignupForm/Home/Profile");
  };

  return (
    <div className="flex-shrink-0  w-64 h-screen bg-white p-1  ml-24 border-r-2 border-gray-100">
      <ul className="space-y-2">
        <li>
          <FaXTwitter className="ml-2 text-5xl rounded-full hover:bg-gray-200 p-2" />
        </li>
        <li>
          <Button icon={<MdHomeFilled />} text="Home" />
        </li>
        <li>
          <Button icon={<FiSearch />} text="Explore" />
        </li>
        <li>
          <Button icon={<GrNotification />} text="Notifications" />
        </li>
        <li>
          <Button icon={<MdOutlineMailOutline />} text="Messages" />
        </li>
        <li>
          <Button icon={<RiFileList2Line />} text="Lists" />
        </li>
        <li>
          <Button icon={<GoPeople />} text="Communities" />
        </li>
        <li>
          <Button icon={<FaXTwitter />} text="Premium" />
        </li>
        <li>
          <Button
            onClick={profileClick}
            icon={<IoPersonOutline />}
            text="Profile"
          />
        </li>
        <li>
          <Button icon={<CgMoreO />} text="More" />
        </li>
        <li>
          <Button
            onClick={signOutAndNavigate}
            icon={<LiaSignOutAltSolid />}
            text="Sign Out"
          />
        </li>
      </ul>
      <button className="bg-blue-500 rounded-full text-white w-48 mt-4 py-3 ml-2">
        <span className="font-bold text-lg">Post</span>
      </button>
      <div className="mt-4 ml-1 flex w-52  hover:bg-gray-200 rounded-full cursor-pointer">
        <img
          src={user.user.image}
          alt="Profile"
          className="w-8 h-8 mt-2  ml-2 rounded-full"
        />

        <div className="ml-2 mt-1  flex flex-col">
          <span>{user.user.displayName}</span>
          <span className="text-gray-400 text-sm">@{user.user.userName}</span>
        </div>
        <div className="flex items-center justify-center ml-16">
          <FiMoreHorizontal />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
