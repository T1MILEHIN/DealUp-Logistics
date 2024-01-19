import { useState } from "react";
import { Outlet } from "react-router-dom"
import { FaChevronRight, FaBars, FaBoxOpen, FaXmark } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import LOGO from "../assets/LOGO-tran.png";
import { IoIosSpeedometer } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi"
import { SlNotebook } from "react-icons/sl";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Appcontext from "../context/Appcontext";


const imgVariant = {
    initial: {
        width: "215px"
    },
    animate: {
        width: 0,
        transition: {
            type: "linear", duration: 0.5
        }
    }
}

const navVariant = {
    initial: {
        width: "192px"
    },
    small: {
        width: "30px",
    },
    animate: {
        width: "30px",
        transition: {
            type: "spring", stiffness: 100, duration: 0.5, staggerChildren: 0.5, delayChildren: 0.3
        }
    }
}

const dashboardVariant = {
    initial: {
        paddingLeft: "210px"
    },
    small: {
        paddingLeft: "50px"
    },
    animate: {
        paddingLeft: "50px",
        transition: {
            type: "spring", stiffness: 100, duration: 0.5
        }
    }
}

const DashboardHome = () => {
    const location = useLocation()
    const { FullScreen, nav, navAction } = useContext(Appcontext)
    const [profileNav, setProfileNav] = useState(false)

    const displayProfileNav = ()=> {
        setProfileNav(prev=> !prev)
    }
    return (
        <section className="grid items-center gap-5 text-white bg-green">
            <div className="">
                <div className="fixed top-0 left-0 right-0 w-full text-white flex">
                    <div className="hidden md:block bg-[#608671]">
                        <motion.img variants={imgVariant} animate={nav && FullScreen ? "animate" : FullScreen && "initial"} src={LOGO} className="w-20 md:h-28 object-cover object-top" alt="" />
                    </div>
                    <div className="bg-black flex-1 flex justify-between items-center p-3 shadow-lg">
                        <div className="flex items-center gap-3 md:gap-7">
                            {FullScreen && (nav ? <FaXmark className="cursor-pointer" onClick={navAction} size={FullScreen ? 30 : 20} /> : <FaBars className="cursor-pointer" onClick={navAction} size={FullScreen ? 30 : 20} />)}
                            <IoSearchSharp size={FullScreen ? 30 : 20} />
                            <input type="text" className={`${nav && FullScreen ? "w-80" : "w-40 md:w-52"} text-black font-semibold duration-500 h-8 md:h-12 rounded-md pl-4`} name="" id="" placeholder="Search Dashboard"/>
                        </div>
                        <div className="relative">
                            <div onClick={displayProfileNav} className="flex items-center gap-3">
                                <p className="font-medium md:text-base text-sm">Hello, Vera</p>
                                <div className="border-2 border-white w-8 md:w-12 aspect-square rounded-full bg-background"></div>
                            </div>
                            <AnimatePresence>
                                {
                                    profileNav &&
                                    <motion.ul exit={{opacity: 0,top: 20}} className="p-2 rounded-sm divide-y-2 bg-white text-black absolute right-0 md:text-base text-sm">
                                        <li>Profile</li>
                                        <li>LogOut</li>
                                    </motion.ul>
                                }
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    <motion.div className="grid grid-cols-6 min-h-screen">
                        <nav className={`fixed top-[56px] md:top-28 bottom-0 left-0 bg-black text-slate-200 p-3`}>
                            {FullScreen ?
                                <motion.ul variants={navVariant} animate={nav && FullScreen ? "animate" : FullScreen ? "initial" : "small"} className={`${FullScreen ? "w-44" : "w-[30px]"} w-[30px] bg-black flex flex-col gap-8 font-bold`}>
                                    <motion.li>
                                        <NavLink to="/dashboard" className={({ isActive }) => isActive && location.pathname === "/dashboard" ? "text-green flex items-center justify-between" : "flex items-center justify-between"}>
                                            <div className="flex items-center gap-3">
                                                <IoIosSpeedometer size={20} />
                                                <AnimatePresence>
                                                    {!nav && <motion.p
                                                        initial={{ scale: 0, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        exit={{ top: 20, opacity: 0 }}
                                                        className="">Dashboard</motion.p>}
                                                </AnimatePresence>
                                            </div>
                                            {!nav && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><FaChevronRight /></motion.div>}
                                        </NavLink>
                                    </motion.li>
                                    <motion.li className={`relative group duration-300 ${!nav && "overflow-hidden"}`}>
                                        <p className={`cursor-pointer flex items-center justify-between`}>
                                            <div className="flex items-center gap-3">
                                                <GiShoppingBag size={20} />
                                                <AnimatePresence>
                                                    {!nav && <motion.p
                                                        initial={{ scale: 0, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        exit={{ top: 20, opacity: 0 }}
                                                        className="">Orders</motion.p>}
                                                </AnimatePresence>
                                            </div>
                                            {!nav && <motion.div className="group-hover:rotate-90 duration-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><FaChevronRight /></motion.div>}
                                        </p>
                                        <ul className={`ml-8 flex flex-col h-0 ${nav ? "absolute p-2 right-56 h-16 bg-black w-32 z-10" : "group-hover:h-12"} duration-200`}>
                                            <NavLink to="orders" className={({ isActive }) => isActive && "text-green"}>Orders</NavLink>
                                            <NavLink>Order Detail</NavLink>
                                        </ul>
                                    </motion.li>
                                    <motion.li>
                                        <NavLink to="products" className={({ isActive }) => isActive ? "text-green flex items-center justify-between" : "flex items-center justify-between"}>
                                            <div className="flex items-center gap-3">
                                                <FaBoxOpen size={20} />
                                                <AnimatePresence>
                                                    {!nav && <motion.p
                                                        initial={{ scale: 0, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        exit={{ top: 20, opacity: 0 }}
                                                        className="">Products</motion.p>}
                                                </AnimatePresence>
                                            </div>
                                            {!nav && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><FaChevronRight /></motion.div>}
                                        </NavLink>
                                    </motion.li>
                                    <motion.li>
                                        <p to="/pages" className={({ isActive }) => isActive ? "text-green flex items-center justify-between" : "flex items-center justify-between"}>
                                            <div className="flex items-center gap-3">
                                                <SlNotebook size={20} />
                                                <AnimatePresence>
                                                    {!nav && <motion.p
                                                        initial={{ scale: 0, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        exit={{ top: 20, opacity: 0 }}
                                                        className="">Pages</motion.p>}
                                                </AnimatePresence>
                                            </div>
                                            {!nav && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><FaChevronRight /></motion.div>}
                                        </p>
                                    </motion.li>

                                </motion.ul>
                                :
                                <motion.ul className="flex flex-col gap-8 font-bold">
                                    <NavLink to="/dashboard" className={({ isActive }) => (isActive && location.pathname === "/dashboard") && "text-green"}><IoIosSpeedometer size={20} /></NavLink>
                                    <NavLink to="orders" className={({ isActive }) => isActive && "text-green"}><GiShoppingBag size={20} /></NavLink>
                                    <NavLink to="products" className={({ isActive }) => isActive && "text-green"}><FaBoxOpen size={20} /></NavLink>
                                    <NavLink to="pages" className={({ isActive }) => isActive && "text-green"}><SlNotebook size={20} /></NavLink>
                                </motion.ul>
                            }
                        </nav>
                        <motion.div variants={dashboardVariant} animate={nav && FullScreen ? "animate" : FullScreen ? "initial" : "small"} className={`mt-14 md:mt-28 w-full col-span-6`}>
                            <Outlet context={nav} />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default DashboardHome