import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../common/Button";
import { updatePicture } from "../../../../../services/operations/auth";

const ProfileImage = () => {
  const { user } = useSelector((state) => state.profile);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ profileImage: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profileImage: file }));
      setImage(URL.createObjectURL(file));
    }
  };

  const pictureUpdate = async (data) => {
    const updatedForm = new FormData();
    updatedForm.append("profileImage", data.profileImage);
    setLoading(true);
    await updatePicture(updatedForm, dispatch);
    setLoading(false);
    setImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    pictureUpdate(formData);
  };

  return (
    <div className="flex items-center gap-10 md:flex-row flex-col relative">
      <img
        src={image || user?.image}
        alt="user-avatar"
        className="h-[200px] w-[200px] rounded-full object-cover cursor-pointer active:border active:border-gray-300"
      />

      <div className="flex flex-col items-center lg:flex-row  gap-10">
        <form onSubmit={handleSubmit}>
          <label>
            <p className="capsule ">
              {image ? "Selected" : "Select Image"}
            </p>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleChange}
              name="profileImage"
            />
          </label>

          {image && (
            <div className="flex gap-3 mt-4">
              <Button
                text={loading ? "Updating..." : "Update"}
                disabled={loading}
              />
              <Button text={"Cancel"} onClick={() => setImage(null)} />
            </div>
          )}
        </form>

        <div>
          <p className="capitalize text-4xl">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="capitalize text-2xl">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
