import React from 'react';
import Products from '../Products/Products';
import { Link } from 'react-router-dom';

const CardSection = () => {
    // const {category } = product;
    return (
        <div className="w-full">
            <div><h1 className='font-black text-center text-4xl pt-14 pb-8'>Explore Cutting-Edge Gadgets</h1></div>
            <div className="w-11/12 mx-auto md:flex gap-20">
                {/* sidebar */}
                <div className="w-full md:w-1/5">
                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-4">
                                Open Categories
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                            <ul className="menu bg-white text-base-content w-full lg:w-80 p-4 rounded-lg gap-4">
                                <button className="btn btn-wide rounded-full">All Products</button>
                                <Link to={``}><button className="btn btn-wide rounded-full">Laptops</button></Link>
                                 <Link><button className="btn btn-wide rounded-full">Phones</button></Link> 
                                <button className="btn btn-wide rounded-full">Accessories</button>
                                <button className="btn btn-wide rounded-full">Smart Watches</button>
                                <button className="btn btn-wide rounded-full">MacBook</button>
                                <button className="btn btn-wide rounded-full">iPhone</button>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-4/5">
                    <Products></Products>
                </div>
            </div>
        </div>

    );
};

export default CardSection;