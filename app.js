/**
 * LUMIÈRE COSMETICS - Interactive Shopify Store & Admin Controller
 */

// --- Initial Mock Data ---
const INITIAL_PRODUCTS = [
  {
    id: "lum-01",
    title: "Radiance Facial Serum",
    subtitle: "Illuminate & Rejuvenate with Damask Rose & Vitamin C",
    category: "Skin Care",
    price: 34.99,
    comparePrice: 45.00,
    rating: 4.9,
    reviewsCount: 128,
    tag: "BESTSELLER",
    image: "assets/images/product-serum.jpg",
    description: "Our award-winning serum combines concentrated Damask rose extract, 10% stabilized Vitamin C, and multi-molecular hyaluronic acid to visibly brighten, smooth texture, and restore youthful luminescence within 14 days.",
    variants: ["30ml / 1.0 fl oz", "50ml / 1.7 fl oz", "100ml / 3.4 fl oz"],
    stock: 45,
    isBestseller: true,
    ingredients: "Organic Damask Rose Hydrosol, Tetrahexyldecyl Ascorbate (Vitamin C), Botanical Hyaluronic Acid, Niacinamide, Camellia Sinensis Leaf Extract, Vegetable Glycerin, Tocopherol (Vitamin E).",
    howToUse: "Dispense 3-4 drops onto cleansed fingertips. Gently press into face, neck, and décolletage morning and evening before creams.",
    results: "96% of participants observed significantly brighter skin and improved elasticity in clinical evaluation over 14 days."
  },
  {
    id: "lum-02",
    title: "Hydrating Day Cream",
    subtitle: "Deep Moisture & Broad Spectrum SPF 15 Daily Shield",
    category: "Skin Care",
    price: 29.99,
    comparePrice: 38.00,
    rating: 4.8,
    reviewsCount: 94,
    tag: "SPF 15",
    image: "assets/images/product-cream.jpg",
    description: "A velvety whipped day cream that delivers 48-hour continuous hydration with broad-spectrum SPF 15 protection. Infused with ceramides and shea butter to strengthen the natural moisture barrier.",
    variants: ["50ml / 1.7 fl oz", "100ml / 3.4 fl oz"],
    stock: 62,
    isBestseller: true,
    ingredients: "Aqua (Water), Caprylic/Capric Triglyceride, Zinc Oxide, Shea Butter, Ceramide NP, Ceramide AP, Squalane, Rosehip Seed Oil, Peptides.",
    howToUse: "Warm a pea-sized amount between palms and smooth over face and neck as the final step of your morning skincare routine.",
    results: "98% reported lasting hydration throughout the day without greasy residue."
  },
  {
    id: "lum-03",
    title: "Gentle Face Wash",
    subtitle: "Cleanses & Refreshes with Rose & Chamomile Extracts",
    category: "Skin Care",
    price: 19.99,
    comparePrice: 25.00,
    rating: 4.9,
    reviewsCount: 215,
    tag: "ORGANIC",
    image: "assets/images/product-cleanser.jpg",
    description: "A silky, non-stripping botanical gel cleanser that melts away makeup, pollution, and daily impurities while maintaining delicate barrier pH balance.",
    variants: ["150ml / 5.1 fl oz", "250ml / 8.5 fl oz"],
    stock: 80,
    isBestseller: true,
    ingredients: "Aqua, Coco-Glucoside, Rosa Damascena Flower Water, Matricaria (Chamomile) Extract, Aloe Vera Gel, Panthenol (Pro-Vitamin B5), Citric Acid.",
    howToUse: "Massage 1-2 pumps onto damp skin with gentle circular motions. Rinse thoroughly with lukewarm water and pat dry.",
    results: "100% agreed skin felt refreshed, calm, and free of tightness after cleansing."
  },
  {
    id: "lum-04",
    title: "Hydrating Toner",
    subtitle: "Rose & Botanical Petal Soothing Elixir",
    category: "Skin Care",
    price: 22.99,
    comparePrice: 30.00,
    rating: 4.7,
    reviewsCount: 86,
    tag: "ROSE INFUSED",
    image: "assets/images/product-toner.jpg",
    description: "An alcohol-free essence toner enriched with suspended hand-picked rose petals and calming witch hazel. Restores pH and preps skin for optimal serum absorption.",
    variants: ["120ml / 4.0 fl oz", "200ml / 6.7 fl oz"],
    stock: 54,
    isBestseller: true,
    ingredients: "Rosa Centifolia Flower Water, Hamamelis Virginiana (Witch Hazel), Sodium Hyaluronate, Centella Asiatica Extract, Green Tea Extract.",
    howToUse: "Pour into hands or onto a reusable cotton pad and gently pat into cleansed face and neck.",
    results: "94% felt instant soothing relief and hydration boost."
  },
  {
    id: "lum-05",
    title: "Rose Bloom Perfume",
    subtitle: "Artisanal Eau de Parfum with French Damask Rose",
    category: "Fragrance",
    price: 49.99,
    comparePrice: 65.00,
    rating: 5.0,
    reviewsCount: 64,
    tag: "NEW",
    image: "assets/images/product-serum.jpg", // fallback/custom
    description: "An intoxicating blend of Bulgarian rose, pink peppercorn, and warm amber velvet. A delicate yet memorable signature scent crafted in Grasse, France.",
    variants: ["50ml / 1.7 fl oz", "100ml / 3.4 fl oz"],
    stock: 30,
    isBestseller: true,
    ingredients: "Alcohol Denat., Parfum (Fragrance), Rosa Damascena Extract, Bergamot Peel Oil, Cedarwood Essential Oil, Benzyl Salicylate.",
    howToUse: "Spray onto pulse points: wrists, inner elbows, and collarbones.",
    results: "Long-lasting silage lasting up to 12 hours."
  },
  {
    id: "lum-06",
    title: "Velvety Night Elixir",
    subtitle: "Cellular Recovery Oil with Bakuchiol & Rosehip",
    category: "Skin Care",
    price: 38.99,
    comparePrice: 48.00,
    rating: 4.9,
    reviewsCount: 112,
    tag: "NIGHT CARE",
    image: "assets/images/product-serum.jpg",
    description: "A plant-based retinol alternative oil formulated with 2% Bakuchiol, cold-pressed rosehip seed oil, and blue tansy to stimulate overnight collagen regeneration.",
    variants: ["30ml / 1.0 fl oz"],
    stock: 38,
    isBestseller: false,
    ingredients: "Organic Cold-Pressed Rosehip Seed Oil, Bakuchiol, Squalane, Blue Tansy Flower Oil, Helianthus Annuus Seed Oil, Rosemary Leaf Extract.",
    howToUse: "Warm 3 drops in palms and gently press onto clean face before sleep.",
    results: "95% noticed visibly reduced fine lines and enhanced firmness in 3 weeks."
  },
  {
    id: "lum-07",
    title: "Rose Clay Purifying Mask",
    subtitle: "Detoxifying French Pink Clay & Lotus Flower",
    category: "Face Masks",
    price: 21.99,
    comparePrice: 28.00,
    rating: 4.8,
    reviewsCount: 77,
    tag: "DETOX",
    image: "assets/images/product-cream.jpg",
    description: "Gentle mineral-rich clay mask that pulls out deep pore impurities without drying or cracking skin. Infused with soothing lotus petal essence.",
    variants: ["75ml / 2.5 fl oz"],
    stock: 42,
    isBestseller: false,
    ingredients: "Kaolin (French Pink Clay), Bentonite, Rosa Gallica Flower Powder, Lotus Corniculatus Extract, Jojoba Oil.",
    howToUse: "Apply an even layer over face, avoiding eye area. Leave for 10-12 minutes until dry, then rinse with warm water.",
    results: "97% noticed reduced pore appearance and unclogged skin."
  },
  {
    id: "lum-08",
    title: "Botanical Radiance Gift Set",
    subtitle: "Complete 4-Piece Skincare Discovery Ritual",
    category: "Gift Sets",
    price: 79.99,
    comparePrice: 105.00,
    rating: 5.0,
    reviewsCount: 42,
    tag: "GIFT SET",
    image: "assets/images/hero-cosmetics.jpg",
    description: "The ultimate luxury pampering box containing full-size Gentle Cleanser, Hydrating Toner, Radiance Facial Serum, and Hydrating Day Cream in an embossed rose-gold gift box.",
    variants: ["Full Discovery Set"],
    stock: 25,
    isBestseller: false,
    ingredients: "Contains full ingredients of Cleanser, Toner, Serum, and Day Cream.",
    howToUse: "Follow the 4-step daily ritual: Cleanse, Tone, Treat, Protect.",
    results: "Voted #1 Best Skincare Gift Set of 2026."
  }
];

