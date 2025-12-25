// SnaQ Trail - Main JavaScript File

// Product Data
const products = [
    {
        id: 1,
        name: "Classic Namkeen Mixture",
        price: 149,
        weight: "250g",
        category: "namkeen",
        image: "resources/namkeen-mixture.png",
        rating: 4.8,
        description: "Traditional Indian snack mixture with sev, peanuts, lentils and authentic spices",
        ingredients: "Chickpea flour, peanuts, lentils, spices, vegetable oil",
        nutrition: "Protein: 8g, Carbs: 15g, Fat: 12g per 100g",
        inStock: true
    },
    {
        id: 2,
        name: "Peri-Peri Makhana",
        price: 199,
        weight: "100g",
        category: "makhana",
        image: "resources/makhana-peri-peri.png",
        rating: 4.9,
        description: "Roasted fox nuts with spicy peri-peri seasoning - healthy and delicious",
        ingredients: "Fox nuts, peri-peri spices, olive oil",
        nutrition: "Protein: 12g, Carbs: 18g, Fat: 6g per 100g",
        inStock: true
    },
    {
        id: 3,
        name: "Plain Roasted Makhana",
        price: 179,
        weight: "100g",
        category: "makhana",
        image: "resources/makhana-plain.png",
        rating: 4.7,
        description: "Light and crispy roasted fox nuts - perfect healthy snack",
        ingredients: "Fox nuts, light salt",
        nutrition: "Protein: 12g, Carbs: 18g, Fat: 2g per 100g",
        inStock: true
    },
    {
        id: 4,
        name: "Millet Crackers",
        price: 129,
        weight: "200g",
        category: "millet",
        image: "resources/millet-crackers.png",
        rating: 4.6,
        description: "Healthy crackers made with bajra and jowar flour - nutritious and tasty",
        ingredients: "Bajra flour, jowar flour, sesame seeds, spices",
        nutrition: "Protein: 6g, Carbs: 20g, Fat: 8g per 100g",
        inStock: true
    },
    {
        id: 5,
        name: "Masala Khakhra",
        price: 139,
        weight: "200g",
        category: "millet",
        image: "resources/khakhra.png",
        rating: 4.8,
        description: "Gujarati-style roasted crackers with authentic masala flavor",
        ingredients: "Wheat flour, millet flour, spices, ghee",
        nutrition: "Protein: 7g, Carbs: 22g, Fat: 9g per 100g",
        inStock: true
    },
    {
        id: 6,
        name: "Tangy Tomato Makhana",
        price: 189,
        weight: "100g",
        category: "makhana",
        image: "resources/makhana-peri-peri.png",
        rating: 4.5,
        description: "Fox nuts coated with tangy tomato flavor - kids' favorite",
        ingredients: "Fox nuts, tomato powder, spices",
        nutrition: "Protein: 11g, Carbs: 17g, Fat: 5g per 100g",
        inStock: true
    },
    {
        id: 7,
        name: "Herb & Spice Namkeen",
        price: 159,
        weight: "250g",
        category: "namkeen",
        image: "resources/namkeen-assorted.png",
        rating: 4.7,
        description: "Mixed snack with aromatic herbs and traditional Indian spices",
        ingredients: "Mixed lentils, sev, herbs, spices",
        nutrition: "Protein: 9g, Carbs: 16g, Fat: 11g per 100g",
        inStock: true
    },
    {
        id: 8,
        name: "Cheese Makhana",
        price: 209,
        weight: "100g",
        category: "makhana",
        image: "resources/makhana-plain.png",
        rating: 4.4,
        description: "Creamy cheese-flavored roasted fox nuts - indulgent yet healthy",
        ingredients: "Fox nuts, cheese powder, herbs",
        nutrition: "Protein: 13g, Carbs: 16g, Fat: 7g per 100g",
        inStock: true
    },
    {
        id: 9,
        name: "Jowar Chips",
        price: 119,
        weight: "150g",
        category: "millet",
        image: "resources/millet-crackers.png",
        rating: 4.6,
        description: "Healthy chips made from jowar flour - baked not fried",
        ingredients: "Jowar flour, spices, minimal oil",
        nutrition: "Protein: 5g, Carbs: 18g, Fat: 6g per 100g",
        inStock: true
    },
    {
        id: 10,
        name: "Pudina Makhana",
        price: 189,
        weight: "100g",
        category: "makhana",
        image: "resources/makhana-peri-peri.png",
        rating: 4.8,
        description: "Refreshing mint-flavored fox nuts with cooling pudina taste",
        ingredients: "Fox nuts, mint powder, spices",
        nutrition: "Protein: 11g, Carbs: 17g, Fat: 5g per 100g",
        inStock: true
    },
    {
        id: 11,
        name: "Traditional Mathri",
        price: 149,
        weight: "250g",
        category: "namkeen",
        image: "resources/khakhra.png",
        rating: 4.9,
        description: "Classic Indian savory crackers - perfect with tea",
        ingredients: "Wheat flour, ghee, spices",
        nutrition: "Protein: 6g, Carbs: 20g, Fat: 12g per 100g",
        inStock: true
    },
    {
        id: 12,
        name: "Festival Gift Pack",
        price: 599,
        weight: "1kg",
        category: "combo",
        image: "resources/gift-pack.png",
        rating: 4.9,
        description: "Assorted collection of our best snacks - perfect for gifting",
        ingredients: "Variety of snacks and namkeen",
        nutrition: "Varies by product",
        inStock: true
    }
];

