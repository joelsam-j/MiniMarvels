/* ==========================================================================
   MINI MARVELS - 1:64 SCALE DIECAST E-COMMERCE CORE LOGIC
   Contact Email: minimarvels@gmail.com
   Phone / WhatsApp: +91 7012153558
   ========================================================================== */

// EXACT 20 CARS CATALOG (Provided by User with Verified Working Image Links)
const CAR_CATALOG = [
    {
        id: 1,
        name: "Mustang",
        category: "Mustang",
        brand: "HOT WHEELS",
        price: 1899,
        originalPrice: 2299,
        badge: "Trending",
        rating: 4.8,
        reviews: 42,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYkSKT9nVqAj6fQslpOW8VpBihk7d26YKeDaTI4zi5A&s=10",
        specs: ["Official Ford Mustang license", "Classic muscle diecast metal body", "Real rubber tires", "Collector 1:64 edition"],
        description: "1:64 scale diecast Mustang miniature with precision detail and rubber wheels."
    },
    {
        id: 2,
        name: "Benz AMG",
        category: "Benz",
        brand: "HOT WHEELS",
        price: 2299,
        originalPrice: 2799,
        badge: "Best Selling",
        rating: 4.9,
        reviews: 38,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PRFxuVmYCyZ1PGxlapjoyrRFAVls2OiAFdzj-b4U_A&s=10",
        specs: ["Official Mercedes-AMG license", "Luxury diecast bodywork", "Rubber tires", "Collector window display"],
        description: "High performance 1:64 scale Mercedes-AMG diecast collectible car."
    },
    {
        id: 3,
        name: "BMW 2002 Model",
        category: "BMW",
        brand: "HOT WHEELS",
        price: 1999,
        originalPrice: 2499,
        badge: "Limited Edition",
        rating: 4.7,
        reviews: 29,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuaxsb1MkfEiUfsjyT8Nv_rZNDOnufvRYg9Wnnw5Cew&s=10",
        specs: ["Classic BMW 2002 vintage body", "Chrome grille & trim details", "Rubber tires", "1:64 diecast metal"],
        description: "Classic vintage 1:64 scale BMW 2002 model diecast collectible."
    },
    {
        id: 4,
        name: "BMW M4 GT3",
        category: "BMW",
        brand: "HOT WHEELS",
        price: 2599,
        originalPrice: 3099,
        badge: "New Arrival",
        rating: 4.9,
        reviews: 51,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4zFGMhlyuFkzO8vRLAHolfzmK2c5uXQHlteXX4JsqcRBJOAW40IXVPk&s=10",
        specs: ["Official GT3 Motorsport livery", "Swan-neck rear wing aero", "Rubber race slick tires", "Diecast metal"],
        description: "Pure GT3 racing machine! 1:64 scale BMW M4 GT3 motorsport diecast."
    },
    {
        id: 5,
        name: "BMW E30",
        category: "BMW",
        brand: "HOT WHEELS",
        price: 2399,
        originalPrice: 2899,
        badge: "Trending",
        rating: 4.9,
        reviews: 63,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsPvHLDdbfx8mA3TyUoviRP2EysDuxbml8lqUFbROLhg&s=10",
        specs: ["Classic E30 box flares", "Sport front chin spoiler", "BBS style wheels", "Rubber tires"],
        description: "Iconic classic 1:64 scale BMW E30 diecast miniature car."
    },
    {
        id: 6,
        name: "BMW M5",
        category: "BMW",
        brand: "HOT WHEELS",
        price: 2499,
        originalPrice: 2999,
        badge: "Best Selling",
        rating: 5.0,
        reviews: 45,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWDD3o2o-Pba3w0lDvMi9XaAazZrFy8F3TVQS84Mx8sTbNxN90Ncy7xA&s=10",
        specs: ["Super sedan metallic finish", "M badge quad exhaust details", "Rubber tires", "1:64 scale diecast"],
        description: "V8 Super Sedan power! 1:64 scale BMW M5 diecast model."
    },
    {
        id: 7,
        name: "Porsche 993",
        category: "Porsche",
        brand: "HOT WHEELS",
        price: 2399,
        originalPrice: 2899,
        badge: "Limited Edition",
        rating: 4.8,
        reviews: 34,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjh8sfqHxTsjQ1z-3D-eJVkI8LUWE4YYjdJ-EMM4Acnw&s=10",
        specs: ["Air-cooled classic 993 widebody", "Whaletail rear wing", "Rubber tires", "Diecast metal"],
        description: "Classic air-cooled legend! 1:64 scale Porsche 993 diecast miniature."
    },
    {
        id: 8,
        name: "Porsche 911 Carrera",
        category: "Porsche",
        brand: "HOT WHEELS",
        price: 2499,
        originalPrice: 2999,
        badge: "Trending",
        rating: 4.9,
        reviews: 58,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPZwtT4KBfWQzZ9LPeXG_uoXPktdVZ8lBYGndAETjGg&s",
        specs: ["Timeless 911 Carrera silhouette", "Gloss enamel finish", "Rubber tires", "Collector box"],
        description: "The icon of sports cars! 1:64 scale Porsche 911 Carrera diecast."
    },
    {
        id: 9,
        name: "Porsche 911 GT3 RS",
        category: "Porsche",
        brand: "HOT WHEELS",
        price: 2799,
        originalPrice: 3299,
        badge: "Best Selling",
        rating: 5.0,
        reviews: 94,
        scale: "1:64 Scale",
        image: "https://models118.com/wp-content/uploads/2026/08/da9d9785-bbf1-403e-aebb-27daba7c3913-800x533.jpg.avif",
        specs: ["Weissach carbon aero package", "Active rear wing winglets", "Rubber tires", "1:64 scale diecast"],
        description: "Track-focused monster! 1:64 scale Porsche 911 GT3 RS diecast model."
    },
    {
        id: 10,
        name: "F1 Red Bull Racing",
        category: "F1",
        brand: "BBURAGO / MINI GT",
        price: 2499,
        originalPrice: 2999,
        badge: "Best Selling",
        rating: 5.0,
        reviews: 87,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSam624hDPWfDJUTtFOiKoOG0iJ1osc3zaaxAsRmUil3A&s=10",
        specs: ["Official Red Bull Racing F1 license", "Matte Navy & Red Bull livery", "Pirelli rubber slick tires", "Collector base"],
        description: "World Championship winning 1:64 scale F1 Red Bull Racing diecast model car."
    },
    {
        id: 11,
        name: "F1 Ferrari",
        category: "F1",
        brand: "BBURAGO",
        price: 2699,
        originalPrice: 3199,
        badge: "Trending",
        rating: 4.9,
        reviews: 72,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj51Z-LPZinx4P9pvoEawQ0VxxAGhLSxmYFBnWhlPbP_64P3H1YwuFUwk&s=10",
        specs: ["Official Scuderia Ferrari F1 license", "Rosso Corsa red race livery", "Rubber tires", "1:64 diecast"],
        description: "Legendary Scuderia Ferrari F1 1:64 scale race car diecast."
    },
    {
        id: 12,
        name: "F1 McLaren",
        category: "F1",
        brand: "HOT WHEELS",
        price: 2599,
        originalPrice: 2999,
        badge: "New Arrival",
        rating: 4.9,
        reviews: 53,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuydj7WKX96VAV7AH5WtwxQRo5LShgSzlHRXXP0jSD4eqkLM-P9nPZnLY&s=10",
        specs: ["Official McLaren F1 Papaya Orange livery", "Precision halo & wing aero", "Rubber tires", "Display box"],
        description: "Papaya Orange power! 1:64 scale F1 McLaren Formula 1 race car."
    },
    {
        id: 13,
        name: "F1 2025 Mercedes-AMG",
        category: "F1",
        brand: "BBURAGO",
        price: 2899,
        originalPrice: 3499,
        badge: "New Arrival",
        rating: 5.0,
        reviews: 31,
        scale: "1:64 Scale",
        image: "https://scalearts.in/cdn/shop/files/2025-Mercedes-AMG-Petronas-W16-Kimi-Antonelli-1-43-bburago-diecast-formula-scale-model-car-scale-model-car-1.jpg?v=1772032374",
        specs: ["Official Mercedes-AMG W16 Petronas F1 livery", "Stealth silver/black aero body", "Pirelli rubber tires", "Collector box"],
        description: "Latest 2025 F1 Mercedes-AMG Petronas W16 Formula 1 diecast scale model car."
    },
    {
        id: 14,
        name: "Ferrari SF90",
        category: "Ferrari",
        brand: "BBURAGO",
        price: 2699,
        originalPrice: 3199,
        badge: "Trending",
        rating: 4.9,
        reviews: 46,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLI1yIpmWGg3d9wVwibztNeosMzCkmUBxhlxiAEpnf8g&s=10",
        specs: ["1,000 HP hybrid V8 hypercar", "Rosso Corsa red paint", "Rubber tires", "Diecast metal"],
        description: "Italian hybrid perfection! 1:64 scale Ferrari SF90 Stradale diecast."
    },
    {
        id: 15,
        name: "Ferrari F40",
        category: "Ferrari",
        brand: "BBURAGO",
        price: 2999,
        originalPrice: 3599,
        badge: "Best Selling",
        rating: 5.0,
        reviews: 89,
        scale: "1:64 Scale",
        image: "https://kollectibles.in/cdn/shop/files/frontpers_shopify_f40red_bburago.jpg?v=1756450392&width=1946",
        specs: ["Twin turbo V8 rear engine window", "Iconic wedge wing design", "Rubber tires", "Diecast alloy"],
        description: "The ultimate 1980s poster supercar! 1:64 scale Ferrari F40 red diecast model."
    },
    {
        id: 16,
        name: "Lamborghini Essenza",
        category: "Lamborghini",
        brand: "HOT WHEELS",
        price: 2799,
        originalPrice: 3299,
        badge: "Limited Edition",
        rating: 4.9,
        reviews: 41,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFwpROY75DeG1677kkzltPgPiYnJK6DjFl6ZKsMW-pw&s=10",
        specs: ["Track-only SCV12 hypercar bodywork", "Massive rear wing & diffuser", "Rubber tires", "1:64 diecast"],
        description: "V12 Track weapon! 1:64 scale Lamborghini Essenza SCV12 diecast."
    },
    {
        id: 17,
        name: "Lamborghini Revuelto",
        category: "Lamborghini",
        brand: "BBURAGO",
        price: 2899,
        originalPrice: 3499,
        badge: "New Arrival",
        rating: 5.0,
        reviews: 35,
        scale: "1:64 Scale",
        image: "https://scalearts.in/cdn/shop/files/lamborghini-revuelto-orange-1-64-bburago-licensed-diecast-scale-model-car-collectible-1.jpg?v=1769342560",
        specs: ["Official Lamborghini Revuelto HPEV V12 hybrid", "Arancio Orange finish", "Rubber tires", "Licensed collectible"],
        description: "Next-gen V12 hybrid Flagship! 1:64 scale Lamborghini Revuelto orange diecast."
    },
    {
        id: 18,
        name: "GT-R R34",
        category: "Nissan",
        brand: "KAIDO HOUSE",
        price: 2899,
        originalPrice: 3499,
        badge: "Best Selling",
        rating: 5.0,
        reviews: 98,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XyiMBdz-omACFEgTV3b9etQZImySALKBjGZahtut6PU-vcDyrAQAHEk&s=10",
        specs: ["RB26DETT twin turbo engine detail", "Bayside Blue / custom livery", "Rubber tires", "Kaido box"],
        description: "Godzilla! Highly detailed 1:64 scale Nissan GT-R R34 diecast model."
    },
    {
        id: 19,
        name: "Supra MK5",
        category: "JDM",
        brand: "HOT WHEELS",
        price: 2699,
        originalPrice: 3199,
        badge: "Trending",
        rating: 4.8,
        reviews: 52,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5TtrnPjLRtgL8lu2qxOpnfBd1YUj2-Tg8uuVXLG12TRUFl4cP78zUfe_&s=10",
        specs: ["Modern GR Supra sports coupe body", "Factory alloy wheels", "Rubber tires", "1:64 scale diecast"],
        description: "Modern JDM tuner legend! 1:64 scale Hot Wheels Toyota GR Supra MK5 diecast."
    },
    {
        id: 20,
        name: "Supra MK4",
        category: "JDM",
        brand: "HOT WHEELS",
        price: 2999,
        originalPrice: 3699,
        badge: "Best Selling",
        rating: 5.0,
        reviews: 112,
        scale: "1:64 Scale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxD1hdwOA5XM-KvhUYwf46x89CG412chJaiMunujzH-4DOaW8lWlRcNgPe&s=10",
        specs: ["2JZ twin turbo classic MK4 wing", "Chrome dish wheels", "Rubber tires", "Collector 1:64 edition"],
        description: "Classic 1990s JDM King! 1:64 scale Toyota Supra MK4 diecast miniature."
    }
];

