import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../../../../services/operations/category";
import Loader from "../../../../common/Loader";
import CategoryCards from "./CategoryCards";
import ConfirmationModal from "../../../../common/ConfirmationModal";
import CategoriesNotFound from "../CategoriesNotFound";

const ViewCategory = ({ setCreate }) => {
  const [modalData, setModalData] = useState(null);
  const { categories, categoryLoading } = useSelector(
    (state) => state.category
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        await getCategories(dispatch);
      } catch (err) {
        console.log("Error while fetching categories", err);
      }
    };

    fetchCategories();
  }, [dispatch]);

  if (categoryLoading) return <Loader />;

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-200">All Categories</h2>
        <span className="text-sm text-gray-400">
          Total: {categories.length}
        </span>
      </div>

      {/* Empty State */}
      {categories.length === 0 ? (
        <CategoriesNotFound setCreate={setCreate} />
      ) : (
        <CategoryCards categories={categories} setModalData={setModalData} />
      )}

      {/* pop up */}
      {modalData && <ConfirmationModal modalData={modalData} />}
    </div>
  );
};

export default ViewCategory;
