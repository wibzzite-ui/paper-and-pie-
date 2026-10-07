/**
 * Paper & Pie Cafe - Modern Interactive Application
 * Where Stories Meet Flavors • Bangalore
 */

// --- 1. Authentic Paper & Pie Menu Data (each item has its own unique image) ---
const MENU_DATA = [
  {
    category: "Signature Pies",
    items: [
      {
        id: "pie-1",
        name: "Classic Apple Pie",
        description: "Traditional recipe with cinnamon, nutmeg & spiced butter",
        price: 340,
        tag: "Bestseller",
        dietary: "Veg",
        notes: "Flaky all-butter double crust, warm spiced apples",
        image: "assets/apple_pie.jpg"
      },
      {
        id: "pie-2",
        name: "Chocolate Ganache Tart",
        description: "Rich 70% dark Belgian chocolate with Maldon sea salt",
        price: 360,
        tag: "Chef Special",
        dietary: "Veg",
        notes: "70% Belgian dark chocolate, Maldon sea salt flakes",
        image: "assets/chocolate_ganache.jpg"
      },
      {
        id: "pie-3",
        name: "Lemon Meringue Pie",
        description: "Tangy Meyer lemon curd topped with golden torched peaks",
        price: 320,
        tag: "Signature",
        dietary: "Veg",
        notes: "Zesty Meyer lemon curd, feather-light torched peaks",
        image: "assets/lemon_meringue.jpg"
      },
      {
        id: "pie-4",
        name: "Artisan Pecan Pie",
        description: "Caramelized Georgia pecans in a golden butter pastry shell",
        price: 380,
        tag: "Artisan Crust",
        dietary: "Veg",
        notes: "Toasted Georgia pecans, golden brown cane caramel",
        image: "assets/pecan_pie.jpg"
      }
    ]
  },
  {
    category: "Italian & Mains",
    items: [
      {
        id: "ital-1",
        name: "Wild Mushroom & Truffle Ravioli",
        description: "Handcrafted pasta parcels in browned sage butter & parmesan",
        price: 390,
        tag: "Zomato Favorite",
        dietary: "Veg",
        notes: "Porcini & button mushroom farce, white truffle aroma",
        image: "assets/mushroom_ravioli.png"
      },
      {
        id: "ital-2",
        name: "Caprese Multigrain Bruschetta",
        description: "Fresh bocconcini mozzarella, vine tomatoes, basil pesto",
        price: 320,
        tag: "Italian Classic",
        dietary: "Veg",
        notes: "Toasted multigrain sourdough, balsamic reduction",
        image: "assets/0dc56c5989ad5cb71ecd2af2543203b701137f01.jpg"
      },
      {
        id: "ital-3",
        name: "Classic Penne Arrabbiata",
        description: "San Marzano tomatoes, roasted garlic, bird's eye chilli & basil",
        price: 350,
        tag: "Authentic Roma",
        dietary: "Veg",
        notes: "Slow-simmered plum tomato sugo with extra virgin olive oil",
        image: "assets/zomato_ambiance.jpg"
      }
    ]
  },
  {
    category: "Continental & Bites",
    items: [
      {
        id: "bite-1",
        name: "Flaky Butter Croissant",
        description: "Laminated French butter pastry, baked golden every morning",
        price: 210,
        tag: "Fresh Daily",
        dietary: "Veg",
        notes: "Traditional French folding technique, flaky crisp layers",
        image: "assets/croissant.jpg"
      },
      {
        id: "bite-2",
        name: "Quiche Lorraine",
        description: "Smoked bacon, Gruyère cheese & caramelized onion custard",
        price: 290,
        tag: "French Classic",
        dietary: "Non-Veg",
        notes: "Savory egg custard with smoked bacon & Gruyère cheese",
        image: "assets/quiche_lorraine.png"
      },
      {
        id: "bite-3",
        name: "Hass Avocado & Poached Egg Toast",
        description: "Artisanal toasted sourdough, crushed Hass avocado, microgreens",
        price: 350,
        tag: "Healthy Gourmet",
        dietary: "Non-Veg",
        notes: "Artisanal toasted sourdough, Haas avocado, free-range egg",
        image: "assets/avocado_toast.jpg"
      },
      {
        id: "bite-4",
        name: "Chef's Velvety Potage Soup",
        description: "Seasonal roasted vegetable soup served with warm garlic bread",
        price: 260,
        tag: "Warm Comfort",
        dietary: "Veg",
        notes: "Chef's seasonal potage served with warm garlic bread",
        image: "assets/soup.jpg"
      }
    ]
  },
  {
    category: "Coffee & Beverages",
    items: [
      {
        id: "coffee-1",
        name: "Single Origin Espresso",
        description: "Coorg estate washed beans, thick golden honeyed crema",
        price: 190,
        tag: "Single Origin",
        dietary: "Veg",
        notes: "Coorg estate washed beans, thick honeyed crema",
        image: "assets/espresso.jpg"
      },
      {
        id: "coffee-2",
        name: "Velvet Microfoam Cappuccino",
        description: "Classic Italian style balanced with smooth double espresso",
        price: 240,
        tag: "Barista Pick",
        dietary: "Veg",
        notes: "Silky textured micro-foam with espresso punch",
        image: "assets/cappuccino.jpg"
      },
      {
        id: "coffee-3",
        name: "16-Hour Slow Steeped Cold Brew",
        description: "Smooth, low-acidity cold extraction with deep chocolate notes",
        price: 260,
        tag: "16h Steeped",
        dietary: "Veg",
        notes: "Slow cold extracted, low acidity, notes of chocolate",
        image: "assets/cold_brew.jpg"
      },
      {
        id: "coffee-4",
        name: "Elderflower Tonic Cold Brew",
        description: "Signature cold brew cut with sparkling elderflower tonic & citrus",
        price: 280,
        tag: "House Signature",
        dietary: "Veg",
        notes: "Floral elderflower, sparkling fizz, crisp espresso layer",
        image: "assets/152ccc6ff05c173d33b5b3ee15d46901f9c025c8.jpg"
      },
      {
        id: "coffee-5",
        name: "Artisan Masala Chai Latte",
        description: "Assam golden tips infused with fresh cardamom, cinnamon & ginger",
        price: 220,
        tag: "House Spices",
        dietary: "Veg",
        notes: "Assam golden tips infused with cinnamon, cardamom & clove",
        image: "assets/chai_latte.jpg"
      }
    ]
  },
  {
    category: "Desserts & Shakes",
    items: [
      {
        id: "des-1",
        name: "Belgian Dark Chocolate Thickshake",
        description: "Rich Belgian couverture chocolate blended with organic vanilla ice cream",
        price: 290,
        tag: "Indulgent",
        dietary: "Veg",
        notes: "Decadent thick shake topped with cocoa nibs & ganache drizzle",
        image: "assets/chocolate_ganache.jpg"
      },
      {
        id: "des-2",
        name: "Japanese Fluffy Soufflé Cheesecake",
        description: "Cotton-soft melt-in-mouth Japanese style cheesecake with vanilla pod",
        price: 340,
        tag: "Pastry Craft",
        dietary: "Veg",
        notes: "Baked in water bath, dusted with snowy powdered sugar",
        image: "assets/souffle_cheesecake.png"
      },
      {
        id: "des-3",
        name: "Traditional Venetian Tiramisu",
        description: "Espresso soaked savoiardi biscuits, mascarpone cream & Valrhona cocoa",
        price: 330,
        tag: "Guest Favorite",
        dietary: "Veg",
        notes: "Classic Italian layered dolce with rich espresso aroma",
        image: "assets/tiramisu.png"
      }
    ]
  }
];

