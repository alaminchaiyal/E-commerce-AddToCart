import React from 'react';

const Product = (props) => {
    const {product, addProducts} = props;
    const {image, name, category, Price} = product;
    return (
        <div>
            <img src= {require('../../'+image)} alt="laptop" width= "200px" height = "150px"/>
            <p>Name: {name}</p>
            <small>Brand: {category}</small>
            <p>Price: {Price} </p>
            <button onClick={() => addProducts(product)}>Add To Cart</button>
        </div>
    );
};

export default Product;