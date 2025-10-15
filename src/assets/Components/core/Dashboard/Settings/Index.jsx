import React from "react";
import ProfileImage from "./ProfileImage";
import ProfileDetails from "./ProfileDetails";
import AddSocialLinks from "./AddSocialLinks";

const Settings = () => {
  return (
    <section className=" max-w-[1200px] mx-auto text-white shadow-lg">
      <div className=" p-4 flex items-center gap-10 flex-col md:flex-row justify-between bg-gray-800 max-w-[1200px] mx-auto my-8 border-[1px] border-gray-600 rounded w-11/12">
        <ProfileImage />
      </div>

      <div className=" p-4 flex items-center gap-10 flex-col md:flex-row justify-between bg-gray-800 max-w-[1200px] mx-auto my-8 border-[1px] border-gray-600 rounded w-11/12">
        <ProfileDetails />
      </div>

      {/* social link add */}
      <div className=" p-4 flex items-center gap-10 flex-col md:flex-row justify-between bg-gray-800 max-w-[1200px] mx-auto my-8 border-[1px] border-gray-600 rounded w-11/12">
        <AddSocialLinks />
      </div>
    </section>
  );
};

export default Settings;

// isme mujhe profile image
// name lastname, email password ,
// about , gender , phonenumber,
