import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const RequestCards = () => {
  const { requests } = useSelector((state) => state.contact);
  const navigate = useNavigate();
  // Empty state
  if (!requests || requests.length === 0) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm text-gray-400 text-center mt-6"
      >
        No requests found 🙂
      </motion.p>
    );
  }

  return (
    <motion.div
      variants={listVariants}
      initial="hidden"
      animate="visible"
      className="mt-4 space-y-3 max-h-[300px] overflow-y-auto pr-1"
    >
      {requests.map((req) => (
        <motion.div
          key={req._id}
          variants={cardVariants}
          whileHover={{ y: -2, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="
            group
            p-4
            rounded-2xl
            border border-white/15
            bg-white/5
            backdrop-blur-xl
            hover:bg-white/10
            transition-colors
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-100 capitalize">
              {req.firstName} {req.lastName}
            </p>

            <span className="text-[10px] text-gray-500">New</span>
          </div>

          {/* Email */}
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
            <FaEnvelope className="text-[11px]" />
            <span className="break-all">{req.email}</span>
          </div>

          {/* Phone */}
          <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
            <FaPhoneAlt className="text-[11px]" />
            <span>{req.contactNumber}</span>
          </div>

          {/* Action */}
          <motion.button
            whileHover={{ x: 4 }}
            className="
              mt-3
              text-xs
              text-indigo-400
              hover:text-indigo-300
              opacity-0
              group-hover:opacity-100
              transition
            "
            onClick={() => navigate("/dashboard/notification")}
          >
            View details →
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default RequestCards;