// STATE MANAGEMENT
let appState = {
    cart: JSON.parse(localStorage.getItem('mm_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('mm_wishlist')) || [],
    orders: JSON.parse(localStorage.getItem('mm_orders')) || [
        {
            orderId: "#MM-71029",
            date: "2026-08-28",
            items: [
                { name: "Mustang", qty: 1, price: 1899 }
            ],
            total: 1899,
            status: "Delivered",
            trackingId: "BLUEDART-849201"
        }
    ],
    userProfile: JSON.parse(localStorage.getItem('mm_user')) || {
        name: "Joel Sam",
        email: "minimarvels@gmail.com",
        phone: "7012153558",
        address: "Kottayam, Kerala, India"
    },
    activeCategory: 'all',
    activeBadge: 'all',
    searchQuery: '',
    sortBy: 'featured'
};

// RENDER CAR IMAGE ON PURE WHITE BACKGROUND (#ffffff)
function getWhiteBgCarImageHtml(item, customHeight = '100%') {
    return `
        <div style="position: relative; width: 100%; height: ${customHeight}; background: #ffffff !important; display: flex; align-items: center; justify-content: center; padding: 8px; border-radius: 10px; overflow: hidden; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.06);">
            <img src="${item.image}" alt="${item.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 10px 18px rgba(0,0,0,0.2)); border-radius: 6px; transition: transform 0.4s ease;">
            
            <!-- 1:64 Scale Studio Stamp Overlay -->
            <span style="position: absolute; bottom: 8px; left: 8px; background: rgba(15,23,42,0.9); color: #00f0ff; font-size: 0.68rem; font-weight: 800; padding: 2px 7px; border-radius: 4px; border: 1px solid rgba(0,240,255,0.3); pointer-events: none;">
                1:64 DIECAST
            </span>
        </div>
    `;
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    renderHeroShowcase();
    renderProducts();
    updateCartUI();
    updateWishlistCount();
});

// HERO SHOWCASE RENDER
function renderHeroShowcase() {
    const heroImgEl = document.getElementById('heroShowcaseImg');
    if (heroImgEl) {
        const topCar = CAR_CATALOG[8]; // Porsche 911 GT3 RS
        heroImgEl.outerHTML = `<div id="heroShowcaseImg" style="width:100%; height:320px; background:#fff; border-radius:14px; padding:10px;">${getWhiteBgCarImageHtml(topCar, '100%')}</div>`;
    }
}

// SAVE TO LOCAL STORAGE
function saveCart() {
    localStorage.setItem('mm_cart', JSON.stringify(appState.cart));
    updateCartUI();
}

function saveWishlist() {
    localStorage.setItem('mm_wishlist', JSON.stringify(appState.wishlist));
    updateWishlistCount();
}

function saveOrders() {
    localStorage.setItem('mm_orders', JSON.stringify(appState.orders));
}

// PRODUCT FILTERING & RENDERING LOGIC
function getFilteredProducts() {
    return CAR_CATALOG.filter(product => {
        const matchesCategory = (appState.activeCategory === 'all') || 
            (product.category.toLowerCase() === appState.activeCategory.toLowerCase());

        const matchesBadge = (appState.activeBadge === 'all') || 
            (product.badge.toLowerCase() === appState.activeBadge.toLowerCase());

        const matchesSearch = appState.searchQuery === '' ||
            product.name.toLowerCase().includes(appState.searchQuery.toLowerCase()) ||
            product.brand.toLowerCase().includes(appState.searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(appState.searchQuery.toLowerCase());

        return matchesCategory && matchesBadge && matchesSearch;
    }).sort((a, b) => {
        if (appState.sortBy === 'price-low') return a.price - b.price;
        if (appState.sortBy === 'price-high') return b.price - a.price;
        if (appState.sortBy === 'name') return a.name.localeCompare(b.name);
        return 0; // featured
    });
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    const filtered = getFilteredProducts();

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <i class="fas fa-car-side" style="font-size: 3rem; margin-bottom: 15px; color: var(--primary);"></i>
                <h3>No 1:64 Scale Cars Found</h3>
                <p>Try searching for Mustang, F1 Red Bull, Ferrari, Porsche, BMW, Lamborghini, or Supra.</p>
                <button class="btn btn-primary" onclick="resetFilters()" style="margin-top: 15px;">Reset Filters</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(item => {
        const isWishlisted = appState.wishlist.includes(item.id);
        const badgeClass = item.badge === 'Best Selling' ? 'badge-bestseller' :
                           item.badge === 'Trending' ? 'badge-trending' :
                           item.badge === 'New Arrival' ? 'badge-new' : 'badge-limited';

        return `
            <div class="product-card">
                <span class="product-badge-tag ${badgeClass}">${item.badge}</span>
                <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${item.id})" title="Add to Wishlist">
                    <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
                </button>

                <div class="product-img-wrapper" onclick="openProductModal(${item.id})">
                    ${getWhiteBgCarImageHtml(item)}
                    <span class="product-scale-tag">${item.scale}</span>
                </div>

                <div class="product-info">
                    <span class="product-brand">${item.brand}</span>
                    <h3 class="product-name" onclick="openProductModal(${item.id})">${item.name}</h3>
                    
                    <div class="product-rating">
                        <i class="fas fa-star"></i> <span>${item.rating} (${item.reviews} reviews)</span>
                    </div>

                    <div class="product-price-row">
                        <div>
                            <span class="card-price-current">₹${item.price.toLocaleString('en-IN')}</span>
                            <span class="card-price-original">₹${item.originalPrice.toLocaleString('en-IN')}</span>
                        </div>
                        <span class="stock-status"><i class="fas fa-check"></i> In Stock</span>
                    </div>

                    <div class="product-action-btns">
                        <button class="btn btn-sm btn-primary" onclick="quickBuy(${item.id})">
                            <i class="fas fa-bolt"></i> Buy Now
                        </button>
                        <button class="btn btn-sm btn-secondary" onclick="addToCart(${item.id})">
                            <i class="fas fa-cart-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// FILTER HANDLERS
function filterByCategory(category) {
    appState.activeCategory = category;
    
    document.querySelectorAll('.cat-pill').forEach(pill => {
        pill.classList.remove('active');
        if (pill.getAttribute('onclick').includes(`'${category}'`)) {
            pill.classList.add('active');
        }
    });

    updateFilterBanner();
    renderProducts();
}

function filterByBadge(badge) {
    appState.activeBadge = badge;

    document.querySelectorAll('.badge-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${badge}'`)) {
            btn.classList.add('active');
        }
    });

    updateFilterBanner();
    renderProducts();
}

