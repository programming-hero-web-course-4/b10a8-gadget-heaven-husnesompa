import React, { useState } from 'react';
import Products from '../Products/Products';

const CardSection = ({ allData }) => {
    console.log(allData);
    const [selectedCategory, setSelectedCategory] = useState("");
    const categories = Array.from(
        new Set(allData.map((product) => product.category))
    );
    console.log(categories);
    return (
        <div className="w-full">
            <div><h1 className='font-black text-center text-4xl pt-14 pb-8'>Explore Cutting-Edge Gadgets</h1></div>
            <div className="w-11/12 mx-auto md:flex gap-20">
                {/* sidebar */}
                <div className="w-full md:w-1/5">
                    <div className="drawer lg:drawer-open md:w-full">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center">
                            {/* Page content  */}
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-10">
                                Open Categories
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                            <ul className="menu bg-white text-base-content m-2 md:m-0  md:w-60 lg:w-80 p-4 rounded-lg gap-4">

                                <button
                                    className={`btn btn-wide rounded-full ${selectedCategory === "" ? "btn-primary" : ""
                                        }`}
                                    onClick={() => setSelectedCategory("")}
                                >
                                    All Products
                                </button>
                                {categories.map((categoryName) => (
                                    <button
                                        key={categoryName}
                                        className={`btn btn-wide rounded-full ${selectedCategory === categoryName ? "btn-primary" : ""
                                            }`}
                                        onClick={() => setSelectedCategory(categoryName)}
                                    >
                                        {categoryName}
                                    </button>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-4/5">
                    <Products allData={allData} selectedCategory={selectedCategory}></Products>
                </div>
            </div>
        </div>
    );
};

export default CardSection;