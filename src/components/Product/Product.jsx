import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const {product_id, product_title, product_image, price } = product;
    return (
       
            <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <figure className="pt-6">
                    <img
                        src={product_image}
                        alt={product_title}
                        className="rounded-xl h-[200px] w-5/6 object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg font-bold">{product_title}</h2>
                    <p className="text-gray-700 font-semibold">{price} BDT</p>
                    <div className="card-actions mt-4">
                        <Link to={`/products/${product_id}`}><button className="btn btn-primary">View Details</button></Link>
                        
                    </div>
                </div>
            </div>
       
    );
};

export default Product;