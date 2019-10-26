import React from 'react';
import Product from './Product';
import './ProductCategory.css';

const ProductCategory = (props) => {
    const { category, description, products } = props;
    return (
        <div className="product-category">
            <h2>{category}</h2>
            <p className="subtitle"><em>{description}</em></p>
            <div className="products">
                {products.map(p => <Product key={p.imgLink} {...p} />)}
            </div>
        </div>
    );
};

export default ProductCategory;