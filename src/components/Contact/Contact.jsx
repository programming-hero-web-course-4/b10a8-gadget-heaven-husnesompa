import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <div>
            <Helmet><title>Gadget Heaven | Contact</title></Helmet>
            <div className="bg-[#9538E2] min-h-screen flex items-center justify-center px-4 py-8">
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-3xl font-bold text-lavender-700 text-center mb-4">
                        Contact Us
                    </h1>
                    <p className="text-sm text-gray-600 text-center mb-8">
                        We'd love to hear from you! Fill out the form below and we'll get in touch with you shortly.
                    </p>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border border-lavender-300 focus:border-lavender-500 rounded-lg px-4 py-2 text-gray-700"
                                placeholder="Your Full Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-lavender-300 focus:border-lavender-500 rounded-lg px-4 py-2 text-gray-700"
                                placeholder="Your Email Address"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full border border-lavender-300 focus:border-lavender-500 rounded-lg px-4 py-2 text-gray-700"
                                placeholder="Your Message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#9538E2] text-white font-medium rounded-lg px-4 py-2 hover:bg-lavender-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;