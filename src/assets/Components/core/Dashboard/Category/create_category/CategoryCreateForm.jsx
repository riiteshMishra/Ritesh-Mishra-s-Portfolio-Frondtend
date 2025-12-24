import React, { useEffect, useState } from "react";
import Loader from "../../../../common/Loader";
import {
  createCategory,
  updateCategory,
} from "../../../../../../services/operations/category";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { setCategoryEdit } from "../../../../../../slices/category";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const CategoryCreateForm = ({ setCreate }) => {
  const { token } = useSelector((state) => state.auth);
  const { categoryEdit } = useSelector((state) => state.category);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryData } = useSelector((state) => state.category);
  // console.log("category Data", categoryData);
  const [formData, setFormData] = useState({
    categoryName: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    if (categoryEdit) formDataToSend.append("categoryId", categoryData?._id);
    // console.log(first);
    formDataToSend.append("categoryName", formData.categoryName);
    formDataToSend.append("description", formData.description);

    try {
      setLoading(true);
      if (!categoryEdit) {
        await createCategory(formDataToSend, token);
      } else {
        await updateCategory(formDataToSend, token, dispatch);
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setCategoryEdit(false));
      setCreate(false);
      setLoading(false);
    }

    setFormData({
      categoryName: "",
      description: "",
    });
  };

  // edit category
  useEffect(() => {
    if (categoryEdit && categoryData) {
      setFormData({
        categoryName: categoryData.categoryName || "",
        description: categoryData.description || "",
      });
    }
  }, [categoryEdit, categoryData]);

  if (loading) return <Loader />;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-xl bg-gray-700 rounded-2xl shadow-md p-6"
    >
      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="text-2xl font-semibold mb-6 text-gray-200"
      >
        {categoryEdit ? "Edit category" : "Create new category"}
      </motion.h2>

      <motion.form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Category Name */}
        <motion.div variants={itemVariants} className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-300">
            Category Name
          </label>
          <input
            type="text"
            name="categoryName"
            value={formData.categoryName}
            placeholder="e.g. Web Development"
            onChange={handleChange}
            maxLength={30}
            required
            className="FormStyle rounded-lg px-4 py-2 border border-gray-300
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-400">Max 30 characters</p>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Short description about this category"
            rows={4}
            className="FormStyle rounded-lg px-4 py-2 border border-gray-300
                       focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className=" capitalize self-start bg-blue-600 text-white px-6 py-2 rounded-lg font-medium
                     hover:bg-blue-700 transition-all cursor-pointer"
        >
          {categoryEdit ? "edit category" : "Create Category"}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default CategoryCreateForm;
