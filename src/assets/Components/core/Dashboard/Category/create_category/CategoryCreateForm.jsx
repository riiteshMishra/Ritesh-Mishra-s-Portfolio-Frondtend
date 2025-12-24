import React, { useState } from "react";
import Loader from "../../../../common/Loader";
import { createCategory } from "../../../../../../services/operations/category";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

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

const CategoryCreateForm = () => {
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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
    formDataToSend.append("categoryName", formData.categoryName);
    formDataToSend.append("description", formData.description);

    try {
      setLoading(true);
      await createCategory(formDataToSend, token);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }

    setFormData({
      categoryName: "",
      description: "",
    });
  };

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
        Create New Category
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
          className="self-start bg-blue-600 text-white px-6 py-2 rounded-lg font-medium
                     hover:bg-blue-700 transition-all cursor-pointer"
        >
          Create Category
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default CategoryCreateForm;
