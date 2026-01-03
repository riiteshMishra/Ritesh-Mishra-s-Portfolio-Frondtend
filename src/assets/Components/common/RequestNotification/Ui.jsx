import React from "react";

const Ui = ({ setPanelOpen }) => {
  return (
    <div
      className=" backdrop-blur-xl fixed top-15 md:right-10 md:left-1/2 min-h-[300px] sm:max-h-[400px]  left-0 right-0 p-6 sm:bottom-50 bottom-0 rounded-2xl border-2 z-5 "
      onClick={() => setPanelOpen((prev) => !prev)}
    >
      <div className="bg-white h-5 w-5 absolute -top-3 right-12 rotate-45"></div>
    </div>
  );
};

export default Ui;
