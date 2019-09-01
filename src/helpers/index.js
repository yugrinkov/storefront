export const getCartEntries = state => {
    return state.cart.map(cartEntry => {
        return {...state.products.find(product => product.id === cartEntry.productId), productQty: cartEntry.productQty }
    });
}

export const getTotalPrice = state => {
    const {cart, products} = state;
    return cart.reduce((acc, currentEntry) => {
        const currentEntryPrice = products.find(product => product.id === currentEntry.productId).price;
        return acc + (currentEntryPrice * currentEntry.productQty);
    }, 0)
}