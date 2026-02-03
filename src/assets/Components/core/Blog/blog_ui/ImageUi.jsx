import { motion } from "framer-motion";
import { useState } from "react";

const ImageUi = ({ data }) => {
  const imageUrl = data?.imageUrl;
  const [showTitle, setShowTitle] = useState(false);

  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        relative mt-4 rounded-xl overflow-hidden
        border border-gray-700 bg-black/30
      "
      onHoverStart={() => setShowTitle(true)}
      onHoverEnd={() => setShowTitle(false)}
      onTap={() => setShowTitle((prev) => !prev)} // 📱 mobile tap
    >
      {/* IMAGE / FALLBACK */}
      {imageUrl ? (
        <motion.img
          src={imageUrl}
          alt={data?.title || "Blog image"}
          className="w-full max-h-[420px] object-contain bg-black"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        />
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
          <span className="text-4xl mb-2">🖼️</span>
          <p className="text-sm">Image not available</p>
        </div>
      )}

      {/* TITLE OVERLAY */}
      {data?.title && (
        <motion.figcaption
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: showTitle ? 1 : 0,
            y: showTitle ? 0 : 10,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="
            absolute bottom-0 left-0 right-0
            px-4 py-2 text-xs text-gray-200 text-center
            bg-gradient-to-t from-black/80 to-black/20
            pointer-events-none
          "
        >
          {data.title}
        </motion.figcaption>
      )}
    </motion.figure>
  );
};

export default ImageUi;
