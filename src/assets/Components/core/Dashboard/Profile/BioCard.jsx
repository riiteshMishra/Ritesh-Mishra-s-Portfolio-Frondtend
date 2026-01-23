import { motion } from "framer-motion";
import { useState } from "react";
import Edit from "../../../common/Edit";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const BioCard = ({ bio }) => {
  const [expanded, setExpanded] = useState(false);
  const hasBio = bio && bio.trim().length > 0;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="
        relative backdrop-blur border border-gray-700 rounded-2xl
        p-6 max-w-[1200px] mx-auto my-8 w-11/12 overflow-hidden
        bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10
        animate-gradient
      "
    >
      {/* Edit button */}
      <div className="absolute top-4 right-4 z-10">
        <Edit path="/dashboard/settings" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 relative z-10">
        <h2 className="text-2xl font-semibold capitalize tracking-wide">Bio</h2>

        {hasBio ? (
          <>
            <p
              className={`text-gray-200 leading-relaxed text-lg transition-all
              ${expanded ? "" : "line-clamp-3"}`}
            >
              {bio}
            </p>

            {bio.length > 120 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-sm text-yellow-400 hover:underline w-fit"
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </>
        ) : (
          <p className="italic text-gray-300">
            You haven’t added a bio yet. Tell people something about yourself.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default BioCard;
