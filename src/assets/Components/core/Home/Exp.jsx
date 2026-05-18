import React from 'react'
import { motion } from 'framer-motion'
import { itemVariants } from './Hero/Index'

const Exp = () => {
    return (
        <section
            aria-label="About Ritesh Mishra"
            className="relative py-14 px-8 overflow-hidden"
        >

            {/* background glow */}
            <div className="absolute top-10 left-0 w-72 h-72 bg-primary-container/10 rounded-full blur-[120px]" />

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-[120px]" />

            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT */}
                <motion.article
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6"
                >

                    <header className="space-y-4">

                        <p className="text-secondary uppercase tracking-[0.2em] text-sm font-semibold">
                            About Me
                        </p>

                        <h2 className="text-4xl md:text-5xl font-[800] font-headline tracking-tight text-on-surface leading-tight">

                            MERN Stack Developer <br />

                            <span className="text-secondary">
                                Crafting Responsive Web Experiences
                            </span>

                        </h2>

                    </header>

                    <div className="space-y-4 text-on-surface-variant text-lg leading-relaxed">

                        <p>
                            I am a Full Stack Developer specializing in the MERN stack, focused on building fast, scalable, responsive, and visually modern web applications using React.js, Node.js, Express.js, and MongoDB.
                        </p>

                        <p>
                            My development approach combines clean UI design, maintainable architecture, optimized performance, and smooth user experiences to create high-quality digital products for modern businesses and startups.
                        </p>

                    </div>

                </motion.article>

                {/* RIGHT */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4"
                >

                    {/* experience */}
                    <motion.div
                        whileHover={{
                            y: -6,
                            scale: 1.02,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="relative overflow-hidden bg-surface-container-highest/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl space-y-4 mt-8 shadow-[0_0_40px_rgba(79,70,229,0.12)]"
                    >

                        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent" />

                        <strong className="relative block text-primary text-5xl font-bold font-headline">
                            2+
                        </strong>

                        <p className="relative text-on-surface-variant font-medium text-lg">
                            Years of Experience
                        </p>

                    </motion.div>

                    {/* projects */}
                    <motion.div
                        whileHover={{
                            y: -6,
                            scale: 1.02,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="relative overflow-hidden bg-surface-container/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl space-y-4 shadow-[0_0_40px_rgba(98,223,125,0.10)]"
                    >

                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />

                        <strong className="relative block text-secondary text-5xl font-bold font-headline">
                            15+
                        </strong>

                        <p className="relative text-on-surface-variant font-medium text-lg">
                            Projects Delivered
                        </p>

                    </motion.div>

                </motion.div>

            </div>

        </section>
    )
}

export default Exp