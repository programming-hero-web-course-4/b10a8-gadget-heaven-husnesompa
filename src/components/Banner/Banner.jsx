import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="pt-6 bg-[#9538E2] md:pb-36 flex flex-col items-center justify-center rounded-b-btn w-11/12 mx-auto">
                <div className="hero-content text-center">
                    <div className="w-full md:w-8/12 mx-auto">
                        <h1 className="md:text-5xl text-3xl font-bold text-[#FFFFFF]">
                            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                        </h1>
                        <p className="py-8 text-[#FFFFFF]">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn btn-primary text-[#9538E2] bg-white rounded-full px-8 font-bold mb-14 md:mb-0">
                         <NavLink to="/dashboard">Shop Now</NavLink>
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-11/12 md:w-9/12 mx-auto -mt-16 md:-mt-28 border-2 border-white rounded-xl overflow-hidden">
                <img
                    className="h-[560px] w-full object-cover p-4 rounded-xl"
                    src="/images/banner.jpg"
                    alt="Gadget Heaven Accessories Banner"
                />
            </div>
        </div>

    );
};

export default Banner;