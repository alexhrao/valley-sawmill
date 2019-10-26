import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, description, imgLink } = props;
    return (
        <div className="product-card">
            <div className="product-thumb">
                <img src={imgLink} alt={`${name}`} />
            </div>
            <p className="header">{name}</p>
            <p className="description">{description}</p>
        </div>
    );
}

export default Product;