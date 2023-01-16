import React from 'react';

const Product = (props) => {
    const {image, name, category, Price} = props.product;
    return (
        <div>
            <img src= {require('../../'+image)} alt="laptop" width= "200px" height = "150px"/>
            <p>Name: {name}</p>
            <small>Brand: {category}</small>
            <p>Price: {Price} </p>
        </div>
    );
};

export default Product;