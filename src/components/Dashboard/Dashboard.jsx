import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList, getStoredWishList } from '../../utility/addToDb';
import ListedProduct from '../ListedProduct/ListedProduct';
import { HiAdjustmentsVertical } from "react-icons/hi2";
import ListedProductInCart from '../ListedProductInCart/ListedProductInCart';
import { Helmet } from 'react-helmet-async';


const Dashboard = () => {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [sortedCartList, setSortedCartList] = useState([]); // Initialize as empty array

    const allProducts = useLoaderData();
    // console.log(allProducts);

    useEffect(() => {
        const storedCartList = getStoredCartList();
        const storedWishList = getStoredWishList();

        const cartList = allProducts?.filter(product => storedCartList.includes(product.product_id)) || [];
        const wishList = allProducts?.filter(product => storedWishList.includes(product.product_id)) || [];
        const totalPrice = cartList.reduce((total, product) => total + (product.price || 0), 0);

        setTotalPrice(totalPrice);
        setCartList(cartList);
        setWishList(wishList);
        setSortedCartList(cartList); // Sync sortedCartList with initial cartList
    }, [allProducts]);

    const sortByPriceDescending = () => {
        const sortedList = [...cartList].sort((a, b) => b.price - a.price); // Copy before sorting
        setSortedCartList(sortedList);
    };
    const handlePurchaseButton = () => {
        setShowModal(true); // Show the modal
        setCartList([]); // Clear the cart
        setSortedCartList([]); // Clear sorted cart list
        setTotalPrice(0); // Reset total price
        localStorage.removeItem("cart-list"); // Clear cart in localStorage
    };

    const handleModalClose = () => {
        setShowModal(false);
        navigate("/"); // Navigate to home page
    };

    return (

        <div className='w-full bg-slate-100'>
            <Helmet><title>Gadget Heaven | Dashboard</title></Helmet>
            <div className='w-full bg-[#9538E2]'>
                <div className="md:w-8/12 mx-auto text-center py-10">
                    <h1 className="md:text-5xl text-3xl font-bold text-[#FFFFFF]">
                        Dashboard
                    </h1>
                    <p className="py-8 text-[#FFFFFF]">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>
            <div className='w-full'>
                <Tabs>
                    <TabList className="flex gap-4 justify-center bg-[#9538E2] pb-10">
                        <Tab className="btn btn-primary text-[#9538E2] bg-white  px-8 font-bold">Cart</Tab>
                        <Tab className="btn btn-primary text-[#9538E2] bg-white  px-8 font-bold">Wishlist</Tab>
                    </TabList>
                    <TabPanel className="bg-white">
                        <div className="flex flex-col gap-10 py-6">
                            <div className="flex flex-col md:flex-row justify-between md:w-11/12 mx-auto pt-6 gap-4">
                                {/* Cart Count */}
                                <div>
                                    <h2 className="font-bold text-2xl text-center md:text-left">Cart: {sortedCartList.length}</h2>
                                </div>

                                {/* Total Cost and Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-end">
                                    <h2 className="font-bold text-2xl text-center md:text-right">
                                        Total Cost: {totalPrice.toFixed(2)}
                                    </h2>
                                    <button
                                        onClick={sortByPriceDescending}
                                        className="btn btn-primary text-[#9538E2] bg-white rounded-full px-6 font-bold w-full sm:w-auto"
                                    >
                                        Sort By Price <HiAdjustmentsVertical />
                                    </button>
                                    <button
                                        onClick={handlePurchaseButton}
                                        className="btn btn-primary text-[#9538E2] bg-white rounded-full px-6 font-bold w-full sm:w-auto"
                                        disabled={cartList.length === 0 || totalPrice === 0}
                                    >
                                        Purchase
                                    </button>
                                </div>
                            </div>

                            {/* Render the sorted list */}
                            {sortedCartList.map((product) => (

                                <ListedProductInCart key={product.product_id} product={product}></ListedProductInCart>
                            ))}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='flex flex-col gap-10 py-6'>

                            {
                                wishList.map(product => <ListedProduct key={product.product_id} product={product}></ListedProduct>)
                            }

                        </div>
                    </TabPanel>
                </Tabs>
            </div>

            {/* modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 text-center">
                        <h2 className="text-2xl font-bold text-purple-700">Congratulations!</h2>
                        <p className="mt-4">Your purchase was successful.</p>
                        <button
                            onClick={handleModalClose}
                            className="btn btn-primary mt-6 bg-purple-700 text-white rounded-full px-8"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;