function handleSearch() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    appState.searchQuery = input.value.trim();

    clearBtn.style.display = appState.searchQuery ? 'block' : 'none';
    renderProducts();
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    appState.searchQuery = '';
    document.getElementById('clearSearchBtn').style.display = 'none';
    renderProducts();
}

function handleSort() {
    appState.sortBy = document.getElementById('sortSelect').value;
    renderProducts();
}

function resetFilters() {
    appState.activeCategory = 'all';
    appState.activeBadge = 'all';
    appState.searchQuery = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('clearSearchBtn').style.display = 'none';
    updateFilterBanner();
    renderProducts();
}

function updateFilterBanner() {
    const banner = document.getElementById('activeFilterBanner');
    const filterName = document.getElementById('filterName');

    if (appState.activeCategory !== 'all' || appState.activeBadge !== 'all') {
        banner.style.display = 'flex';
        filterName.textContent = appState.activeCategory !== 'all' ? `Category: ${appState.activeCategory}` : `Tag: ${appState.activeBadge}`;
    } else {
        banner.style.display = 'none';
    }
}

function setActiveNav(element, cat = 'all') {
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    element.classList.add('active');
    if (cat) filterByCategory(cat);
}

// CART MANAGEMENT
function addToCart(productId) {
    const product = CAR_CATALOG.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = appState.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        appState.cart[existingIndex].qty += 1;
    } else {
        appState.cart.push({ ...product, qty: 1 });
    }

    saveCart();
    showToast(`Added ${product.name} to Cart!`);
}

