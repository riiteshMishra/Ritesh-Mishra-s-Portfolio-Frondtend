import React from 'react'
import { motion } from 'framer-motion'
import { itemVariants } from "./Index"

const Heading = () => {
    return (
        <div className="space-y-4">

            <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-8xl font-headline tracking-tighter text-on-surface text-center font-[700]"
            >

                <span className="inline-block">
                    Ritesh{" "}
                </span>

                <span className="inline-block text-primary">
                    Mishra
                </span>

            </motion.h1>

            <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-on-surface-variant font-[400] max-w-2xl mx-auto leading-relaxed text-center"
            >

                Full Stack Developer (MERN). Crafting high-performance digital experiences with precision and soul.

            </motion.p>

        </div>
    )
}

export default Heading