import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { MdAddShoppingCart } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredCartList, addToStoredWishList } from '../../utility/addToDb';


const ProductDetail = () => {
    const [disabledItems, setDisabledItems] = useState([]);
    useEffect(() => {
        const storedList = getStoredWishList();
        setDisabledItems(storedList);
    }, []);

    const { productId } = useParams();
    const data = useLoaderData();
    console.log(data);
    
    const product = data.find(product => product.product_id === productId);
    const { product_id, product_title, product_image, price, description, specifications } = product;

    const handleAddToCartButton = (id) => {
        addToStoredCartList(id);
    }

    const handleAddToWishListIcon = (id) => {
        if (!disabledItems.includes(id)) {
            addToStoredWishList(id);
            const updatedDisabledItems = [...disabledItems, id];
            setDisabledItems(updatedDisabledItems);
            localStorage.setItem("disabled-items", JSON.stringify(updatedDisabledItems)); // Persist to localStorage
        }
    }

    const getStoredWishList = () => {
        const stored = localStorage.getItem("wish-list");
        return stored ? JSON.parse(stored) : [];
    };

    // console.log(product)

    return (
        <div>
            <div>
                <div className="pt-6 bg-[#9538E2] md:pb-36 flex flex-col items-center justify-center rounded-b-btn w-11/12 mx-auto">
                    <div className="hero-content text-center">
                        <div className="w-8/12 mx-auto">
                            <h1 className="md:text-5xl text-3xl font-bold text-[#FFFFFF]">
                                Product Details
                            </h1>
                            <p className="py-8 text-[#FFFFFF]">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                        </div>
                    </div>
                </div>
                <div className="w-11/12 md:w-9/12 mx-auto -mt-28 border-2 border-white rounded-xl overflow-hidden p-2">
                    <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
                        {/* Image Section */}
                        <figure className="w-full md:w-1/2">
                            <img
                                src={product_image}
                                alt={product_title}
                                className="h-[300px] md:h-[400px] w-full object-cover rounded-lg"
                            />
                        </figure>

                        {/* Content Section */}
                        <div className="card-body w-full md:w-1/2">
                            <h2 className="card-title text-xl md:text-2xl">{product_title}</h2>
                            <p className="font-semibold text-lg md:text-xl">Price: {price} BDT</p>

                            <div>
                                <button className="btn btn-sm rounded-full border-[#309C08] text-[#309C08] bg-green-100">
                                    In Stock
                                </button>
                            </div>

                            <p className="text-sm md:text-base">{description}</p>

                            <div>
                                <p className="font-bold">Specifications:</p>
                                <ul className="list-disc list-inside text-sm md:text-base">
                                    {specifications.map((spec, index) => (
                                        <li key={index}>
                                            {index + 1}. {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Rating Section */}
                            <div>
                                <p className="font-black flex items-center">
                                    Rating
                                    <span className="ml-2 mask mask-star-2 bg-orange-400 w-5 h-5"></span>
                                </p>

                                <div className="rating py-4 flex items-center">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-4"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked
                                    />
                                    <input type="radio" name="rating-4" className="mask mask-star-2" />
                                    <button className="btn btn-sm ml-2">4.8</button>
                                </div>
                            </div>

                            {/* Actions Section */}
                            <div className="card-actions flex flex-col md:flex-row gap-2">
                                <button onClick={() => handleAddToCartButton(productId)} className="btn btn-primary bg-[#9538E2] text-white flex items-center gap-2">
                                    Add To Cart
                                    <MdAddShoppingCart className="text-2xl text-gray-100" />
                                </button>
                                <ToastContainer />
                                <div
                                    onClick={() => {
                                        if (!disabledItems.includes(product.product_id)) {
                                            handleAddToWishListIcon(product.product_id);
                                        }
                                    }}
                                    className={`mt-4 transition border-2 text-xl rounded-full ${disabledItems.includes(product.product_id)
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-purple-600 text-white hover:bg-purple-700"
                                        }`}
                                >
                                    <CiHeart />
                                </div>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ProductDetail;