// --- 2. State & Order Selection ---
let currentCategory = "all";
let searchQuery = "";
let tastingTray = [];
let audioCtx = null;
let isAudioPlaying = false;
let ambientNodes = [];

// --- 3. DOM Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Update Copyright Year
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Set default reservation date to tomorrow
  const dateInput = document.getElementById("res-date");
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split("T")[0];
    dateInput.min = new Date().toISOString().split("T")[0];
  }

  // Render Menu
  renderMenu();

  // Initialize Event Listeners
  initScrollHandler();
  // Permanently enforce Warm Cream mode & clear stale dark preferences
  try {
    localStorage.removeItem("paper_pie_theme");
    document.documentElement.setAttribute("data-theme", "light");
  } catch (e) {
    /* Ignore storage error in private browsing */
  }
  initMobileDrawer();
  initMenuFilters();
  initHeroTilt();
  initOutletLiveStatus();
  initScrollReveal();
  initSpotlightGlow();
  initDepthCarousel();
  initTextPressure();
});

// --- 4. Render Menu Function ---
function renderMenu() {
  const container = document.getElementById("menu-items-container");
  if (!container) return;

  container.innerHTML = "";

  const filteredCategories = MENU_DATA.map(cat => {
    if (currentCategory !== "all" && cat.category !== currentCategory) {
      return null;
    }

    const filteredItems = cat.items.filter(item => {
      const matchSearch = searchQuery === "" || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.notes.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSearch;
    });

    if (filteredItems.length === 0) return null;

    return {
      ...cat,
      items: filteredItems
    };
  }).filter(Boolean);

  if (filteredCategories.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 4rem 1rem; color:var(--color-text-secondary);">
        <i data-lucide="coffee" style="width:48px; height:48px; margin-bottom:1rem; opacity:0.5;"></i>
        <h4 style="font-family:var(--font-serif); font-size:1.5rem; margin-bottom:0.5rem;">No items match "${searchQuery}"</h4>
        <p>Try searching for apple pie, cappuccino, croissant or sourdough.</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  filteredCategories.forEach(cat => {
    const catBlock = document.createElement("div");
    catBlock.className = "menu-category-block";

    catBlock.innerHTML = `
      <div class="category-banner">
        <div class="category-title">
          <span>${cat.category}</span>
          <span class="category-badge-pill">${cat.items.length} Offerings</span>
        </div>
      </div>

      <div class="menu-cards-grid">
        ${cat.items.map(item => `
          <div class="menu-item-card" data-id="${item.id}">
            <div class="menu-card-img-wrap">
              <img src="${item.image}" alt="${item.name} at Paper and Pie" class="menu-card-img" loading="lazy">
              <span class="card-dietary-badge ${item.dietary === 'Veg' ? 'badge-veg' : 'badge-artisan'}">
                ${item.dietary === 'Veg' ? '🟢 Pure Veg' : '🔴 Non-Veg'}
              </span>
            </div>
            <div class="menu-card-body">
              <div class="menu-card-header">
                <h4 class="menu-card-name">${item.name}</h4>
                <span style="font-weight:700; color:var(--color-accent); font-size:1.15rem;">₹${item.price}</span>
              </div>
              <p class="menu-card-desc">${item.description}</p>
              <div class="menu-card-footer">
                <span class="menu-card-tagline">
                  <i data-lucide="sparkles" style="width:14px;height:14px;"></i>
                  <span>${item.tag}</span>
                </span>
                <button class="btn-card-action" onclick="addToTastingTray('${item.id}', '${item.name.replace(/'/g, "\\'")}', ${item.price}, '${item.image}')">
                  <span>+ Add to Tray</span>
                </button>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    container.appendChild(catBlock);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// --- 5. Menu Filters & Search ---
function initMenuFilters() {
  const tabBtns = document.querySelectorAll(".menu-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      currentCategory = btn.getAttribute("data-category");
      renderMenu();
    });
  });

  const searchInput = document.getElementById("menu-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderMenu();
    });
  }
}

