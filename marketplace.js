// ===============================================
// MARKETPLACE - ADD TO CART FUNCTIONALITY
// ===============================================

document.addEventListener('DOMContentLoaded', () => {
    let cart = [];
    const cartCount = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');

    // Update cart count display
    const updateCartCount = () => {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCount) {
            cartCount.textContent = totalItems;
            
            // Animate cart count
            cartCount.style.transform = 'scale(1.3)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 200);
        }
    };

    // Add to cart handler
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get product details from the card
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.price-amount').textContent;
            
            // Check if product already in cart
            const existingProduct = cart.find(item => item.name === productName);
            
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }
            
            // Update UI
            updateCartCount();
            
            // Visual feedback
            button.textContent = 'Added!';
            button.style.background = 'var(--earth-light)';
            
            setTimeout(() => {
                button.innerHTML = `
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 5V13M5 9H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    Add
                `;
                button.style.background = 'var(--earth-medium)';
            }, 1500);
            
            // Store cart in localStorage for persistence
            localStorage.setItem('khetify_cart', JSON.stringify(cart));
        });
    });

    // Load cart from localStorage on page load
    const loadCart = () => {
        const savedCart = localStorage.getItem('khetify_cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartCount();
        }
    };

    loadCart();

    // Filter functionality
    const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            // In a real app, this would filter products
            console.log('Filter changed:', checkbox.parentElement.textContent.trim());
        });
    });

    // Sort functionality
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            // In a real app, this would sort products
            console.log('Sort changed:', sortSelect.value);
        });
    }

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const searchTerm = e.target.value.toLowerCase();
                // In a real app, this would filter products
                console.log('Searching for:', searchTerm);
            }, 300);
        });
    }
});
