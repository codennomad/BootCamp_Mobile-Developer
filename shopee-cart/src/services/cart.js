// Add item in cart
// Se o item já existe, incrementa a quantidade; caso contrário, adiciona o item.
async function addItem(userCart, newItem) {
    const existingItem = userCart.find((item) => item.name === newItem.name)

    if (existingItem){
        //soma as quantidades
        existingItem.quantify += newItem.quantify
    } else {
        userCart.push(newItem);
        console.log(`${newItem.name} added to cart.`);
    }
};

// Delete item completely from the cart by name
async function deleteItem(userCart, itemName) {
    const initiallength = userCart.length;
    const indexToDelete = userCart.findIndex((item) => item.name === itemName);

    if (indexToDelete !== -1) {
        const removedItemName = userCart[indexToDelete].name;
        userCart.splice(indexToDelete, 1); // Modifica o array original
        console.log(`${removedItemName} completely removed from cart.`);
    } else {
        console.log(`${itemName} not found in cart.`);
    }
};

//remove item by index
/*async function removeItem(userCart, index) {
    //transforma o indice visual do usuario, para o indice do backend
    const deleteindex = index - 1;

    // e maior do que zero e se e menor do que o tamanho do carrinho
    if(deleteindex >= 0 && deleteindex < userCart.length){
        userCart.splice(deleteindex, 1);
    }
};*/

//remove item by index
async function removeItem(userCart, itemToRemove) {
    // Encontrar o índice do item a ser removido pelo nome
    const indexFound = userCart.findIndex((p) => p.name === itemToRemove.name);

    // Se o item não for encontrado, retornar
    if(indexFound === -1){
        console.log(`${itemToRemove.name} not found in cart.`);
        return;
    }

    const item = userCart[indexFound];

    // Se a quantidade do item for maior que 1, subtrai uma unidade
    if (item.quantify > 1) {
        item.quantify -= 1;
        console.log(`One unit of ${item.name} removed. New quantity: ${item.quantify}x`);
    } else {
        // Se a quantidade for 1, remove o item completamente do carrinho
        userCart.splice(indexFound, 1);
        console.log(`${item.name} completely removed from cart.`);
    }
};

// Calculate total cart value
async function calculateTotal(userCart) {
    console.log("\n🛒 Shopee Cart TOTAL IS:");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`💸 R$ ${result.toFixed(2)}`);
};

// Display current cart contents
async function displayCart(userCart) {
    console.log("\n--- Shopee Cart List ---");

    if (userCart.length === 0){
        console.log("Your cart is empty.")
    }

    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} | ${item.quantify}x | Subtotal = R$ ${item.subtotal()}`);
    });
    console.log("------------------------");
}

export {
    addItem,
    deleteItem,
    displayCart,
    removeItem,
    calculateTotal,
}