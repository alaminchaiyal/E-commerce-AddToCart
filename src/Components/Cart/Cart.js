import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    
    return (
        <div>
            <p>Selected Laptops</p>
            <div>
                {
                    cart.map(product => (
                        <p key = {product.id}>{product.name}</p>
                    ))
                }
            </div>
            <button>Choose one for me</button><br />
            <button>Choose again</button>   
            {
                
            }    
        </div>
    );
};

export default Cart;