// --- 6. Tasting Selection & Tray System (Interactive Item Editing) ---
function addToTastingTray(id, name, price, image = "") {
  const existingIndex = tastingTray.findIndex(item => item.id === id);
  if (existingIndex > -1) {
    tastingTray[existingIndex].quantity += 1;
  } else {
    tastingTray.push({
      id,
      name,
      price,
      quantity: 1,
      image: image || 'assets/apple_pie.jpg',
      notes: ''
    });
  }
  updateTrayUI();
  showToast(`Added "${name}" to your tasting selection`);
}

function updateQuantity(id, change) {
  const itemIndex = tastingTray.findIndex(item => item.id === id);
  if (itemIndex === -1) return;

  tastingTray[itemIndex].quantity += change;
  if (tastingTray[itemIndex].quantity <= 0) {
    tastingTray.splice(itemIndex, 1);
  }
  updateTrayUI();
  renderTrayModal();
}

function updateItemNotes(id, text) {
  const item = tastingTray.find(it => it.id === id);
  if (item) {
    item.notes = text;
  }
}

function removeFromTray(id) {
  tastingTray = tastingTray.filter(item => item.id !== id);
  updateTrayUI();
  renderTrayModal();
  showToast("Item removed from tray");
}

function clearTray() {
  tastingTray = [];
  updateTrayUI();
  renderTrayModal();
  showToast("Cleared tasting tray");
}

function getTotalCount() {
  return tastingTray.reduce((sum, item) => sum + item.quantity, 0);
}

