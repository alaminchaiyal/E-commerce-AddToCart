import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Body.css';

const Body = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const addProducts = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(cart);
    }
    return (
        <div className='body'>
            <div className='product-list'>
                {
                    products.map(product => <Product key = {product.id} product = {product} addProducts = {addProducts} cart = {cart}></Product>)
                }
            </div>
            <div className='addToCart'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Body;