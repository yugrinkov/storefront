import React from 'react';
import ProductItem from './ProductItem';

const ProductList = (props) => {
    const { products, onAddToCart } = props;
    return (
        <div className="product-list">
            { products.length > 0 && products.map( product => 
                <ProductItem 
                    key={product.id} 
                    product={product} 
                    onAddToCart={onAddToCart} 
                /> 
            )}        
        </div>
    )
}

export default ProductList;