import React from "react";
import Sidebar from "../HomePage/Sidebar";
import Feed from "../HomePage/Feed";
import RightSidebar from "../HomePage/RightSidebar";
import { useSelector } from "react-redux";

const HomepageLayout = () => {
  const user = useSelector((state) => state.user);
  const posts = useSelector((state) => state.posts);
  console.log(user);

  if (user.user === null || posts.userPosts === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-24 w-24"></div>
      </div>
    );
  }
  return (
    <div className="flex flex-row flex-grow">
      <div className="overflow-y-auto h-full" style={{ overflowX: "hidden" }}>
        <style>
          {`
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 6px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
        </style>
        <Sidebar />
      </div>
      <div>
        <Feed className="w-max-96" />
      </div>
      <RightSidebar />
    </div>
  );
};

export default HomepageLayout;
