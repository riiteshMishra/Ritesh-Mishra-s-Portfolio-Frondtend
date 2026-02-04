import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Projects from "./assets/pages/Projects";
import Contact from "./assets/pages/Contact";
import NavBar from "./assets/Components/common/NavBar";
import Signup from "./assets/pages/Signup";
import Login from "./assets/pages/Login";
import Blogs from "./assets/pages/Blogs";
import PageNotFound from "./assets/pages/PageNotFound";
import { useSelector } from "react-redux";
import Dashboard from "./assets/pages/Dashboard";
import Profile from "./assets/Components/core/Dashboard/Profile/Profile";
import EditProfile from "./assets/Components/core/Dashboard/Profile/EditProfile";
import { ACCOUNT_TYPE } from "./utils/utilsData";
import LikedBlogs from "./assets/Components/core/Dashboard/Blog/LikedBlogs";
import Settings from "./assets/Components/core/Dashboard/Settings/Index";
import CreateBlogs from "./assets/Components/core/Dashboard/Blog/create-blog/Index";
import MyBlog from "./assets/Components/core/Dashboard/Blog/create-blog/MyBlog";
import ViewBlog from "./assets/Components/core/Dashboard/Blog/view-blog/ViewBlog";
import WriteReview from "./assets/Components/core/Dashboard/Write-a-review";
import EditReview from "./assets/Components/core/Dashboard/Write-a-review/EditReview";
import OverlayBar from "./assets/Components/core/Home/overlay-navigatore/Index";
import NonApprovedReviews from "./assets/Components/core/Dashboard/Reviews/NonApprovedReviews";
import ForgotPassword from "./assets/pages/ForgotPassword";
import ResetPassword from "./assets/Components/core/Auth/Reset-change-password/Reset-password";
import CreateProject from "./assets/Components/core/Dashboard/Projects/Index";
import YourProjects from "./assets/Components/core/Dashboard/Projects/Your-projects/Index";
import Category from "./assets/Components/core/Dashboard/Category/Index";
import Notification from "./assets/Components/core/Dashboard/Notification/Index";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

const App = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-950 relative z-0">
      <NavBar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="blogs/blog/:blogId" element={<ViewBlog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
        {!token && <Route path="/signup" element={<Signup />} />}
        {!token && <Route path="/login" element={<Login />} />}
        // Dashboard
        {token && (
          <Route path="/dashboard" element={<Dashboard />}>
            // FOR EVERY ONE
            <Route path="settings" element={<Settings />} />
            <Route path="my-profile" element={<Profile />} />
            <Route path="liked-blogs" element={<LikedBlogs />} />
            // ONLY FOR ADMIN
            {user?.accountType === ACCOUNT_TYPE.ADMIN && (
              <>
                <Route path="create-blog" element={<CreateBlogs />} />
                <Route path="my-blogs" element={<MyBlog />} />
                <Route path="user-reviews" element={<NonApprovedReviews />} />
                <Route path="create-project" element={<CreateProject />} />
                <Route path="your-projects" element={<YourProjects />} />
                <Route path="category" element={<Category />} />
                <Route path="notification" element={<Notification />} />
              </>
            )}
            // ONLY FOR CLIENTS
            {user?.accountType === ACCOUNT_TYPE.CLIENT && (
              <>
                <Route path="write-review" element={<WriteReview />} />
                <Route path="edit-review" element={<EditReview />} />
              </>
            )}
          </Route>
        )}
      </Routes>
      <OverlayBar />
    </div>
  );
};

export default App;
