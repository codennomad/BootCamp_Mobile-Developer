import * as CartService from "./services/cart.js";
import createItem from "./services/item.js";

// cart e whishlist empety
const myCart = [];
const myWhishList = [];

// Welcome message
console.log("👋 Welcome to your Shopee Cart!");

// Create items
const item1 = await createItem("Pregos", 0.20, 1000);
const item2 = await createItem("Martelo", 50.00, 1);
const item3 = await createItem("Xicara Ceramica Japonesa", 21.80, 1);
const item4 = await createItem("Parafuso", 0.10, 500);

// --- Cart Operations ---

// Add items to cart
await CartService.addItem(myCart, item1); 
await CartService.addItem(myCart, item2); 
await CartService.addItem(myCart, item4);

// Add more Pregos to test quantity update
await CartService.addItem(myCart, await createItem("Pregos", 0.20, 500));

// Display cart after additions
await CartService.displayCart(myCart);
await CartService.calculateTotal(myCart);

console.log("\n--- Testing removeItem ---");

// Test: remove one unit of Pregos (should become 1499)
await CartService.removeItem(myCart, item1);
await CartService.displayCart(myCart);
await CartService.calculateTotal(myCart);

// Test: remove one unit of Martelo (should be removed completely as quantity is 1)
await CartService.removeItem(myCart, item2);
await CartService.displayCart(myCart);
await CartService.calculateTotal(myCart);

// Test: try to remove an item not in cart
await CartService.removeItem(myCart, await createItem("Arruela", 0.05, 1));
await CartService.displayCart(myCart);

console.log("\n--- Testing deleteItem (remove completely by name) ---");
// Test: delete Parafuso completely
const updatedCart = await CartService.deleteItem(myCart, "Parafuso");
// Se deleteItem retorna o array, você precisa reatribuí-lo
// myCart = updatedCart; // Descomentar se deleteItem retornar o array
await CartService.displayCart(myCart);
await CartService.calculateTotal(myCart);


// --- Wishlist Operations ---
console.log("\n--- Shopee Wishlist ---");
await CartService.addItem(myWhishList, item3); 
console.log(myWhishList[0].name);