import React from "react";
import SignupForm from "../Components/core/Auth/SignupForm";

const Signup = () => {
  return (
    <section className="SignupPage flex items-center justify-center ">
      <div className="container px-4 flex flex-col md:flex-row items-center gap-10 justify-center">
        {/* Left Side - Info/Illustration */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md py-10">
          <h1 className="text-5xl font-bold mb-4">Join Us Today</h1>
          <p className="text-gray-600 mb-6">
            Create an account to access all features, manage your profile, and
            enjoy our services.
          </p>
          {/* Optional Illustration */}
          {/* <img
            src="/signup-illustration.png"
            alt="Signup Illustration"
            className="w-64 md:w-80"
          /> */}
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full max-w-md">
          <SignupForm />
        </div>
      </div>
    </section>
  );
};

export default Signup;
