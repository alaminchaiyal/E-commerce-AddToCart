import React from 'react';
import Product from '../Product/Product';
import './Cart.css';
const Cart = ({cart, onDelete, randomItem}) =>{
    return (
        <div>
            <p>Selected Laptops</p>
            <div>
                { 
                    cart.map((product) => (
                        <div key = {product.id} style={{marginBottom: "15px"}}>
                           <div className="products">
                                <img src={require('../../'+product.image)} alt="laptop" width= "50px" height = "50px"></img>
                                <p >{product.name}</p>
                                <button style={{marginTop: "15px", height: "25px"}} onClick={()=> onDelete(product.id)}>Delete</button>
                           </div>
                        </div>
                    ))
                }
            </div>
            <button onClick={()=>randomItem()}>Choose one for me</button><br/>
            <button>Choose again</button>  
        </div>
    );
};

export default Cart;