import React from 'react';
import Banner from '../Banner/Banner';
import CardSection from '../CardSection/CardSection';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const allData = useLoaderData();
    console.log(allData);
    return (
        <div className='bg-[#fcfbfb]'>
            <Banner></Banner>
            <CardSection allData={allData}></CardSection>
        </div>
    );
};

export default Home;
