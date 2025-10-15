import { useDispatch, useSelector } from "react-redux";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { updateProfile } from "../../../../../services/operations/User";
import toast from "react-hot-toast";

const AddSocialLinks = () => {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const {
    facebook,
    instagram,
    x: twitter,
    github,
    linkedin,
  } = user.profile.socials;

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    // object combine kr rha hu
    const socials = {
      facebook: data.facebook || "",
      instagram: data.instagram || "",
      x: data.twitter || "",
      github: data.github || "",
      linkedin: data.linkedin || "",
    };

    const payload = { socials };

    const result = await updateProfile(payload, dispatch);
    setLoading(false);
  };

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 py-6">
      <p className="text-4xl Bebas mb-6">Update Social Links</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Facebook */}
        <label className="flex items-center gap-x-5 flex-col md:flex-row">
          <FaFacebook fontSize={32} />
          <input
            type="text"
            {...register("facebook")}
            className="FormStyle w-full"
            placeholder="https://facebook.com"
            defaultValue={facebook}
          />
        </label>

        {/* Instagram */}
        <label className="flex items-center gap-x-5 flex-col md:flex-row">
          <FaInstagram fontSize={32} />
          <input
            type="text"
            {...register("instagram")}
            className="FormStyle w-full"
            placeholder="https://instagram.com"
            defaultValue={instagram}
          />
        </label>

        {/* Twitter */}
        <label className="flex items-center gap-x-5 flex-col md:flex-row">
          <FaTwitter fontSize={32} />
          <input
            type="text"
            {...register("twitter")}
            className="FormStyle w-full"
            placeholder="https://twitter.com"
            defaultValue={twitter}
          />
        </label>

        {/* GitHub */}
        <label className="flex items-center gap-x-5 flex-col md:flex-row">
          <FaGithub fontSize={32} />
          <input
            type="text"
            {...register("github")}
            className="FormStyle w-full"
            placeholder="https://github.com"
            defaultValue={github}
          />
        </label>

        {/* LinkedIn */}
        <label className="flex items-center gap-x-5 flex-col md:flex-row">
          <FaLinkedin fontSize={32} />
          <input
            type="text"
            {...register("linkedin")}
            className="FormStyle w-full"
            placeholder="https://linkedin.com"
            defaultValue={linkedin}
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className={`mt-6 px-6 py-2 rounded ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-slate-500 hover:bg-lime-400 hover:text-black"
          } text-white`}
        >
          {loading ? "Saving..." : "Save Links"}
        </button>
      </form>
    </section>
  );
};

export default AddSocialLinks;
