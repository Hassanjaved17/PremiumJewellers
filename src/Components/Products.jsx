<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../Data/ProductsData';

const Products = () => {
  return (
    <>
      <div className="product-cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
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
=======
import React from 'react'
import productsData from '../Data/ProductsData'
import { Link } from 'react-router-dom'

const Products = () => {

    return (
        <>
            <div className="product-cards-container grid md:grid-cols-4 grid-cols-2 gap-1 px-4">

                {productsData.map((product) => (
                    <Link to={`/products/${product.id}`} >

                        <div className="card border border-[#FAFAFA] shadow-md group">
                            <div className="card-img group-hover:scale-90 transition-all duration-300 ease-in-out">
                                <img src={product.product_img} />
                            </div>
                            <div className="card-text">
                                <p className='price text-center font-bold'> {product.product_price}</p>
                            </div>
                        </div>
                    </Link>

                ))}

            </div>
        </>
    )
}

export default Products
>>>>>>> 9b41e806283413e1ca4e426be24804e7d99e6c60
