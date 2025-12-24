import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../../../../../../services/operations/category";

const CategoryCards = ({ categories, setModalData }) => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const confirmHandler = async (categoryId) => {
    try {
      await deleteCategory(categoryId, token, dispatch);
    } catch (err) {
      console.log("error while deleting");
    } finally {
      setModalData(null);
    }
  };
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {categories.map((cat) => (
        <li
          key={cat._id || cat.id}
          className="bg-gray-700 rounded-xl p-5 shadow
                     hover:shadow-lg hover:scale-[1.02]
                     transition-all duration-200"
        >
          <h3 className="text-lg font-semibold text-white mb-2">
            {cat.categoryName}
          </h3>

          <p className="text-sm text-gray-300 line-clamp-3">
            {cat.description}
          </p>

          <div className="mt-4 flex gap-3 text-sm">
            {/* Edit */}
            <button className="py-1.5 px-4 rounded-md bg-black text-blue-400 hover:scale-105 active:scale-95 transition">
              Edit
            </button>

            {/* Delete */}
            <button
              className="py-1.5 px-4 rounded-md text-red-400 hover:bg-red-500/10
                         hover:scale-105 active:scale-95 transition"
              onClick={() =>
                setModalData({
                  title: "Delete Category",
                  description: `Are you sure you want to delete "${cat.categoryName}"?`,
                  confirmText: "Delete",
                  cancelText: "Cancel",
                  onConfirm: () => confirmHandler(cat._id),
                  onCancel: () => setModalData(null),
                })
              }
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryCards;
