import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className="w-11/12 md:w-9/12 mx-auto mt-10 ">
            <Helmet><title>Gadget Heaven | About Us</title></Helmet>
            <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
            <p className="text-lg text-gray-600 mb-4">
                Welcome to our e-commerce platform! Our goal is to provide the best products in one place, ensuring a seamless shopping experience for our customers. Whether you're looking for gadgets, apparel, or accessories, we've got you covered.
            </p>
            <div className="bg-gray-100 p-6 rounded-md shadow-md mb-6">
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p className="text-gray-700">
                    To deliver quality products at affordable prices while fostering a community of trust and innovation.
                </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
                <h2 className="text-2xl font-semibold">Meet the Team</h2>
                <p className="text-gray-700">
                    We're a team of passionate individuals dedicated to bringing you the best online shopping experience. With expertise in design, technology, and customer service, we're here to serve you better.
                </p>
            </div>
            <div className="flex justify-center mt-6">
                <img
                    src="https://images.unsplash.com/photo-1712331393877-995589f20106?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Our Team"
                    className="rounded-md shadow-lg"
                />
            </div>
        </div>
    );
};

export default About;