import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { db } from "../../firebase.config";

const initialState = {
  loading: false,
  userPosts: [], // Add a new field to store user_posts
  error: "",
};

export const fetchUserPosts = createAsyncThunk(
  "user/fetchUserPosts",
  async (userId) => {
    try {
      // Fetch user data
      const userDocRef = doc(db, "users", userId);
      const userDocSnapshot = await getDoc(userDocRef);

      if (!userDocSnapshot.exists()) {
        return [];
      }

      // Fetch user_posts
      const userPostsQuery = query(
        collection(db, "users", userId, "user_posts"),
        where("userId", "==", userId)
      );
      const userPostsSnapshot = await getDocs(userPostsQuery);

      const userPostsData = userPostsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return userPostsData;
    } catch (error) {
      throw error;
    }
  }
);

const tweetSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.userPosts.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for fetching user_posts
    builder.addCase(fetchUserPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.userPosts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUserPosts.rejected, (state, action) => {
      state.loading = false;
      state.userPosts = [];
      state.error = action.error.message;
    });
  },
});

export const { setPost } = tweetSlice.actions;
export default tweetSlice.reducer;
