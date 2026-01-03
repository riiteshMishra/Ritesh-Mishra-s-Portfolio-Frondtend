import { motion } from "framer-motion";

const shimmer = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 1.4,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const SkeletonLine = ({ className }) => (
  <motion.div
    variants={shimmer}
    animate="animate"
    className={`
      rounded-md
      bg-gradient-to-r
      from-white/10 via-white/25 to-white/10
      bg-[length:200%_100%]
      ${className}
    `}
  />
);

const RequestSkeleton = ({ count = 2 }) => {
  return (
    <div className="mt-4 space-y-3 max-h-[300px] overflow-y-auto pr-1">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="
            p-3
            rounded-xl
            border border-white/20
            bg-white/5
            backdrop-blur-md
          "
        >
          {/* Name */}
          <SkeletonLine className="h-4 w-40" />

          {/* Email */}
          <SkeletonLine className="h-3 w-full mt-2" />

          {/* Contact */}
          <SkeletonLine className="h-3 w-28 mt-2" />
        </div>
      ))}
    </div>
  );
};

export default RequestSkeleton;
