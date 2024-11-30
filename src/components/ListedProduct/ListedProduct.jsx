import React from 'react';
import { IoCloseCircle } from 'react-icons/io5';


const ListedProduct = ({ product }) => {
    const { product_id, product_title, product_image, price, description } = product;
    return (
        <div className=" top-4 w-11/12 mx-auto bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-start relative gap-6">
            {/* Close Icon */}
            <button
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
                aria-label="Remove item"
            >
                <IoCloseCircle className="h-6 w-6"></IoCloseCircle>
            </button>
            <div className="w-full md:w-1/4  px-4 pb-8 bg-red h-auto md:h-26">
                <img
                    src={product_image}
                    alt={product_title}
                    className="object-cover rounded-xl w-full h-full" />
            </div>
            {/* Content Section */}
            <div className="flex flex-col w-full md:w-3/4 md:pl-4">
                <h2 className="text-xl font-bold">{product_title}</h2>
                <p className="text-gray-500 text-sm mt-1">
                    <span className="font-semibold">Description:</span>{description}
                </p>
                <p className="text-purple-600 font-bold mt-2">Price: {price}</p>
                {/* Button */}
                <div className="mt-4">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                        Add to Card
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListedProduct;