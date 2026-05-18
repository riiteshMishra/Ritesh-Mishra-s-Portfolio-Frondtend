import React from 'react'
import { motion } from 'framer-motion'
import Ritesh from "/ritesh.jpg"
import { itemVariants } from "./Index"

const Dev = () => {
    return (
        <motion.div
            variants={itemVariants}
            className="p-10 md:pt-16 flex justify-center relative z-1  "
        >

            <motion.div
                className="relative group"
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >

                {/* OUTER GLOW */}
                <motion.div
                    animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -inset-4 bg-gradient-to-tr from-primary-container/40 via-secondary/20 to-primary/30 rounded-full blur-3xl"
                />

                {/* ROTATING RING */}
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-container via-surface-variant to-secondary"
                />

                {/* SECOND RING */}
                <motion.div
                    animate={{
                        rotate: -360,
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-full border border-white/10"
                />

                {/* IMAGE WRAPPER */}
                <div className="relative w-58 h-58 md:w-64 md:h-64 rounded-full p-[5px] bg-background">

                    <motion.img
                        src={Ritesh}
                        alt="Ritesh Mishra"
                        whileHover={{
                            scale: 1.04,
                        }}
                        transition={{
                            duration: 0.4,
                        }}
                        className="w-full h-full object-cover rounded-full border-4 border-surface shadow-[0_0_40px_rgba(79,70,229,0.25)]
                         pointer-events-none
                        "
                    />

                </div>

                {/* FLOATING DOTS */}
                <motion.div
                    animate={{
                        y: [0, -12, 0],
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-3 right-4 w-3 h-3 rounded-full bg-secondary shadow-[0_0_20px_rgba(98,223,125,0.9)]"
                />

                <motion.div
                    animate={{
                        y: [0, 10, 0],
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-5 left-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_20px_rgba(195,192,255,0.9)]"
                />

            </motion.div>

        </motion.div>
    )
}

export default Dev