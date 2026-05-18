import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "./Index"

const Badge = () => {
    return (
        <div className="flex items-center justify-center z-20">

            <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-highest border border-outline-variant/10 text-secondary text-sm font-medium tracking-wide"
            >

                <motion.span
                    className="w-2 h-2 rounded-full bg-secondary"
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [1, 0.5, 1],
                    }}
                    transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                Available for new projects

            </motion.div>

        </div>
    );
};

export default Badge;