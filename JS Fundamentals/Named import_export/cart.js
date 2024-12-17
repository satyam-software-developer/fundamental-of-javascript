const shoppingCart = (function () {
  // Private variables and functions
  let cart = [];
  let total = 0;

  function calculateTotal() {
    total = cart.reduce((acc, item) => acc + item.price, 0);
  }

  // Public methods
  return {
    addItem: function (item) {
      cart.push(item);
      calculateTotal();
    },
    getTotal: function () {
      return total;
    },
    getCartContents: function () {
      return cart;
    },
  };
})();

//Add some items
shoppingCart.addItem({ id: 1, pName: "Mobile", price: 300 });
shoppingCart.addItem({ id: 2, pName: "Phone", price: 500 });

//get the cart container
const cartItems = document.getElementById("cart-items");

//Display the cart items
const cartContent = shoppingCart.getCartContents();
cartContent.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${item.pName} - $${item.price}`;
  cartItems.appendChild(listItem);
});

// Get the total price element
const totalPriceElement = document.getElementById("total-price");
// Display the total price
totalPriceElement.textContent = `Total: $${shoppingCart.getTotal()}`;
