import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="HomePage relative">
      <div className="container">
        <div className="min-h-[calc(100vh-60px)] text-white flex flex-col items-center justify-center relative">
          {/* 🔐 Login Status */}
          <div
            className={`absolute tracking-wide opacity-90 px-4 py-1 rounded-lg transition-all duration-300 top-16 sm:top-12 ${
              user
                ? "text-green-400 text-2xl"
                : "text-red-500 text-2xl shadow-[0_0_20px_rgba(255,0,0,0.4)]"
            }`}
          >
            {user ? "Logged In" : "Not Logged In"}
          </div>

          {/* 🎨 SVG Illustration */}
          <div className="w-64 mb-6 animate-fadeIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              className="w-full h-full opacity-90"
            >
              <circle cx="150" cy="150" r="120" fill="#1e1e1e" />
              <circle cx="110" cy="130" r="15" fill="#fff" />
              <circle cx="190" cy="130" r="15" fill="#fff" />
              <path
                d="M110 190 Q150 220 190 190"
                stroke="#fff"
                strokeWidth="8"
                fill="transparent"
                strokeLinecap="round"
              />
              <text
                x="150"
                y="260"
                textAnchor="middle"
                fontSize="32"
                fill="#ffffff"
                fontWeight="bold"
              >
                404
              </text>
            </svg>
          </div>

          {/* 🔥 Animated text */}
          <div className="text-center animate-fadeIn scale-90 animate-scaleUp">
            <h1 className="text-5xl font-semibold mb-4">
              404 — Page Not Found
            </h1>

            {!user && (
              <div className="flex flex-col items-center gap-4">
                <p className="text-xl text-gray-300 max-w-lg">
                  This page could not be found. You may need to log in to access
                  this page.
                </p>

                {/* 👉 Better Login Button */}
                <Link
                  to="/login"
                  className="px-6 py-2 rounded-md border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                >
                  Go to Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
