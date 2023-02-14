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
    }
    const onDelete = (id) =>{
        setCart((existingCart) =>{
            return existingCart.filter((item) => item.id !== id)
        })
    }
    const randomItem = ()=>{
        setCart((existingCart)=>{
            let randomItem =  existingCart[Math.floor(Math.random()*existingCart.length)];
            randomItem = [randomItem];
            return randomItem;
        })
    }

    return (
        <div className='body'>
            <div className='product-list'>
                {
                    products.map(product => <Product key = {product.id} product = {product} addProducts = {addProducts} cart = {cart}></Product>)
                }
            </div>
            <div className='addToCart'>
                <Cart cart = {cart} onDelete = {onDelete} randomItem = {randomItem}></Cart>
            </div>
        </div>
    );
};

export default Body;
/*
const removeItem = (id) => {
            
    const deleted = products.filter((product) => product.id !== id);
    setProducts(deleted);
    setTotal(products.length - 1);
   
    
     alert("Se quitó un producto")
   };
   */