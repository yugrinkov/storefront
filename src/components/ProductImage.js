import React from 'react';

const ProductImage = props => {
    const { image, cssClassName, title } = props;
    return (
        <React.Fragment>
            <img className={cssClassName} src={`/media/${image}`} alt={title} />
        </React.Fragment>
    )
}

export default ProductImage;