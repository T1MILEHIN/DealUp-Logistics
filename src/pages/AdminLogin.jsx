import LOGO from "../assets/logo.jpg"
import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

  const AdminLogin = () => {
    const navigate = useNavigate()
    const LOGIN = ()=> {
        navigate("/dashboard")
    }
    return (
      <section className="bg-green min-h-screen flex justify-center items-center">
        <div className=" w-[90%] md:w-[500px] p-4 md:p-6 bg-white rounded-md shadow-3xl">
            <div className="flex justify-between items-center">
                <img src={LOGO} className="cursor-pointer w-24" alt="" />
                <FaXmark className="cursor-pointer" size={20} />
            </div>
            <div className="my-2">
                <p className="font-bold">Welcome Admin!</p>
                <p className="text-sm md:text-base text-slate-500">Enter Your details to continue</p>
            </div>
            <form action="">
                <div className="mb-6">
                    <label htmlFor="" className="font-bold">Email
                        <input type="email" className="border-2 border-black rounded-md h-10 w-full pl-3" />
                    </label>
                </div>
                <div className="mb-6">
                    <label htmlFor="" className="font-bold">Password
                        <input type="text" className="border-2 border-black rounded-md h-10 w-full pl-3" />
                    </label>
                </div>
                <button onClick={LOGIN} className="md:py-3 bg-green w-full rounded-md font-semibold">LOGIN</button>
            </form>
        </div>
      </section>
    )
  }
  
  export default AdminLogin