// Cart Management
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartDisplay();
    }

    addItem(productId, quantity = 1) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.items.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }

        this.saveCart();
        this.updateCartDisplay();
        this.showCartAnimation();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
        this.renderCartItems();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(0, quantity);
            if (item.quantity === 0) {
                this.removeItem(productId);
            } else {
                this.saveCart();
                this.updateCartDisplay();
                this.renderCartItems();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    updateCartDisplay() {
        const cartCount = document.getElementById('cart-count');
        const mobileCartCount = document.getElementById('mobile-cart-count');
        const count = this.getItemCount();
        
        if (cartCount) cartCount.textContent = count;
        if (mobileCartCount) mobileCartCount.textContent = count;
        
        // Animate cart counter
        if (count > 0) {
            cartCount?.classList.add('cart-counter');
            setTimeout(() => cartCount?.classList.remove('cart-counter'), 500);
        }
    }

    showCartAnimation() {
        // Show success message
        const toast = document.createElement('div');
        toast.className = 'fixed top-20 right-4 bg-leafy-green text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
        toast.innerHTML = `
            <div class="flex items-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Added to cart!</span>
            </div>
        `;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.remove('translate-x-full'), 100);
        setTimeout(() => {
            toast.classList.add('translate-x-full');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 2000);
    }

    renderCartItems() {
        const cartItems = document.getElementById('cart-items');
        const cartFooter = document.getElementById('cart-footer');
        
        if (!cartItems) return;

        if (this.items.length === 0) {
            cartItems.innerHTML = '<p class="text-gray-500 text-center">Your cart is empty</p>';
            cartFooter?.classList.add('hidden');
            return;
        }

        cartItems.innerHTML = this.items.map(item => `
            <div class="flex items-center space-x-4 mb-4 p-4 bg-gray-50 rounded-lg">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                <div class="flex-1">
                    <h4 class="font-semibold text-deep-brown">${item.name}</h4>
                    <p class="text-sm text-gray-600">₹${item.price} × ${item.quantity}</p>
                    <div class="flex items-center space-x-2 mt-2">
                        <button onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300">-</button>
                        <span class="font-semibold">${item.quantity}</span>
                        <button onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})" class="w-8 h-8 bg-spice-orange rounded-full flex items-center justify-center text-white hover:bg-opacity-80">+</button>
                    </div>
                </div>
                <button onclick="cart.removeItem(${item.id})" class="text-red-500 hover:text-red-700">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </button>
            </div>
        `).join('');

        const total = this.getTotal();
        const cartTotal = document.getElementById('cart-total');
        if (cartTotal) cartTotal.textContent = `₹${total}`;
        
        cartFooter?.classList.remove('hidden');
    }
}

// Initialize cart
const cart = new Cart();

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize hero carousel
    initializeHeroCarousel();
    
    // Initialize typewriter effect
    initializeTypewriter();
    
    // Load products
    loadProducts();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Initialize animations
    initializeAnimations();
}

function initializeHeroCarousel() {
    const heroCarousel = document.querySelector('.hero-carousel');
    if (heroCarousel) {
        new Splide(heroCarousel, {
            type: 'loop',
            autoplay: true,
            interval: 4000,
            arrows: false,
            pagination: true,
            pauseOnHover: true
        }).mount();
    }
}

