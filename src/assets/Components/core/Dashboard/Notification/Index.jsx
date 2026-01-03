import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import RequestSkeleton from "../../../common/Loading";
import RequestCards from "./RequestCards";

const Notification = () => {
  const { requests, requestLoading } = useSelector((state) => state.contact);

  return (
    <div className="min-h-[calc(100vh-60px)] overflow-x-hidden overflow-y-auto pb-12 sm:py-0">
      <div className="max-w-[1100px] mx-auto w-11/12">
        {/* Page Header */}
        <div className="mb-4">
          <h1 className="text-xl font-semibold text-gray-100">Notifications</h1>
          <p className="text-sm text-gray-400">Client contact requests</p>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
          max-w-[420px]
          rounded-2xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-4
        "
        >
          {requestLoading ? <RequestSkeleton count={2} /> : <RequestCards />}
        </motion.div>
      </div>
    </div>
  );
};

export default Notification;
