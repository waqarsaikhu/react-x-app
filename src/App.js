import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginLayout from "./components/Layout/LoginLayout";
import HomepageLayout from "./components/Layout/HomepageLayout";
import SignUpForm from "./components/Signup/Signup";
import { useDispatch } from "react-redux";
import { fetchUser } from "../src/redux/user/userSlice";
import { auth } from "./firebase.config";
import { useEffect } from "react";
import ProfilePageLayout from "./components/Layout/ProfilePageLayout";
import { fetchUserPosts } from "./redux/tweets/tweetSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid;
        dispatch(fetchUser(userId));
        dispatch(fetchUserPosts(userId));
      }
    });

    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, [dispatch]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginLayout />} />
          <Route path="SignupForm" element={<SignUpForm />} />
          <Route path="SignupForm/Home" element={<HomepageLayout />} />
          <Route
            path="SignupForm/Home/Profile"
            element={<ProfilePageLayout />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
