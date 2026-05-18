import React from "react";
import { motion } from "framer-motion";
import Badge from "./Badge";
import Heading from "./Heading";
import HeroBtn from "./HeroBtn";
import Dev from "./Dev";

export const containerVariants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.15,
        },
    },
}

export const itemVariants = {
    hidden: {
        opacity: 0,
        y: 24,
        filter: "blur(8px)",
    },

    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",

        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

const HeroSection = () => {
    return (
        <>

            <section className="relative flex items-center justify-center pt-10 px-8 overflow-hidden">

                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px]" />

                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative max-w-5xl mx-auto text-center space-y-8"
                >

                    <Badge />

                    <Heading />

                    <HeroBtn />

                    <Dev />

                </motion.div>

            </section>

        </>
    );
};

export default HeroSection;