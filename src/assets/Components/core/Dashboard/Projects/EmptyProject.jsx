import React from "react";
import { FiUploadCloud } from "react-icons/fi";

const EmptyProject = () => {
  return (
    <div
      className="h-[180px] w-[350px] sm:w-[400px] sm:h-[200px] bg-[#214353]/40 backdrop-blur-md 
        rounded-2xl shadow-xl border border-white/20 
        flex flex-col items-center justify-center gap-3 
        hover:scale-[1.03] transition-all duration-300 cursor-pointer"
    >
      <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
        <FiUploadCloud className="text-white text-4xl" />
      </div>

      <p className="text-white text-xl font-semibold tracking-wide">
        Choose Image
      </p>

      <p className="text-white/70 text-xs">from your device</p>
    </div>
  );
};

export default EmptyProject;
