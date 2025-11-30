import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { generateResetPasswordToken } from "../../services/operations/auth";
import CheckEmail from "../Components/common/CheckEmail";
import ForgetPasswordCard from "../Components/common/ForgetPasswordCard";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { OtpSent } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSendLink = async () => {
    if (!email) return toast.error("Please enter your email");

    await generateResetPasswordToken(email, dispatch);
  };

  return (
    <section className="min-h-[calc(100vh-60px)] flex items-center justify-center p-4 bg-[#0f0f0f] text-white">
      {OtpSent ? (
        <CheckEmail email={email} resend={handleSendLink} />
      ) : (
        <ForgetPasswordCard
          email={email}
          setEmail={setEmail}
          sendLink={handleSendLink}
        />
      )}
    </section>
  );
};

export default ForgotPassword;
