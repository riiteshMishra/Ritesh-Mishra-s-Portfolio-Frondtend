import React, { useEffect, useRef, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"

import { FaBarsStaggered } from "react-icons/fa6"
import { GiCrossMark } from "react-icons/gi"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

import { navbarLinks } from "../../../Data/navbar"
import { logout } from "../../../../services/operations/auth"

import SmallMenu from "../SmallMenu"
import RequestNotification from "../RequestNotification/Index"
import Logo from "../Logo"
import Nav from "./Links"
import Resume from "../Resume"

const NavBar = () => {

    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isActive, setIsActive] = useState(false)
    const [slideBar, setSlideBar] = useState(false)

    const [hidden, setHidden] = useState(false)

    const lastScrollY = useRef(0)

    const smallRoutes = [
        {
            id: 1,
            path: "/dashboard/my-profile",
            route: "dashboard",

            actions: () => { },
        },

        {
            id: 2,
            path: "",
            route: "logout",

            actions: () => {
                logout(navigate, dispatch)
                setIsActive(false)
            },
        },
    ]

    // navbar hide/show on scroll
    useEffect(() => {

        const controlNavbar = () => {

            const currentScrollY = window.scrollY

            // scroll down
            if (
                currentScrollY > lastScrollY.current &&
                currentScrollY > 80
            ) {

                setHidden(true)

            }

            // scroll up
            else {

                setHidden(false)

            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", controlNavbar)

        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }

    }, [])

    return (

        <motion.header

            initial={{ y: 0 }}

            animate={{
                y: hidden ? "-100%" : "0%",
            }}

            transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 15,
            }}

            className="sticky top-0 left-0 right-0 w-full z-[999] py-3 backdrop-blur-2xl bg-black/30 border-b border-white/10 rounded-b-2xl shadow-lg"

        >

            <nav className="container mx-auto flex items-center justify-between px-4 text-white">

                {/* logo */}
                <Logo />

                {/* desktop nav */}
                <Nav navbarLinks={navbarLinks} />

                {/* right section */}
                <div className="relative flex items-center gap-4">

                    {token ? (

                        <div className="flex items-center gap-5">

                            {/* notifications */}
                            <RequestNotification />

                            {/* profile dropdown */}
                            <button
                                onClick={() => setIsActive((prev) => !prev)}
                                className="flex items-center gap-1"
                            >

                                <img
                                    src={user.image}
                                    alt="user avatar"
                                    className="w-9 h-9 rounded-full object-cover border border-white/10"
                                />

                                <MdOutlineKeyboardArrowDown className="text-xl" />

                            </button>

                        </div>

                    ) : (

                        <Resume />

                    )}

                    {/* mobile menu icon */}
                    <div className="inline-flex md:hidden cursor-pointer text-2xl">

                        {slideBar ? (

                            <GiCrossMark
                                onClick={() => setSlideBar(false)}
                            />

                        ) : (

                            <FaBarsStaggered
                                onClick={() => setSlideBar(true)}
                            />

                        )}

                    </div>

                    {/* profile dropdown */}
                    {isActive && (

                        <div className="absolute top-14 right-0 w-[180px] bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl p-2 flex flex-col">

                            {smallRoutes.map((route) => (

                                <Link
                                    key={route.id}

                                    to={route.path}

                                    onClick={route.actions}

                                    className="capitalize px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                                >

                                    {route.route}

                                </Link>

                            ))}

                        </div>

                    )}

                </div>

            </nav>

            {/* mobile sidebar */}
            {slideBar && (

                <SmallMenu
                    setSlideBar={setSlideBar}
                    slideBar={slideBar}
                />

            )}

        </motion.header>

    )
}

export default NavBar