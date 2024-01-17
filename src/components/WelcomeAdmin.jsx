import { useContext } from "react";
import Appcontext from "../context/Appcontext";
import { FaRegMoneyBill1, FaCartShopping } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

const WelcomeAdmin = () => {
    const { FullScreen } = useContext(Appcontext)
    return (
        <div className='p-2 md:p-5 text-white'>
            <div className='flex items-center justify-between bg-background px-2 md:px-5 py-4 md:py-8 rounded-md'>
                <div className="">
                    <h1 className='md:text-3xl text-base font-bold'>Welcome To The Dashboard</h1>
                    <p className='md:text-xl text-sm'>Stay Up to date with Your store&apos;s current status </p>
                </div>
                <div className="bg-white rounded-sm text-black p-1">
                    {new Date().toLocaleDateString()}
                </div>
            </div>
            <div className='flex flex-wrap gap-2 md:gap-5 md:my-5 my-2'>
                <div className='flex items-end justify-between bg-background flex-1 p-2 md:p-6 rounded-md'>
                    <div>
                        <p className='md:text-xl text-sm'>Total Revenue</p>
                        <h1 className='font-bold md:text-2xl text-base'>N30000</h1>
                        <p className='md:text-base text-xs text-slate-400'>jan- March 2019</p>
                    </div>
                    <FaRegMoneyBill1 size={FullScreen ? 40 : 20} />
                </div>
                <div className='flex items-end justify-between bg-background flex-1 p-2 md:p-6 rounded-md'>
                    <div>
                        <p className='md:text-xl text-sm'>Total Reven</p>
                        <h1 className='font-bold md:text-2xl text-base'>N30000</h1>
                        <p className='md:text-base text-xs text-slate-400'>jan- March 2019</p>
                    </div>
                    <FaCartShopping size={FullScreen ? 40 : 20} />
                </div>
                <div className='flex items-end justify-between bg-background flex-1 p-2 md:p-6 rounded-md'>
                    <div>
                        <p className='md:text-xl text-sm'>Total Revenue</p>
                        <h1 className='font-bold md:text-2xl text-base'>N30000</h1>
                        <p className='md:text-base text-xs text-slate-400'>jan- March 2019</p>
                    </div>
                    <FaUsers size={FullScreen ? 40 : 20} />
                </div>
            </div>
            <div className='md:my-5 my-2'>
                <div className='min-h-screen bg-background rounded-md p-5'>
                    <h1 className="md:text-2xl text-base">Sales Activities</h1>
                </div>
            </div>

        </div>
    )
}

export default WelcomeAdmin