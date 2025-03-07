// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});

// Function to add items to cart
function addToCart(itemName, price) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push({ name: itemName, price: price });
    sessionStorage.setItem("cart", JSON.stringify(cart));

    alert(`${itemName} has been added to your cart!`);
}


// Function to update the cart count
function updateCartCount() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
}

function filterItems() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.textContent.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    });
}