import React from 'react'
import { motion } from 'framer-motion'
import { itemVariants } from './Hero/Index'

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const skillsData = [
  {
    title: "Frontend",
    icon: "brush",
    color: "primary",
    border: "hover:border-primary/20",
    glow: "shadow-[0_0_40px_rgba(79,70,229,0.08)]",
    bg: "bg-primary-container/10",

    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },

  {
    title: "Backend",
    icon: "terminal",
    color: "secondary",
    border: "hover:border-secondary/20",
    glow: "shadow-[0_0_40px_rgba(98,223,125,0.08)]",
    bg: "bg-secondary-container/10",

    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST API", icon: SiPostman },
      { name: "JWT Auth", icon: SiRedux },
      { name: "Redux Toolkit", icon: SiRedux },
    ],
  },

  {
    title: "Tools",
    icon: "construction",
    color: "tertiary",
    border: "hover:border-tertiary/20",
    glow: "shadow-[0_0_40px_rgba(249,189,34,0.08)]",
    bg: "bg-tertiary-container/10",

    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "AWS", icon: FaAws },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
    ],
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="relative py-14 px-8 overflow-hidden"
    >

      {/* glow */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-primary-container/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto space-y-16">

        {/* heading */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-4"
        >

          <p className="text-secondary uppercase tracking-[0.2em] text-sm font-semibold">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-on-surface">
            Technical Arsenal
          </h2>

          <p className="text-on-surface-variant text-lg">
            The technologies and tools I use to build modern web applications.
          </p>

        </motion.div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {skillsData.map((category, index) => (

            <motion.article
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className={`bg-surface-container/80 backdrop-blur-xl p-10 rounded-3xl border border-outline-variant/10 ${category.border} transition-all group ${category.glow}`}
            >

              {/* icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${category.bg} flex items-center justify-center mb-6 text-${category.color}`}
              >

                <span className="material-symbols-outlined text-3xl">
                  {category.icon}
                </span>

              </div>

              {/* title */}
              <h3 className="text-2xl font-bold mb-6 font-headline text-on-surface">
                {category.title}
              </h3>

              {/* skills */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">

                {category.skills.map((skill, skillIndex) => {

                  const Icon = skill.icon

                  return (

                    <motion.div
                      key={skillIndex}
                      whileHover={{
                        y: -3,
                        scale: 1.05,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-highest text-sm text-on-surface hover:text-secondary transition-all cursor-pointer 
                     active:text-secondary
                      "
                    >

                      <Icon className="text-base" />

                      <span>
                        {skill.name}
                      </span>

                    </motion.div>

                  )
                })}

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills