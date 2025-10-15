import React from "react";
import { useSelector } from "react-redux";

const ProfileDetails = () => {
  const { user } = useSelector((state) => state.profile);

  if (!user) return null;

  return (
    <section
      className="relative w-full max-w-3xl mx-auto px-4 py-6 text-white"
      aria-labelledby="profile-heading"
    >
      {/* SEO-Friendly Heading */}
      <header className="mb-6 border-b border-gray-600 pb-2">
        <h1
          id="profile-heading"
          className="Bebas text-4xl font-bold capitalize"
        >
          {user?.firstName} {user?.lastName} – Profile Details
        </h1>
        <p className="text-gray-400 text-sm">
          Explore detailed information about {user?.firstName}'s profile and
          activities.
        </p>
      </header>

      {/* Main Profile Card */}
      <article className="bg-gray-800 p-6 rounded-2xl shadow-md">
        {/* Profile Header */}
        <div
          className="flex items-center gap-6 mb-6 sm:flex-row flex-col"
          itemScope
          itemType="https://schema.org/Person"
        >
          <img
            src={user?.image}
            alt={`${user?.firstName} ${user?.lastName}'s profile photo`}
            className="w-28 h-28 rounded-full object-cover border border-gray-500"
            loading="lazy"
            itemProp="image"
          />
          <div>
            <h2 className="text-2xl font-semibold capitalize" itemProp="name">
              {user?.firstName} {user?.lastName}
            </h2>
            <p className="text-gray-400" itemProp="email">
              {user?.email}
            </p>
            <time
              className="text-gray-500 text-sm"
              dateTime={user?.createdAt}
              itemProp="dateCreated"
            >
              Joined on {new Date(user?.createdAt).toLocaleDateString("en-IN")}
            </time>
          </div>
        </div>

        {/* Profile Details Grid */}
        <dl className="grid sm:grid-cols-2 gap-y-4 gap-x-10">
          <div>
            <dt className="text-gray-400 text-sm">Account Type</dt>
            <dd className="font-medium">{user?.accountType || "N/A"}</dd>
          </div>

          <div>
            <dt className="text-gray-400 text-sm">Profession / Interests</dt>
            <dd className="font-medium">{user?.profile?.interests || "N/A"}</dd>
          </div>

          <div>
            <dt className="text-gray-400 text-sm">Phone Number</dt>
            <dd className="font-medium">
              {user?.profile?.contactNumber || "N/A"}
            </dd>
          </div>

          <div>
            <dt className="text-gray-400 text-sm">Gender</dt>
            <dd className="font-medium">{user?.profile?.gender || "N/A"}</dd>
          </div>

          <div className="sm:col-span-2">
            <dt className="text-gray-400 text-sm">About</dt>
            <dd className="font-medium">
              {user?.profile?.bio || "No bio added yet."}
            </dd>
          </div>
        </dl>
      </article>
    </section>
  );
};

export default ProfileDetails;