const INITIAL_SETTINGS = {
  announcementText: "FREE SHIPPING ON ORDERS OVER $50 | USE CODE: GLOW20",
  promoCode: "GLOW20",
  promoDiscountPercent: 20,
  freeShippingThreshold: 50.00,
  heroTitle: "Reveal Your Natural Beauty",
  heroSubtitle: "Premium cosmetics crafted with natural ingredients for healthy, glowing skin.",
  heroBtnText: "SHOP NOW",
  brandName: "LUMIÈRE",
  brandTagline: "COSMETICS",
  primaryColor: "#C87D70",
  currencySymbol: "$"
};

const INITIAL_ORDERS = [
  { id: "LUM-1049", customer: "Sophia Martinez", items: "Radiance Facial Serum (1)", total: 34.99, status: "Fulfilled", date: "2 hours ago" },
  { id: "LUM-1048", customer: "Emma Watson", items: "Hydrating Day Cream (1), Gentle Cleanser (1)", total: 49.98, status: "Paid", date: "4 hours ago" },
  { id: "LUM-1047", customer: "Olivia Brown", items: "Botanical Radiance Gift Set (1)", total: 79.99, status: "Processing", date: "Yesterday" }
];

// --- Application State ---
class StoreState {
  constructor() {
    this.products = JSON.parse(localStorage.getItem('lum_products')) || INITIAL_PRODUCTS;
    this.settings = JSON.parse(localStorage.getItem('lum_settings')) || INITIAL_SETTINGS;
    this.orders = JSON.parse(localStorage.getItem('lum_orders')) || INITIAL_ORDERS;
    this.cart = JSON.parse(localStorage.getItem('lum_cart')) || [];
    this.currentView = 'home'; // 'home' | 'catalog' | 'pdp'
    this.activeProductId = this.products[0].id;
    this.activeCategory = 'All';
    this.searchQuery = '';
    this.sortOption = 'featured';
    this.appliedDiscount = 0;
  }

