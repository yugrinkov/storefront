import React from 'react';
import {connect} from 'react-redux';
import Price from '../components/Price';
import ProductImage from '../components/ProductImage';
import AddToCart from './AddToCart';
import './Product.css';

const Product = props => {
    if (!props.product) return null;
    const { image, title, price, brand, description } = props.product;
    return (
        <div className="Product">
            <div className="breadcrumbs">Home/Plates/{title}</div>
            <div className="page-container">
                <div className="product-image">
                    <ProductImage image={image} title={title} />
                </div>
                <div className="product-details">
                    <h3 className="product-brand">{brand}</h3>
                    <h1 className="product-name">{title}</h1>
                    <Price priceValue={price} />
                    <p className="product-description">{description}</p>
                    <AddToCart product={props.product} />
                </div>
            </div>
        </div>
    )

}

const getProductById = (id, products) => {
    return products.find(product => product.id === id)
}

const mapStateToProps = (state, ownProps) => {
    return {
        product: getProductById(+ownProps.match.params.id, state.products)
    }
}

export default connect(mapStateToProps, null)(Product);