function getTotalPrice() {
  return tastingTray.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateTrayUI() {
  const pill = document.getElementById("floating-order-pill");
  const count = document.getElementById("tray-count");
  const pillSubtotal = document.getElementById("pill-subtotal");

  const totalQty = getTotalCount();
  const totalPrice = getTotalPrice();

  if (count) count.textContent = totalQty;
  if (pillSubtotal) pillSubtotal.textContent = `₹${totalPrice}`;

  if (pill) {
    if (totalQty > 0) {
      pill.classList.add("visible");
    } else {
      pill.classList.remove("visible");
    }
  }
}

function openTrayModal() {
  const modal = document.getElementById("tray-modal");
  if (!modal) return;
  renderTrayModal();
  modal.showModal();
}

function closeTrayModal() {
  const modal = document.getElementById("tray-modal");
  if (modal) modal.close();
}

function renderTrayModal() {
  const container = document.getElementById("tray-items-list");
  const totalCountEl = document.getElementById("tray-modal-total-count");
  const totalPriceEl = document.getElementById("tray-modal-total-price");
  const emptyState = document.getElementById("tray-empty-state");
  const footerEl = document.getElementById("tray-modal-footer");

  if (!container) return;

  const totalQty = getTotalCount();
  const totalPrice = getTotalPrice();

  if (totalCountEl) totalCountEl.textContent = `${totalQty} item${totalQty === 1 ? '' : 's'}`;
  if (totalPriceEl) totalPriceEl.textContent = `₹${totalPrice}`;

  if (tastingTray.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    if (footerEl) footerEl.style.display = "none";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (footerEl) footerEl.style.display = "flex";

  container.innerHTML = tastingTray.map(item => `
    <div class="tray-item-card" data-id="${item.id}">
      <div class="tray-item-top">
        <img src="${item.image}" alt="${item.name}" class="tray-item-img">
        <div class="tray-item-info">
          <h5 class="tray-item-name">${item.name}</h5>
          <span class="tray-item-unit-price">₹${item.price} each</span>
        </div>
        <div class="qty-stepper">
          <button type="button" class="qty-btn" onclick="updateQuantity('${item.id}', -1)" aria-label="Decrease quantity">-</button>
          <span class="qty-val">${item.quantity}</span>
          <button type="button" class="qty-btn" onclick="updateQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
        </div>
        <span class="tray-item-total">₹${item.price * item.quantity}</span>
        <button type="button" class="btn-icon-remove" onclick="removeFromTray('${item.id}')" title="Remove item">
          <i data-lucide="trash-2" style="width:16px;height:16px;"></i>
        </button>
      </div>
      <div class="tray-item-note-row">
        <input 
          type="text" 
          class="tray-note-input" 
          placeholder="Add customization note (e.g. Extra cinnamon, oat milk...)" 
          value="${item.notes || ''}" 
          onchange="updateItemNotes('${item.id}', this.value)"
        >
      </div>
    </div>
  `).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function sendOrderInquiry() {
  if (tastingTray.length === 0) return;

  const total = getTotalPrice();
  const itemsSummary = tastingTray.map((item, idx) => {
    const notesStr = item.notes ? ` [Note: ${item.notes}]` : '';
    return `${idx + 1}. ${item.name} x${item.quantity} = ₹${item.price * item.quantity}${notesStr}`;
  }).join("%0A");

  const message = `Hello Paper %26 Pie Cafe!%0A%0AI would like to place/inquire about the following tasting selection:%0A${itemsSummary}%0A%0AEstimated Total: ₹${total}%0A%0APlease let me know table/takeaway availability at Bangalore branch. Thank you!`;

  window.open(`https://wa.me/919035700874?text=${message}`, "_blank");
  showToast("Opening WhatsApp with your customized order inquiry...");
}

// --- 7. Sticky Navbar, Scroll Spy & Smooth Scrolling ---
function initScrollHandler() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Toggle navbar scrolled state
        if (window.scrollY > 30) {
          navbar?.classList.add("scrolled");
        } else {
          navbar?.classList.remove("scrolled");
        }

        // Active link scroll spy
        const scrollPos = window.scrollY + 120;
        let currentSectionId = "";
        sections.forEach(sec => {
          if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
            currentSectionId = sec.getAttribute("id");
          }
        });

        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Custom RAF smooth scroll animation with cubic-bezier spring easing
  function smoothScrollTo(targetY, duration = 800) {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // Smooth scroll with navbar height compensation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 70;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight + 10;

        smoothScrollTo(targetPos, 750);

        // Close mobile drawer if open
        if (typeof window.closeMobileDrawer === "function") {
          window.closeMobileDrawer();
        }
      }
    });
  });
}


// --- 9. Mobile Offcanvas Navigation ---
function initMobileDrawer() {
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("drawer-close-btn");
  const overlay = document.getElementById("drawer-overlay");
  const drawer = document.getElementById("mobile-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  function openDrawer() {
    drawer.classList.add("open");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  window.closeMobileDrawer = closeDrawer;

  if (mobileBtn) mobileBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

// --- 12. Intersection Observer — Smooth Scroll Reveal ---
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => observer.observe(el));
}

// --- 13. Hero Card 3D Tilt Effect ---
function initHeroTilt() {
  const card = document.getElementById("hero-tilt-card");
  if (!card) return;

  const parent = card.parentElement;
  if (!parent) return;

  parent.addEventListener("mousemove", (e) => {
    const rect = parent.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rotateX = -(y / rect.height) * 12;
    const rotateY = (x / rect.width) * 12;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  parent.addEventListener("mouseleave", () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  });
}

// --- 11. Bangalore Outlets Live Operating Status ---
function initOutletLiveStatus() {
  const now = new Date();
  const currentHour = now.getHours();
  // Paper and Pie hours: 8:00 AM to 10:00 PM (8 to 22)
  const isOpen = currentHour >= 8 && currentHour < 22;

  const statusElements = document.querySelectorAll(".live-status-text");
  const dots = document.querySelectorAll(".status-dot");

  statusElements.forEach(el => {
    el.textContent = isOpen ? "Open Now • Till 10:00 PM" : "Closed • Opens at 8:00 AM";
  });

  if (!isOpen) {
    dots.forEach(dot => {
      dot.style.backgroundColor = "#E27D56";
      dot.style.boxShadow = "0 0 6px #E27D56";
    });
  }
}



// --- 13. Reservation Modal System ---
function openReservationModal(defaultSpace = "") {
  const modal = document.getElementById("reservation-modal");
  if (!modal) return;

  if (defaultSpace === "conference") {
    const spaceSelect = document.getElementById("res-space");
    if (spaceSelect) spaceSelect.value = "Conference Room (Up to 10 pax)";
  }

  modal.showModal();
}

function closeReservationModal() {
  const modal = document.getElementById("reservation-modal");
  if (modal) modal.close();
}

function handleReservationSubmit(event) {
  event.preventDefault();
  const location = document.getElementById("res-location").value;
  const space = document.getElementById("res-space").value;
  const name = document.getElementById("res-name").value;
  const phone = document.getElementById("res-phone").value;
  const date = document.getElementById("res-date").value;
  const time = document.getElementById("res-time").value;

  closeReservationModal();

  // Trigger WhatsApp confirmation with full details
  const message = `Hello Paper %26 Pie!%0A%0AI would like to reserve a space with the following details:%0A- Name: ${encodeURIComponent(name)}%0A- Phone: ${encodeURIComponent(phone)}%0A- Location: ${encodeURIComponent(location)}%0A- Space: ${encodeURIComponent(space)}%0A- Date: ${encodeURIComponent(date)}%0A- Time Slot: ${encodeURIComponent(time)}%0A%0APlease confirm availability. Thank you!`;

  showToast(`🎉 Reservation Request Sent for ${name}! Opening confirmation...`);
  
  setTimeout(() => {
    window.open(`https://wa.me/919035700874?text=${message}`, "_blank");
  }, 800);
}

// Global modal helpers
window.openReservationModal = openReservationModal;
window.closeReservationModal = closeReservationModal;
window.handleReservationSubmit = handleReservationSubmit;
window.addToTastingTray = addToTastingTray;
window.sendOrderInquiry = sendOrderInquiry;
window.openTrayModal = openTrayModal;
window.closeTrayModal = closeTrayModal;
window.updateQuantity = updateQuantity;
window.removeFromTray = removeFromTray;
window.clearTray = clearTray;
window.updateItemNotes = updateItemNotes;

// --- 14. Toast Notification Utility ---
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i data-lucide="check-circle-2" style="width:18px;height:18px;color:var(--color-gold);flex-shrink:0;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- 15. Spotlight Pointer Glow Effect (Native Vanilla Implementation) ---
function initSpotlightGlow() {
  const syncPointer = (e) => {
    const { clientX: x, clientY: y } = e;
    
    // Set viewport coordinates on root
    document.documentElement.style.setProperty('--cursor-x', `${x}px`);
    document.documentElement.style.setProperty('--cursor-y', `${y}px`);
    document.documentElement.style.setProperty('--xp', (x / window.innerWidth).toFixed(3));
    document.documentElement.style.setProperty('--yp', (y / window.innerHeight).toFixed(3));

    // Update coordinates for each hovered spotlight card
    const cards = document.querySelectorAll('.menu-item-card, .location-card, .conference-facility-card, [data-glow]');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const localX = x - rect.left;
      const localY = y - rect.top;
      card.style.setProperty('--x', `${localX.toFixed(1)}px`);
      card.style.setProperty('--y', `${localY.toFixed(1)}px`);
    });
  };

  window.addEventListener('pointermove', syncPointer, { passive: true });
}

