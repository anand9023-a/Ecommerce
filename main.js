// Sample featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Trendy T-Shirt",
    price: 499,
    image: "https://via.placeholder.com/150?text=T-Shirt",
  },
  {
    id: 2,
    name: "Cool Sneakers",
    price: 1299,
    image: "https://via.placeholder.com/150?text=Sneakers",
  },
  {
    id: 3,
    name: "Stylish Backpack",
    price: 799,
    image: "https://via.placeholder.com/150?text=Backpack",
  },
];

// Load featured products on home page
function loadFeaturedProducts() {
  const container = document.getElementById("featured-list");
  featuredProducts.forEach((prod) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" />
      <h4>${prod.name}</h4>
      <p>₹${prod.price}</p>
    `;
    card.addEventListener("click", () => {
      // Navigate to product detail page with id param
      window.location.href = `product.html?id=${prod.id}`;
    });
    container.appendChild(card);
  });
}

// Update cart count (dummy for now)
function updateCartCount() {
  const countElem = document.getElementById("cart-count");
  // Get cart from localStorage (array of product ids)
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  countElem.textContent = cart.length;
}

document.addEventListener("DOMContentLoaded", () => {
  loadFeaturedProducts();
  updateCartCount();
});
