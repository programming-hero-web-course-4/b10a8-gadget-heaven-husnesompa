import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('/public/productsData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                products.map(product => <Product product = {product} key={product.product_id}></Product>)
            }
        </div>
    );
};

export default Products;