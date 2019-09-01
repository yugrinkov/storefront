import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import MiniCartEntry from './MiniCartEntry';
import { removeProductFromCart } from '../../actions';
import { getCartEntries, getTotalPrice } from '../../helpers';
import Price from '../../components/Price';
import './MiniCart.css';
import { withRouter } from 'react-router-dom'

export const MiniCart = props => {
    const useOutsideDetector = ref => {
       const handleClickOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsShownCartPopup(false)          
            }
        }
      
        useEffect(() => {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        });
    
    }
    
    const wrapperRef = useRef(null);
    useOutsideDetector(wrapperRef);  
    const { cartEntries, totalPrice, onClickRemoveLink } = props;
    const [isShownCartPopup, setIsShownCartPopup] = useState(false);
    
    const onClickMiniCartLink = (e) => {
        setIsShownCartPopup(isShownCartPopup => !isShownCartPopup)
    }

    const onClickViewCartButton = () => {
        props.history.push('/cart');
        setIsShownCartPopup(false);
    }

    return (
        <div ref={wrapperRef} className="mini-cart">
            <a className="mini-cart-link" onClick={onClickMiniCartLink}>My Cart ({ cartEntries.length })</a>
                { 
                    isShownCartPopup && 
                    <div className="cart-popup">
                        {cartEntries.length === 0 && <p>Your cart is empty</p>}
                        {
                            cartEntries.length > 0 && 
                            <div className="mini-cart-entries">
                                {
                                    cartEntries.map(cartEntry => 
                                        <MiniCartEntry 
                                            key={cartEntry.id} 
                                            cartEntry={cartEntry} 
                                            onClickRemoveLink={onClickRemoveLink} 
                                        />
                                    )
                                }
                            </div>
                        }
                        {
                            cartEntries.length > 0 && 
                                <div className="total">
                                    <div className="total-label">TOTAL</div>
                                    <div className="total-value">
                                        <Price priceValue={totalPrice} />
                                    </div>
                                </div>
                        }
                        {
                            cartEntries.length > 0 && 
                            <div className="mini-cart-buttons">
                                <button onClick={onClickViewCartButton} className="button inverse">VIEW CART</button> 
                                <button className="button">CHECKOUT</button>
                            </div>
                        }
                    </div>  
                }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        cartEntries: getCartEntries(state),
        totalPrice: getTotalPrice(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickRemoveLink: (productId) => dispatch(removeProductFromCart(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MiniCart));