import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState, useEffect } from "react";

const ImageUi = ({ data }) => {
  const imageUrl = data?.imageUrl;
  // const imageUrl =
  //   "https://res.cloudinary.com/dwpplwqzs/image/upload/v1770131913/Portfolio-site/blogs/thumbnails/xjtsnvkebqz7ikmlqggg.jpg";
  const [showTitle, setShowTitle] = useState(false);
  const [viewImage, setViewImage] = useState(null);

  const imageViewHandler = (url) => setViewImage(url);

  // SCROLL LOCK WHILE VIEW IMAGE
  useEffect(() => {
    if (viewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [viewImage]);

  return (
    <LayoutGroup id="image-group">
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
        onTap={() => setShowTitle((prev) => !prev)} //  mobile tap
      >
        {/* IMAGE / FALLBACK */}
        {imageUrl ? (
          <motion.img
            src={imageUrl}
            alt={data?.title || "Blog image"}
            className="w-full max-h-[420px] object-contain bg-black"
            onClick={() => imageViewHandler(imageUrl)}
            layoutId="blog-image"
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

        <AnimatePresence>
          {viewImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-zoom-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setViewImage(null)}
            >
              <motion.img
                layoutId="blog-image"
                whileHover={{ border: "1px solid #fff" }}
                whileTap={{ border: "1px solid #fff" }}
                src={viewImage}
                alt="Full View"
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.figure>
    </LayoutGroup>
  );
};

export default ImageUi;
