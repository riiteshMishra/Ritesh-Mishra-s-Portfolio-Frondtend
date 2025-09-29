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

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 ">
      <NavBar />
      <Routes>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />

      </Routes>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
