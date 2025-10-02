import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Projects from "./assets/pages/Projects";
import Contact from "./assets/pages/Contact";
import NavBar from "./assets/Components/common/NavBar";
import Signup from "./assets/pages/Signup";
import Login from "./assets/pages/Login";
import Footer from "./assets/Components/common/Footer";
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

const App = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="min-h-screen bg-gray-950 ">
      <NavBar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-us" element={<Contact />} />
        {!token && <Route path="/signup" element={<Signup />} />}
        {!token && <Route path="/login" element={<Login />} />}
        // Dashboard
        {token && (
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="settings" element={<Settings />}>
              {/* <Route path=""/> */}
            </Route>
            <Route path="my-profile" element={<Profile />} />
            <Route path="liked-blogs" element={<LikedBlogs />} />
            // ONLY FOR ADMIN
            {user?.accountType === ACCOUNT_TYPE.ADMIN && (
              <>
                <Route path="create-blog" element={<CreateBlogs />} />
                <Route path="my-blogs" element={<MyBlog />} />
                
              </>
            )}
          </Route>
        )}
      </Routes>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
