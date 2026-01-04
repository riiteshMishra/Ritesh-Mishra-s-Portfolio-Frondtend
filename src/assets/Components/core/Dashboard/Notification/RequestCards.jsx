import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaCheckCircle,
  FaTimesCircle,
  FaTrash,
} from "react-icons/fa";
import ConfirmationModal from "../../../common/ConfirmationModal";

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const RequestCards = () => {
  const { requests } = useSelector((state) => state.contact);
  const [filter, setFilter] = useState("all");
  const [fullMessage, setFullMessage] = useState({});
  const [modalData, setModalData] = useState(null);
  // Request
  if (!requests || requests.length === 0) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm text-gray-400 text-center mt-8"
      >
        No requests found 🙂
      </motion.p>
    );
  }

  // Filtering
  const filteredRequests = [...requests].filter((req) => {
    const status = req.status || "pending";
    if (filter === "pending") return status === "pending";
    if (filter === "resolved") return status === "resolved";
    if (filter === "rejected") return status === "rejected";
    return true;
  });

  // Resolve Handler
  const resolveHandler = (id) => {
    setModalData({
      title: "Are you sure?",
      description: "This action cannot be undone.",
      confirmText: "Resolve",
      cancelText: "Cancel",
      onConfirm: () => {
        // TODO: API call for resolve request
        console.log("Resolved request:", id);
        setModalData(null);
      },
      onCancel: () => setModalData(null),
      loading: false,
    });
  };

  // Reject Handler
  const rejectHandler = (id) => {
    setModalData({
      title: "Are you sure?",
      description: "This action cannot be undone.",
      confirmText: "Reject",
      cancelText: "Cancel",
      onConfirm: () => {
        // TODO: API call for reject request
        console.log("Rejected request:", id);
        setModalData(null);
      },
      onCancel: () => setModalData(null),
      loading: false,
    });
  };

  // Delete Handler
  const deleteHandler = () => console.log("deleted");

  return (
    <div>
      {/* FILTER BAR */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {["all", "pending", "resolved", "rejected"].map((key) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`
              px-4 py-1.5
              text-xs sm:text-sm
              rounded-full
              transition
              ${
                filter === key
                  ? "bg-indigo-500/30 text-indigo-300 shadow-inner"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }
            `}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4 max-h-[70vh] sm:max-h-[360px] overflow-y-auto pr-1"
      >
        {filteredRequests.map((req) => {
          const status = req.status || "pending";

          return (
            <motion.div
              key={req._id}
              variants={cardVariants}
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                hover:bg-white/10
                transition
              "
            >
              {/* CARD CONTENT */}
              <div className="p-4 sm:p-5">
                {/* HEADER */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                      <FaUser className="text-indigo-400 text-sm" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-100 capitalize truncate">
                        {req.firstName} {req.lastName}
                      </p>

                      <span
                        className={`
                          inline-block mt-1 px-2 py-0.5 rounded-full text-[10px]
                          ${
                            status === "resolved"
                              ? "bg-green-500/20 text-green-400"
                              : status === "rejected"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }
                        `}
                      >
                        {status === "resolved"
                          ? "Resolved"
                          : status === "rejected"
                          ? "Rejected"
                          : "Pending"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="mt-4 space-y-2 text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center gap-2 break-all">
                    <FaEnvelope className="text-[12px] shrink-0" />
                    <span>{req.email}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-[12px] shrink-0" />
                    <span>{req.contactNumber}</span>
                  </div>

                  {/* Description */}
                  {req.message && (
                    <div className="mt-2 text-gray-300 bg-white/5 rounded-xl p-3 text-xs sm:text-sm leading-relaxed">
                      {fullMessage[req._id]
                        ? req.message
                        : req.message.substring(0, 100)}{" "}
                      {req.message.length > 100 && (
                        <span
                          className="text-pink-400 cursor-pointer"
                          onClick={() =>
                            setFullMessage((prev) => ({
                              ...prev,
                              [req._id]: !prev[req._id],
                            }))
                          }
                        >
                          {fullMessage[req._id] ? "hide" : "show"}...
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* ACTIONS */}
                <div className="mt-5 flex justify-end gap-3 flex-wrap">
                  {status === "pending" && (
                    <>
                      {/* Resolve handler */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs text-green-400 hover:bg-green-500/10 transition cursor-pointer"
                        onClick={() => resolveHandler(req?._id)}
                      >
                        <FaCheckCircle />
                        Resolve
                      </motion.button>

                      {/* Reject handler */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs text-red-400 hover:bg-red-500/10 transition cursor-pointer"
                        onClick={() => rejectHandler(req?._id)}
                      >
                        <FaTimesCircle />
                        Reject
                      </motion.button>
                    </>
                  )}

                  {/* If Status Resolved or Rejected \\ Delete  */}
                  {(status === "resolved" || status === "rejected") && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs text-red-400 hover:bg-red-500/10 transition cursor-pointer"
                      onClick={() => deleteHandler(req?._id)}
                    >
                      <FaTrash />
                      Delete
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Confirmation Modal */}
      {modalData && <ConfirmationModal modalData={modalData} />}
    </div>
  );
};

export default RequestCards;
