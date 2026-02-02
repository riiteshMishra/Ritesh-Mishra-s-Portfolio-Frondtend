import React from "react";
import { useSelector } from "react-redux";

const BlogCreateStep = () => {
  const steps = [1, 2,3];
  const { step: blogStep } = useSelector((state) => state.blog);

  return (
    <div className="mx-auto md:max-w-[600px] my-4 max-w-80 ">
      <div className="flex justify-between items-center">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center">
            {/* Step Circle */}
            <div
              className={`${
                step === blogStep
                  ? "bg-green-600"
                  : step < blogStep
                  ? "bg-green-400"
                  : "bg-purple-800"
              } h-10 w-10 rounded-full flex items-center justify-center text-white font-bold`}
            >
              {step}
            </div>

            {/* Connector Line */}
            {idx !== steps.length - 1 && (
              <div
                className={`${
                  blogStep > step ? "border-green-500" : "border-gray-700"
                } border-b-2 md:w-50 w-25 `}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCreateStep;
