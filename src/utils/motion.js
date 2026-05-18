// src/utils/motion.js

export const fadeUp = {

    hidden: {
        opacity: 0,
        y: 80,
        scale: 0.96,
        filter: "blur(10px)",
    },

    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",

        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

export const staggerContainer = {

    hidden: {},

    visible: {

        transition: {
            staggerChildren: 0.15,
        },
    },
}