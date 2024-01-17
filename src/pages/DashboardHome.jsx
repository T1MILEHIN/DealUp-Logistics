import { Outlet } from "react-router-dom"
import { FaChevronRight, FaBars, FaBoxOpen, FaXmark } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import LOGO from "../assets/LOGO-tran.png";
import { IoIosSpeedometer } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi"
import { SlNotebook } from "react-icons/sl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navVariant = {
    initial : {
        width: "192px"
    },
    animate : {
        width: "50px",
        transition: {
            type: "spring", stiffness: 100, duration: 0.5
        }
    }
}

const dashboardVariant = {
    initial : {
        paddingLeft: "192px"
    },
    animate : {
        paddingLeft: "50px",
        transition: {
            type: "spring", stiffness: 100, duration: 0.5
        }
    }
}

const DashboardHome = () => {
    const [nav, setNav] = useState(false)
    const navAction = ()=> {
        setNav(prev=> !prev)
    }
    return (
        <section className="grid items-center gap-5 text-white bg-green">
            <div className="">
                <div className="fixed top-0 left-0 right-0 text-white flex">
                    <div className="hidden md:block bg-[#608671]">
                        <img src={LOGO} className="w-20 md:w-48 md:h-28 object-cover object-top" alt="" />
                    </div>
                    <div className="bg-black flex-1 flex justify-between items-center p-3 shadow-lg">
                        <div className="flex items-center gap-7">
                            {nav ? <FaXmark  onClick={navAction} size={30} /> :<FaBars onClick={navAction} size={30} />}
                            <IoSearchSharp size={30} />
                            <input type="text" className="w-52  h-12 rounded-md" name="" id="" />
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="font-medium md:text-base text-sm">Hello, Vera</p>
                            <div className="border-2 border-white w-8 md:w-12 aspect-square rounded-full bg-background"></div>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    <motion.div className="grid grid-cols-6 min-h-screen">
                        <motion.nav variants={navVariant} animate={nav ? "animate" : "initial"} className={`md:w-48 fixed top-[72px] md:top-28 bottom-0 left-0 bg-background text-slate-200 p-3`}>
                            <motion.ul className="flex flex-col gap-8 font-bold">
                                <motion.li>
                                    <NavLink to="/dashboard" className={({isActive})=> isActive ? "text-[#608671] flex items-center justify-between": "flex items-center justify-between"}>
                                        <div className="flex items-center gap-3">
                                            <IoIosSpeedometer size={20}/>
                                            {!nav && <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }} 
                                             className="">Dashboard</motion.p>}
                                        </div>
                                        {!nav && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><FaChevronRight /></motion.div>}
                                    </NavLink>
                                </motion.li>
                                <motion.li>
                                    <NavLink className={({isActive})=> isActive ? "flex items-center justify-between": "flex items-center justify-between"}>
                                        <div className="flex items-center gap-3">
                                            <GiShoppingBag size={20}/>
                                            {!nav && <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0}} 
                                             className="">Orders</motion.p>}
                                        </div>
                                        {!nav && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><FaChevronRight /></motion.div>}
                                    </NavLink>
                                </motion.li>
                                <motion.li>
                                    <NavLink className={({isActive})=> isActive ? "flex items-center justify-between": "flex items-center justify-between"}>
                                        <div className="flex items-center gap-3">
                                            <FaBoxOpen size={20}/>
                                            {!nav && <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0}} 
                                             className="">Products</motion.p>}
                                        </div>
                                        {!nav && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><FaChevronRight /></motion.div>}
                                    </NavLink>
                                </motion.li>
                                <motion.li>
                                    <NavLink className={({isActive})=> isActive ? "flex items-center justify-between": "flex items-center justify-between"}>
                                        <div className="flex items-center gap-3">
                                            <SlNotebook size={20}/>
                                           {!nav && <motion.p
                                           initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0}} 
                                            className="">Pages</motion.p>}
                                        </div>
                                        {!nav && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><FaChevronRight /></motion.div>}
                                    </NavLink>
                                </motion.li>
                            </motion.ul>
                        </motion.nav>
                        <motion.div variants={dashboardVariant} animate={nav ? "animate" : "initial"} className={`pl-40 mt-20 md:mt-28 w-full col-span-6`}>
                            <Outlet />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default DashboardHome