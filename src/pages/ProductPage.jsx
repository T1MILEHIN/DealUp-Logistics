import { FaRegTrashAlt, FaPen } from "react-icons/fa";

const ProductPage = () => {
  return (
    <section className='p-2 md:p-5 '>
      <div className="flex justify-between mb-4">
        <h1 className="font-bold md:text-3xl text-sm">PRODUCTS</h1>
        <button className="">Add Products</button>
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
                  <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                </div>
                <p>Fitbit Sense Advanced Smartwatchh</p>
              </td>

              <td>Women Shoe</td>
              <td className='flex items-end gap-2'>
                <div className="badge badge-success badge-sm"></div>
                <p>3 in stock</p>
              </td>
              <td>N5,000</td>
              <td><FaRegTrashAlt /></td>
              <td><FaPen /></td>
            </tr>
            <tr>
              <td className="flex items-center gap-2">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                </div>
                <p>Fitbit Sense Advanced Smartwatchh</p>
              </td>

              <td>Women Shoe</td>
              <td className='flex items-end gap-2'>
                <div className="badge badge-error badge-sm"></div>
                <p>out of stock</p>
              </td>
              <td>N50,000</td>
              <td><FaRegTrashAlt /></td>
              <td><FaPen /></td>
            </tr>
            <tr>
              <td className="flex items-center gap-2">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                </div>
                <p>Fitbit Sense Advanced Smartwatchh</p>
              </td>

              <td>Women Shoe</td>
              <td className='flex items-end gap-2'>
                <div className="badge badge-success badge-sm"></div>
                <p>7 in stock</p>
              </td>
              <td>N8,000</td>
              <td><FaRegTrashAlt /></td>
              <td><FaPen /></td>
            </tr>
            <tr>
              <td className="flex items-center gap-2">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                </div>
                <p>Fitbit Sense Advanced Smartwatchh</p>
              </td>

              <td>Women Shoe</td>
              <td className='flex items-end gap-2'>
                <div className="badge badge-success badge-sm"></div>
                <p>13 in stock</p>
              </td>
              <td>N500,000</td>
              <td><FaRegTrashAlt /></td>
              <td><FaPen /></td>
            </tr>
          </tbody>
          <tfoot className='text-white text-sm md:text-xl'>
            <tr>
              <th>Products</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>

        </table>
      </div>
    </section>
  )
}

export default ProductPage;