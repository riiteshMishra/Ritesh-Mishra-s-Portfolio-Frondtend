import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../common/Button";
import toast from "react-hot-toast";
import { updateProfile } from "../../../../../services/operations/User";

const ProfileDetails = () => {
  const { user } = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // FORM SUBMIT
  const onSubmit = async (data) => {
    console.log("Profile Update Data (Before):", data);

    // SOCIALS OBJECT COMBINE KARNA
    const socials = {
      facebook: data.facebook || "",
      instagram: data.instagram || "",
      x: data.x || "",
      github: data.github || "",
      linkedin: data.linkedin || "",
    };

    // FINAL PAYLOAD
    const finalData = {
      ...data,
      socials,
    };

    // REMOVE INDIVIDUAL SOCIAL KE FIELDS
    delete finalData.facebook;
    delete finalData.instagram;
    delete finalData.x;
    delete finalData.github;
    delete finalData.linkedin;

    console.log("Final Profile Data:", finalData);

    const result = await updateProfile(finalData, dispatch);
    console.log("API RESPONSE", result);
  };

  // DESTRUCTURE USER DATA
  const {
    firstName,
    lastName,
    email,
    profile: {
      bio,
      city,
      contactNumber,
      country,
      dob,
      gender,
      interests,
      socials,
      address,
      website,
    },
  } = user;

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 py-6">
      <p className="text-4xl Bebas mb-6">Update Profile Information</p>

      {/* PROFILE UPDATE FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {/* NAME FIELDS */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-x-6">
          <label className="flex-1">
            <p className="text-lg">First Name</p>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className="FormStyle w-full"
              defaultValue={firstName}
            />
            {errors.firstName && (
              <span className="text-red-400 text-sm">
                {errors.firstName.message}
              </span>
            )}
          </label>

          <label className="flex-1">
            <p className="text-lg">Last Name</p>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className="FormStyle w-full"
              defaultValue={lastName}
            />
            {errors.lastName && (
              <span className="text-red-400 text-sm">
                {errors.lastName.message}
              </span>
            )}
          </label>
        </div>

        {/* EMAIL & CONTACT */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-x-6">
          <label className="flex-1">
            <p className="text-lg">Email</p>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="FormStyle w-full"
              defaultValue={email}
            />
            {errors.email && (
              <span className="text-red-400 text-sm">
                {errors.email.message}
              </span>
            )}
          </label>

          <label className="flex-1">
            <p className="text-lg">Contact Number</p>
            <input
              type="text"
              {...register("contactNumber", {
                required: "Contact number is required",
              })}
              className="FormStyle w-full"
              defaultValue={contactNumber}
            />
            {errors.contactNumber && (
              <span className="text-red-400 text-sm">
                {errors.contactNumber.message}
              </span>
            )}
          </label>
        </div>

        {/* CITY & COUNTRY */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-x-6">
          <label className="flex-1">
            <p className="text-lg">City</p>
            <input
              type="text"
              {...register("city")}
              className="FormStyle w-full"
              defaultValue={city}
            />
          </label>

          <label className="flex-1">
            <p className="text-lg">Country</p>
            <input
              type="text"
              {...register("country")}
              className="FormStyle w-full"
              defaultValue={country}
            />
          </label>
        </div>

        {/* DOB & GENDER */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-x-6">
          <label className="flex-1">
            <p className="text-lg">Date of Birth</p>
            <input
              type="date"
              {...register("dob")}
              className="FormStyle w-full"
              defaultValue={dob?.split("T")[0]}
            />
          </label>

          <label className="flex-1">
            <p className="text-lg">Gender</p>
            <select
              {...register("gender")}
              className="FormStyle w-full rounded-lg"
              defaultValue={gender}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>

        {/* ADDRESS & WEBSITE */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-x-6">
          <label className="flex-1">
            <p className="text-lg">Address</p>
            <input
              type="text"
              {...register("address", { required: "Address is required" })}
              className="FormStyle w-full"
              placeholder="balua belwa chilua kushinagar"
              defaultValue={address}
            />
            {errors.address && (
              <span className="text-red-400 text-sm">
                {errors.address.message}
              </span>
            )}
          </label>

          <label className="flex-1">
            <p className="text-lg">Website</p>
            <input
              type="text"
              {...register("website", { required: "Website is required" })}
              className="FormStyle w-full"
              defaultValue={website}
            />
            {errors.website && (
              <span className="text-red-400 text-sm">
                {errors.website.message}
              </span>
            )}
          </label>
        </div>

        {/* BIO */}
        <label>
          <p className="text-lg">Bio</p>
          <textarea
            {...register("bio")}
            className="FormStyle w-full min-h-[100px]"
            defaultValue={bio}
          />
        </label>

        {/* INTERESTS */}
        <label>
          <p className="text-lg">Interests (comma separated)</p>
          <input
            type="text"
            {...register("interests")}
            className="FormStyle w-full"
            defaultValue={interests?.join(", ")}
          />
        </label>

        {/* SUBMIT BUTTON */}
        <Button text="Update Profile" customClasses={"max-w-[180px]"}/>
      </form>
    </section>
  );
};

export default ProfileDetails;
