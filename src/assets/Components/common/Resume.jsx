import React from 'react'
import { motion } from "framer-motion"
import { RESUME_URL } from '../../../utils/utilsData'

const Resume = () => {

    return (

        <motion.a
            href={RESUME_URL}
            download="Ritesh-Mishra-Resume.pdf"

            whileHover={{
                scale: 1.05,
                y: -2,
            }}

            whileTap={{
                scale: 0.96,
            }}

            className="group hidden md:inline-flex items-center gap-2 px-5 py-1 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 text-white font-semibold shadow-lg hover:bg-white/15 hover:border-white/20 hover:shadow-2xl transition-all duration-300"
        >

            {/* text */}
            <span className="tracking-wide">

                Resume

            </span>

            {/* icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-y-[2px] transition-transform duration-300"
            >

                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16V4m0 12-4-4m4 4 4-4m4 8H4"
                />

            </svg>

            {/* glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-white/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        </motion.a>

    )
}

export default Resume