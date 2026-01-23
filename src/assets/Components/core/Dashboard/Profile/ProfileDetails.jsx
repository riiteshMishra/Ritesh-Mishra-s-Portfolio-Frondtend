import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import InterestsBox from "./InterestsBox";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const ProfileDetails = () => {
  const { user } = useSelector((state) => state.profile);
  if (!user) return null;

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="
        relative max-w-[1200px] mx-auto my-8 w-11/12
        bg-gray-900/70 backdrop-blur
        border border-gray-700 rounded-2xl
        p-6 text-white
      "
      aria-labelledby="profile-heading"
    >
      {/* Header */}
      <header className="mb-6 border-b border-gray-700 pb-3">
        <h2 id="profile-heading" className="text-3xl font-semibold capitalize">
          Profile Details
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Detailed information about {user.firstName}.
        </p>
      </header>

      {/* Profile Header */}
      <div
        className="flex items-center gap-6 mb-8 sm:flex-row flex-col"
        itemScope
        itemType="https://schema.org/Person"
      >
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName} profile`}
          className="w-28 h-28 rounded-full object-cover ring-4 ring-gray-700"
          loading="lazy"
          itemProp="image"
        />

        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-semibold capitalize" itemProp="name">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-gray-400" itemProp="email">
            {user.email}
          </p>
          <time
            className="text-gray-500 text-sm"
            dateTime={user.createdAt}
            itemProp="dateCreated"
          >
            Joined on {new Date(user.createdAt).toLocaleDateString("en-IN")}
          </time>
        </div>
      </div>

      {/* Details Grid */}
      <dl className="grid grid-cols-2 gap-x-10 gap-y-6">
        <div>
          <dt className="text-gray-400 text-sm">Account Type</dt>
          <dd className="font-medium mt-1">{user.accountType || "N/A"}</dd>
        </div>

        <div>
          <dt className="text-gray-400 text-sm">Phone Number</dt>
          <dd className="font-medium mt-1">
            {user.profile?.contactNumber || "N/A"}
          </dd>
        </div>

        <div>
          <dt className="text-gray-400 text-sm">Gender</dt>
          <dd className="font-medium mt-1">{user.profile?.gender || "N/A"}</dd>
        </div>

        <div className="">
          <dt className="text-gray-400 text-sm">About</dt>
          <dd className=" capitalize font-medium mt-1 text-gray-300 leading-relaxed">
            {user.profile?.bio || "No bio added yet."}
          </dd>
        </div>

        <div className=" col-span-2" >
          <dt className="text-gray-400 text-sm">Profession / Interests</dt>
          <dd className="font-medium flex flex-wrap gap-3 mt-2 ">
            {user?.profile?.interests?.map((interest, idx) => (
              <InterestsBox interest={interest} key={idx} />
            ))}
          </dd>
        </div>
      </dl>
    </motion.section>
  );
};

export default ProfileDetails;
