import React from "react";
import ProfileCard from "../Cards/ProfileCard";
import Tweets from "../Cards/Tweets";
import { useSelector } from "react-redux";

const Profile = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      <ProfileCard />
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
};

export default Profile;
