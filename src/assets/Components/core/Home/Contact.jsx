// src/components/Contact/Index.jsx

import React from "react"
import { motion } from "framer-motion"
import { FiArrowRight, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"

const Contact = () => {

    const floatingVariants = {
        animate: {
            y: [0, -15, 0],

            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    }

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="relative py-14 px-6 md:px-8 overflow-hidden"
        >

            {/* background glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full -translate-x-1/2" />

            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full translate-x-1/3" />

            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 60,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{ once: true }}

                    transition={{
                        duration: 0.8,
                    }}

                    className="relative overflow-hidden rounded-[40px] bg-[linear-gradient(135deg,#111827_0%,#1e293b_50%,#7c3aed_100%)] px-8 py-20 md:px-16 md:py-28 text-center border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                >

                    {/* animated glow */}
                    <motion.div
                        variants={floatingVariants}
                        animate="animate"
                        className="absolute top-0 right-0 w-[420px] h-[420px] bg-white/10 rounded-full blur-[120px] -mr-48 -mt-48"
                    />

                    <motion.div
                        variants={floatingVariants}
                        animate="animate"
                        className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-secondary/20 rounded-full blur-[90px] -ml-24 -mb-24"
                    />

                    {/* grid pattern */}
                    <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

                    {/* content */}
                    <div className="relative z-10 max-w-4xl mx-auto space-y-10">

                        {/* badge */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                            }}

                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}

                            viewport={{ once: true }}

                            transition={{
                                delay: 0.2,
                            }}
                        >

                            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-sm md:text-base font-bold tracking-[0.2em] uppercase text-white/80">

                                Available For Freelance

                            </span>

                        </motion.div>

                        {/* heading */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            viewport={{ once: true }}

                            transition={{
                                delay: 0.3,
                                duration: 0.7,
                            }}

                            className="space-y-8"
                        >

                            <h2
                                id="contact-heading"
                                className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-white leading-[1.05]"
                            >

                                Let’s Build
                                <br />

                                <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">

                                    Something Exceptional

                                </span>

                            </h2>

                            <p className="text-lg md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed">

                                I build scalable full stack web applications with modern UI, smooth user experience, and high-performance backend architecture.

                            </p>

                        </motion.div>

                        {/* buttons */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            viewport={{ once: true }}

                            transition={{
                                delay: 0.4,
                                duration: 0.7,
                            }}

                            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-2"
                        >

                            {/* primary button */}
                            <motion.a
                                whileHover={{
                                    scale: 1.05,
                                    y: -3,
                                }}

                                whileTap={{
                                    scale: 0.96,
                                }}

                                href="mailto:riteshmishra9565@gmail.com"
                                className="group inline-flex items-center gap-3 bg-white text-primary-container px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300"
                            >

                                Start a Project

                                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />

                            </motion.a>

                            {/* secondary button */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    y: -3,
                                }}

                                whileTap={{
                                    scale: 0.96,
                                }}
                            >

                                <Link
                                    to={"/contact-us"}
                                    className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl text-white border border-white/15 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all duration-300 shadow-xl"
                                >

                                    <FiMail />

                                    Contact Me

                                </Link>

                            </motion.div>

                        </motion.div>

                    </div>

                </motion.div>

            </div>

        </section>
    )
}

export default Contact