import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../Data/ProductsData';

const Products = () => {
  return (
    <>
      <div className="product-cards-container grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-8">
        {productsData.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="card border border-[#FAFAFA] shadow-md rounded-lg overflow-hidden group cursor-pointer">
              <div className="card-img overflow-hidden">
                <img
                  src={product.product_img}
                  alt={product.product_name || "Product Image"}
                  className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-95"
                />
              </div>
              <div className="card-text py-3 text-center">
                <p className="price font-bold text-[#162D5D]">{product.product_price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
