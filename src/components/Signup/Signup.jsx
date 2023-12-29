import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  doc,
  setDoc,
  getFirestore,
  collection,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth } from "../../firebase.config";
import { toast } from "react-hot-toast";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    displayName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    image: null,
  });

  const [userNameError, setUserNameError] = useState("");
  const [imageError, setImageError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      // Handle image file separately
      setFormData({
        ...formData,
        image: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleUserNameBlur = async () => {
    if (formData.userName) {
      try {
        const db = getFirestore();

        const userNameQuery = query(
          collection(db, "users"),
          where("userName", "==", formData.userName)
        );

        const userNameSnapshot = await getDocs(userNameQuery);

        if (!userNameSnapshot.empty) {
          setUserNameError("Username is already taken");
        } else {
          setUserNameError("");
        }
      } catch (error) {
        console.error("Error checking username uniqueness:", error.message);
      }
    }
  };

  const handleImageUpload = async () => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `user_images/${auth.currentUser.uid}`);
      await uploadBytes(storageRef, formData.image);
      const imageURL = await getDownloadURL(storageRef);
      return imageURL;
    } catch (error) {
      console.error("Error uploading image:", error.message);
      setImageError("Error uploading image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userNameError || imageError) {
      return;
    }
    try {
      const imageURL = formData.image ? await handleImageUpload() : null;
      const db = getFirestore();
      const userDocRef = doc(db, "users", auth.currentUser.uid); // Assuming a collection named "users

      const currentTime = new Date();
      const monthName = currentTime.toLocaleString("en-US", { month: "long" });
      const year = currentTime.getFullYear();
      const joiningTime = `${monthName} ${year}`; // Convert to string

      await setDoc(userDocRef, {
        userName: formData.userName,
        displayName: formData.displayName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        dob: formData.dob,
        image: imageURL,
        joiningTime: joiningTime,
      });
      toast.success("Your account is created now click on signin button");
      console.log("User details added to Firestore successfully!");

      signOutAndNavigate();
    } catch (error) {
      console.error("Error adding user details to Firestore:", error.message);
    }
  };
  const signOutAndNavigate = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">User Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            onBlur={handleUserNameBlur}
            className={`w-full px-3 py-2 border rounded focus:outline-none ${
              userNameError ? "border-red-500" : "focus:border-blue-500"
            }`}
            required
          />
          {userNameError && (
            <p className="text-red-500 text-sm mt-1">{userNameError}</p>
          )}
        </div>

        {/* Add other form fields (displayName, email, phoneNumber, dob) here */}
        <div className="mb-4">
          <label
            htmlFor="displayName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Display Name:
          </label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            value={formData.displayName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="dob"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Profile Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
          {imageError && (
            <p className="text-red-500 text-sm mt-1">{imageError}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
