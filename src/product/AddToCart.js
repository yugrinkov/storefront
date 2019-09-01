import React from 'react';
import {connect} from 'react-redux';
import {addToCartProduct} from '../actions'
import QtyInput from '../components/QtyInput';
import { useQtyState } from '../helpers/hooks';

const AddToCart = props => {
    const [qty, onIncreaseQty, onDecreaseQty] = useQtyState(1);
    
    const onClickAddToCart = () => {
        props.onAddToCart({productId: props.product.id, productQty: qty});
    }

    return (
        <div className="add-to-cart">
            <QtyInput onIncreaseQty={onIncreaseQty} onDecreaseQty={onDecreaseQty} qty={qty} />
            <button className="add-to-cart button" onClick={onClickAddToCart}>Add to cart</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: ({productId, productQty}) => dispatch(addToCartProduct({productId, productQty}))     
    }
}

export default connect(null, mapDispatchToProps)(AddToCart);