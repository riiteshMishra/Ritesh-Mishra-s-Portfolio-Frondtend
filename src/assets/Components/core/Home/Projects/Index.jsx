import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { projectsData } from './data'
import { Link } from 'react-router-dom'

// SEO + smooth motion variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.96,
    },

    visible: {
        opacity: 1,
        y: 0,
        scale: 1,

        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
}

const imageVariants = {
    hover: {
        scale: 1.08,
        transition: {
            duration: 0.7,
        },
    },
}

const Projects = () => {
    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="relative py-14 px-6 md:px-8 overflow-hidden bg-surface-container-lowest"
        >

            {/* SEO hidden heading */}
            <h2 className="sr-only">
                Full Stack Web Development Projects Portfolio
            </h2>

            {/* background glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px]" />

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

            <div className="relative max-w-7xl mx-auto space-y-16">

                {/* heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row justify-between items-end gap-6"
                >

                    <div className="space-y-4">

                        <p className="text-secondary uppercase tracking-[0.2em] text-sm font-semibold">

                            Portfolio

                        </p>

                        <h2
                            id="projects-heading"
                            className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-on-surface"
                        >

                            Featured Projects

                        </h2>

                        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">

                            Explore premium full stack web applications built using React, Next.js, Node.js, MongoDB, and modern frontend technologies focused on scalability, performance, and exceptional user experience.

                        </p>

                    </div>

                    <Link
                        to={"/projects"}
                        aria-label="View all portfolio projects"
                        className="text-primary font-bold flex items-center gap-2 group"
                    >

                        View all works

                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">
                            arrow_right_alt
                        </span>

                    </Link>

                </motion.div>

                {/* projects */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >

                    {projectsData.map((project, index) => (

                        <motion.article
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -12,
                            }}
                            className="group relative"
                        >

                            {/* image */}
                            <div className="relative overflow-hidden rounded-3xl aspect-[16/9] mb-8 bg-surface-container-high border border-white/10 shadow-2xl">

                                <motion.img
                                    variants={imageVariants}
                                    whileHover="hover"
                                    src={project.image}
                                    alt={`${project.title} project preview`}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                />

                                {/* overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                                {/* floating action buttons */}
                                <div className="absolute top-5 right-5 flex items-center gap-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} GitHub repository`}
                                        className="w-11 h-11 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:text-secondary hover:scale-110 transition-all duration-300"
                                    >

                                        <FaGithub />

                                    </a>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} live demo`}
                                        className="w-11 h-11 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:text-secondary hover:scale-110 transition-all duration-300"
                                    >

                                        <FiExternalLink />

                                    </a>

                                </div>

                            </div>

                            {/* content */}
                            <div className="space-y-5">

                                {/* tech stack */}
                                <div className="flex flex-wrap items-center gap-3 text-xs font-bold tracking-widest uppercase">

                                    {project.tech.map((tech, techIndex) => (

                                        <React.Fragment key={techIndex}>

                                            <span className={`text-${project.accent}`}>

                                                {tech}

                                            </span>

                                            {techIndex !== project.tech.length - 1 && (
                                                <span className="w-1 h-1 rounded-full bg-outline-variant" />
                                            )}

                                        </React.Fragment>

                                    ))}

                                </div>

                                {/* title */}
                                <h3 className={`text-3xl font-bold font-headline text-on-surface transition-all duration-300 group-hover:text-${project.accent}`}>

                                    {project.title}

                                </h3>

                                {/* description */}
                                <p className="text-on-surface-variant text-lg leading-relaxed">

                                    {project.description}

                                </p>

                            </div>

                        </motion.article>

                    ))}

                </motion.div>

            </div>

        </section>
    )
}

export default Projects