import {useState} from 'react';

export const useQtyState = (initialState) => {
    const [qty, setQty] = useState(initialState);
    const onIncreaseQty = () => {
        setQty(qty => qty + 1);
    }
    const onDecreaseQty = () => {
        setQty(qty => qty - 1)
    }
    return [qty, onIncreaseQty, onDecreaseQty]
}
