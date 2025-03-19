
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemDetails = document.getElementById("cartItemDetails");

    if (cart.length > 0) {
        let cartHTML = '';
        let totalCartPrice = 0;
 
        cart.forEach(item => {

            const itemTotalPrice = item.price * item.quantity;
            totalCartPrice += itemTotalPrice;

            cartHTML += `
                <div class="cart-item">
                    <p><strong>Item:</strong> ${item.name}</p>
                    ${item.size ? `<p><strong>Size:</strong> ${item.size}</p>` : ''}
                    <p><strong>Quantity:</strong> ${item.quantity}</p>
                    <p><strong>Price per Item:</strong> ₱${item.price.toFixed(2)}</p>
                    <p><strong>Total Price:</strong> ₱${itemTotalPrice.toFixed(2)}</p>
                </div>
            `;
        });

        cartHTML += `<div class="cart-item"><p><strong>Total Cart Price:</strong> ₱${totalCartPrice.toFixed(2)}</p></div>`;
        cartItemDetails.innerHTML = cartHTML;
    } else {
        cartItemDetails.innerHTML = "<p>No items in the cart.</p>";
    }
}

function clearCart() {
    localStorage.removeItem('cart'); // Clear the cart from localStorage
    displayCart(); // Refresh the cart display
    updateCheckoutButtonVisibility(); // Update the checkout button visibility
}

// Function to check if the cart is empty and toggle the checkout button visibility
function updateCheckoutButtonVisibility() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutButton = document.getElementById('checkoutButton');

    if (cart.length > 0) {
        checkoutButton.style.display = 'block'; // Show the button if the cart is not empty
    } else {
        checkoutButton.style.display = 'none'; // Hide the button if the cart is empty
    }
}

function resetFormFields() {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    document.getElementById('cash').value = '';
}

function openModal() {
    document.getElementById('receiptModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('receiptModal').style.display = 'none';
}

document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const cash = parseFloat(document.getElementById('cash').value);

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const totalBill = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cash < totalBill) {
        alert("Insufficient cash! Please provide enough cash to complete the order.");
        return;
    }

    const change = cash - totalBill;

    const receiptDetails = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Total Bill:</strong> ₱${totalBill.toFixed(2)}</p>
        <p><strong>Cash:</strong> ₱${cash.toFixed(2)}</p>
        <p><strong>Change:</strong> ₱${change.toFixed(2)}</p>
        <h3>Order Items:</h3>
        <ul>
            ${cart.map(item => `
                <li>${item.name} (${item.size || 'N/A'}) - ${item.quantity} x ₱${item.price.toFixed(2)} = ₱${(item.price * item.quantity).toFixed(2)}</li>
            `).join('')}
        </ul>
    `;

    document.getElementById('receiptDetails').innerHTML = receiptDetails;
    openModal();

    resetFormFields();

    clearCart();
});

displayCart();

document.addEventListener("DOMContentLoaded", function () {
    const loaderContainer = document.getElementById('loader-container');
    const mainContent = document.getElementById('main-content');

    const slowLoadTimeout = setTimeout(() => {
        loaderContainer.style.display = 'block';
        mainContent.style.display = 'none';
    }, 1000);

    window.addEventListener('load', function () {
        clearTimeout(slowLoadTimeout);
        loaderContainer.style.display = 'none';
        mainContent.style.display = 'block';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    function toggleMenu() {
        if (navLinks.classList.contains("active")) {
            navLinks.style.opacity = "0";
            navLinks.style.transform = "translateY(-10px)";
            
            setTimeout(() => {
                navLinks.classList.remove("active");
                navLinks.style.visibility = "hidden";
            }, 300);
        } else {
            navLinks.style.visibility = "visible";
            navLinks.classList.add("active");
            navLinks.style.opacity = "1";
            navLinks.style.transform = "translateY(0)";
        }
    }

    menuButton.addEventListener("click", toggleMenu);

    window.addEventListener("resize", function () {
        if (window.innerWidth > 900) {
            navLinks.classList.remove("active");
            navLinks.style.visibility = "visible";
            navLinks.style.opacity = "1";
            navLinks.style.transform = "translateY(0)";
        } else {
            navLinks.style.visibility = "hidden";
            navLinks.style.opacity = "0";
            navLinks.style.transform = "translateY(-10px)";
        }
    });
});