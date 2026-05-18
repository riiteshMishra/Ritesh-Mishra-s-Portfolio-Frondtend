import React from 'react'
import { motion } from 'framer-motion'
import { itemVariants } from "./Index"

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const btnVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: "blur(10px)",
    },

    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

const HeroBtn = () => {
    return (
        <motion.div
            className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >

            {/* RESUME */}
            <motion.a
                href="https://drive.google.com/file/d/1SvA7na-yrq6aoyKIiexJ1Kqz1_4HeyvP/view?usp=sharing"
                download
                target='_blank'
                variants={btnVariants}
                whileHover={{
                    scale: 1.04,
                    y: -4,
                }}
                whileTap={{
                    scale: 0.96,
                    y: 2,
                }}
                className="relative overflow-hidden group bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 px-8 py-4 rounded-2xl font-semibold text-white flex items-center gap-3 shadow-[0_0_25px_rgba(79,70,229,0.25)] transition-all duration-500 active:scale-[0.96] active:translate-y-[2px]"
            >

                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-green-400/0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute inset-0 -translate-x-full md:group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <span className="relative z-10">
                    Download Resume
                </span>

                <span className="material-symbols-outlined text-xl relative z-10">
                    download
                </span>

            </motion.a>

            {/* WHATSAPP */}
            <motion.a
                href="https://wa.me/919565672752?text=Hi%20Ritesh%2C%20I%20want%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noreferrer"
                variants={btnVariants}
                whileHover={{
                    scale: 1.04,
                    y: -4,
                }}
                whileTap={{
                    scale: 0.96,
                    y: 2,
                }}
                className="relative overflow-hidden group bg-white/[0.03] backdrop-blur-xl border border-white/10 px-8 py-4 rounded-2xl font-semibold text-white flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.06)] transition-all duration-500 active:scale-[0.96] active:translate-y-[2px]"
            >

                <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/10 to-green-400/0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute inset-0 rounded-2xl border border-green-400/10 md:border-green-400/0 md:group-hover:border-green-400/30 transition-all duration-500" />

                <span className="relative z-10">
                    WhatsApp Me
                </span>

                <span className="material-symbols-outlined text-xl relative z-10">
                    chat
                </span>

            </motion.a>

        </motion.div>
    )
}

export default HeroBtn