import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa6";


const AddProduct = () => {
  return (
    <section className='p-2 md:p-5 '>
        <div className='rounded-md'>
            <form action="">
                <div className='bg-black md:p-5 p-3 rounded-md'>
                    <h1 className="font-bold md:text-3xl text-sm">ADD PRODUCTS</h1>
                    <div className="my-3">
                        <label htmlFor="product-title" className='font-bold md:text-xl test-base'>Product Title</label>
                        <input type="text" id='product-title' className='w-full h-7 md:h-10 rounded-md md:my-3' />
                    </div>
                    <div className='my-3 md:my-8'>
                        <label htmlFor="product-desc" className='resize-none font-bold md:text-xl test-base'>Product Description</label>
                        <textarea className='w-full rounded-md md:my-3' name="" id="product-desc" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className='my-5 md:p-5 p-3 bg-black rounded-md'>
                    <h1 className='font-bold md:text-3xl text-sm'>Organize</h1>
                    <div className="flex items-center my-2 gap-2 font-medium">
                        <p>Category</p>
                        <Link to="">
                        <button className="md:text-base text-sm flex items-center gap-2 bg-green text-black font-medium px-2 py-2 md:px-2 md:py-2 rounded-md">
                            <p>Add Products</p>
                            <FaPlus/>
                        </button>
                        </Link>
                    </div>
                    <select className="text-black select select-bordered w-full max-w-xs">
                        <option disabled selected>Select a Category?</option>
                        <option>Women&apos;s clothing</option>
                        <option>Men&apos;s clothing</option>
                    </select>
                </div>
                <div className='my-5 md:p-5 p-3 bg-black rounded-md'>
                    <h1 className='font-bold md:text-3xl text-sm'>Display Image</h1>
                    <div className="md:my-2">
                        <input type="file" name="" id="" />
                    </div>
                </div>
                <div className='my-5 md:p-5 p-3 bg-black rounded-md'>
                    <h1 className='font-bold md:text-3xl text-sm'>Pricing</h1>
                    <div className="flex items-center flex-wrap gap-10">
                        <div className="flex-1">
                            <label htmlFor="price" className='font-bold md:text-xl test-base'>Price</label>
                            <input type="text" id='price' className='w-full h-7 md:h-10 rounded-md md:my-3' />
                        </div>
                        <div className='flex-1 md:my-8'>
                            <label htmlFor="old-price" className='resize-none font-bold md:text-xl test-base'>Old Price</label>
                            <input type="text" id='old-price' className='w-full h-7 md:h-10 rounded-md md:my-3' />
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </section>
  )
}

export default AddProduct