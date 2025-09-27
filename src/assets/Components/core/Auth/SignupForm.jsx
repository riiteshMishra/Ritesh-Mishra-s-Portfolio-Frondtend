import { useForm } from "react-hook-form";
import { useState } from "react";
import { ACCOUNT_TYPE } from "../../../../utils/utilsData";
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { sendOtp } from "../../../../services/oprations/auth";

const SignupForm = () => {
  const account = Object.values(ACCOUNT_TYPE);
  const [otpSent, setOtpSent] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [accountType, setAccountType] = useState(account[0]);
  const password = watch("password");

  const submitHandler = (data) => {
    console.log("SIGN-UP FORM DATA", data);
    reset();
    setOtpSent(false); // reset OTP state
  };

  const toggleConfirmPassword = () => {
    return setConfirmPasswordType((prev) =>
      prev === "password" ? "text" : "password"
    );
  };
  const togglePassword = () =>
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));


  const sendOtpHandler = async ()=>{
    const otp = await sendOtp()
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-6">Sign-up</h1>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-[#ffffff0e] px-5 py-7 rounded-md space-y-1"
      >
        {/* Account Type */}
        <div className="flex flex-col w-fit mb-4">
          <p className="text-2xl mb-2">Choose account type</p>
          <div className="flex bg-[#ffffff6c] rounded-full w-fit justify-evenly">
            {account.map((acc) => (
              <p
                key={acc}
                className={`m-[5px] cursor-pointer ${
                  accountType === acc ? "light-capsule" : "capsule"
                }`}
                onClick={() => setAccountType(acc)}
              >
                {acc}
              </p>
            ))}
          </div>
        </div>

        {/* First / Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
          <label className="flex flex-col">
            <p>First Name</p>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              className="FormStyle"
            />
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName.message}</span>
            )}
          </label>

          <label className="flex flex-col">
            <p>Last Name</p>
            <input
              type="text"
              id="lastName"
              {...register("lastName", { required: "Last name is required" })}
              className="FormStyle"
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName.message}</span>
            )}
          </label>
        </div>

        {/* Email / OTP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 items-center">
          <label className="flex flex-col">
            <p>Email</p>
            <input
              type="email"
              id="email"
              className="FormStyle w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </label>

          {!otpSent ? (
            <button
              type="button"
              className="capsule w-fit h-fit"
              onClick={sendOtpHandler}
            >
              Send OTP
            </button>
          ) : (
            <label className="flex flex-col">
              <p>Enter your OTP</p>
              <input
                type="text"
                id="otp"
                className="FormStyle w-full"
                {...register("otp", { required: "OTP is required" })}
              />
              {errors.otp && (
                <span className="text-red-500">{errors.otp.message}</span>
              )}
            </label>
          )}
        </div>

        {/* Password / Confirm Password */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
          <label className="flex flex-col relative">
            <p>Password</p>
            <input
              type={passwordType}
              id="password"
              className="FormStyle w-full"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}

            <span
              className="absolute right-3 top-[50px] cursor-pointer text-xl text-white"
              onClick={togglePassword}
            >
              {passwordType === "password" ? <IoEyeOff /> : <IoMdEye />}
            </span>
          </label>

          <label className="flex flex-col relative">
            <p>Confirm Password</p>
            <input
              type={confirmPasswordType}
              id="confirmPassword"
              className="FormStyle w-full"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}

            <span
              className="absolute right-3 top-[50px] cursor-pointer text-xl text-white"
              onClick={toggleConfirmPassword}
            >
              {confirmPasswordType === "password" ? <IoEyeOff /> : <IoMdEye />}
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={!otpSent}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors w-full"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
