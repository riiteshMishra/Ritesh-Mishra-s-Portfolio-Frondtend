import React from "react";
import { Link } from "react-router-dom";

const HireMe = () => {
  return (
    <Link
      to={"/contact-us"}
      className="bg-amber-50 text-black rounded-sm py-[2px] px-4 w-fit"
    >
      Hire me
    </Link>
  );
};

export default HireMe;
