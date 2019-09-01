import { CREATE_CART_ENTRY, UPDATE_CART_ENTRY, REMOVE_CART_ENTRY, SET_PRODUCT_QTY } from '../actions/types';

export default function cartReducer(state = [], action) {
    switch (action.type) {
        case CREATE_CART_ENTRY:
            return [...state, {
                productId: action.payload.productId,
                productQty: action.payload.productQty
            }];
        case UPDATE_CART_ENTRY:
            return state.map(cartEntry => cartEntry.productId === action.payload.productId ? {...cartEntry, productQty: cartEntry.productQty + action.payload.productQty } : cartEntry);
        case SET_PRODUCT_QTY:
            return state.map(cartEntry => cartEntry.productId === action.payload.productId ? {...cartEntry, productQty:action.payload.productQty } : cartEntry);
        case REMOVE_CART_ENTRY:
            return state.filter(cartEntry => cartEntry.productId !== action.payload.productId);
        default:
            return state;
    }
}