import React from 'react';

const ListedProductInCart = ( { product }) => {
    const { product_id, product_title, product_image, price, description } = product;
    return (

        <div className="w-11/12 mx-auto bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-start relative gap-2">
            {/* Close Icon */}
            <button
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
                aria-label="Remove item"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            {/* Image Section */}

            {/* Image Section */}
            <div className="w-full md:w-1/4  px-4  bg-red h-auto md:h-26">
                <img
                    src={product_image}
                    alt={product_title}
                    className="object-cover rounded-xl w-full h-full" />  {/* Ensured full width and height fill */}

            </div>
            {/* Content Section */}
            <div className="flex flex-col w-full md:w-3/4 md:pl-4">
                <h2 className="text-xl font-bold">{product_title}</h2>
                <p className="text-gray-500 text-sm mt-1">
                    <span className="font-semibold">Description:</span>{description}
                </p>
                <p className="text-purple-600 font-bold mt-2">Price: {price}</p>

               
            </div>
        </div>

    );
};

export default ListedProductInCart;