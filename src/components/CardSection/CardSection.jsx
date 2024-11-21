import React from 'react';
import Products from '../Products/Products';

const CardSection = () => {
    return (
        <div>
            <div><h1 className='font-black text-center text-4xl pt-14 pb-8'>Explore Cutting-Edge Gadgets</h1></div>
            <div className='w-11/12 md:flex gap-2 mx-auto'>
                {/* sidebar */}
                <div className='w-1/3'>
                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                                Open Categories
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-white text-base-content w-80 p-4 rounded-lg gap-4">
                                {/* Sidebar content here */}
                                <button className="btn btn-wide rounded-full">All Product</button>
                                <button className="btn btn-wide rounded-full">Laptops</button>
                                <button className="btn btn-wide rounded-full">Phones</button>
                                <button className="btn btn-wide rounded-full">Accessories</button>
                                <button className="btn btn-wide rounded-full">Smart Watches</button>
                                <button className="btn btn-wide rounded-full">MacBook</button>
                                <button className="btn btn-wide rounded-full">Iphone</button>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-2/3 bg-blue-600'>
                <Products></Products>
                </div>
            </div>
        </div>
    );
};

export default CardSection;