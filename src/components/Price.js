import React from 'react';

const Price = ({priceValue}) => {
    return (
        <span className="product-price">${ priceValue.toFixed(2) }</span>
    )
}

export default Price;