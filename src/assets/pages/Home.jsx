// src/pages/Home.jsx

import Footer from "../Components/core/Footer/Index"
import Testimonials from "../Components/core/Testimonials/Index"
import HeroSection from "../Components/core/Home/Hero/Index"

import { Helmet } from "react-helmet-async"
import AboutSetcion from "../Components/core/Home/about/Index"
import Exp from "../Components/core/Home/Exp"
import Skills from "../Components/core/Home/Skills"
import Projects from "../Components/core/Home/Projects/Index"
import Testimonial from "../Components/core/Home/Testimonals/Index"
import Contact from "../Components/core/Home/Contact"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "../../utils/motion"

const Home = () => {

  return (
    <>

      <Helmet>

        <title>
          Ritesh Mishra | Full Stack Developer
        </title>

        <meta
          name="description"
          content="Ritesh Mishra is a MERN Stack Full Stack Developer building modern, scalable, and high-performance web applications."
        />

        <meta
          name="keywords"
          content="Ritesh Mishra,Ritesh Mishra Developer,MERN Stack Developer,Full Stack Developer,React Developer,Node.js Developer,JavaScript Developer,MongoDB Developer,Express.js Developer,Frontend Developer,Backend Developer,Web Developer India,Freelance Web Developer,Portfolio Website,React Portfolio,Vite React Portfolio,Tailwind CSS Developer,Framer Motion Developer,Modern Web Developer,UI UX Developer,Software Engineer,MERN Developer India"
        />

        <meta
          name="author"
          content="Ritesh Mishra"
        />

        <meta
          property="og:title"
          content="Ritesh Mishra | Full Stack Developer"
        />

        <meta
          property="og:description"
          content="Modern MERN Stack Developer Portfolio with high-performance web experiences."
        />

        <meta
          property="og:type"
          content="website"
        />

      </Helmet>


      <section>

        <main className="HomePage overflow-x-hidden overflow-y-auto">

          {/* Hero */}
          <HeroSection />

          {/* Animated Sections */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="space-y-0"
          >

            <motion.div variants={fadeUp}>
              <Exp />
            </motion.div>

            <motion.div variants={fadeUp}>
              <Skills />
            </motion.div>

            <motion.div variants={fadeUp}>
              <Projects />
            </motion.div>

            <motion.div variants={fadeUp}>
              <Testimonial />
            </motion.div>

            <motion.div variants={fadeUp}>
              <Contact />
            </motion.div>

          </motion.div>

        </main>

        <Footer />

      </section>

    </>
  )
}

export default Home;