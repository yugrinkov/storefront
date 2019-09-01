import React from 'react';
import { connect } from 'react-redux';
import { getCartEntries, getTotalPrice } from '../../helpers';
import CartEntry from './CartEntry';
import Price from '../../components/Price';
import { removeProductFromCart, setProductQty } from '../../actions';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = props => {
    const { cartEntries, onClickRemoveLink, onChangeProductQty, totalPrice } = props;
    return (
        <div className="Cart">
            <div className="cart-header">
                <h1>Your Shopping Cart</h1>
            </div>    
            <div className="page-container">
                    { cartEntries.length === 0 && <p>Your Shopping Cart is empty</p> }
                    { cartEntries.length > 0 && <div className="cart-content">
                        <div className="content-header">
                            <div className="product-column">Product</div>
                            <div className="quantity-column">Quantity</div>
                            <div className="total-column">Total</div>
                            <div className="action-column">Action</div>
                        </div>
                        {
                            cartEntries.map(cartEntry => 
                                <CartEntry 
                                    key={cartEntry.id} 
                                    entry={cartEntry} 
                                    onClickRemoveLink={onClickRemoveLink}
                                    onChangeProductQty={onChangeProductQty}
                                />
                            )
                        }
                        <div className="cart-overview-wrapper">
                            <div className="cart-overview">
                                <h3>Cart Overview</h3>
                                <div className="cart-total">
                                    <div className="cart-total-label">TOTAL</div>
                                    <div className="cart-total-value">
                                        <Price priceValue={totalPrice} />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="user-actions">
                            <Link className="button inverse" to="/">CONTINUE SHOPPING</Link>
                            <button className="checkout button">Checkout (<Price priceValue={totalPrice} />)</button>
                        </div>
                    </div> 
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cartEntries: getCartEntries(state),
        totalPrice: getTotalPrice(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickRemoveLink: (productId) => dispatch(removeProductFromCart(productId)),
        onChangeProductQty: ({productId, productQty}) => dispatch(setProductQty({productId, productQty})) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