function initializeTypewriter() {
    const typed = new Typed('#typed-text', {
        strings: [
            'Authentic Indian Flavors',
            'Traditional Homemade Style',
            'Healthy & Delicious Snacks'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

function loadProducts(filterCategory = 'all') {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    const filteredProducts = filterCategory === 'all' 
        ? products.slice(0, 9) // Show first 9 products on homepage
        : products.filter(p => p.category === filterCategory);

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card bg-white rounded-xl overflow-hidden">
            <div class="relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                <div class="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-semibold text-spice-orange">
                    ${product.weight}
                </div>
            </div>
            <div class="p-4">
                <h3 class="font-semibold text-lg text-deep-brown mb-2">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-3 line-clamp-2">${product.description}</p>
                <div class="flex items-center justify-between mb-3">
                    <div>
                        <span class="text-2xl font-bold text-spice-orange">₹${product.price}</span>
                        <div class="flex items-center mt-1">
                            <div class="flex text-yellow-400">
                                ${generateStars(product.rating)}
                            </div>
                            <span class="ml-1 text-sm text-gray-500">(${product.rating})</span>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <button onclick="cart.addItem(${product.id})" class="flex-1 btn-primary text-white py-2 px-4 rounded-lg font-medium text-sm">
                        Add to Cart
                    </button>
                    <a href="product-detail.html?id=${product.id}" class="border border-spice-orange text-spice-orange py-2 px-4 rounded-lg font-medium text-sm hover:bg-spice-orange hover:text-white transition-colors">
                        View Details
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    // Animate product cards
    anime({
        targets: '.product-card',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        duration: 600,
        easing: 'easeOutQuad'
    });
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>';
    }
    
    if (hasHalfStar) {
        stars += '<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>';
    }
    
    return stars;
}

function initializeEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Category filters
    const categoryFilters = document.querySelectorAll('.category-filter');
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            // Update active state
            categoryFilters.forEach(f => {
                f.classList.remove('active', 'bg-spice-orange', 'text-white');
                f.classList.add('bg-white', 'text-gray-600');
            });
            
            e.target.classList.add('active', 'bg-spice-orange', 'text-white');
            e.target.classList.remove('bg-white', 'text-gray-600');
            
            // Filter products
            const category = e.target.dataset.category;
            loadProducts(category);
        });
    });

    // Cart functionality
    const cartBtn = document.getElementById('cart-btn');
    const mobileCartBtn = document.getElementById('mobile-cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCart = document.getElementById('close-cart');

    function openCart() {
        cartSidebar.classList.remove('translate-x-full');
        cartOverlay.classList.remove('hidden');
        cart.renderCartItems();
        document.body.style.overflow = 'hidden';
    }

    function closeCartSidebar() {
        cartSidebar.classList.add('translate-x-full');
        cartOverlay.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (mobileCartBtn) mobileCartBtn.addEventListener('click', openCart);
    if (closeCart) closeCart.addEventListener('click', closeCartSidebar);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCartSidebar);

    // Hero CTA buttons
    const shopNowBtn = document.querySelector('.btn-primary');
    const viewProductsBtn = document.querySelector('button.border-spice-orange');
    
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#products-grid').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (viewProductsBtn) {
        viewProductsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'products.html';
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('input[type="email"]');
    if (newsletterForm) {
        newsletterForm.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                showNewsletterSuccess();
            }
        });
        
        const subscribeBtn = newsletterForm.nextElementSibling;
        if (subscribeBtn) {
            subscribeBtn.addEventListener('click', showNewsletterSuccess);
        }
    }
}

function showNewsletterSuccess() {
    const toast = document.createElement('div');
    toast.className = 'fixed top-20 right-4 bg-leafy-green text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    toast.innerHTML = `
        <div class="flex items-center space-x-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span>Subscribed successfully!</span>
        </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.remove('translate-x-full'), 100);
    setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

function initializeAnimations() {
    // Trust badges animation on scroll
    const trustBadges = document.querySelectorAll('.trust-badge');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    });

    trustBadges.forEach(badge => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(20px)';
        badge.style.transition = 'all 0.6s ease';
        observer.observe(badge);
    });

    // Review cards animation
    const reviewCards = document.querySelectorAll('.bg-warm-cream');
    const reviewObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    });

    reviewCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s ease';
        reviewObserver.observe(card);
    });
}

// Utility Functions
function formatPrice(price) {
    return `₹${price.toFixed(2)}`;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for use in other files
window.cart = cart;
window.products = products;