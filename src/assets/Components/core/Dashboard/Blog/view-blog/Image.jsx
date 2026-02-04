import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Image = ({ src, alt }) => {
  const imageRef = useRef(null);

  // Fallback
  if (!src) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center rounded-xl bg-gray-800 text-gray-400 border border-gray-700">
        No image available
      </div>
    );
  }

  //  Scroll relative to this image only
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end start"],
  });

  //  Scroll → animation
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div ref={imageRef}>
      <motion.div
        style={{ y, scale, opacity }}
        initial={{ opacity: 0, scale: 0.9, y: -40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-xl origin-center"
      >
        <img
          src={src}
          alt={alt || "Blog image"}
          className="w-full h-[400px] object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Image;