  saveProducts() {
    localStorage.setItem('lum_products', JSON.stringify(this.products));
  }

  saveSettings() {
    localStorage.setItem('lum_settings', JSON.stringify(this.settings));
  }

  saveCart() {
    localStorage.setItem('lum_cart', JSON.stringify(this.cart));
  }

  saveOrders() {
    localStorage.setItem('lum_orders', JSON.stringify(this.orders));
  }

  addToCart(productId, variant, qty = 1) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const chosenVariant = variant || product.variants[0];
    const existingIndex = this.cart.findIndex(item => item.id === productId && item.variant === chosenVariant);

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += qty;
    } else {
      this.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        variant: chosenVariant,
        quantity: qty
      });
    }

    this.saveCart();
    app.updateCartUI();
    app.showToast(`Added "${product.title}" to your bag!`);
    app.openCartDrawer();
  }

  removeFromCart(index) {
    this.cart.splice(index, 1);
    this.saveCart();
    app.updateCartUI();
  }

  updateQty(index, delta) {
    if (!this.cart[index]) return;
    this.cart[index].quantity += delta;
    if (this.cart[index].quantity <= 0) {
      this.removeFromCart(index);
    } else {
      this.saveCart();
      app.updateCartUI();
    }
  }

  getCartSubtotal() {
    return this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  getCartCount() {
    return this.cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  getCartTotal() {
    const sub = this.getCartSubtotal();
    const discountAmount = (sub * this.appliedDiscount) / 100;
    return Math.max(0, sub - discountAmount);
  }
}

// --- App Controller ---
class LumiereApp {
  constructor() {
    this.state = new StoreState();
  }

  init() {
    this.applySettingsToDOM();
    this.renderBestsellers();
    this.updateCartUI();
    this.bindEvents();
    this.setupAdminControls();
  }

  applySettingsToDOM() {
    const s = this.state.settings;
    document.documentElement.style.setProperty('--color-primary', s.primaryColor);

    const announcementEl = document.getElementById('announcementText');
    if (announcementEl) {
      announcementEl.innerHTML = `${s.announcementText}`;
    }

    const heroTitleEl = document.getElementById('heroTitle');
    if (heroTitleEl) heroTitleEl.textContent = s.heroTitle;

    const heroSubtitleEl = document.getElementById('heroSubtitle');
    if (heroSubtitleEl) heroSubtitleEl.textContent = s.heroSubtitle;

    const heroBtnEl = document.getElementById('heroBtn');
    if (heroBtnEl) heroBtnEl.textContent = s.heroBtnText;
  }

  renderBestsellers() {
    const grid = document.getElementById('bestsellersGrid');
    if (!grid) return;

    const bestsellers = this.state.products.filter(p => p.isBestseller).slice(0, 5);
    grid.innerHTML = bestsellers.map(p => this.createProductCardHTML(p)).join('');
  }

  createProductCardHTML(product) {
    const cur = this.state.settings.currencySymbol;
    return `
      <div class="product-card" data-product-id="${product.id}">
        <div class="product-thumb-box" onclick="app.viewProduct('${product.id}')">
          ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
          <img src="${product.image}" alt="${product.title}" loading="lazy" />
          <button class="quick-view-btn" onclick="event.stopPropagation(); app.viewProduct('${product.id}')">Quick View</button>
        </div>
        <div class="product-info-box">
          <div class="product-rating">
            <span>★★★★★</span>
            <span class="product-reviews-count">(${product.reviewsCount})</span>
          </div>
          <h3 class="product-card-title" onclick="app.viewProduct('${product.id}')">${product.title}</h3>
          <div class="product-card-price-row">
            <span class="current-price">${cur}${product.price.toFixed(2)}</span>
            ${product.comparePrice ? `<span class="compare-price">${cur}${product.comparePrice.toFixed(2)}</span>` : ''}
          </div>
          <button class="btn-add-to-cart" onclick="app.state.addToCart('${product.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Add to Cart
          </button>
        </div>
      </div>
    `;
  }

  // --- Cart Drawer UI ---
  updateCartUI() {
    const count = this.state.getCartCount();
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(b => {
      b.textContent = count;
      b.style.transform = 'scale(1.25)';
      setTimeout(() => b.style.transform = 'scale(1)', 200);
    });

    const bodyEl = document.getElementById('drawerCartItems');
    if (!bodyEl) return;

    if (this.state.cart.length === 0) {
      bodyEl.innerHTML = `
        <div class="cart-empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <p style="font-size: 1.05rem; font-weight: 600; margin-bottom: 8px;">Your bag is currently empty</p>
          <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 24px;">Discover our botanical bestsellers to get started.</p>
          <button class="btn-primary" onclick="app.closeCartDrawer(); app.showCatalog();">Explore Products</button>
        </div>
      `;
      document.getElementById('drawerSubtotal').textContent = `${this.state.settings.currencySymbol}0.00`;
      document.getElementById('drawerTotal').textContent = `${this.state.settings.currencySymbol}0.00`;
      document.getElementById('shippingMeterText').textContent = `Add $${this.state.settings.freeShippingThreshold.toFixed(2)} more for FREE standard shipping!`;
      document.getElementById('shippingProgressFill').style.width = '0%';
      return;
    }

    const cur = this.state.settings.currencySymbol;
    bodyEl.innerHTML = this.state.cart.map((item, idx) => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img" />
        <div class="cart-item-details">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <h4 class="cart-item-title">${item.title}</h4>
            <button class="btn-remove-item" onclick="app.state.removeFromCart(${idx})" title="Remove">✕</button>
          </div>
          <span class="cart-item-variant">${item.variant}</span>
          <div class="cart-item-controls">
            <div class="qty-stepper">
              <button class="qty-btn" onclick="app.state.updateQty(${idx}, -1)">−</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="app.state.updateQty(${idx}, 1)">+</button>
            </div>
            <span class="cart-item-price">${cur}${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        </div>
      </div>
    `).join('');

    const subtotal = this.state.getCartSubtotal();
    const total = this.state.getCartTotal();
    document.getElementById('drawerSubtotal').textContent = `${cur}${subtotal.toFixed(2)}`;
    document.getElementById('drawerTotal').textContent = `${cur}${total.toFixed(2)}`;

    // Free Shipping threshold
    const threshold = this.state.settings.freeShippingThreshold;
    const fillEl = document.getElementById('shippingProgressFill');
    const textEl = document.getElementById('shippingMeterText');
    if (subtotal >= threshold) {
      fillEl.style.width = '100%';
      textEl.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked FREE Shipping!`;
    } else {
      const remaining = (threshold - subtotal).toFixed(2);
      const percent = Math.min(100, (subtotal / threshold) * 100);
      fillEl.style.width = `${percent}%`;
      textEl.innerHTML = `Add <strong>${cur}${remaining}</strong> more for <strong>FREE SHIPPING!</strong>`;
    }
  }

  openCartDrawer() {
    document.getElementById('cartDrawerOverlay').classList.add('open');
  }

  closeCartDrawer() {
    document.getElementById('cartDrawerOverlay').classList.remove('open');
  }

  applyPromoCode() {
    const input = document.getElementById('promoCodeInput');
    const code = (input.value || '').trim().toUpperCase();

    if (code === this.state.settings.promoCode.toUpperCase()) {
      this.state.appliedDiscount = this.state.settings.promoDiscountPercent;
      this.updateCartUI();
      this.showToast(`Promo code "${code}" applied! ${this.state.settings.promoDiscountPercent}% off!`);
      const discountLine = document.getElementById('drawerDiscountLine');
      if (discountLine) discountLine.style.display = 'flex';
      const discountVal = document.getElementById('drawerDiscountVal');
      if (discountVal) discountVal.textContent = `-${this.state.settings.promoDiscountPercent}%`;
    } else {
      this.showToast('Invalid promo code. Try "GLOW20"', 'error');
    }
  }

  // --- Page Navigation ---
  showHome() {
    this.state.currentView = 'home';
    document.getElementById('homeView').style.display = 'block';
    document.getElementById('catalogView').style.display = 'none';
    document.getElementById('pdpView').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.updateNavLinks();
  }

  showCatalog(category = 'All') {
    this.state.currentView = 'catalog';
    this.state.activeCategory = category;
    document.getElementById('homeView').style.display = 'none';
    document.getElementById('catalogView').style.display = 'block';
    document.getElementById('pdpView').style.display = 'none';
    this.renderCatalog();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.updateNavLinks();
  }

  renderCatalog() {
    const grid = document.getElementById('catalogProductsGrid');
    if (!grid) return;

    let list = [...this.state.products];
    if (this.state.activeCategory !== 'All') {
      list = list.filter(p => p.category.toLowerCase() === this.state.activeCategory.toLowerCase());
    }

    if (this.state.searchQuery) {
      const q = this.state.searchQuery.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }

    // Sort
    if (this.state.sortOption === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (this.state.sortOption === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (this.state.sortOption === 'bestsellers') {
      list.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    document.getElementById('catalogCount').textContent = `Showing ${list.length} products`;
    document.getElementById('catalogCategoryTitle').textContent = this.state.activeCategory === 'All' ? 'All Botanical Products' : this.state.activeCategory;

    // Update active state on sidebar
    document.querySelectorAll('.filter-option').forEach(opt => {
      const cat = opt.getAttribute('data-category');
      if (cat === this.state.activeCategory) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });

    if (list.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px 0;">
        <p style="font-size: 1.1rem; color: var(--color-text-muted);">No products found matching your filter criteria.</p>
        <button class="btn-primary" style="margin-top: 16px;" onclick="app.showCatalog('All')">Clear Filter</button>
      </div>`;
      return;
    }

    grid.innerHTML = list.map(p => this.createProductCardHTML(p)).join('');
  }

  viewProduct(productId) {
    const product = this.state.products.find(p => p.id === productId);
    if (!product) return;

    this.state.currentView = 'pdp';
    this.state.activeProductId = productId;

    document.getElementById('homeView').style.display = 'none';
    document.getElementById('catalogView').style.display = 'none';
    document.getElementById('pdpView').style.display = 'block';

    const cur = this.state.settings.currencySymbol;
    document.getElementById('pdpBreadcrumbCategory').textContent = product.category;
    document.getElementById('pdpBreadcrumbTitle').textContent = product.title;
    document.getElementById('pdpMainImage').src = product.image;
    document.getElementById('pdpTitle').textContent = product.title;
    document.getElementById('pdpSubtitle').textContent = product.subtitle;
    document.getElementById('pdpCurrentPrice').textContent = `${cur}${product.price.toFixed(2)}`;
    document.getElementById('pdpComparePrice').textContent = product.comparePrice ? `${cur}${product.comparePrice.toFixed(2)}` : '';
    document.getElementById('pdpDescription').textContent = product.description;
    document.getElementById('pdpReviewsCount').textContent = `${product.rating} ★★★★★ (${product.reviewsCount} verified reviews)`;

    // Variants
    const variantsContainer = document.getElementById('pdpVariantsRow');
    variantsContainer.innerHTML = product.variants.map((v, i) => `
      <button class="pdp-variant-pill ${i === 0 ? 'active' : ''}" onclick="app.selectPdpVariant(this, '${v}')">${v}</button>
    `).join('');

    // Accordions
    document.getElementById('pdpIngredients').textContent = product.ingredients;
    document.getElementById('pdpHowToUse').textContent = product.howToUse;
    document.getElementById('pdpResults').textContent = product.results;

    // Reset Qty
    document.getElementById('pdpQtyVal').textContent = '1';

    // Thumbs
    const thumbsContainer = document.getElementById('pdpThumbsRow');
    thumbsContainer.innerHTML = `
      <div class="pdp-thumb-item active" onclick="app.setPdpMainImage('${product.image}', this)"><img src="${product.image}" /></div>
      <div class="pdp-thumb-item" onclick="app.setPdpMainImage('assets/images/hero-cosmetics.jpg', this)"><img src="assets/images/hero-cosmetics.jpg" /></div>
      <div class="pdp-thumb-item" onclick="app.setPdpMainImage('assets/images/model-skincare.jpg', this)"><img src="assets/images/model-skincare.jpg" /></div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setPdpMainImage(src, thumbEl) {
    document.getElementById('pdpMainImage').src = src;
    document.querySelectorAll('.pdp-thumb-item').forEach(el => el.classList.remove('active'));
    thumbEl.classList.add('active');
  }

  selectPdpVariant(btnEl, variantName) {
    document.querySelectorAll('.pdp-variant-pill').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
  }

  updatePdpQty(delta) {
    const qtyEl = document.getElementById('pdpQtyVal');
    let val = parseInt(qtyEl.textContent, 10) + delta;
    if (val < 1) val = 1;
    qtyEl.textContent = val;
  }

  addCurrentPdpToCart() {
    const qty = parseInt(document.getElementById('pdpQtyVal').textContent, 10) || 1;
    const activePill = document.querySelector('.pdp-variant-pill.active');
    const variant = activePill ? activePill.textContent : undefined;
    this.state.addToCart(this.state.activeProductId, variant, qty);
  }

  updateNavLinks() {
    document.querySelectorAll('.nav-link').forEach(link => {
      const view = link.getAttribute('data-view');
      const cat = link.getAttribute('data-cat');
      if (this.state.currentView === 'home' && view === 'home') {
        link.classList.add('active');
      } else if (this.state.currentView === 'catalog' && (view === 'shop' || (cat && cat.toLowerCase() === this.state.activeCategory.toLowerCase()))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // --- Checkout Flow ---
  openCheckout() {
    if (this.state.cart.length === 0) {
      this.showToast('Please add items to your cart before proceeding to checkout.');
      return;
    }
    this.closeCartDrawer();
    const modal = document.getElementById('checkoutModalOverlay');
    modal.classList.add('open');

    // Summary panel render
    const cur = this.state.settings.currencySymbol;
    const summaryItems = document.getElementById('checkoutSummaryItems');
    summaryItems.innerHTML = this.state.cart.map(item => `
      <div style="display: flex; gap: 12px; margin-bottom: 12px; align-items: center;">
        <img src="${item.image}" style="width: 50px; height: 50px; border-radius: 4px; object-fit: cover;" />
        <div style="flex-grow: 1;">
          <strong style="font-size: 0.85rem; display: block;">${item.title}</strong>
          <span style="font-size: 0.75rem; color: var(--color-text-muted);">${item.variant} × ${item.quantity}</span>
        </div>
        <span style="font-weight: 700; font-size: 0.9rem;">${cur}${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');

    const subtotal = this.state.getCartSubtotal();
    const total = this.state.getCartTotal();
    document.getElementById('checkoutSubtotal').textContent = `${cur}${subtotal.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `${cur}${total.toFixed(2)}`;
  }

  closeCheckout() {
    document.getElementById('checkoutModalOverlay').classList.remove('open');
  }

  submitOrder() {
    const email = document.getElementById('checkoutEmail').value;
    const firstName = document.getElementById('checkoutFirstName').value;
    const lastName = document.getElementById('checkoutLastName').value;

    if (!email || !firstName) {
      this.showToast('Please enter your contact email and name to continue.', 'error');
      return;
    }

    const newOrder = {
      id: `LUM-${Math.floor(1000 + Math.random() * 9000)}`,
      customer: `${firstName} ${lastName}`.trim(),
      items: this.state.cart.map(i => `${i.title} (${i.quantity})`).join(', '),
      total: this.state.getCartTotal(),
      status: "Paid",
      date: "Just now"
    };

    this.state.orders.unshift(newOrder);
    this.state.saveOrders();

    // Clear cart
    this.state.cart = [];
    this.state.saveCart();
    this.updateCartUI();

    this.closeCheckout();
    this.showToast(`🎉 Order ${newOrder.id} successfully placed! Confirmation sent to ${email}.`, 'success');
    this.renderAdminOrders();
  }

  // --- Admin CMS & Customizer ---
  openAdminModal(tab = 'customizer') {
    document.getElementById('adminModalOverlay').classList.add('open');
    this.switchAdminTab(tab);
    this.populateAdminCustomizerForm();
    this.renderAdminProductsTable();
    this.renderAdminOrders();
  }

  closeAdminModal() {
    document.getElementById('adminModalOverlay').classList.remove('open');
  }

  switchAdminTab(tabName) {
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
      if (btn.getAttribute('data-tab') === tabName) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    document.querySelectorAll('.admin-tab-panel').forEach(panel => {
      if (panel.id === `tab-${tabName}`) panel.classList.add('active');
      else panel.classList.remove('active');
    });
  }

  populateAdminCustomizerForm() {
    const s = this.state.settings;
    document.getElementById('customizerAnnouncement').value = s.announcementText;
    document.getElementById('customizerPromoCode').value = s.promoCode;
    document.getElementById('customizerHeroTitle').value = s.heroTitle;
    document.getElementById('customizerHeroSubtitle').value = s.heroSubtitle;
    document.getElementById('customizerHeroBtn').value = s.heroBtnText;
    document.getElementById('customizerPrimaryColor').value = s.primaryColor;
  }

  saveCustomizerSettings() {
    this.state.settings.announcementText = document.getElementById('customizerAnnouncement').value;
    this.state.settings.promoCode = document.getElementById('customizerPromoCode').value;
    this.state.settings.heroTitle = document.getElementById('customizerHeroTitle').value;
    this.state.settings.heroSubtitle = document.getElementById('customizerHeroSubtitle').value;
    this.state.settings.heroBtnText = document.getElementById('customizerHeroBtn').value;
    this.state.settings.primaryColor = document.getElementById('customizerPrimaryColor').value;

    this.state.saveSettings();
    this.applySettingsToDOM();
    this.showToast('Theme settings saved and applied to live preview!', 'success');
  }

  renderAdminProductsTable() {
    const tbody = document.getElementById('adminProductsTableBody');
    if (!tbody) return;

    const cur = this.state.settings.currencySymbol;
    tbody.innerHTML = this.state.products.map((p, idx) => `
      <tr>
        <td><img src="${p.image}" class="admin-table-thumb" alt="${p.title}" /></td>
        <td><strong>${p.title}</strong><br><span style="font-size: 0.75rem; color: #888;">${p.category}</span></td>
        <td>${cur}${p.price.toFixed(2)}</td>
        <td><span style="background: #E8F5E9; color: #2E7D32; padding: 2px 8px; border-radius: 4px; font-weight: 600;">${p.stock} units</span></td>
        <td>${p.isBestseller ? '⭐ Yes' : 'No'}</td>
        <td>
          <button style="color: var(--color-primary); font-weight: 600; margin-right: 12px;" onclick="app.editProductModal(${idx})">Edit</button>
          <button style="color: var(--color-error); font-weight: 600;" onclick="app.deleteProduct(${idx})">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  addNewProductFromAdmin() {
    const title = document.getElementById('newProdTitle').value.trim();
    const price = parseFloat(document.getElementById('newProdPrice').value) || 29.99;
    const category = document.getElementById('newProdCategory').value;
    const description = document.getElementById('newProdDesc').value.trim();
    const isBestseller = document.getElementById('newProdBestseller').checked;

    if (!title) {
      this.showToast('Please enter a product title', 'error');
      return;
    }

    const newProd = {
      id: `lum-${Date.now()}`,
      title,
      subtitle: "Pure Botanical Formula",
      category,
      price,
      comparePrice: price * 1.25,
      rating: 5.0,
      reviewsCount: 1,
      tag: "NEW ARRIVAL",
      image: "assets/images/product-cream.jpg",
      description: description || "Freshly added luxury skincare formula.",
      variants: ["50ml / 1.7 fl oz"],
      stock: 50,
      isBestseller,
      ingredients: "Botanical extracts, Organic Oils, Rose Hydrosol.",
      howToUse: "Apply daily onto clean skin.",
      results: "Clinically proven hydration and radiance."
    };

    this.state.products.unshift(newProd);
    this.state.saveProducts();
    this.renderAdminProductsTable();
    this.renderBestsellers();
    if (this.state.currentView === 'catalog') this.renderCatalog();

    // Reset inputs
    document.getElementById('newProdTitle').value = '';
    document.getElementById('newProdPrice').value = '';
    document.getElementById('newProdDesc').value = '';

    this.showToast(`Product "${title}" added to store catalog!`, 'success');
  }

  deleteProduct(index) {
    if (confirm(`Are you sure you want to delete this product?`)) {
      const removed = this.state.products.splice(index, 1);
      this.state.saveProducts();
      this.renderAdminProductsTable();
      this.renderBestsellers();
      if (this.state.currentView === 'catalog') this.renderCatalog();
      this.showToast(`Product "${removed[0].title}" deleted.`);
    }
  }

  renderAdminOrders() {
    const tbody = document.getElementById('adminOrdersTableBody');
    if (!tbody) return;

    const totalRev = this.state.orders.reduce((acc, o) => acc + o.total, 0);
    document.getElementById('statTotalSales').textContent = `${this.state.settings.currencySymbol}${totalRev.toFixed(2)}`;
    document.getElementById('statTotalOrders').textContent = this.state.orders.length;
    document.getElementById('statAvgOrder').textContent = `${this.state.settings.currencySymbol}${(totalRev / (this.state.orders.length || 1)).toFixed(2)}`;

    tbody.innerHTML = this.state.orders.map(o => `
      <tr>
        <td><strong>#${o.id}</strong></td>
        <td>${o.customer}</td>
        <td style="max-width: 240px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${o.items}</td>
        <td><strong>${this.state.settings.currencySymbol}${o.total.toFixed(2)}</strong></td>
        <td><span style="background: #E8F5E9; color: #2E7D32; padding: 2px 8px; border-radius: 4px; font-weight: 600;">${o.status}</span></td>
        <td>${o.date}</td>
      </tr>
    `).join('');
  }

  // --- Export Actions ---
  downloadShopifyZip() {
    const a = document.createElement('a');
    a.href = 'lumiere-shopify-theme.zip';
    a.download = 'lumiere-shopify-theme.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    this.showToast('Starting download of lumiere-shopify-theme.zip', 'success');
  }

  downloadProductCSV() {
    const a = document.createElement('a');
    a.href = 'shopify-products-import.csv';
    a.download = 'shopify-products-import.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    this.showToast('Starting download of shopify-products-import.csv', 'success');
  }

  // --- Toast Notification ---
  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
    toast.innerHTML = `
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  bindEvents() {
    // Accordion toggles on PDP
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
      });
    });

    // Sort select change in Catalog
    const sortSelect = document.getElementById('catalogSort');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.state.sortOption = e.target.value;
        this.renderCatalog();
      });
    }

    // Live Instant Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.state.searchQuery = e.target.value.trim();
        if (this.state.searchQuery && this.state.currentView !== 'catalog') {
          this.showCatalog('All');
        } else if (this.state.currentView === 'catalog') {
          this.renderCatalog();
        }
      });
    }
  }
}

// Global instantiation
const app = new LumiereApp();
window.addEventListener('DOMContentLoaded', () => {
  app.init();
});
