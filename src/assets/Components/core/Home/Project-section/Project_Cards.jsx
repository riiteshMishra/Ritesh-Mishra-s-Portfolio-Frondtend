import React from "react";
import Project_Card from "./Project_Card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Project_Cards = ({ projects }) => {
  return (
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {projects.map((card_data) => (
        <motion.div key={card_data.id} variants={cardVariants}>
          <Project_Card card_data={card_data} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Project_Cards;
