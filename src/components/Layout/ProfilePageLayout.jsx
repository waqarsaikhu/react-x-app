import React from "react";
import Sidebar from "../HomePage/Sidebar";
import RightSidebar from "../HomePage/RightSidebar";
import { useSelector } from "react-redux";
import Profile from "../Profile/Profile";

const ProfilePageLayout = () => {
  const user = useSelector((state) => state.user);
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  if (user.user === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-24 w-24"></div>
      </div>
    );
  }
  return (
    <div className="flex flex-row justify-center">
      <Sidebar className="col-span-2" />
      <div>
        <Profile className="w-96" />
      </div>
      <RightSidebar className="col-span-2" />
    </div>
  );
};

export default ProfilePageLayout;
