import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GiWideArrowDunk } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getRequests } from "../../../../services/operations/contact-us";
import RequestCards from "./RequestCards";
import RequestSkeleton from "../Loading";

const Ui = ({ setPanelOpen }) => {
  const { token } = useSelector((state) => state.auth);
  const { requests } = useSelector((state) => state.contact);
  const [loading, setLoading] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);
  const dispatch = useDispatch();

  // API CALL
  useEffect(() => {
    if (!requests || requests.length === 0) {
      const fetchClientRequests = async () => {
        setLoading(true);
        await getRequests(token, dispatch);
        setLoading(false);
      };

      fetchClientRequests();
    }
  }, [token, dispatch, requests]);

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="
        absolute
        top-10 sm:-right-4 -right-[15px]
        w-[320px] max-w-[420px]
        min-h-[300px] max-h-[400px]
        p-6
        backdrop-blur-2xl
        rounded-2xl
        border border-white/30
        shadow-2xl
        z-50
      "
    >
      {/* Arrow */}
      <GiWideArrowDunk className="absolute -top-3 sm:right-8 right-20 text-yellow-300 text-xl -rotate-90" />

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-200">Notifications</h3>

        {/* Close */}
        <motion.button
          onClick={() => setPanelOpen(false)}
          aria-label="Close notifications"
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260 }}
          className="p-1 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-500/10"
        >
          <IoClose className="text-xl" />
        </motion.button>
      </div>

      {/* Content */}
      <div className="mt-4">
        {loading ? (
          <RequestSkeleton count={5} />
        ) : (
          <RequestCards setPanelOpen={setPanelOpen} />
        )}
      </div>
    </motion.div>
  );
};

export default Ui;
