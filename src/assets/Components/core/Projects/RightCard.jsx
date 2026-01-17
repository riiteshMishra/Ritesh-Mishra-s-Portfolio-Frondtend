import { motion } from "framer-motion";
import laptop from "../../../Images/laptop.png";

const figureVariants = {
  hidden: {
    scale: 0.95,
    x: 50,
  },
  visible: {
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const screenVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const RightCard = ({ thumbnail, projectName }) => {
  return (
    <motion.div
      className="w-full lg:w-fit flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      aria-label={`${projectName} project preview`}
    >
      <motion.figure
        variants={figureVariants}
        className="relative flex justify-center max-w-[500px]"
      >
        {/* Laptop Frame (decorative) */}
        <img
          src={laptop}
          loading="lazy"
          alt="static-computer-picture"
          aria-hidden="true"
          className="relative z-5 w-full select-none pointer-events-none  drop-shadow-[0_25px_50px_rgba(10,10,10,0.6)] "
        />

        {/* Project Screenshot */}
        <motion.img
          //     variants={screenVariants}
          src={thumbnail}
          alt={`${projectName} website preview`}
          loading="lazy"
          className=" pointer-events-none select-none
          border-gray-400/50 border
            absolute
            top-[13%] left-[10%]
            w-[80%] h-[65%]
            object-cover rounded-md
            z-6
          "
        />

        {/* SEO / Accessibility caption */}
        <figcaption className="sr-only">
          Screenshot of {projectName} displayed inside a laptop mockup
        </figcaption>
      </motion.figure>
    </motion.div>
  );
};

export default RightCard;
