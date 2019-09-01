import React, { useEffect } from 'react';
import './QtyInput.css';

const QtyInput = props => {
    const { qty, onIncreaseQty, onDecreaseQty, onChange, productId } = props;

    useEffect(() => {
        if (typeof onChange === 'function') {
            onChange({productId, productQty: qty});
        }
    }, [qty]);

    return (
        <div className="qty-input-wrapper">
            <input type="text" className="qty-input" disabled value={qty} />
            <div className="qty-buttons-wrapper">
                <button className="qty-plus" onClick={onIncreaseQty}>+</button>
                <button disabled={qty === 1} className="qty-minus" onClick={onDecreaseQty}>-</button>
            </div>     
        </div>
    )
}

export default QtyInput;