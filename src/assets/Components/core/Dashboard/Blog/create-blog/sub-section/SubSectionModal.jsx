import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  createSubSection,
  updateSubSection,
} from "../../../../../../../services/operations/subSection";

const add = "add";
const edit = "edit";
const prev = "preview";
const SubSectionModal = ({
  isOpen,
  onClose,
  sectionId,
  state = "preview",
  subSectionData,
}) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("text");
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [listItems, setListItems] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // MODAL CLOSE → reset
    if (!isOpen) {
      setTitle("");
      setType("text");
      setText("");
      setCode("");
      setListItems("");
      setFile(null);
      return;
    }

    // CREATE MODE
    if (!subSectionData) {
      setTitle("");
      setType("text");
      setText("");
      setCode("");
      setListItems("");
      setFile(null);
      return;
    }

    // PREVIEW / EDIT MODE → PREFILL
    setTitle(subSectionData.title || "");
    setType(subSectionData.type || "text");

    setText(subSectionData.text || "");
    setCode(subSectionData.code || "");

    if (subSectionData.type === "list") {
      setListItems(
        Array.isArray(subSectionData.listItems)
          ? subSectionData.listItems.join(", ")
          : "",
      );
    } else {
      setListItems("");
    }

    // image/video
    setFile(null);

    // console.log("SUB SECTION PREFILLED", subSectionData);
  }, [isOpen, subSectionData]);

  const handleSubmit = async () => {
    if (!title.trim()) return toast.error("Title is required");

    const formData = new FormData();
    formData.append("sectionId", sectionId);
    formData.append("title", title.trim());
    formData.append("type", type);

    if (type === "text") {
      if (!text.trim()) return toast.error("Text is required");
      formData.append("text", text.trim());
    }

    if (type === "code") {
      if (!code.trim()) return toast.error("Code is required");
      formData.append("code", code);
    }

    if (type === "list") {
      if (!listItems.trim()) return toast.error("List items required");
      formData.append(
        "listItems",
        JSON.stringify(listItems.split(",").map((i) => i.trim())),
      );
    }

    if (type === "image") {
      if (!file) return toast.error("Image is required");
      formData.append("image", file);
    }

    if (type === "video") {
      if (!file) return toast.error("Video is required");
      formData.append("video", file);
    }

    let result;

    // CREATE SUB SECTION
    if (state === add) {
      setLoading(true);
      result = await createSubSection(formData, token, dispatch);
      setLoading(false);
    }

    // EDIT SUB SECTION
    if (state === edit) {
      setLoading(true);
      formData.append("subSectionId", subSectionData?._id);
      result = await updateSubSection(formData, token, dispatch);
      setLoading(false);
    }
    if (!result) return;

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white border-black border rounded-2xl w-[90%] max-w-[460px] p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            <h2 className="text-xl font-semibold mb-4 capitalize text-gray-900">
              {state} Sub Section
            </h2>

            {/* TITLE */}
            <input
              className="w-full border border-gray-300 px-3 py-2 mb-3 rounded-lg
              text-gray-900 placeholder-gray-400 focus:outline-none
              focus:ring-2 focus:ring-indigo-500"
              placeholder="Title"
              value={title}
              onChange={
                state !== prev
                  ? (e) => setTitle(e.target.value)
                  : () => toast.error("Title not editable in preview mode")
              }
            />

            {/* TYPE */}
            <select
              className="w-full border border-gray-300 px-3 py-2 mb-3 rounded-lg
              text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={type}
              onChange={
                state !== prev
                  ? (e) => setType(e.target.value)
                  : () => toast.error("Type not changeable in preview mode")
              }
            >
              <option value="text">Text</option>
              <option value="image">Image</option>
              <option value="video">Video</option>
              <option value="code">Code</option>
              <option value="list">List</option>
            </select>

            {/* DYNAMIC INPUTS */}
            {type === "text" && (
              <textarea
                className="w-full border border-gray-300 p-2 rounded-lg mb-3
                text-gray-900 placeholder-gray-400 focus:outline-none
                focus:ring-2 focus:ring-indigo-500"
                placeholder="Write text content here..."
                value={text}
                onChange={
                  state !== prev
                    ? (e) => setText(e.target.value)
                    : () => toast.error("Text is not editable in preview mode")
                }
              />
            )}

            {type === "code" && (
              <textarea
                className="w-full border border-gray-300 p-2 rounded-lg mb-3
                font-mono text-sm text-gray-900 bg-gray-50
                focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Paste your code here..."
                value={code}
                onChange={
                  state !== prev
                    ? (e) => setCode(e.target.value)
                    : () => toast.error("code is not editable in preview mode")
                }
              />
            )}

            {type === "list" && (
              <input
                className="w-full border border-gray-300 px-3 py-2 mb-3 rounded-lg
                text-gray-900 placeholder-gray-400 focus:outline-none
                focus:ring-2 focus:ring-indigo-500"
                placeholder="Item1, Item2, Item3"
                value={listItems}
                onChange={
                  state !== prev
                    ? (e) => setListItems(e.target.value)
                    : () =>
                        toast.error(
                          "List items are not editable in preview mode",
                        )
                }
              />
            )}

            {(type === "image" || type === "video") && (
              <input
                type="file"
                accept={type === "image" ? "image/*" : "video/*"}
                onChange={
                  state !== prev
                    ? (e) => setFile(e.target.files[0])
                    : () => toast.error("file is not editable in preview mode")
                }
                className="mb-4 text-sm text-gray-700"
              />
            )}

            {/* ACTIONS */}
            {state !== prev && (
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={onClose}
                  className="px-4 py-1.5 rounded-lg border
                border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-4 py-1.5 rounded-lg bg-indigo-600
                text-white hover:bg-indigo-700 disabled:opacity-60 cursor-pointer"
                >
                  {loading ? "Adding..." : state}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubSectionModal;
