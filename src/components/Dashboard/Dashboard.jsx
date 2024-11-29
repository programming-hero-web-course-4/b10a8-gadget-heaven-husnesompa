import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList, getStoredWishList } from '../../utility/addToDb';
import Product from '../Product/Product';
import ListedProduct from '../ListedProduct/ListedProduct';
import { HiAdjustmentsVertical } from "react-icons/hi2";
import ListedProductInCart from '../ListedProductInCart/ListedProductInCart';


const Dashboard = () => {

    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const allProducts = useLoaderData();
    console.log(allProducts);
    const [sortedCartList, setSortedCartList] = useState([]); // Initialize as empty array

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


    return (

        <div className='w-full bg-slate-100'>
            <div className='w-full bg-[#9538E2]'>
                <div className="w-8/12 mx-auto text-center py-10">
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
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-row justify-between w-11/12 mx-auto pt-6">
                                <div>
                                    <h2 className="font-bold text-2xl">Cart: {sortedCartList.length}</h2>
                                </div>
                                <div className="flex gap-3">
                                    <h2 className="font-bold text-2xl pt-2">
                                        Total Cost: {totalPrice.toFixed(2)}
                                    </h2>
                                    <button
                                        onClick={sortByPriceDescending}
                                        className="btn btn-primary text-[#9538E2] bg-white rounded-full px-8 font-bold"
                                    >
                                        Sort By Price <HiAdjustmentsVertical />
                                    </button>
                                    <button className="btn btn-primary text-[#9538E2] bg-white rounded-full px-8 font-bold">
                                        Purchase
                                    </button>
                                </div>
                            </div>
                            {/* Render the sorted list */}
                            {sortedCartList.map((product) => (
                                // <ListedProduct key={product.product_id} product={product}></ListedProduct>
                                <ListedProductInCart key={product.product_id} product={product}></ListedProductInCart>
                            ))}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='flex flex-col gap-10'>
                            <h2>Any content {wishList.length}</h2>
                            {
                                wishList.map(product => <ListedProduct key={product.product_id} product={product}></ListedProduct>)
                            }

                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>

    );
};

export default Dashboard;