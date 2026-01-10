import { useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import Ui from "./Ui";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const RequestNotification = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const { requests } = useSelector((state) => state.contact);
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    document.body.style.overflow = panelOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [panelOpen]);

  useEffect(() => {
    requests && setRequestCount(requests.length);
  }, [requests]);

  return (
    <section className="relative">
      {/* Bell Icon */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={panelOpen ? { rotate: 15 } : { rotate: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <IoMdNotificationsOutline
          className={`cursor-pointer text-xl transition z-10
            ${panelOpen ? "text-yellow-400" : "text-gray-200"} 
          `}
          onClick={(e) => {
            e.stopPropagation();
            setPanelOpen((prev) => !prev);
          }}
        />
      </motion.div>

      {/* Count Badge */}
      <AnimatePresence>
        {requestCount > 0 && (
          <motion.span
            key={requestCount}
            initial={{ scale: 0, y: -4 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="absolute text-[8px] -top-1 bg-green-500 z-20 
              -right-1 rounded-full px-[5px] text-black font-bold"
          >
            {requestCount}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {panelOpen && <Ui setPanelOpen={setPanelOpen} />}
      </AnimatePresence>
    </section>
  );
};

export default RequestNotification;
