import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash, FaLock } from "react-icons/fa";
import { resetPassword } from "../../../../../services/operations/auth";

const ResetPassword = () => {
  const { resetToken } = useParams();
  const navigate = useNavigate();
  // console.log("reset token", resetToken);

  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);
  const [strength, setStrength] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // password strength calculation
  const checkStrength = (password) => {
    let score = 0;
    if (password.length >= 6) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    setStrength(score);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    setLoading(true);

    const res = await resetPassword(formData, resetToken);
    // console.log("response",res)
    if (res.success) navigate("/login");

    setLoading(false);
  };

  const passwordValue = watch("password");

  return (
    <div className="min-h-[calc(100vh-60px)] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl w-full max-w-md rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          <FaLock /> Reset Your Password
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm opacity-80">New Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter new password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
                onChange={(e) => checkStrength(e.target.value)}
                className="w-full bg-white/20 border border-white/30 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <span
                className="absolute top-2 right-3 cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? (
                  <FaRegEyeSlash size={18} />
                ) : (
                  <FaRegEye size={18} />
                )}
              </span>
            </div>

            {errors.password && (
              <p className="text-red-300 text-xs">{errors.password.message}</p>
            )}
          </div>

          {/* Password Strength Meter */}
          {passwordValue && (
            <div className="flex gap-2 mt-1">
              {[1, 2, 3, 4].map((lvl) => (
                <div
                  key={lvl}
                  className={`h-2 w-full rounded transition ${
                    strength >= lvl ? "bg-green-400" : "bg-gray-600"
                  }`}
                ></div>
              ))}
            </div>
          )}

          {/* Confirm Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm opacity-80">Confirm Password</label>
            <div className="relative">
              <input
                type={showCPass ? "text" : "password"}
                placeholder="Confirm password"
                {...register("confirmPassword", {
                  required: "Confirm password required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="w-full bg-white/20 border border-white/30 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <span
                className="absolute top-2 right-3 cursor-pointer"
                onClick={() => setShowCPass(!showCPass)}
              >
                {showCPass ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>

            {errors.confirmPassword && (
              <p className="text-red-300 text-xs">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition disabled:opacity-40 cursor-pointer"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
