import React from 'react';
import Product from './Product';
import './ProductCategory.css';

const ProductCategory = (props) => {
    const { category, products } = props;
    return (
        <div className="product-category">
            <div className="anchor">
                <a id={category.id} href={`#${category.id}`}>&nbsp;</a>
                <h2>{category.name}</h2>
            </div>
            <p className="subtitle"><em>{category.description}</em></p>
            <div className="products">
                {products.map(p => <Product key={p.imgLink} {...p} />)}
            </div>
        </div>
    );
};

export default ProductCategory;