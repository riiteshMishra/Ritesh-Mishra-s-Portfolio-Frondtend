// src/components/Contact/Index.jsx

import React, { useState } from "react"
import { motion } from "framer-motion"
import { FiArrowRight, FiMail, FiMapPin, FiZap, FiGithub, FiLinkedin } from "react-icons/fi"
import { Link } from "react-router-dom"

const Contact = () => {

    const [copied, setCopied] = useState(false)

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("riteshmishra9565@gmail.com")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const floatingVariants = {
        animate: {
            y: [0, -8, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                type: "tween",
            },
        },
    }

    const infoItems = [
        { icon: <FiMapPin size={14} />, label: "Lucknow, India" },
        { icon: <FiZap size={14} />, label: "Response within 24hrs" },
    ]

    const socialLinks = [
        { icon: <FiGithub size={18} />, href: "https://github.com/riiteshMishra", label: "GitHub" },
        { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/ritesh-mishra-059519352", label: "LinkedIn" },
        { icon: <FiMail size={18} />, href: "mailto:riteshmishra.dev@gmail.com", label: "Email" },
    ]

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="relative py-20 px-6 md:px-8 overflow-hidden"
        >

            {/* background glow */}
            <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ willChange: "transform" }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full -translate-x-1/2 pointer-events-none"
            />
            <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ willChange: "transform" }}
                className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full translate-x-1/3 pointer-events-none"
            />

            <div className=" max-w-7xl mx-auto">

                {/* section label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-4"
                >
                    Contact
                </motion.p>

                {/* split layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >

                        {/* badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-xs font-bold tracking-[0.2em] uppercase text-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                            Available For Freelance
                        </span>

                        {/* heading */}
                        <h2
                            id="contact-heading"
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-headline tracking-tight text-on-surface leading-[1.05]"
                        >
                            Let's Build
                            <br />
                            <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                                Something
                            </span>
                            <br />
                            Exceptional
                        </h2>

                        <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-md">
                            I build scalable full stack web applications with modern UI, smooth user experience, and high-performance backend architecture.
                        </p>

                        {/* info items */}
                        <div className="space-y-3">
                            {infoItems.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-on-surface-variant">
                                    <span className="text-primary">{item.icon}</span>
                                    {item.label}
                                </div>
                            ))}

                            {/* email copy */}
                            <button
                                onClick={handleCopyEmail}
                                className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-primary transition-colors duration-200 group"
                            >
                                <span className="text-primary"><FiMail size={14} /></span>
                                riteshmishra.dev@gmail.com
                                <span className="text-xs text-primary/60 group-hover:text-primary transition-colors">
                                    {copied ? "Copied!" : "Copy"}
                                </span>
                            </button>
                        </div>

                        {/* social links */}
                        <div className="flex items-center gap-3 pt-2">
                            {socialLinks.map((s, i) => (
                                <motion.a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-xl border border-outline-variant bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all duration-200"
                                    aria-label={s.label}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>

                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative rounded-3xl border border-outline-variant bg-surface-container p-8 space-y-6 overflow-hidden"
                    >

                        {/* card glow */}
                        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/5 blur-[80px] rounded-full -mr-16 -mt-16 pointer-events-none" />

                        <div className="relative z-10 space-y-6">

                            <h3 className="text-xl font-bold font-headline text-on-surface">
                                Start a conversation
                            </h3>

                            {/* CTA buttons */}
                            <div className="space-y-3">

                                <motion.a
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="mailto:riteshmishra9565@gmail.com"
                                    className="group flex items-center justify-between w-full bg-primary text-on-primary px-6 py-4 rounded-2xl font-bold text-base shadow-lg hover:shadow-primary/20 transition-all duration-300"
                                >
                                    <span className="flex items-center gap-3">
                                        <FiMail size={18} />
                                        Send me an Email
                                    </span>
                                    <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                </motion.a>

                                <motion.div
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link
                                        to="/contact-us"
                                        className="group flex items-center justify-between w-full border border-outline-variant bg-surface-container-high px-6 py-4 rounded-2xl font-bold text-base text-on-surface hover:border-primary/40 hover:bg-surface-container-highest transition-all duration-300"
                                    >
                                        <span className="flex items-center gap-3">
                                            <FiArrowRight size={18} />
                                            Contact Form
                                        </span>
                                        <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </motion.div>

                            </div>

                            {/* divider */}
                            <div className="flex items-center gap-4">
                                <div className="flex-1 h-px bg-outline-variant" />
                                <span className="text-xs text-on-surface-variant">or connect on</span>
                                <div className="flex-1 h-px bg-outline-variant" />
                            </div>

                            {/* social grid */}
                            <div className="grid grid-cols-3 gap-3">
                                {socialLinks.map((s, i) => (
                                    <motion.a
                                        key={i}
                                        href={s.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex flex-col items-center gap-2 py-4 rounded-2xl border border-outline-variant bg-surface-container-low hover:border-primary/40 hover:bg-surface-container transition-all duration-200 text-on-surface-variant hover:text-primary"
                                        aria-label={s.label}
                                    >
                                        {s.icon}
                                        <span className="text-xs font-medium">{s.label}</span>
                                    </motion.a>
                                ))}
                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    )
}

export default Contact