import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelopeOpenText } from "react-icons/fa";

const CheckEmail = ({ email, resend }) => {
  return (
    <section className="w-full max-w-md bg-[#1a1a1a] p-8 rounded-lg shadow-lg border border-white/10 animate-fadeIn text-center">
      <FaEnvelopeOpenText className="text-6xl text-blue-400 mx-auto mb-6 animate-bounce" />

      <h1 className="text-3xl font-bold mb-3">Check your email</h1>

      <p className="text-gray-400 mb-6 leading-relaxed">
        We’ve sent a password reset link to{" "}
        <span className="text-white">{email}</span>. Please check your inbox and
        follow the instructions.
      </p>

      <Link
        to="/login"
        className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-all cursor-pointer"
      >
        Go to Login
      </Link>

      <p className="text-gray-400 text-sm mt-4">
        Didn’t receive the email?{" "}
        <button className="text-blue-400 hover:underline" onClick={resend}>
          Resend
        </button>
      </p>
    </section>
  );
};

export default CheckEmail;
