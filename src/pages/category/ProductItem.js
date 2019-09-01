import React from 'react';
import { withRouter } from 'react-router-dom'
import Price from '../../components/Price';
import ProductImage from '../../components/ProductImage';

const ProductItem = withRouter(props => {
    const { image, brand, title, price, id } = props.product;
    const onClickViewDetails = e => { 
        const { history } = props;
        history.push(`/product/${id}`);
    }
    const onClickAddToCart = e => {
        const { onAddToCart } = props;
        onAddToCart({productId: id});
    }
    
    return (
        <div className="product-item">
            <ProductImage image={image} cssClassName="product-image" />
            <h3 className="product-brand">{ brand }</h3>
            <h1 className="product-name">{ title }</h1>
            <Price priceValue={price} />
            <div className="product-tile-overlay">
                <button className="button" onClick={onClickViewDetails}>View details</button>
                <button className="button" onClick={onClickAddToCart}>Add to cart</button>
            </div>
        </div>
    )
})

export default ProductItem;