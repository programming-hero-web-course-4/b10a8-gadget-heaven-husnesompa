import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-lg text-gray-600 mt-4">Oops! The page you’re looking for doesn’t exist.</p>
        <Link
            to="/"
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
            Go Back Home
        </Link>
    </div>
    );
};

export default ErrorPage;