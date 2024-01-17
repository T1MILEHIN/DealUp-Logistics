import React from 'react'

const OrderPage = () => {
    return (
        <section className='p-2 md:p-5 text-white'>
            <div className="overflow-x-auto bg-black rounded-md">
                <table className="table">
                    <thead className='text-white text-sm md:text-xl'>
                        <tr>
                            <th>Number</th>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                #1200
                            </td>
                            <td>
                                {new Date().toLocaleDateString()}
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                    </div>
                                </div>
                            </td>
                            <td className='flex items-end gap-2'>
                                <div className="badge badge-success badge-sm"></div>
                                <p>Paid</p>
                            </td>
                            <td>7 items</td>
                            <th>
                                <button className="">N28,000</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                #1200
                            </td>
                            <td>
                                {new Date().toLocaleDateString()}
                            </td>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Brice Swyre</div>
                                    </div>
                                </div>
                            </td>
                            <td className='flex items-end gap-2'>
                                <div className="badge badge-success badge-sm"></div>
                                <p>Paid</p>
                            </td>
                            <td>5 items</td>
                            <th>
                                <button className="">N50,000</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                #1200
                            </td>
                            <td>
                                {new Date().toLocaleDateString()}
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Marjy Ferencz</div>
                                    </div>
                                </div>
                            </td>
                            <td className='flex items-end gap-2'>
                                <div className="badge badge-success badge-sm"></div>
                                <p>Paid</p>
                            </td>
                            <td>10 items</td>
                            <th>
                                <button className="">N3,000</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                #1200
                            </td>
                            <td>
                                {new Date().toLocaleDateString()}
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Yancy Tear</div>
                                    </div>
                                </div>
                            </td>
                            <td className='flex items-end gap-2'>
                                <div className="badge badge-warning badge-sm"></div>
                                <p>Pending</p>
                            </td>
                            <td>100 items</td>
                            <th>
                                <button className="">N3,000,000</button>
                            </th>
                        </tr>
                    </tbody>
                    <tfoot className='text-white text-sm md:text-xl'>
                        <tr>
                            <th>Number</th>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </section>
    )
}

export default OrderPage