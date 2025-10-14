import React from "react";
import { useSelector } from "react-redux";

const ProfileDetails = () => {
  const { user } = useSelector((state) => state.profile);
  console.log("user", user);
  const { firstName, lastName, email } = user;
  const {
    age,
    bio,
    city,
    contactNumber,
    country,
    dob,
    gender,
    interests,
    socials,
    profilePicture,
  } = user.profile;

  return (
    <section className="flex items-center gap-10 md:flex-row flex-col relative">
      <p className="text-4xl Bebas">Update Profile Information</p>
    </section>
  );
};

export default ProfileDetails;

/*

mujhe kal kya krna hai?
kal profile update krna hai account delete ka option dena hai or ho ske to profile page pr pura profile data dikhana hai

*/
