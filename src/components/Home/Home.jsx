import React from 'react';
import Banner from '../Banner/Banner';
import CardSection from '../CardSection/CardSection';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const allData = useLoaderData();
    console.log(allData);
    return (
        <div className='bg-[#fcfbfb]'>
            <Helmet>
                <title>Gadget Heaven | Home</title>
            </Helmet>
            <Banner></Banner>
            <CardSection allData={allData}></CardSection>
        </div>
    );
};

export default Home;
