import React, { useState } from "react";
import CategoryCreateForm from "./create_category/CategoryCreateForm";
import ViewCategory from "./view-category/ViewCategory";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryEdit } from "../../../../../slices/category";

const Category = () => {
  const [create, setCreate] = useState(false);
  const { categoryEdit } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  return (
    <section className="min-h-[calc(100vh-60px)] ">
      <div className="max-w-[1160px] mx-auto  py-4 px-4 w-11/12">
        {/* Toggle Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => {
              setCreate(false);
              dispatch(setCategoryEdit(false));
            }}
            className={` cursor-pointer px-4 py-2 rounded-md transition ${
              !create ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            See Categories
          </button>

          <button
            onClick={() => setCreate(true)}
            className={` cursor-pointer px-4 py-2 rounded-md transition capitalize ${
              create ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {categoryEdit ? "Edit category" : "create category"}
          </button>
        </div>

        {/* Content */}
        <div className=" rounded-lg p-6 shadow relative overflow-hidden">
          {create ? (
            <CategoryCreateForm setCreate={setCreate} />
          ) : (
            <ViewCategory setCreate={setCreate} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Category;
