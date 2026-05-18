import { NavLink } from "react-router-dom"
import { useEffect } from "react"
import { motion } from "framer-motion"

import { navbarLinks } from "../../../../Data/navbar"

const SmallMenu = ({ setSlideBar }) => {

    // lock scroll
    useEffect(() => {

        document.body.classList.add("overflow-hidden")

        return () => {
            document.body.classList.remove("overflow-hidden")
        }

    }, [])

    return (

        <motion.div

            initial={{
                opacity: 0,
            }}

            animate={{
                opacity: 1,
            }}

            exit={{
                opacity: 0,
            }}

            transition={{
                duration: 0.25,
            }}

            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-md md:hidden"

            onClick={() => setSlideBar(false)}
        >

            {/* sidebar */}
            <motion.div

                initial={{
                    x: -320,
                }}

                animate={{
                    x: 0,
                }}

                exit={{
                    x: -320,
                }}

                transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                }}

                onClick={(e) => e.stopPropagation()}

                className="relative flex flex-col w-[82%] max-w-[320px] h-screen px-8 py-10 bg-[#0d0d0d]/95 border-r border-white/10 shadow-2xl overflow-hidden"
            >

                {/* gradient glow */}
                <div className="absolute top-0 right-0 w-60 h-60 bg-primary/20 blur-[100px] rounded-full" />

                <div className="absolute bottom-0 left-0 w-52 h-52 bg-secondary/20 blur-[90px] rounded-full" />

                {/* logo/title */}
                <div className="relative z-10 mb-14">

                    <h2 className="text-2xl font-black tracking-wide text-white">

                        Navigation

                    </h2>

                    <p className="text-sm text-white/50 mt-1">

                        Explore portfolio sections

                    </p>

                </div>

                {/* nav links */}
                <ul className="relative z-10 flex flex-col gap-3">

                    {navbarLinks.map((li, index) => (

                        <motion.li

                            key={li.id}

                            initial={{
                                opacity: 0,
                                x: -30,
                            }}

                            animate={{
                                opacity: 1,
                                x: 0,
                            }}

                            transition={{
                                delay: index * 0.08,
                            }}
                        >

                            <NavLink

                                to={li.path}

                                onClick={() => setSlideBar(false)}

                                className={({ isActive }) =>

                                    `group relative flex items-center px-5 py-4 rounded-2xl text-lg font-semibold tracking-wide transition-all duration-300 ${isActive
                                        ? "bg-white/10 text-white border border-white/10 shadow-lg"
                                        : "text-white/65 hover:text-white hover:bg-white/5"
                                    }`
                                }
                            >

                                {({ isActive }) => (

                                    <>

                                        {/* active glow */}
                                        {isActive && (

                                            <motion.div

                                                layoutId="mobile-active-link"

                                                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10"

                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30,
                                                }}
                                            />

                                        )}

                                        {/* text */}
                                        <span className="relative z-10">

                                            {li.title}

                                        </span>

                                    </>

                                )}

                            </NavLink>

                        </motion.li>

                    ))}

                </ul>

                {/* footer */}
                <div className="relative z-10 mt-auto pt-10">

                    <div className="border-t border-white/10 pt-5">

                        <p className="text-sm text-white/40">

                            Ritesh Mishra Portfolio

                        </p>

                    </div>

                </div>

            </motion.div>

        </motion.div>

    )
}

export default SmallMenu