import React from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import { addToCartProduct } from '../../actions';
import './Category.css';

const Category = props => {
    const {products, onAddToCart} = props;
    return (
        <div className="Category">
            <div className="category-header">
                <div className="header-content">
                    <h1 className="title"><span>Category title</span></h1>
                    <p class="description">Category description</p>
                </div>
            </div>
            <div className="page-container">
                <ProductList products={products} onAddToCart={onAddToCart} />   
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
      products: state.products
    };
  };

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: ({productId}) => dispatch(addToCartProduct({productId})) 
    }
}  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Category);
