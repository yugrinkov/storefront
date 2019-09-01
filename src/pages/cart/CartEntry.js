import React from 'react';
import QtyInput from '../../components/QtyInput';
import Price from '../../components/Price';
import ProductImage from '../../components/ProductImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useQtyState } from '../../helpers/hooks';

const CartEntry = props => {
    const { title, brand, image, price, productQty, id } = props.entry;
    const [qty, onIncreaseQty, onDecreaseQty] = useQtyState(productQty);
    
    const onClickRemoveLink = () => {
        props.onClickRemoveLink({productId: id})
    }

    return (
        <div className="cart-entry">
            <div className="product-column">
                <div className="product-image">
                    <ProductImage image={image} title={title} />
                </div>
                <div className="product-info">
                    <h3 className="product-brand">{brand}</h3>
                    <h1 className="product-name">{title}</h1>
                </div>
            </div>
            <div className="quantity-column">
                <QtyInput productId={id} onIncreaseQty={onIncreaseQty} onDecreaseQty={onDecreaseQty} qty={qty} onChange={props.onChangeProductQty} />
            </div>
            <div className="total-column">
                <Price priceValue={price} />
            </div>
            <div className="action-column">
                <FontAwesomeIcon icon={faTimes} className="remove-button" onClick={onClickRemoveLink} />
            </div>    
        </div>
    );
}

export default CartEntry;