// --- 16. React Bits Depth Carousel (3D Menu Showcase) ---
function initDepthCarousel() {
  const root = document.getElementById("depth-carousel");
  const stage = document.getElementById("dc-stage");
  const dotsContainer = document.getElementById("dc-dots");
  const prevBtn = document.getElementById("dc-prev");
  const nextBtn = document.getElementById("dc-next");
  if (!root || !stage) return;

  const items = [
    { id: 'ital-1', name: 'Wild Mushroom Ravioli', price: '₹390', desc: 'Browned sage butter & white truffle aroma', image: 'assets/mushroom_ravioli.png' },
    { id: 'pie-1', name: 'Classic Apple Pie', price: '₹340', desc: 'Spiced apple cinnamon with flaky butter crust', image: 'assets/apple_pie.jpg' },
    { id: 'pie-2', name: 'Chocolate Ganache Tart', price: '₹360', desc: '70% Belgian chocolate with Maldon sea salt', image: 'assets/chocolate_ganache.jpg' },
    { id: 'coffee-3', name: '16h Cold Brew', price: '₹260', desc: 'Slow cold steeped with chocolate undertones', image: 'assets/cold_brew.jpg' },
    { id: 'coffee-4', name: 'Elderflower Cold Brew', price: '₹280', desc: 'Sparkling tonic & citrus infused espresso', image: 'assets/152ccc6ff05c173d33b5b3ee15d46901f9c025c8.jpg' },
    { id: 'bite-1', name: 'Flaky Croissant', price: '₹210', desc: 'French laminated butter pastry baked fresh', image: 'assets/croissant.jpg' },
    { id: 'bite-3', name: 'Avocado Toast', price: '₹350', desc: 'Toasted sourdough with Haas avocado & egg', image: 'assets/avocado_toast.jpg' },
    { id: 'des-3', name: 'Venetian Tiramisu', price: '₹330', desc: 'Espresso savoiardi with Valrhona cocoa', image: 'assets/tiramisu.png' }
  ];

  const count = items.length;
  const cfg = {
    cardWidth: 260,
    cardHeight: 350,
    radius: 18,
    tint: '#140F0D',
    depth: 220,
    spread: 90,
    tilt: 22,
    tiltDirection: 'right',
    perspective: 1400,
    visibleCards: 4,
    falloff: 0.2,
    blur: 6,
    duration: 700,
    ease: 'power3.out',
    autoplay: true,
    autoplayDelay: 3200,
    loop: true
  };

  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  // Render 3D cards
  stage.innerHTML = items.map((item, i) => `
    <div class="depth-carousel__card" data-index="${i}" style="width:${cfg.cardWidth}px; height:${cfg.cardHeight}px; border-radius:${cfg.radius}px;" aria-label="${item.name}">
      <img class="depth-carousel__img" src="${item.image}" alt="${item.name}" draggable="false">
      <div class="depth-carousel__card-badge">
        <div class="depth-carousel__card-info">
          <span class="depth-carousel__card-name">${item.name}</span>
          <span class="depth-carousel__card-desc">${item.desc}</span>
        </div>
        <span class="depth-carousel__card-price">${item.price}</span>
      </div>
      <span class="depth-carousel__tint" style="background:${cfg.tint};"></span>
    </div>
  `).join("");

  // Render indicator dots
  if (dotsContainer) {
    dotsContainer.innerHTML = items.map((_, i) => `
      <button type="button" class="depth-carousel__dot ${i === 0 ? 'is-active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>
    `).join("");
  }

  const cardEls = stage.querySelectorAll(".depth-carousel__card");
  const overlayEls = stage.querySelectorAll(".depth-carousel__tint");
  const dotEls = dotsContainer ? dotsContainer.querySelectorAll(".depth-carousel__dot") : [];

  let pos = 0;
  let focus = 0;
  let scale = 1;
  let tween = null;
  let drag = null;
  let wheelTimer = null;
  let autoTimer = null;
  let isHovered = false;

  function layout(currentPos) {
    const dir = cfg.tiltDirection === 'left' ? -1 : 1;
    for (let i = 0; i < count; i++) {
      const el = cardEls[i];
      if (!el) continue;

      let d = i - currentPos;
      if (cfg.loop && count > 1) {
        d = ((d % count) + count) % count;
        if (d > count / 2) d -= count;
      }

      const back = Math.max(0, d);
      const az = Math.abs(d);
      const shown = az <= cfg.visibleCards + 0.5;

      const tz = -cfg.depth * d;
      const tx = dir * cfg.spread * d;
      const ry = dir * cfg.tilt * clamp(d, 0, 1);

      let opacity = d < 0 ? Math.max(0, 1 + d) : 1;
      if (!shown) opacity = 0;

      const brightness = Math.max(0.15, 1 - back * cfg.falloff);
      const blurPx = cfg.blur > 0 ? Math.min(cfg.blur, (back / Math.max(1, cfg.visibleCards)) * cfg.blur) : 0;
      const zi = Math.round(2000 - d * 20);

      el.style.transform = `translate(-50%, -50%) scale(${scale}) translateX(${tx.toFixed(2)}px) translateZ(${tz.toFixed(2)}px) rotateY(${ry.toFixed(3)}deg)`;
      el.style.opacity = opacity.toFixed(3);
      el.style.filter = `brightness(${brightness.toFixed(3)}) blur(${blurPx.toFixed(2)}px)`;
      el.style.zIndex = String(zi);
      el.style.pointerEvents = shown && opacity > 0.05 ? 'auto' : 'none';

      const ov = overlayEls[i];
      if (ov) ov.style.opacity = clamp(back * cfg.falloff * 1.25, 0, 0.86).toFixed(3);
    }
  }

  function updateActiveUI(idx) {
    focus = idx;
    dotEls.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === idx);
    });
  }

  function tweenTo(target, animate = true) {
    if (tween) tween.kill();
    const proxy = { p: pos };
    const dur = animate ? cfg.duration / 1000 : 0;
    
    if (window.gsap) {
      tween = window.gsap.to(proxy, {
        p: target,
        duration: dur,
        ease: cfg.ease,
        onUpdate: () => {
          pos = proxy.p;
          layout(proxy.p);
        },
        onComplete: () => {
          if (count > 0) pos = ((pos % count) + count) % count;
          layout(pos);
        }
      });
    } else {
      pos = target;
      layout(pos);
    }
  }

  function setFocus(rawIndex, animate = true) {
    if (!count) return;
    const idx = cfg.loop ? ((rawIndex % count) + count) % count : clamp(rawIndex, 0, count - 1);
    let delta = idx - pos;
    if (cfg.loop && count > 1) {
      delta = ((delta % count) + count) % count;
      if (delta > count / 2) delta -= count;
    }
    tweenTo(pos + delta, animate);
    updateActiveUI(idx);
  }

  function navigateBy(step) {
    setFocus(focus + step, true);
  }

  // Pointer drag gestures
  root.addEventListener("pointerdown", (e) => {
    if (count < 2) return;
    if (tween) tween.kill();
    drag = {
      x: e.clientX,
      startPos: pos,
      lastX: e.clientX,
      lastT: performance.now(),
      v: 0,
      moved: false,
      id: e.pointerId
    };
  });

  window.addEventListener("pointermove", (e) => {
    if (!drag) return;
    const stepPx = Math.max(cfg.cardWidth * 0.55 * scale, 40);
    const dx = e.clientX - drag.x;
    if (!drag.moved && Math.abs(dx) > 4) {
      drag.moved = true;
      try { root.setPointerCapture(drag.id); } catch(err) {}
    }
    if (!drag.moved) return;
    const now = performance.now();
    const dt = Math.max(now - drag.lastT, 1);
    drag.v = (e.clientX - drag.lastX) / dt;
    drag.lastX = e.clientX;
    drag.lastT = now;
    pos = drag.startPos - dx / stepPx;
    layout(pos);
  });

  const onPointerEnd = () => {
    if (!drag) return;
    const wasMoved = drag.moved;
    const v = drag.v;
    drag = null;
    if (!wasMoved) return;
    const stepPx = Math.max(cfg.cardWidth * 0.55 * scale, 40);
    const projected = pos - (v * 180) / stepPx;
    setFocus(Math.round(projected), true);
  };

  window.addEventListener("pointerup", onPointerEnd);
  window.addEventListener("pointercancel", onPointerEnd);

  // Mousewheel navigation
  root.addEventListener("wheel", (e) => {
    if (count < 2) return;
    e.preventDefault();
    if (tween) tween.kill();
    const raw = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    const delta = e.deltaMode === 1 ? raw * 24 : raw;
    const step = clamp(delta / (cfg.cardWidth * 0.9), -0.6, 0.6);
    pos += step;
    layout(pos);
    if (wheelTimer) clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => setFocus(Math.round(pos), true), 130);
  }, { passive: false });

  // Keyboard controls
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      navigateBy(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      navigateBy(1);
    }
  });

  // Arrows
  if (prevBtn) prevBtn.addEventListener("click", () => navigateBy(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => navigateBy(1));

  // Dot clicks
  dotEls.forEach((dot, idx) => {
    dot.addEventListener("click", () => setFocus(idx, true));
  });

  // Card clicks
  cardEls.forEach((card, idx) => {
    card.addEventListener("click", () => {
      if (drag && drag.moved) return;
      setFocus(idx, true);
    });
  });

  // Responsive scale observer
  const updateScale = () => {
    const w = root.clientWidth;
    const needed = cfg.cardWidth + Math.abs(cfg.spread) * 2 + 120;
    scale = clamp(w / needed, 0.45, 1);
    layout(pos);
  };
  window.addEventListener("resize", updateScale);
  updateScale();

  // Autoplay cycle
  const startAutoplay = () => {
    stopAutoplay();
    autoTimer = setInterval(() => {
      if (!isHovered) navigateBy(1);
    }, cfg.autoplayDelay);
  };
  const stopAutoplay = () => {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = null;
  };

  root.addEventListener("mouseenter", () => { isHovered = true; });
  root.addEventListener("mouseleave", () => { isHovered = false; });
  startAutoplay();

  // Render initial frame
  layout(0);
}

