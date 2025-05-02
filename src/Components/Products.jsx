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
