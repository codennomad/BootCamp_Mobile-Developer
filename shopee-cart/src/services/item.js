//create item
async function createItem(name, price, quantify) {
    const item = {
        name,
        price,
        quantify,
        subtotal: () => item.price * item.quantify,
    }
    return item
};

export default createItem;