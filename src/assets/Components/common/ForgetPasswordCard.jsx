import React from "react";
import { Link } from "react-router-dom";

const ForgetPasswordCard = ({ email, setEmail, sendLink }) => {
  return (
    <div className="w-full max-w-md bg-[#1a1a1a] p-8 rounded-lg shadow-lg border border-white/10 animate-fadeIn">
      <h1 className="text-3xl font-semibold text-center mb-2">
        Forgot Password
      </h1>
      <p className="text-gray-400 text-center mb-8 text-sm">
        Enter your email address and we’ll send you a reset link.
      </p>

      <div className="flex flex-col gap-2 mb-6">
        <label className="text-gray-300 font-medium">Email</label>
        <input
          type="email"
          maxLength={35}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-md bg-[#111] border border-white/10 focus:outline-none focus:border-blue-500 transition"
        />
      </div>

      <button
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-all cursor-pointer"
        onClick={sendLink}
      >
        Send Reset Link
      </button>

      <div className="my-6 border-t border-white/10"></div>

      <p className="text-center text-gray-400 text-sm">
        Remember your password?{" "}
        <Link to="/login" className="text-blue-400 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default ForgetPasswordCard;
