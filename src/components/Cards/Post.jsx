import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { IoIosList } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { IoEarthSharp } from "react-icons/io5";

import { doc, setDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { firestore, storage, auth } from "../../firebase.config"; // Assuming you have 'firestore' and 'storage' initialized
import { setPost } from "../../redux/tweets/tweetSlice";
import { useSelector, useDispatch } from "react-redux";

function Post() {
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleImageInputChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const fileType = file.type.split("/")[0];

      if (fileType === "image") {
        setSelectedImage(file);
        setSelectedVideo(null);
      } else if (fileType === "video") {
        setSelectedVideo(file);
        setSelectedImage(null);
      } else {
        console.error("Unsupported file type");
      }
    }
  };

  const handlePost = async () => {
    try {
      const userId = auth.currentUser.uid;
      const userDocRef = doc(firestore, "users", userId);
      const userPostsCollectionRef = collection(userDocRef, "user_posts");

      let imageUrl = "";
      let videoUrl = "";

      if (selectedImage) {
        const imageStorageRef = ref(
          storage,
          `post_images/${user.uid}/${Date.now()}`
        );
        await uploadBytes(imageStorageRef, selectedImage);
        imageUrl = await getDownloadURL(imageStorageRef);
      }
      if (selectedVideo) {
        const videoStorageRef = ref(
          storage,
          `post_videos/${user.uid}/${Date.now()}`
        );
        await uploadBytes(videoStorageRef, selectedVideo);
        videoUrl = await getDownloadURL(videoStorageRef);
      }
      const currentTime = new Date();
      const postTimeAsString = currentTime.toISOString();

      await setDoc(doc(userPostsCollectionRef), {
        userId: userId,
        text: postText,
        image: imageUrl || null,
        video: videoUrl || null,
        postTime: postTimeAsString,
      });
      dispatch(
        setPost({
          userId: userId,
          text: postText,
          image: imageUrl || null,
          video: videoUrl || null,
          postTime: postTimeAsString,
        })
      );
      setPostText("");
      setSelectedImage(null);
      setSelectedVideo(null);
      console.log("Post Saved successfully.......");
    } catch (error) {
      console.error("Error posting:", error);
    }
  };

  return (
    <div className="bg-white  flex h-32 w-full border-b-2 border-gray-100">
      <img
        src={user.user.image}
        alt="Profile"
        className="w-8 h-8 mt-2 ml-2 rounded-full"
      />
      <div className="ml-1 mr-2">
        <div>
          <input
            type="text"
            className="w-full p-2 focus:outline-none"
            placeholder="What is happening?!"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
          <span className="flex text-sm font-bold text-sky-500 hover:bg-sky-200 rounded-full px-2 mb-1 w-fit">
            <IoEarthSharp className="mt-1" />
            Who can reply?
          </span>
          <hr className="mx-2" />
        </div>

        <div className="mt-3 flex w-full">
          <div className=" text-sky-600">
            <label
              htmlFor="imageInput"
              className="rounded-full hover:bg-sky-200"
            >
              <CiImageOn className="p-1 text-2xl cursor-pointer mr-1 hover:bg-origin-border hover:bg-sky-200 rounded-full" />
            </label>
            <input
              className=""
              type="file"
              id="imageInput"
              accept="image/*, video/*"
              style={{ display: "none" }}
              onChange={handleImageInputChange}
            />
          </div>
          <div className=" text-sky-600">
            <button className="p-1 rounded-full hover:bg-sky-200">
              <MdOutlineGifBox />
            </button>
          </div>
          <div className=" text-sky-600">
            <button className="p-1 rounded-full hover:bg-sky-200">
              <IoIosList />
            </button>
          </div>
          <div className=" text-sky-600">
            <button className="p-1 rounded-full hover:bg-sky-200">
              <BsEmojiSmile />
            </button>
          </div>
          <div className=" text-sky-600">
            <button className="p-1 rounded-full hover:bg-sky-200">
              <LuCalendarClock />
            </button>
          </div>
          <div className=" text-sky-600">
            <button className="p-1 rounded-full hover:bg-sky-200">
              <SlLocationPin />
            </button>
          </div>
          <div className="justify-end items-end">
            <button
              className="bg-sky-500 text-white mb-1 ml-56 py-1 px-4 rounded-full"
              onClick={handlePost}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
