// src/components/Testimonial/Index.jsx

import React from "react"
import { motion } from "framer-motion"
import { FaQuoteRight } from "react-icons/fa"
import { testimonials } from "./data"

const containerVariants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.18,
        },
    },
}

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
}

const Testimonial = () => {
    return (
        <section
            id="testimonials"
            aria-labelledby="testimonial-heading"
            className="relative py-16 px-6 md:px-8 overflow-hidden bg-surface-container"
        >

            {/* glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />

            <div className="relative max-w-7xl mx-auto">

                {/* heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >

                    <span className="text-xs font-bold tracking-[0.25em] uppercase text-secondary">

                        Testimonials

                    </span>

                    <h2
                        id="testimonial-heading"
                        className="mt-5 text-4xl md:text-5xl font-extrabold font-headline text-on-surface"
                    >

                        What Clients Say

                    </h2>

                    <p className="mt-6 text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">

                        Trusted by clients for building scalable, modern, and high-performance web applications with premium user experience.

                    </p>

                </motion.div>

                {/* cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >

                    {testimonials.map((item, index) => (

                        <motion.article
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                            }}
                            transition={{
                                duration: 0.35,
                            }}
                            className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden group"
                        >

                            {/* quote icon */}
                            <div className="absolute top-8 right-8 text-primary/20 text-5xl">

                                <FaQuoteRight />

                            </div>

                            {/* review */}
                            <p className="text-lg leading-relaxed italic text-on-surface-variant mb-10 relative z-10">

                                "{item.review}"

                            </p>

                            {/* user */}
                            <div className="flex items-center gap-4">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-14 h-14 rounded-full object-cover border border-white/10"
                                />

                                <div>

                                    <h3 className="font-bold text-on-surface">

                                        {item.name}

                                    </h3>

                                    <p className="text-xs uppercase tracking-wider text-on-surface-variant">

                                        {item.role}

                                    </p>

                                </div>

                            </div>

                            {/* hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

                        </motion.article>

                    ))}

                </motion.div>

            </div>

        </section>
    )
}

export default Testimonial