import React from "react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const Nav = ({ navbarLinks }) => {

    return (

        <ul className="hidden md:flex items-center gap-2">

            {navbarLinks.map((li) => (

                <li
                    key={li.id}
                    className="relative"
                >

                    <NavLink
                        to={li.path}

                        className={({ isActive }) =>

                            `relative px-4 py-1 rounded-xl capitalize font-medium transition-colors duration-300 ${isActive
                                ? "text-white"
                                : "text-white/70 hover:text-white"
                            }`
                        }
                    >

                        {({ isActive }) => (

                            <>

                                {/* active background animation */}
                                {isActive && (

                                    <motion.div

                                        layoutId="navbar-active"

                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}

                                        className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg"
                                    />

                                )}

                                {/* text */}
                                <span className="relative z-10">

                                    {li.title}

                                </span>

                            </>

                        )}

                    </NavLink>

                </li>

            ))}

        </ul>

    )
}

export default Nav