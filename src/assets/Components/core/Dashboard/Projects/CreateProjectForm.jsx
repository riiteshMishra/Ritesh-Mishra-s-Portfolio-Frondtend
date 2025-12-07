import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ImageView from "./ImageView";
import FrontendStackInput from "./FrontendStackInput";
import BackendTechInput from "./BackendTechInput";
import { createProject } from "../../../../../services/operations/project";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../common/Loader";

const CreateProjectForm = () => {
  const { token } = useSelector((state) => state.auth);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    resetField,
    reset,
  } = useForm();

  // Register thumbnail manually
  useEffect(() => {
    register("thumbnail", { required: "Thumbnail is required" });
  }, [register]);

  // HANDLE IMAGE UPLOAD
  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setValue("thumbnail", file, { shouldValidate: true }); // store for RHF
    }
  };

  const handleRemoveImage = () => {
    setImage("");
    resetField("thumbnail");
  };

  // SUBMIT FORM
  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("thumbnail", data.thumbnail);
    formData.append("projectName", data.name || "");
    formData.append("description", data.description || "");
    formData.append("gitHubLink", data.githubLink || "");
    if (data.liveLink) formData.append("liveLink", data.liveLink || "");
    const frontendArray = Array.isArray(data.frontendTech)
      ? data.frontendTech
      : data.frontendTech
      ? [data.frontendTech]
      : [];
    const backendArray = Array.isArray(data.backendTech)
      ? data.backendTech
      : data.backendTech
      ? [data.backendTech]
      : [];

    frontendArray.forEach((tech) => formData.append("frontendTech", tech));
    backendArray.forEach((tech) => formData.append("backendTech", tech));
    try {
      setLoading(true);
      await createProject(formData, token, dispatch);
    } catch (err) {
      console.log("error while creating project", err);
    } finally {
      setImage("");
      reset();
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  return (
    <div className="relative z-10  mx-auto flex flex-col items-center pb-10">
      <h1 className="text-3xl font-semibold mb-6 text-white text-center pt-2">
        Create Project & Show to The World
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          w-full flex flex-col gap-6
          bg-white/10 backdrop-blur-xl 
          border border-white/20 
          rounded-2xl px-6 shadow-xl
          py-10
        "
      >
        {/* Thumbnail Upload */}
        <div className="flex flex-col items-center relative">
          <label className="cursor-pointer">
            <input
              type="file"
              hidden
              name="thumbnail"
              accept="image/*"
              onChange={handleChange}
            />
            <ImageView image={image} />
          </label>

          <div className="mt-2 flex items-center gap-3">
            {image && (
              <button
                type="button"
                onClick={handleRemoveImage}
                className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700"
              >
                Remove
              </button>
            )}

            {errors.thumbnail && (
              <p className="text-red-400 text-sm">Thumbnail is required</p>
            )}
          </div>
        </div>

        {/* Project Name */}
        <div className="flex flex-col gap-y-1 w-full">
          <label className="w-full">
            <p className="text-xl font-medium mb-1 text-white">Project Name</p>
            <input
              type="text"
              placeholder="Enter project name"
              {...register("name", { required: true })}
              className="form-style"
              maxLength={35}
            />
          </label>

          {errors.name && (
            <p className="text-red-400 text-sm">Project name is required</p>
          )}
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1 w-full">
          <label className="w-full">
            <p className="text-xl font-medium mb-1 text-white">Description</p>
            <textarea
              rows={5}
              maxLength={500}
              {...register("description", { required: true })}
              className="form-style"
              placeholder="Explain your project..."
            />
          </label>
          {errors.description && (
            <p className="text-red-400 text-sm">Description is required</p>
          )}
        </div>

        {/* Frontend + Backend Tech */}
        <FrontendStackInput setValue={setValue} />
        <BackendTechInput setValue={setValue} />

        {/* GitHub Link */}
        <div className="flex flex-col gap-1 w-full">
          <label>
            <p className="text-xl text-white">GitHub Link</p>
            <input
              type="text"
              {...register("githubLink", { required: true })}
              placeholder="https://github.com/your-project"
              className="form-style"
            />
          </label>
          {errors.githubLink && (
            <p className="text-red-400 text-sm">GitHub link required</p>
          )}
        </div>

        {/* Live link */}
        <div className="flex flex-col gap-1 w-full">
          <label>
            <p className="text-xl text-white">
              Live Link <span className=" text-blue-300">(optional)</span>
            </p>
            <input
              type="text"
              {...register("liveLink")}
              className="form-style"
              placeholder="https://yourproject.vercel.app"
            />
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            w-full py-3 bg-blue-600 text-white rounded-xl cursor-pointer
            shadow-md hover:bg-blue-700 transition-all text-lg
          "
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default CreateProjectForm;
