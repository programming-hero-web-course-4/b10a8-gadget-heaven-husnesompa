import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold md:pt-10">Gadget Heaven</h1>
                    <p className="py-6">
                        Leading the way in cutting-edge technology and innovation.
                    </p>
                </div>
            </div>
            <div className="divider divider-start w-11/12 mx-auto"></div>
            <footer className="footer p-10 w-7/12 mx-auto">
                <nav>
                    <h6 className="footer-title">Product Support</h6>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;