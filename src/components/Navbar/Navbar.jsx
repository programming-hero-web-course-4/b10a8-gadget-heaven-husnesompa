import React from 'react';
import { CiHeart } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const styles = {
        backgroundColor: location.pathname === "/" ? "#9538E2" : "white",
        color: location.pathname === "/" ? "white" : "black"
    };
    return (
        <div className='bg-[#fcfbfb]'>
            <div className="navbar w-11/12 px-4 sm:px-10 md:px-20 mx-auto mt-6 rounded-t-btn " style={styles}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/statistics">Statistics</NavLink></li>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/statistics">Statistics</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-3">
                    <div className="border-2 text-xl rounded-full p-2 bg-white text-black">
                        <MdAddShoppingCart />
                    </div>
                    <div className="border-2 text-xl rounded-full p-2 bg-white text-black">
                        <CiHeart />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;