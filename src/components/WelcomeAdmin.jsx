import { useContext } from "react";
import Appcontext from "../context/Appcontext";
import { FaRegMoneyBill1, FaCartShopping } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

const WelcomeAdmin = () => {
    const { FullScreen } = useContext(Appcontext)
    return (
        <section className='p-2 md:p-5 text-white'>
            <div className='flex items-center justify-between bg-background px-2 md:px-5 py-4 md:py-8 rounded-md'>
                <div className="">
                    <h1 className='md:text-3xl text-medium font-bold'>Welcome To The Dashboard</h1>
                    <p className='md:text-xl text-xs'>Stay Up to date with Your store&apos;s current status </p>
                </div>
                <div className="bg-white text-sm rounded-sm text-black p-1">
                    {new Date().toLocaleDateString()}
                </div>
            </div>
            <div className='flex flex-wrap gap-2 md:gap-5 md:my-5 my-2'>
                <div className='flex items-end justify-between bg-background flex-1 p-2 md:p-6 rounded-md'>
                    <div>
                        <p className='md:text-xl text-sm'>Total Revenue</p>
                        <h1 className='font-medium md:font-bold md:text-2xl text-sm'>N3,000.00</h1>
                        <p className='md:text-base text-xs text-slate-300'>jan- March 2019</p>
                    </div>
                    <FaRegMoneyBill1 size={FullScreen ? 70 : 20} />
                </div>
                <div className='flex items-end justify-between bg-background flex-1 p-2 md:p-6 rounded-md'>
                    <div>
                        <p className='md:text-xl text-sm'>Total Orders</p>
                        <h1 className='font-medium md:font-bold md:text-2xl text-sm'>2,567</h1>
                        <p className='md:text-base text-xs text-slate-300'>jan- March 2019</p>
                    </div>
                    <FaCartShopping size={FullScreen ? 70 : 20} />
                </div>
                <div className='flex items-end justify-between bg-background flex-1 p-2 md:p-6 rounded-md'>
                    <div>
                        <p className='md:text-xl text-sm'>Total Visitors</p>
                        <h1 className='font-medium md:font-bold md:text-2xl text-sm'>1,459</h1>
                        <p className='md:text-base text-xs text-slate-300'>+22% from yesterday</p>
                    </div>
                    <FaUsers size={FullScreen ? 70 : 20} />
                </div>
            </div>
            <div className='md:my-5 my-2'>
                <div className='min-h-screen bg-background rounded-md p-2 md:p-5'>
                    <h1 className="md:text-2xl text-base">Sales Activities</h1>
                </div>
            </div>
        </section>
    )
}

export default WelcomeAdmin