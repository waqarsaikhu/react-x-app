import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./redux/user/userSlice";
import tweetReducer from "./redux/tweets/tweetSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: tweetReducer,
  },
});

export default store;
