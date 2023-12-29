import React from "react";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineIosShare } from "react-icons/md";
import { useSelector } from "react-redux";

function Tweets(tweet) {
  const user = useSelector((state) => state.user);

  console.log(tweet);

  if (tweet.tweet === null) return null;

  //const { image, name, username, time, tweet } = props.tweetData;
  return (
    <div>
      <article className="flex  justify-between space-x-2 px-4 py-3 cursor-pointer bg-white border-b border-primaryGray-light hover:bg-primaryGray-lightest h-auto">
        <img
          className="w-11 h-11 rounded-full"
          src={user.user.image}
          alt="logo"
        />
        <div className="flex flex-1 flex-col">
          <div className="flex space-x-2 items-center">
            <h4 className="font-bold hover:underline">
              {user.user.displayName}
            </h4>
            <p className="text-primary Gray-dark text-sm">
              @{user.user.userName}
            </p>
            <div className="w-1 h-1 rounded-full bg-primaryGray-dark opacity-40"></div>
          </div>
          <div className="max-w-md">
            <p className="mt-2 text-gray-900 text-sm max-w-md">
              {tweet.tweet.text}
            </p>
            {tweet.tweet.image ? (
              <img
                className="my-2 rounded-xl max-h-96"
                src={tweet.tweet.image}
                alt="user-share"
              />
            ) : tweet.tweet.video ? (
              <video
                className="my-2 rounded-xl items-center max-h-96"
                src={tweet.tweet.video}
                autoPlay={true}
                controls
                alt="user-share"
              />
            ) : null}
          </div>
          <ul className="flex items-center  justify-between -ml-1  max-w-md">
            <li className="flex items-center space-x-1 text-primary Gray-dark group">
              <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primaryBlue-light">
                <HiOutlineChatBubbleOvalLeft className="w-5 h-5  group-hover:text-sky-500" />
              </div>
              <span className=" group-hover:text-sky-500">80</span>
            </li>
            <li className="flex items-center space-x-1 text-primary Gray-dark group">
              <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-100">
                <FaRetweet className="w-5 h-5 group-hover:text-green-500" />
              </div>
              <span className="group-hover:text-green-500">7</span>
            </li>
            <li className="flex items-center space-x-1 text-primary Gray-dark group">
              <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-red-100">
                <FaRegHeart className="w-5 h-5 group-hover:text-red-500" />
              </div>
              <span className="group-hover:text-red-500">100</span>
            </li>
            <li className="flex items-center space-x-1 text-primary Gray-dark group">
              <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primaryBlue-light">
                <MdOutlineIosShare className="w-5 h-5 group-hover:text-blue-500" />
              </div>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default Tweets;
