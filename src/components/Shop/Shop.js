import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])
    const productClickHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    console.log(products);
    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(product => <Product key={product.key} product={product} clickHandler={productClickHandler}></Product>)
                    }
            </div>
            <div className="cart-container">
                    <Cart cartCount={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;