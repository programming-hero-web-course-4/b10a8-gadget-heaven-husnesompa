import React from 'react';

const Product = ({ product }) => {
    const { product_title, product_image, price } = product;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl border-2">
                <figure className="px-2 pt-10">
                    <img
                        src={product_image}
                        alt={product_title}
                        className="rounded-xl h-[200px] w-[200px]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;