import cart from "./iife.js";

//Add some items
cart.addItem({ id: 1, pName: 'Mobile', price: 300 });
cart.addItem({ id: 2, pName: 'Phone', price: 500 });
cart.addItem({ id: 3, pName: 'Laptop', price: 900 });

//get the cart container
const cartItems = document.getElementById('cart-items');

//Display the cart items
const cartContent = cart.getCartContents();
cartContent.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.textContent = `${item.pName} - $${item.price}`;
  cartItems.appendChild(listItem);
});

// Get the total price element
const totalPriceElement = document.getElementById('total-price');
// Display the total price
totalPriceElement.textContent = `Total: $${cart.getTotal()}`;