function updateQty(productId, delta) {
    const itemIndex = appState.cart.findIndex(i => i.id === productId);
    if (itemIndex > -1) {
        appState.cart[itemIndex].qty += delta;
        if (appState.cart[itemIndex].qty <= 0) {
            appState.cart.splice(itemIndex, 1);
        }
        saveCart();
    }
}

function removeFromCart(productId) {
    appState.cart = appState.cart.filter(item => item.id !== productId);
    saveCart();
    showToast("Item removed from cart");
}

function updateCartUI() {
    const totalItems = appState.cart.reduce((sum, item) => sum + item.qty, 0);
    const cartBadge = document.getElementById('cartBadgeCount');
    const drawerCount = document.getElementById('cartDrawerCount');
    
    if (cartBadge) cartBadge.textContent = totalItems;
    if (drawerCount) drawerCount.textContent = totalItems;

    const cartList = document.getElementById('cartItemsList');
    if (!cartList) return;

    if (appState.cart.length === 0) {
        cartList.innerHTML = `
            <div class="empty-cart-msg">
                <i class="fas fa-cart-arrow-down"></i>
                <p>Your cart is empty.</p>
                <span>Add 1:64 diecast models to start collecting!</span>
            </div>
        `;
    } else {
        cartList.innerHTML = appState.cart.map(item => `
            <div class="cart-item">
                <div style="width: 70px; height: 70px; background: #fff; border-radius: 6px; padding: 4px;">
                    <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: contain;">
                </div>
                <div class="cart-item-details">
                    <span class="cart-item-title">${item.name}</span>
                    <span class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
                    <div class="qty-control">
                        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `).join('');
    }

    const subtotal = appState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');
    const shippingEl = document.getElementById('cartShipping');
    
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    
    const isFreeShipping = subtotal >= 1999 || subtotal === 0;
    const shippingFee = (subtotal > 0 && subtotal < 1999) ? 150 : 0;
    
    if (shippingEl) shippingEl.textContent = isFreeShipping ? 'FREE' : `₹${shippingFee}`;
    if (totalEl) totalEl.textContent = `₹${(subtotal + shippingFee).toLocaleString('en-IN')}`;

    const progressFill = document.getElementById('shippingProgress');
    const shippingText = document.getElementById('shippingText');
    if (progressFill && shippingText) {
        if (subtotal >= 1999) {
            progressFill.style.width = '100%';
            shippingText.innerHTML = '<i class="fas fa-check-circle" style="color: #10b981;"></i> <strong>Congratulations!</strong> You qualified for FREE Shipping!';
        } else {
            const percent = Math.min(100, (subtotal / 1999) * 100);
            progressFill.style.width = `${percent}%`;
            const needed = 1999 - subtotal;
            shippingText.textContent = `Add ₹${needed.toLocaleString('en-IN')} more to qualify for FREE Shipping!`;
        }
    }
}

