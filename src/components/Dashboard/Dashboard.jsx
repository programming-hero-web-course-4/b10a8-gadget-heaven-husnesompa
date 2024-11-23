import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList } from '../../utility/addToDb';
import Product from '../Product/Product';


const Dashboard = () => {
    const [ cartList, setCartList] = useState([]);
    const allProducts = useLoaderData();
    useEffect( () =>{
        const storedCartList = getStoredCartList();
        const cartList = allProducts.filter(product =>storedCartList.includes(product.product_id))
        setCartList(cartList);
    },[allProducts])
    return (
        <div>
            <div className="pt-6 bg-[#9538E2] w-full mx-auto">
                <div className="hero-content text-center">
                    <div className="w-8/12 mx-auto">
                        <h1 className="md:text-5xl text-3xl font-bold text-[#FFFFFF]">
                            Dashboard
                        </h1>
                        <p className="py-8 text-[#FFFFFF]">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        
                        <div>
                        <Tabs>
                            <TabList>
                                <Tab className="btn btn-primary text-[#9538E2] bg-white  px-8 font-bold">Cart</Tab>
                                <Tab className="btn btn-primary text-[#9538E2] bg-white  px-8 font-bold">Wishlist</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>Any content {cartList.length}</h2>
                                {
                                    cartList.map(product =><Product key={product.product_id} product ={product}></Product>)
                                }
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                        </Tabs>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">

            </div>
        </div>
    );
};

export default Dashboard;