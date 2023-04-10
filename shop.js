// Get the "Add to Cart" buttons and add a click event listener to each one
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCartClicked);
});

// Handle the "Add to Cart" button click event
function addToCartClicked(event) {
  // Get the product information from the clicked button's parent element
  const button = event.target;
  const product = button.parentElement;
  const title = product.querySelector('h2').textContent;
  const price = product.querySelector('p').textContent;

  // Add the product information to the cart
  addToCart(title, price);

  // Update the cart count element
  updateCartCount();
}

// Add the product information to the cart
function addToCart(title, price) {
  // Create a new row for the product in the cart
  const cartRow = document.createElement('li');
  cartRow.classList.add('cart-row');
  const cartItems = document.querySelector('.cart-items');
  const cartItemNames = cartItems.querySelectorAll('.cart-item-title');
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].textContent === title) {
      alert('This item is already added to the cart');
      return;
    }
  }
  const cartRowContents = `
    <span class="cart-item-title">${title}</span>
    <span class="cart-item-price">${price}</span>
    <button class="remove-button">Remove</button>
  `;
  cartRow.innerHTML = cartRowContents;
  cartItems.appendChild(cartRow);

  // Add a click event listener to the new remove button
  const removeButton = cartRow.querySelector('.remove-button');
  removeButton.addEventListener('click', removeCartItem);
}

// Update the cart count element
function updateCartCount() {
  const cartItems = document.querySelector('.cart-items');
  const cartCount = document.querySelector('.cart-count');
  cartCount.textContent = cartItems.children.length;
}

// Handle the remove button click event
function removeCartItem(event) {
  const removeButton = event.target;
  const cartRow = removeButton.parentElement;
  cartRow.remove();

  // Update the cart count element
  updateCartCount();
}