// CART DRAWER TOGGLE
function openCartDrawer() {
    document.getElementById('cartDrawer').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
}

function closeCartDrawer() {
    document.getElementById('cartDrawer').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
}

// QUICK BUY & CHECKOUT
function quickBuy(productId) {
    const product = CAR_CATALOG.find(p => p.id === productId);
    if (!product) return;

    appState.cart = [{ ...product, qty: 1 }];
    saveCart();
    openCheckoutModal();
}

function openCheckoutModal() {
    if (appState.cart.length === 0) {
        showToast("Your cart is empty! Add a car to checkout.");
        return;
    }

    closeCartDrawer();
    const modal = document.getElementById('checkoutModal');
    modal.classList.add('active');

    const subtotal = appState.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const shipping = subtotal >= 1999 ? 0 : 150;

    document.getElementById('coSubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    document.getElementById('coShipping').textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
    document.getElementById('coTotal').textContent = `₹${(subtotal + shipping).toLocaleString('en-IN')}`;

    if (appState.userProfile) {
        document.getElementById('cEmail').value = appState.userProfile.email || 'minimarvels@gmail.com';
        document.getElementById('cPhone').value = appState.userProfile.phone || '7012153558';
        if (appState.userProfile.name) document.getElementById('cName').value = appState.userProfile.name;
    }
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
}

function togglePaymentFields(type) {
    const upiGroup = document.getElementById('upiFieldGroup');
    if (upiGroup) {
        upiGroup.style.display = type === 'upi' ? 'block' : 'none';
    }
}

function processOrder(e) {
    e.preventDefault();

    const name = document.getElementById('cName').value;
    const email = document.getElementById('cEmail').value;
    const phone = document.getElementById('cPhone').value;
    const address = document.getElementById('cAddress').value;
    const city = document.getElementById('cCity').value;

    const subtotal = appState.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const shipping = subtotal >= 1999 ? 0 : 150;
    const grandTotal = subtotal + shipping;

    const newOrderId = `#MM-${Math.floor(10000 + Math.random() * 90000)}`;

    const newOrder = {
        orderId: newOrderId,
        date: new Date().toISOString().split('T')[0],
        items: [...appState.cart],
        total: grandTotal,
        customer: { name, email, phone, address: `${address}, ${city}` },
        status: "Processing",
        trackingId: `MINIMARVELS-${Math.floor(100000 + Math.random() * 900000)}`
    };

    appState.orders.unshift(newOrder);
    saveOrders();

    appState.cart = [];
    saveCart();

    closeCheckoutModal();

    document.getElementById('receiptOrderId').textContent = newOrderId;
    document.getElementById('receiptName').textContent = name;
    document.getElementById('receiptTotal').textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
    document.getElementById('orderSuccessModal').classList.add('active');
}

function closeSuccessModal() {
    document.getElementById('orderSuccessModal').classList.remove('active');
}

function shareOrderOnWhatsApp() {
    const orderId = document.getElementById('receiptOrderId').textContent;
    const total = document.getElementById('receiptTotal').textContent;
    const text = encodeURIComponent(`Hi Mini Marvels! I placed an order ${orderId} for ${total}. Please confirm my 1:64 diecast shipment.`);
    window.open(`https://wa.me/917012153558?text=${text}`, '_blank');
}

function checkoutOnWhatsApp() {
    if (appState.cart.length === 0) {
        showToast("Cart is empty!");
        return;
    }

    const itemsStr = appState.cart.map(i => `${i.qty}x ${i.name} (₹${i.price})`).join(', ');
    const subtotal = appState.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const message = encodeURIComponent(`Hi Mini Marvels! I would like to buy the following 1:64 scale cars:\n${itemsStr}\nTotal: ₹${subtotal.toLocaleString('en-IN')}\nPlease process my order.`);

    window.open(`https://wa.me/917012153558?text=${message}`, '_blank');
}

// PRODUCT QUICK VIEW MODAL
function openProductModal(productId) {
    const product = CAR_CATALOG.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('productModalBody');
    modalBody.innerHTML = `
        <div class="pm-img-col">
            ${getWhiteBgCarImageHtml(product, '320px')}
        </div>
        <div class="pm-info-col">
            <span class="pm-brand">${product.brand} • ${product.scale}</span>
            <h2>${product.name}</h2>
            <div class="product-rating">
                <i class="fas fa-star"></i> <span>${product.rating} (${product.reviews} customer reviews)</span>
            </div>
            
            <div class="pm-price">
                ₹${product.price.toLocaleString('en-IN')}
                <span class="price-original" style="font-size: 1rem; color: var(--text-muted);">₹${product.originalPrice.toLocaleString('en-IN')}</span>
            </div>

            <p style="color: var(--text-secondary); font-size: 0.92rem; margin-bottom: 20px; line-height: 1.6;">
                ${product.description}
            </p>

            <h4 style="font-size: 0.9rem; margin-bottom: 10px; color: var(--accent-cyan);">Specifications & Features:</h4>
            <ul class="pm-specs-list">
                ${product.specs.map(s => `<li><i class="fas fa-check-circle"></i> ${s}</li>`).join('')}
            </ul>

            <div style="display: flex; gap: 12px; margin-top: 25px;">
                <button class="btn btn-primary btn-block btn-lg" onclick="quickBuy(${product.id}); closeProductModal();">
                    <i class="fas fa-bolt"></i> Buy Now
                </button>
                <button class="btn btn-secondary btn-block btn-lg" onclick="addToCart(${product.id}); closeProductModal();">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `;

    document.getElementById('productModal').classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

// ORDERS TRACKER MODAL
function openOrdersModal() {
    const modal = document.getElementById('ordersModal');
    const container = document.getElementById('ordersList');

    if (appState.orders.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fas fa-box-open" style="font-size: 3rem; margin-bottom: 15px;"></i>
                <p>No past orders found.</p>
            </div>
        `;
    } else {
        container.innerHTML = appState.orders.map(ord => `
            <div class="order-card">
                <div class="order-card-header">
                    <div>
                        <strong>Order ${ord.orderId}</strong>
                        <span style="color: var(--text-muted); margin-left: 10px;">${ord.date}</span>
                    </div>
                    <span class="badge badge-success"><i class="fas fa-truck"></i> ${ord.status}</span>
                </div>

                <div class="order-card-items">
                    ${ord.items.map(i => `<div>• ${i.qty || 1}x <strong>${i.name}</strong> - ₹${(i.price * (i.qty || 1)).toLocaleString('en-IN')}</div>`).join('')}
                </div>

                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 14px; border-top: 1px solid var(--border-color); padding-top: 10px; font-size: 0.9rem;">
                    <span>Tracking ID: <code style="color: var(--accent-cyan);">${ord.trackingId}</code></span>
                    <strong class="highlight-price">Total: ₹${ord.total.toLocaleString('en-IN')}</strong>
                </div>
            </div>
        `).join('');
    }

    modal.classList.add('active');
}

function closeOrdersModal() {
    document.getElementById('ordersModal').classList.remove('active');
}

// PROFILE & WISHLIST MODAL
function openProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.classList.add('active');
}

function closeProfileModal() {
    document.getElementById('profileModal').classList.remove('active');
}

function switchProfileTab(tab, tabBtn) {
    document.querySelectorAll('.p-tab').forEach(b => b.classList.remove('active'));
    tabBtn.classList.add('active');

    document.getElementById('tabInfo').style.display = tab === 'info' ? 'block' : 'none';
    document.getElementById('tabWishlist').style.display = tab === 'wishlist' ? 'block' : 'none';

    if (tab === 'wishlist') renderWishlistGrid();
}

function toggleWishlist(productId) {
    const index = appState.wishlist.indexOf(productId);
    if (index > -1) {
        appState.wishlist.splice(index, 1);
        showToast("Removed from wishlist");
    } else {
        appState.wishlist.push(productId);
        showToast("Added to wishlist ❤️");
    }
    saveWishlist();
    renderProducts();
}

function updateWishlistCount() {
    const el = document.getElementById('wishlistCount');
    if (el) el.textContent = appState.wishlist.length;
}

function renderWishlistGrid() {
    const grid = document.getElementById('wishlistGrid');
    const items = CAR_CATALOG.filter(c => appState.wishlist.includes(c.id));

    if (items.length === 0) {
        grid.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 20px;">No saved wishlist cars yet.</p>`;
        return;
    }

    grid.innerHTML = items.map(i => `
        <div style="display: flex; gap: 12px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); padding: 10px; border-radius: var(--radius-sm); margin-bottom: 10px; align-items: center;">
            <div style="width: 50px; height: 50px; background: #fff; padding: 2px; border-radius: 6px;">
                <img src="${i.image}" style="width: 100%; height: 100%; object-fit: contain;">
            </div>
            <div style="flex:1;">
                <h4 style="font-size: 0.88rem;">${i.name}</h4>
                <span style="color: var(--primary); font-weight: 800; font-size: 0.85rem;">₹${i.price}</span>
            </div>
            <button class="btn btn-sm btn-primary" onclick="addToCart(${i.id})">Add to Cart</button>
        </div>
    `).join('');
}

function saveProfileDetails(e) {
    e.preventDefault();
    appState.userProfile.email = document.getElementById('pEmail').value;
    appState.userProfile.phone = document.getElementById('pPhone').value;
    appState.userProfile.address = document.getElementById('pAddress').value;

    localStorage.setItem('mm_user', JSON.stringify(appState.userProfile));
    showToast("Profile details updated successfully!");
    closeProfileModal();
}

// MOBILE MENU TOGGLE
function toggleMobileMenu() {
    const menu = document.getElementById('navMenu');
    const icon = document.getElementById('menuIcon');
    menu.classList.toggle('active');
    icon.classList.toggle('fa-times');
}

// TOAST NOTIFICATIONS
function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
