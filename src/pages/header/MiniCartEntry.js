import React from 'react';
import Price from '../../components/Price';
import ProductImage from '../../components/ProductImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const MiniCartEntry = props => {
    const {image, title, brand, price, productQty, id} = props.cartEntry;
    const onClickRemoveLink = e => {
        props.onClickRemoveLink({productId: id});
    }
    return (
        <div className="mini-cart-entry">
            <FontAwesomeIcon icon={faTimes} className="remove-button" onClick={onClickRemoveLink} />
            <div className="mini-cart-entry-image">
                <ProductImage image={image} alt={title} />
            </div>
            <div className="mini-cart-entry-info">
                <h3 className="product-name">{`${title} x${productQty}`}</h3>
                <p className="product-brand">{brand}</p>
                <Price priceValue={price} />
            </div>
        </div>
    )
}

export default MiniCartEntry;