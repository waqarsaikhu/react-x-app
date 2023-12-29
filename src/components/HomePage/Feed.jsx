import React from "react";
import Post from "../Cards/Post";
import Tweets from "../Cards/Tweets";
import { FiSettings } from "react-icons/fi";
import { useSelector } from "react-redux";

function Feed() {
  const posts = useSelector((state) => state.posts);
  console.log("Posts:", posts);
  return (
    <div className="">
      <div className="bg-white w-full sticky top-0 z-10 flex items-center justify-between opacity-70">
        <div className="items-center px-20 py-2 hover:bg-gray-200 cursor-pointer">
          <span className="text-base font-bold">For You</span>
        </div>
        <div className="flex text-center space-x-5 px-20  py-2   hover:bg-gray-200 cursor-pointer">
          <span className="text-base font-bold">Following</span>
        </div>
        <div className="flex space-x-2 mx-2 text-black ">
          <FiSettings className="text-4xl rounded-full hover:bg-gray-200 p-2 cursor-pointer" />
        </div>
      </div>
      <Post />
      {posts.userPosts === null ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-24 w-24"></div>
        </div>
      ) : (
        <div>
          {posts.userPosts.map((tweet) => (
            <Tweets key={tweet.id} tweet={tweet} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Feed;
