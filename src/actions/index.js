import { 
    FETCH_PRODUCTS, 
    CREATE_CART_ENTRY, 
    UPDATE_CART_ENTRY, 
    REMOVE_CART_ENTRY, SET_PRODUCT_QTY } from './types';
import axios from 'axios';

const apiUrl = '/products.json';

export const fetchData = (data) => {
    return {
        type: FETCH_PRODUCTS,
        data
  }
};

export const fetchProducts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchData(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const isProductExistsInCart = ({cart, productId}) => {
    return cart.find(cartEntry => cartEntry.productId === productId) ? true : false;
}

export const addToCartProduct = ({productId, productQty = 1}) => (dispatch, getState) => {
    const isProductExists = isProductExistsInCart({cart: getState().cart, productId});
    if (isProductExists) {
        return dispatch({
            type: UPDATE_CART_ENTRY,
            payload: {
                productId,
                productQty
            }
        })
    } else {
        return dispatch({
            type: CREATE_CART_ENTRY,
            payload: {
                productId,
                productQty
            }
        });
    }
}

export const setProductQty = ({productId, productQty = 1}) => dispatch => {
    return dispatch({
        type: SET_PRODUCT_QTY,
        payload: {
            productId,
            productQty
        }
    })
}

export const removeProduct = ({productId}) => {
    return {
        type: REMOVE_CART_ENTRY,
        payload: {
            productId
        }
    }
}

export const removeProductFromCart = ({ productId }) => (dispatch) => {
    return dispatch(removeProduct({productId}))
}
