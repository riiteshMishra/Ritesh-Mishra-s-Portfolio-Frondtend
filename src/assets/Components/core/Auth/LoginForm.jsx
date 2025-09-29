import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { login } from "../../../../services/operations/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = async (data) => {
    console.log("LOGIN DATA", data);
    await login(data, navigate, dispatch);
    // reset();
  };

  const [type, setType] = useState("password");
  const togglePassword = () =>
    setType((prev) => (prev === "password" ? "text" : "password"));

  return (
    <div className="flex flex-col items-center justify-center sm:py-10">
      <h1 className="text-4xl font-bold mb-6">Login</h1>

      <form
        onSubmit={handleSubmit(formSubmit)}
        className="bg-richblack-800 p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        {/* Email */}
        <label className="flex flex-col mb-4">
          <p className="mb-1 font-medium">Email</p>
          <input
            type="email"
            className="FormStyle border p-2 rounded"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </span>
          )}
        </label>

        {/* Password */}
        <label className="flex flex-col mb-4 relative">
          <p className="mb-1 font-medium">Password</p>
          <input
            type={type}
            className="FormStyle border p-2 rounded pr-10"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </span>
          )}

          <span
            className="absolute right-3 top-[55px] cursor-pointer text-xl text-white"
            onClick={togglePassword}
          >
            {type === "password" ? <IoEyeOff /> : <IoMdEye />}
          </span>
        </label>

        <button
          type="submit"
          className="w-full bg-[#73ff01] text-black font-semibold p-2 rounded hover:bg-[#01ffc8] transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
