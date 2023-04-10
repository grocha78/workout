// Get the cart count element
const cartCount = document.querySelector('.cart-count');

// Get the cart items from local storage or create an empty array if none exists
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Update the cart count element
cartCount.textContent = cartItems.length;

// Add event listeners to all "Add to Cart" buttons on the page
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the product ID from the data-product-id attribute
    const productId = button.getAttribute('data-product-id');

    // Check if the product is already in the cart
    const existingCartItem = cartItems.find(item => item.id === productId);

    if (existingCartItem) {
      // Increment the quantity of the existing item
      existingCartItem.quantity += 1;
    } else {
      // Add the new item to the cart
      cartItems.push({
        id: productId,
        quantity: 1
      });
    }

    // Save the updated cart items to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update the cart count element
    cartCount.textContent = cartItems.length;
  });
});
