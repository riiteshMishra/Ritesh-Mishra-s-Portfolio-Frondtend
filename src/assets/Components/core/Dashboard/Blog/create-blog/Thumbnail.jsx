import React, { useState } from "react";

const Thumbnail = ({ register, setValue }) => {
   const [file, setFile] = useState(null);

   const fileSizeSupported = (file) => {
     const supportedSize = 2 * 1024 * 1024; // 2 MB in bytes
     return file.size <= supportedSize;
   };

   const handleFileChange = (e) => {
     const selectedFile = e.target.files[0];
     if (!selectedFile) return;

     if (fileSizeSupported(selectedFile)) {
       setFile(selectedFile);
       setValue("thumbnail", selectedFile);
     } else {
       alert("File size should be less than 2MB");
     }
   };

  return (
    <label className="cursor-pointer">
      <div
        className={`mx-auto bg-gray-800  max-w-96 text-black text-center flex items-center justify-center overflow-hidden rounded ${
          file ? "h-fit" : "h-56"
        }`}
      >
        {file ? (
          <img src={URL.createObjectURL(file)} alt="Selected" className=" " />
        ) : (
          <p className="text-2xl capitalize text-gray-50">
            Please choose a Thumbnail
          </p>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </label>
  );
};

export default Thumbnail;