// --- 17. React Bits TextPressure (Interactive Variable Font Pressure Animation) ---
function initTextPressure() {
  const titleEls = document.querySelectorAll(".text-pressure-title");
  if (!titleEls || titleEls.length === 0) return;

  titleEls.forEach(titleEl => {
    const text = titleEl.getAttribute("data-text") || titleEl.textContent.trim();
    const words = text.split(" ");

    // Wrap characters in word spans to maintain flow layout & responsive wrapping
    titleEl.innerHTML = words.map(word => {
      const cleanWord = word.replace(/[^\w]/g, "").toLowerCase();
      const isAccentWord = cleanWord === "stories" || cleanWord === "flavors";
      const charsMarkup = word.split("").map(char => {
        const accentClass = isAccentWord ? " tp-accent" : "";
        return `<span class="tp-char${accentClass}" data-char="${char}">${char}</span>`;
      }).join("");
      return `<span class="tp-word">${charsMarkup}</span>`;
    }).join('<span class="tp-space">&nbsp;</span>');
  });

  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const cursor = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  const handleMouseMove = (e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
  };
  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      cursor.x = e.touches[0].clientX;
      cursor.y = e.touches[0].clientY;
    }
  };

  window.addEventListener("mousemove", handleMouseMove, { passive: true });
  window.addEventListener("touchmove", handleTouchMove, { passive: true });

  const dist = (a, b) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const getAttr = (distance, maxDist, minVal, maxVal) => {
    const val = maxVal - Math.abs((maxVal * distance) / maxDist);
    return Math.max(minVal, val + minVal);
  };

  function animate() {
    // Smooth lerp cursor tracking
    mouse.x += (cursor.x - mouse.x) / 12;
    mouse.y += (cursor.y - mouse.y) / 12;

    titleEls.forEach(titleEl => {
      const titleRect = titleEl.getBoundingClientRect();
      const maxDist = Math.max(titleRect.width / 2, 280);
      const spanEls = titleEl.querySelectorAll(".tp-char");

      spanEls.forEach(span => {
        const rect = span.getBoundingClientRect();
        const charCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };

        const d = dist(mouse, charCenter);

        // Vary width (wdth), weight (wght), and italics (ital) based on proximity
        const wdth = Math.floor(getAttr(d, maxDist, 25, 151));
        const wght = Math.floor(getAttr(d, maxDist, 100, 900));
        const italVal = getAttr(d, maxDist, 0, 1).toFixed(2);

        const newFontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;
        if (span.style.fontVariationSettings !== newFontVariationSettings) {
          span.style.fontVariationSettings = newFontVariationSettings;
        }
      });
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// --- 11. Official Zomato Photo Gallery Lightbox ---
function openLightbox(src, title, caption) {
  const modal = document.getElementById("gallery-lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const titleEl = document.getElementById("lightbox-title");
  const subEl = document.getElementById("lightbox-sub");
  if (!modal || !img) return;

  img.src = src;
  img.alt = title || "Paper & Pie Gallery Image";
  if (titleEl) titleEl.textContent = title || "Paper & Pie Sanctuary";
  if (subEl) subEl.textContent = caption || "Official Zomato Listing • 100 Feet Road, Indiranagar";

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "true");
  }
}

function closeLightbox() {
  const modal = document.getElementById("gallery-lightbox-modal");
  if (!modal) return;
  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }
}
