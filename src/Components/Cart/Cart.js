import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    
    return (
        <div>
            <p>Selected Laptops</p>
            <div>
                { 
                    cart.map(product =>  (
                        <div key = {product.id} style={{marginBottom: "15px"}}>
                           <div className="products">
                                <img src={require('../../'+product.image)} alt="laptop" width= "50px" height = "50px"></img>
                                <p >{product.name}</p>
                                <button style={{marginTop: "15px", height: "25px"}}>Delete</button>
                           </div>
                        </div>
                    ))
                }
            </div>
            <button>Choose one for me</button><br />
            <button>Choose again</button>  
        </div>
    );
};

export default Cart;