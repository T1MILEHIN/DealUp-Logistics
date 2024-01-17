import { FaRegTrashAlt, FaPen } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <section className='p-2 md:p-5'>
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-bold md:text-3xl text-sm">PRODUCTS</h1>
        <Link to="/dashboard/addproduct">
          <button className="flex items-center gap-2 bg-black text-white font-medium px-2 py-2 md:px-4 md:py-3 rounded-md">
            <p>Add Products</p>
            <FaPlus/>
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto bg-black rounded-md">
        <table className="table">
          <thead className='text-white text-sm md:text-xl'>
            <tr>
              <th>Products</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex items-center gap-2">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/tailwind-css-component-profile-2@56w.png" alt="Product 1" />
                </div>
                <p>Fitbit Sense Advanced Smartwatchh</p>
              </td>

              <td>Women Shoe</td>
              <td className='flex items-end gap-2'>
                <div className="badge badge-success badge-sm"></div>
                <p className="md:text-base text-xs">3 in stock</p>
              </td>
              <td className="md:text-base text-xs">N5,000</td>
              <td><FaRegTrashAlt /></td>
              <td><FaPen /></td>
            </tr>
            <tr>
              <td className="flex items-center gap-2">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/tailwind-css-component-profile-2@56w.png" alt="Product 2" />
                </div>
                <p>Fitbit Sense Advanced Smartwatchh</p>
              </td>

              <td>Women Shoe</td>
              <td className='flex items-end gap-2'>
                <div className="badge badge-error badge-sm"></div>
                <p className="md:text-base text-xs">out of stock</p>
              </td>
              <td className="md:text-base text-xs">N50,000</td>
              <td><FaRegTrashAlt /></td>
              <td><FaPen /></td>
            </tr>
            <tr>
              <td className="flex items-center gap-2">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/tailwind-css-component-profile-2@56w.png" alt="Product 3" />
                </div>
                <p>Fitbit Sense Advanced Smartwatchh</p>
              </td>
              <td>Women Shoe</td>
              <td className='flex items-end gap-2'>
                <div className="badge badge-success badge-sm"></div>
                <p className="md:text-base text-xs">7 in stock</p>
              </td>
              <td className="md:text-base text-xs">N8,000</td>
              <td><FaRegTrashAlt /></td>
              <td><FaPen /></td>
            </tr>
            <tr>
              <td className="flex items-center gap-2">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/tailwind-css-component-profile-2@56w.png" alt="Product 4" />
                </div>
                <p>Fitbit Sense Advanced Smartwatchh</p>
              </td>

              <td>Women Shoe</td>
              <td className='flex items-end gap-2'>
                <div className="badge badge-success badge-sm"></div>
                <p className="md:text-base text-xs">13 in stock</p>
              </td>
              <td className="md:text-base text-xs">N500,000</td>
              <td><FaRegTrashAlt /></td>
              <td><FaPen /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ProductPage;