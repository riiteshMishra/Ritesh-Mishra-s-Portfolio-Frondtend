import React, { useEffect, useState, useRef } from "react";
import { fetchAllBlogs } from "../../services/operations/auth";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaComment } from "react-icons/fa";
import Loader from "../Components/common/Loader";
import { TypeAnimation } from "react-type-animation";
import Footer from "../Components/core/Footer/Index";
import NoBlog from "../Components/core/Blog/NoBlog";
import BlogUi from "../Components/core/Blog/blog_ui";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(null);
  const navigate = useNavigate();
  document.title = "Ritesh | Mishra | Blogs";

  useEffect(() => {
    const fetchPublishedBlogs = async () => {
      try {
        setLoading(true);
        const result = await fetchAllBlogs();
        setBlogs(result);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPublishedBlogs();
  }, []);

  // GSAP animation for loading text
  useEffect(() => {
    if (loading && loadingRef.current) {
      gsap.to(loadingRef.current, {
        opacity: 0.3,
        scale: 1.2,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    } else {
      gsap.killTweensOf(loadingRef.current);
      if (loadingRef.current) {
        gsap.set(loadingRef.current, { opacity: 1, scale: 1 });
      }
    }
  }, [loading]);

  return (
    <div className="">
      <section className="max-w-[1300px] mx-auto  rounded-lg">
        <div>
          {loading ? (
            <div className=" ">
              <div className=" mx-auto relative  md:w-[600px]">
                <TypeAnimation
                  sequence={[
                    "Sharpening pencils ✏️ ... Just kidding, fetching blogs 😄",
                    1500,
                    "Warming up servers... almost there 🚀",
                    1500,
                    "Good things take a few seconds 😉",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1.4em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
              <div className=" overflow-hidden relative max-h-[400px]">
                <Loader />
              </div>
            </div>
          ) : blogs.length === 0 ? (
            <NoBlog />
          ) : (
            <BlogUi blogs={blogs} />
          )}
        </div>
      </section>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Blogs;
