import Product from '../Product/Product';

const Products = ({ allData, selectedCategory }) => {
    console.log(allData);
    const filteredProducts = selectedCategory
        ? allData.filter((product) => product.category === selectedCategory)
        : allData; // Show all products if no category is selected
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

            {
                filteredProducts.map(product => <Product product={product} key={product.product_id}></Product>)
            }
        </div>
    );
};

export default Products;