import { motion } from "framer-motion";
import { useState } from "react";
import ConfirmationModal from "../../../common/ConfirmationModal";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaCheckCircle,
  FaTimesCircle,
  FaTrash,
} from "react-icons/fa";
import {
  contactRequestStatusUpdate,
  deleteRequest,
} from "../../../../../services/operations/contact-us";
import { useDispatch, useSelector } from "react-redux";
import {
  removeRequestById,
  updateRequestById,
} from "../../../../../slices/contact-us";

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
const RequestCard = ({ filteredRequests }) => {
  const [fullMessage, setFullMessage] = useState({});
  const [modalData, setModalData] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Resolve Handler
  const resolveHandler = (data) => {
    setModalData({
      title: "Are you sure?",
      description: "This action cannot be undone.",
      confirmText: "Resolve",
      cancelText: "Cancel",
      onConfirm: async () => {
        const formData = new FormData();
        formData.append("requestId", data);
        formData.append("status", "resolved");
        const result = await contactRequestStatusUpdate(formData, token);
        if (result) dispatch();
        setModalData(null);
      },
      onCancel: () => setModalData(null),
      loading: false,
    });
  };

  // Reject Handler
  const rejectHandler = (id) => {
    setModalData({
      title: "Reject this message?",
      description:
        "Are you sure you want to reject or ignore this message? This action cannot be undone.",
      confirmText: "Reject",
      cancelText: "Cancel",
      onConfirm: async () => {
        //  API CALL FOR REJECT MESSAGE
        const formData = new FormData();
        formData.append("requestId", id);
        formData.append("status", "rejected");
        const result = await contactRequestStatusUpdate(formData, token);

        // dispatch
        if (result?.success) dispatch(updateRequestById(result?.data));
        setModalData(null);
      },
      onCancel: () => setModalData(null),
      loading: true,
    });
  };

  // Delete Handler
  const deleteHandler = (id) => {
    setModalData({
      title: "Delete this request?",
      description:
        "Are you sure you want to delete this request? This action cannot be undone.",
      confirmText: "Delete",
      cancelText: "Cancel",
      // API CALL
      onConfirm: async () => {
        try {
          const formData = new FormData();
          formData.append("requestIds", id);
          const result = await deleteRequest(formData, token);
          if (result?.success) {
            dispatch(removeRequestById(id));
          }
        } finally {
          setModalData(null);
        }
      },

      onCancel: () => setModalData(null),
      loading: true,
    });
  };

  return (
    <div>
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
                        onClick={() => resolveHandler(req._id)}
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

export default RequestCard;
