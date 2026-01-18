/* ============================================
   LUMIÈRE D'OR - JAVASCRIPT PRINCIPAL
   Site Vitrine Cosmétique Premium
   Version 2.0 - Optimisé Mobile
   ============================================ */

// ============================================
// CONFIGURATION GLOBALE
// ============================================
const CONFIG = {
  whatsappNumber: "237690973861",
  currency: "FCFA",
  animationDuration: 800,
  carouselAutoplay: true,
  carouselInterval: 5000,
  heroSliderInterval: 6000,
  testimonialInterval: 7000,
  particlesCount: 50,
  enableCursor: true,
  enableParticles: true,
  enableSoundEffects: false,
};

// ============================================
// BASE DE DONNÉES DES PRODUITS
// ============================================
const PRODUCTS = [
  // ========== SAVONS ==========
  {
    id: 1,
    name: "Savon Nila Premium",
    category: "savons",
    price: 3500,
    oldPrice: null,
    description:
      "Savon naturel au nila bleu pour un teint éclatant et uniforme. Nettoie en profondeur tout en respectant votre peau.",
    image: "images/products/savon-nila.jpg",
    badge: "Best-seller",
    rating: 5,
    stock: true,
    features: ["100% Naturel", "Anti-taches", "Hydratant"],
  },
  {
    id: 2,
    name: "Savon Curcuma Gold",
    category: "savons",
    price: 3000,
    oldPrice: 3500,
    description:
      "Savon éclaircissant au curcuma pour une peau lumineuse et saine. Idéal pour unifier le teint.",
    image: "images/products/savon-curcuma.jpg",
    badge: "Promo",
    rating: 5,
    stock: true,
    features: ["Éclaircissant", "Anti-inflammatoire", "Antioxydant"],
  },
  {
    id: 3,
    name: "Savon Carotte Intense",
    category: "savons",
    price: 2500,
    oldPrice: null,
    description:
      "Enrichi en bêta-carotène pour un effet bonne mine naturel et une peau éclatante de santé.",
    image: "images/products/savon-carotte.jpg",
    badge: null,
    rating: 4,
    stock: true,
    features: ["Bonne mine", "Vitamine A", "Régénérant"],
  },
  {
    id: 4,
    name: "Savon Lait de Chèvre",
    category: "savons",
    price: 4000,
    oldPrice: null,
    description:
      "Douceur et hydratation intense pour les peaux sensibles. Apaise et nourrit en profondeur.",
    image: "images/products/savon-lait-chevre.jpg",
    badge: "Nouveau",
    rating: 5,
    stock: true,
    features: ["Peaux sensibles", "Hydratant", "Apaisant"],
  },
  {
    id: 5,
    name: "Savon Charbon Actif",
    category: "savons",
    price: 3500,
    oldPrice: null,
    description:
      "Purifie et détoxifie la peau en profondeur. Élimine les impuretés et resserre les pores.",
    image: "images/products/savon-charbon.jpg",
    badge: null,
    rating: 4,
    stock: true,
    features: ["Détoxifiant", "Purifiant", "Anti-pores"],
  },
  {
    id: 6,
    name: "Savon Papaye Exfoliant",
    category: "savons",
    price: 3000,
    oldPrice: null,
    description:
      "Exfoliation douce à la papaye pour éliminer les cellules mortes et révéler une peau neuve.",
    image: "images/products/savon-papaye.jpg",
    badge: null,
    rating: 4,
    stock: true,
    features: ["Exfoliant", "Éclaircissant", "Régénérant"],
  },

  // ========== SOINS VISAGE ==========
  {
    id: 7,
    name: "Sérum Anti-Taches Éclat",
    category: "soins",
    price: 12000,
    oldPrice: 15000,
    description:
      "Sérum concentré pour éliminer les taches et unifier le teint. Résultats visibles en 2 semaines.",
    image: "images/products/serum-anti-taches.jpg",
    badge: "Top vente",
    rating: 5,
    stock: true,
    features: ["Anti-taches", "Unifiant", "Vitamine C"],
  },
  {
    id: 8,
    name: "Crème Hydratante 24H",
    category: "soins",
    price: 8500,
    oldPrice: null,
    description:
      "Hydratation longue durée pour une peau douce et rebondie. Texture légère non grasse.",
    image: "images/products/creme-hydratante.jpg",
    badge: null,
    rating: 5,
    stock: true,
    features: ["Hydratation 24h", "Non gras", "Tous types de peau"],
  },
  {
    id: 9,
    name: "Huile de Carotte Pure",
    category: "soins",
    price: 6000,
    oldPrice: null,
    description:
      "Huile naturelle pour un teint hâlé et une peau nourrie. Riche en vitamines A et E.",
    image: "images/products/huile-carotte.jpg",
    badge: "Naturel",
    rating: 4,
    stock: true,
    features: ["100% Naturel", "Bonne mine", "Nourrissant"],
  },
  {
    id: 10,
    name: "Masque Éclat Instantané",
    category: "soins",
    price: 5500,
    oldPrice: null,
    description:
      "Masque illuminateur pour un coup d'éclat immédiat. Parfait avant une occasion spéciale.",
    image: "images/products/masque-eclat.jpg",
    badge: null,
    rating: 4,
    stock: true,
    features: ["Éclat instantané", "Hydratant", "Anti-fatigue"],
  },
  {
    id: 11,
    name: "Contour des Yeux Premium",
    category: "soins",
    price: 9500,
    oldPrice: 12000,
    description:
      "Soin ciblé pour réduire les cernes et les poches. Regard frais et reposé.",
    image: "images/products/contour-yeux.jpg",
    badge: "Promo",
    rating: 5,
    stock: true,
    features: ["Anti-cernes", "Anti-poches", "Lissant"],
  },

  // ========== SOINS CORPS ==========
  {
    id: 12,
    name: "Lait Corporel Karité",
    category: "corps",
    price: 7500,
    oldPrice: null,
    description:
      "Lait nourrissant au beurre de karité pour une peau satinée et protégée toute la journée.",
    image: "images/products/lait-karite.jpg",
    badge: "Coup de cœur",
    rating: 5,
    stock: true,
    features: ["Nourrissant", "Protecteur", "Parfum délicat"],
  },
  {
    id: 13,
    name: "Gommage Corps Café",
    category: "corps",
    price: 5000,
    oldPrice: null,
    description:
      "Exfoliant naturel au café pour une peau lisse et tonifiée. Action anti-cellulite.",
    image: "images/products/gommage-cafe.jpg",
    badge: null,
    rating: 4,
    stock: true,
    features: ["Exfoliant", "Tonifiant", "Anti-cellulite"],
  },
  {
    id: 14,
    name: "Huile Sèche Précieuse",
    category: "corps",
    price: 9000,
    oldPrice: 11000,
    description:
      "Huile multi-usages pour le corps, le visage et les cheveux. Absorption rapide.",
    image: "images/products/huile-seche.jpg",
    badge: "Promo",
    rating: 5,
    stock: true,
    features: ["Multi-usages", "Non gras", "Parfum luxueux"],
  },
  {
    id: 15,
    name: "Beurre Corporel Mangue",
    category: "corps",
    price: 6500,
    oldPrice: null,
    description:
      "Beurre fondant à la mangue pour une hydratation intense des peaux très sèches.",
    image: "images/products/beurre-mangue.jpg",
    badge: null,
    rating: 4,
    stock: true,
    features: ["Ultra-nourrissant", "Peaux sèches", "Parfum fruité"],
  },

  // ========== SOINS CHEVEUX ==========
  {
    id: 16,
    name: "Bonnet Chauffant Pro",
    category: "cheveux",
    price: 15000,
    oldPrice: null,
    description:
      "Bonnet thermique pour des soins capillaires professionnels à domicile. Optimise la pénétration des soins.",
    image: "images/products/bonnet-chauffant.jpg",
    badge: "Exclusif",
    rating: 5,
    stock: true,
    features: ["Professionnel", "Réutilisable", "Chauffage uniforme"],
  },
  {
    id: 17,
    name: "Masque Capillaire Intense",
    category: "cheveux",
    price: 6500,
    oldPrice: null,
    description:
      "Masque réparateur pour cheveux secs et abîmés. Répare et renforce la fibre capillaire.",
    image: "images/products/masque-capillaire.jpg",
    badge: null,
    rating: 4,
    stock: true,
    features: ["Réparateur", "Fortifiant", "Anti-casse"],
  },
  {
    id: 18,
    name: "Huile de Ricin Premium",
    category: "cheveux",
    price: 5500,
    oldPrice: null,
    description:
      "Stimule la pousse des cheveux et des cils naturellement. Huile 100% pure et pressée à froid.",
    image: "images/products/huile-ricin.jpg",
    badge: "Naturel",
    rating: 5,
    stock: true,
    features: ["Pousse accélérée", "100% Pur", "Cils et sourcils"],
  },
  {
    id: 19,
    name: "Sérum Pousse Express",
    category: "cheveux",
    price: 8000,
    oldPrice: null,
    description:
      "Sérum concentré pour stimuler la croissance capillaire et renforcer les cheveux fragiles.",
    image: "images/products/serum-pousse.jpg",
    badge: "Nouveau",
    rating: 5,
    stock: true,
    features: ["Croissance x2", "Anti-chute", "Renforçant"],
  },

  // ========== ACCESSOIRES ==========
  {
    id: 20,
    name: "Brosse Nettoyante Visage",
    category: "accessoires",
    price: 8000,
    oldPrice: null,
    description:
      "Brosse en silicone pour un nettoyage en profondeur. Vibrante et rechargeable.",
    image: "images/products/brosse-visage.jpg",
    badge: null,
    rating: 4,
    stock: true,
    features: ["Silicone doux", "Rechargeable", "Waterproof"],
  },
  {
    id: 21,
    name: "Bandeau Spa Luxe",
    category: "accessoires",
    price: 3000,
    oldPrice: null,
    description:
      "Bandeau doux et élégant pour vos soins beauté. Maintien parfait des cheveux.",
    image: "images/products/bandeau-spa.jpg",
    badge: null,
    rating: 5,
    stock: true,
    features: ["Velours doux", "Ajustable", "Lavable"],
  },
  {
    id: 22,
    name: "Kit Pinceaux Maquillage",
    category: "accessoires",
    price: 12000,
    oldPrice: 15000,
    description:
      "Set complet de 12 pinceaux professionnels avec pochette de rangement.",
    image: "images/products/kit-pinceaux.jpg",
    badge: "Promo",
    rating: 5,
    stock: true,
    features: ["12 pinceaux", "Poils synthétiques", "Pochette incluse"],
  },
  {
    id: 23,
    name: "Rouleau Jade Visage",
    category: "accessoires",
    price: 7000,
    oldPrice: null,
    description:
      "Rouleau en jade naturel pour masser et tonifier le visage. Effet anti-âge.",
    image: "images/products/rouleau-jade.jpg",
    badge: "Tendance",
    rating: 5,
    stock: true,
    features: ["Jade naturel", "Anti-âge", "Drainage lymphatique"],
  },
  {
    id: 24,
    name: "Gua Sha Quartz Rose",
    category: "accessoires",
    price: 5500,
    oldPrice: null,
    description:
      "Pierre de massage Gua Sha en quartz rose pour sculpter et lifter le visage.",
    image: "images/products/gua-sha.jpg",
    badge: null,
    rating: 4,
    stock: true,
    features: ["Quartz rose", "Sculptant", "Relaxant"],
  },
];

// ============================================
// TÉMOIGNAGES
// ============================================
const TESTIMONIALS = [
  {
    id: 1,
    text: "Les produits Lumière d'Or ont complètement transformé ma peau. Le sérum anti-tache est incroyable ! En quelques semaines, mes taches ont considérablement diminué. Je ne peux plus m'en passer !",
    author: "Sarah M.",
    role: "Cliente fidèle depuis 2 ans",
    avatar: "S",
    image: null,
    rating: 5,
    product: "Sérum Anti-Taches Éclat",
  },
  {
    id: 2,
    text: "Enfin des produits naturels qui fonctionnent vraiment ! Le savon au curcuma a rendu ma peau lumineuse et uniforme. Je recommande à 100% cette marque exceptionnelle !",
    author: "Aminata K.",
    role: "Nouvelle cliente",
    avatar: "A",
    image: null,
    rating: 5,
    product: "Savon Curcuma Gold",
  },
  {
    id: 3,
    text: "Service client exceptionnel et produits de qualité supérieure. Le bonnet chauffant pour mes cheveux est devenu indispensable dans ma routine capillaire hebdomadaire.",
    author: "Fatou D.",
    role: "Cliente VIP",
    avatar: "F",
    image: null,
    rating: 5,
    product: "Bonnet Chauffant Pro",
  },
  {
    id: 4,
    text: "J'utilise le lait corporel au karité depuis 3 mois. Ma peau n'a jamais été aussi douce et hydratée, même en saison sèche. Un produit miracle !",
    author: "Marie-Claire T.",
    role: "Cliente régulière",
    avatar: "M",
    image: null,
    rating: 5,
    product: "Lait Corporel Karité",
  },
  {
    id: 5,
    text: "Les savons sont d'une qualité exceptionnelle. Mon préféré est le savon au lait de chèvre, parfait pour ma peau sensible qui réagit à tout.",
    author: "Patricia N.",
    role: "Cliente satisfaite",
    avatar: "P",
    image: null,
    rating: 5,
    product: "Savon Lait de Chèvre",
  },
  {
    id: 6,
    text: "L'huile de ricin a fait des miracles sur mes cils et sourcils ! En 1 mois, j'ai vu une vraie différence. Produit 100% naturel et efficace.",
    author: "Christelle B.",
    role: "Influenceuse beauté",
    avatar: "C",
    image: null,
    rating: 5,
    product: "Huile de Ricin Premium",
  },
];

// ============================================
// UTILITAIRES
// ============================================
const Utils = {
  // Formater le prix
  formatPrice(price) {
    return new Intl.NumberFormat("fr-FR").format(price) + " " + CONFIG.currency;
  },

  // Valider un email
  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },

  // Générer un ID unique
  generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  },

  // Debounce
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle
  throttle(func, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Détecter mobile
  isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
  },

  // Détecter tactile
  isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  },

  // Scroll vers élément
  scrollToElement(element, offset = 100) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  },

  // Créer élément avec attributs
  createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === "className") {
        element.className = value;
      } else if (key === "innerHTML") {
        element.innerHTML = value;
      } else if (key.startsWith("on")) {
        element.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        element.setAttribute(key, value);
      }
    });
    children.forEach((child) => {
      if (typeof child === "string") {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
    return element;
  },
};

// ============================================
// GESTIONNAIRE DE NOTIFICATIONS
// ============================================
class NotificationManager {
  constructor() {
    this.container = null;
    this.init();
  }

  init() {
    this.container = document.createElement("div");
    this.container.className = "notification-container";
    this.container.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      z-index: 10001;
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 400px;
      pointer-events: none;
    `;
    document.body.appendChild(this.container);
  }

  show(message, type = "success", duration = 5000) {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
      background: ${
        type === "success"
          ? "linear-gradient(135deg, #d4af37, #f4e4bc)"
          : type === "error"
            ? "linear-gradient(135deg, #ff4444, #ff6b6b)"
            : "linear-gradient(135deg, #333, #555)"
      };
      color: ${type === "success" ? "#000" : "#fff"};
      padding: 18px 25px;
      border-radius: 15px;
      font-weight: 500;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      transform: translateX(120%);
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: auto;
    `;

    notification.innerHTML = `
      <span>${message}</span>
      <button style="
        background: transparent;
        border: none;
        color: inherit;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.3s;
        padding: 0;
        line-height: 1;
      " onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.7'">
        <i class="fas fa-times"></i>
      </button>
    `;

    this.container.appendChild(notification);

    // Animation d'entrée
    requestAnimationFrame(() => {
      notification.style.transform = "translateX(0)";
    });

    // Fermeture au clic
    const closeBtn = notification.querySelector("button");
    const close = () => {
      notification.style.transform = "translateX(120%)";
      setTimeout(() => notification.remove(), 400);
    };

    closeBtn.addEventListener("click", close);

    // Fermeture automatique
    if (duration > 0) {
      setTimeout(close, duration);
    }

    return notification;
  }

  success(message, duration) {
    return this.show(message, "success", duration);
  }

  error(message, duration) {
    return this.show(message, "error", duration);
  }

  info(message, duration) {
    return this.show(message, "info", duration);
  }
}

// ============================================
// GESTIONNAIRE DE FAVORIS
// ============================================
class WishlistManager {
  constructor() {
    this.items = this.load();
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem("lumiere_wishlist")) || [];
    } catch {
      return [];
    }
  }

  save() {
    localStorage.setItem("lumiere_wishlist", JSON.stringify(this.items));
  }

  toggle(productId) {
    const index = this.items.indexOf(productId);
    if (index > -1) {
      this.items.splice(index, 1);
      this.save();
      return false;
    } else {
      this.items.push(productId);
      this.save();
      return true;
    }
  }

  has(productId) {
    return this.items.includes(productId);
  }

  getAll() {
    return this.items;
  }

  count() {
    return this.items.length;
  }
}

// ============================================
// CLASSE PRINCIPALE DE L'APPLICATION
// ============================================
class LumiereApp {
  constructor() {
    this.notifications = new NotificationManager();
    this.wishlist = new WishlistManager();
    this.carouselPosition = 0;
    this.currentTestimonial = 0;
    this.heroSlideIndex = 0;
    this.isMenuOpen = false;

    this.init();
  }

  init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.onReady());
    } else {
      this.onReady();
    }
  }

  onReady() {
    console.log("✨ Lumière d'Or - Initialisation...");

    // Initialiser tous les modules
    this.initPreloader();
    this.initCustomCursor();
    this.initParticles();
    this.initNavigation();
    this.initHeroSlider();
    this.initProducts();
    this.initCarousel();
    this.initFilters();
    this.initTestimonials();
    this.initCounters();
    this.initScrollAnimations();
    this.initForms();
    this.initBackToTop();
    this.initPlaceholders();
    this.initSmoothScroll();
    this.initLazyLoading();
    this.initKeyboardNavigation();
    this.initResizeHandler();

    console.log("✅ Lumière d'Or - Site prêt !");
  }

  // ============================================
  // PRELOADER
  // ============================================
  initPreloader() {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;

    const progressBar = preloader.querySelector(".preloader-progress");
    let progress = 0;

    const updateProgress = () => {
      progress += Math.random() * 20 + 5;

      if (progress >= 100) {
        progress = 100;
        if (progressBar) progressBar.style.width = "100%";

        setTimeout(() => {
          preloader.classList.add("hidden");
          document.body.style.overflow = "";

          // Trigger animations après le preloader
          setTimeout(() => {
            document
              .querySelectorAll(
                ".reveal, .reveal-left, .reveal-right, .reveal-scale",
              )
              .forEach((el) => {
                if (this.isElementInViewport(el)) {
                  el.classList.add("active");
                }
              });
          }, 100);

          setTimeout(() => preloader.remove(), 800);
        }, 300);
      } else {
        if (progressBar) progressBar.style.width = `${progress}%`;
        requestAnimationFrame(() =>
          setTimeout(updateProgress, 50 + Math.random() * 100),
        );
      }
    };

    updateProgress();

    // Fallback de sécurité
    setTimeout(() => {
      if (!preloader.classList.contains("hidden")) {
        preloader.classList.add("hidden");
        document.body.style.overflow = "";
      }
    }, 5000);
  }

  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  // ============================================
  // CURSEUR PERSONNALISÉ
  // ============================================
  initCustomCursor() {
    if (!CONFIG.enableCursor) return;

    const cursor = document.querySelector(".cursor");
    const cursorDot = document.querySelector(".cursor-dot");

    if (!cursor || !cursorDot) return;

    // Désactiver sur tactile
    if (Utils.isTouchDevice()) {
      cursor.style.display = "none";
      cursorDot.style.display = "none";
      return;
    }

    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;
    let isVisible = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        cursor.style.opacity = "1";
        cursorDot.style.opacity = "1";
        isVisible = true;
      }

      cursorDot.style.left = mouseX + "px";
      cursorDot.style.top = mouseY + "px";
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";

      requestAnimationFrame(animateCursor);
    };

    document.addEventListener("mousemove", onMouseMove);
    animateCursor();

    // Effet au survol
    const interactiveSelectors =
      "a, button, .product-card, .filter-btn, .overlay-btn, input, textarea, .gallery-item, .testimonial-item, .dot";

    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursor.classList.add("active");
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursor.classList.remove("active");
      }
    });

    // Masquer lors de la sortie
    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
      cursorDot.style.opacity = "0";
      isVisible = false;
    });

    document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1";
      cursorDot.style.opacity = "1";
      isVisible = true;
    });
  }

  // ============================================
  // PARTICULES FLOTTANTES
  // ============================================
  initParticles() {
    if (!CONFIG.enableParticles) return;

    const container = document.getElementById("particles");
    if (!container) return;

    // Réduire sur mobile pour la performance
    const count = Utils.isMobile()
      ? Math.floor(CONFIG.particlesCount / 2)
      : CONFIG.particlesCount;

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      const size = Math.random() * 5 + 2;
      const left = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = Math.random() * 4 + 6;

      particle.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        opacity: ${Math.random() * 0.4 + 0.1};
      `;

      fragment.appendChild(particle);
    }

    container.appendChild(fragment);
  }

  // ============================================
  // NAVIGATION
  // ============================================
  initNavigation() {
    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileLinks = mobileMenu?.querySelectorAll("a");

    let lastScroll = 0;
    let ticking = false;

    // Effet au scroll
    const updateNavbar = () => {
      const currentScroll = window.pageYOffset;

      if (navbar) {
        // Ajouter/retirer classe scrolled
        navbar.classList.toggle("scrolled", currentScroll > 50);

        // Masquer/afficher au scroll (seulement sur desktop)
        if (!Utils.isMobile() && currentScroll > 500) {
          if (currentScroll > lastScroll) {
            navbar.style.transform = "translateY(-100%)";
          } else {
            navbar.style.transform = "translateY(0)";
          }
        } else {
          navbar.style.transform = "translateY(0)";
        }
      }

      lastScroll = currentScroll;
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(updateNavbar);
          ticking = true;
        }
      },
      { passive: true },
    );

    // Menu mobile
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        this.isMenuOpen = !this.isMenuOpen;
        menuToggle.classList.toggle("active", this.isMenuOpen);
        mobileMenu.classList.toggle("active", this.isMenuOpen);
        document.body.style.overflow = this.isMenuOpen ? "hidden" : "";
      });

      // Fermer au clic sur un lien
      mobileLinks?.forEach((link) => {
        link.addEventListener("click", () => {
          this.isMenuOpen = false;
          menuToggle.classList.remove("active");
          mobileMenu.classList.remove("active");
          document.body.style.overflow = "";
        });
      });

      // Fermer avec Escape
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.isMenuOpen) {
          this.isMenuOpen = false;
          menuToggle.classList.remove("active");
          mobileMenu.classList.remove("active");
          document.body.style.overflow = "";
        }
      });
    }

    // Liens actifs
    this.initActiveLinks();
  }

  initActiveLinks() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(
      ".nav-links a, .mobile-menu .nav-links a",
    );

    const updateActiveLink = Utils.throttle(() => {
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 200;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${sectionId}`,
            );
          });
        }
      });
    }, 100);

    window.addEventListener("scroll", updateActiveLink, { passive: true });
  }

  // ============================================
  // HERO SLIDER
  // ============================================
  initHeroSlider() {
    const slides = document.querySelectorAll(".hero-slide");
    if (slides.length <= 1) return;

    const nextSlide = () => {
      slides[this.heroSlideIndex].classList.remove("active");
      this.heroSlideIndex = (this.heroSlideIndex + 1) % slides.length;
      slides[this.heroSlideIndex].classList.add("active");
    };

    setInterval(nextSlide, CONFIG.heroSliderInterval);
  }

  // ============================================
  // GÉNÉRATION DES PRODUITS
  // ============================================
  initProducts() {
    this.renderCarouselProducts();
    this.renderGridProducts();
  }

  renderCarouselProducts(filter = "all") {
    const carousel = document.getElementById("productsCarousel");
    if (!carousel) return;

    let products =
      filter === "all"
        ? PRODUCTS.filter((p) => p.badge)
        : PRODUCTS.filter((p) => p.category === filter);

    if (products.length === 0) {
      products = PRODUCTS.slice(0, 6);
    }

    carousel.innerHTML = products
      .map((p) => this.createProductCard(p))
      .join("");

    this.carouselPosition = 0;
    carousel.style.transform = "translateX(0)";

    this.attachProductEvents();
  }

  renderGridProducts(filter = "all") {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    const products =
      filter === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === filter);

    grid.innerHTML = products.map((p) => this.createProductCard(p)).join("");

    // Animation d'entrée échelonnée
    const cards = grid.querySelectorAll(".product-card");
    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";

      setTimeout(() => {
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 80);
    });

    this.attachProductEvents();
  }

  createProductCard(product) {
    const whatsappMessage = encodeURIComponent(
      `Bonjour, je suis intéressé(e) par "${product.name}" à ${Utils.formatPrice(product.price)}. Est-il disponible ?`,
    );
    const whatsappLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${whatsappMessage}`;

    const isInWishlist = this.wishlist.has(product.id);

    return `
      <div class="product-card" data-category="${product.category}" data-id="${product.id}">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy"
               onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\\'fas fa-spa placeholder-icon\\'></i>'">
          <div class="product-overlay">
            <button class="overlay-btn quick-view-btn" data-id="${product.id}" aria-label="Aperçu rapide">
              <i class="fas fa-eye"></i>
            </button>
            <button class="overlay-btn wishlist-btn ${isInWishlist ? "active" : ""}" data-id="${product.id}" aria-label="Favoris">
              <i class="${isInWishlist ? "fas" : "far"} fa-heart"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-category">${this.getCategoryLabel(product.category)}</span>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-rating">${this.createRatingStars(product.rating)}</div>
          <p class="product-description">${product.description}</p>
          <div class="product-footer">
            <div class="product-price">
              ${Utils.formatPrice(product.price)}
              ${product.oldPrice ? `<span>${Utils.formatPrice(product.oldPrice)}</span>` : ""}
            </div>
            <a href="${whatsappLink}" class="btn-order" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-whatsapp"></i>
              <span>Acheter</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  createRatingStars(rating) {
    return Array.from(
      { length: 5 },
      (_, i) => `<i class="${i < rating ? "fas" : "far"} fa-star"></i>`,
    ).join("");
  }

  getCategoryLabel(category) {
    const labels = {
      savons: "Savons",
      soins: "Soins Visage",
      corps: "Soins Corps",
      cheveux: "Soins Cheveux",
      accessoires: "Accessoires",
    };
    return labels[category] || category;
  }

  attachProductEvents() {
    // Quick View
    document.querySelectorAll(".quick-view-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.showQuickView(parseInt(btn.dataset.id));
      });
    });

    // Wishlist
    document.querySelectorAll(".wishlist-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const productId = parseInt(btn.dataset.id);
        const isAdded = this.wishlist.toggle(productId);

        // Mettre à jour tous les boutons du même produit
        document
          .querySelectorAll(`.wishlist-btn[data-id="${productId}"]`)
          .forEach((b) => {
            b.classList.toggle("active", isAdded);
            const icon = b.querySelector("i");
            icon.className = isAdded ? "fas fa-heart" : "far fa-heart";
          });

        // Animation
        btn.style.transform = "scale(1.3)";
        setTimeout(() => (btn.style.transform = ""), 200);

        const product = PRODUCTS.find((p) => p.id === productId);
        this.notifications.success(
          isAdded
            ? `${product?.name || "Produit"} ajouté aux favoris ❤️`
            : `${product?.name || "Produit"} retiré des favoris`,
        );
      });
    });
  }

  showQuickView(productId) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    // Supprimer modal existante
    document.querySelector(".quick-view-modal")?.remove();

    const modal = document.createElement("div");
    modal.className = "quick-view-modal";
    modal.innerHTML = `
      <div class="quick-view-overlay"></div>
      <div class="quick-view-content">
        <button class="quick-view-close" aria-label="Fermer">
          <i class="fas fa-times"></i>
        </button>
        <div class="quick-view-image">
          <img src="${product.image}" alt="${product.name}"
               onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%231a1a1a%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 text-anchor=%22middle%22 fill=%22%23d4af37%22 font-size=%2230%22>✨</text></svg>'">
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        </div>
        <div class="quick-view-info">
          <span class="product-category">${this.getCategoryLabel(product.category)}</span>
          <h2>${product.name}</h2>
          <div class="product-rating">${this.createRatingStars(product.rating)}</div>
          <p class="product-description">${product.description}</p>
          ${
            product.features
              ? `
            <div class="product-features">
              ${product.features.map((f) => `<span class="feature-tag"><i class="fas fa-check"></i> ${f}</span>`).join("")}
            </div>
          `
              : ""
          }
          <div class="product-price">
            ${Utils.formatPrice(product.price)}
            ${product.oldPrice ? `<span class="old-price">${Utils.formatPrice(product.oldPrice)}</span>` : ""}
          </div>
          <div class="quick-view-actions">
            <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`Bonjour, je souhaite commander "${product.name}" à ${Utils.formatPrice(product.price)}`)}" 
               class="btn-primary" target="_blank" rel="noopener">
              <i class="fab fa-whatsapp"></i> Commander Maintenant
            </a>
            <button class="btn-secondary wishlist-modal-btn" data-id="${product.id}">
              <i class="${this.wishlist.has(product.id) ? "fas" : "far"} fa-heart"></i>
              ${this.wishlist.has(product.id) ? "Dans vos favoris" : "Ajouter aux favoris"}
            </button>
          </div>
        </div>
      </div>
    `;

    // Ajouter les styles
    this.addQuickViewStyles();

    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";

    // Animation d'entrée
    requestAnimationFrame(() => {
      modal.classList.add("active");
    });

    // Événements de fermeture
    const closeModal = () => {
      modal.classList.remove("active");
      setTimeout(() => {
        modal.remove();
        document.body.style.overflow = "";
      }, 300);
    };

    modal
      .querySelector(".quick-view-overlay")
      .addEventListener("click", closeModal);
    modal
      .querySelector(".quick-view-close")
      .addEventListener("click", closeModal);

    // Wishlist dans la modal
    modal
      .querySelector(".wishlist-modal-btn")
      ?.addEventListener("click", (e) => {
        const btn = e.currentTarget;
        const isAdded = this.wishlist.toggle(productId);

        btn.innerHTML = `
        <i class="${isAdded ? "fas" : "far"} fa-heart"></i>
        ${isAdded ? "Dans vos favoris" : "Ajouter aux favoris"}
      `;

        // Mettre à jour les boutons de la grille aussi
        document
          .querySelectorAll(`.wishlist-btn[data-id="${productId}"]`)
          .forEach((b) => {
            b.classList.toggle("active", isAdded);
            b.querySelector("i").className = isAdded
              ? "fas fa-heart"
              : "far fa-heart";
          });

        this.notifications.success(
          isAdded ? "Ajouté aux favoris ❤️" : "Retiré des favoris",
        );
      });

    // Fermer avec Escape
    const escHandler = (e) => {
      if (e.key === "Escape") {
        closeModal();
        document.removeEventListener("keydown", escHandler);
      }
    };
    document.addEventListener("keydown", escHandler);
  }

  addQuickViewStyles() {
    if (document.getElementById("quick-view-styles")) return;

    const style = document.createElement("style");
    style.id = "quick-view-styles";
    style.textContent = `
      .quick-view-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
      }
      .quick-view-modal.active {
        opacity: 1;
        visibility: visible;
      }
      .quick-view-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(10px);
      }
      .quick-view-content {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        background: #1a1a1a;
        border: 1px solid rgba(212, 175, 55, 0.2);
        border-radius: 25px;
        padding: 40px;
        max-width: 950px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        transform: scale(0.9) translateY(20px);
        transition: transform 0.3s ease;
      }
      .quick-view-modal.active .quick-view-content {
        transform: scale(1) translateY(0);
      }
      .quick-view-close {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 45px;
        height: 45px;
        background: rgba(212, 175, 55, 0.1);
        border: none;
        border-radius: 50%;
        color: #d4af37;
        font-size: 1.2rem;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 10;
      }
      .quick-view-close:hover {
        background: #d4af37;
        color: #000;
        transform: rotate(90deg);
      }
      .quick-view-image {
        border-radius: 20px;
        overflow: hidden;
        background: #2a2a2a;
        position: relative;
        aspect-ratio: 1;
      }
      .quick-view-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .quick-view-image .product-badge {
        position: absolute;
        top: 15px;
        left: 15px;
      }
      .quick-view-info {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 10px 0;
      }
      .quick-view-info h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2rem;
        color: #fff;
        margin: 0;
        line-height: 1.2;
      }
      .quick-view-info .product-category {
        color: #d4af37;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .quick-view-info .product-description {
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.8;
        font-size: 1rem;
      }
      .quick-view-info .product-rating {
        color: #d4af37;
        font-size: 1rem;
      }
      .quick-view-info .product-price {
        font-size: 2rem;
        font-weight: 700;
        color: #d4af37;
        display: flex;
        align-items: center;
        gap: 15px;
      }
      .quick-view-info .old-price {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.4);
        text-decoration: line-through;
      }
      .product-features {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin: 10px 0;
      }
      .feature-tag {
        background: rgba(212, 175, 55, 0.1);
        color: #d4af37;
        padding: 8px 15px;
        border-radius: 50px;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .feature-tag i {
        font-size: 0.7rem;
      }
      .quick-view-actions {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 15px;
      }
      .quick-view-actions .btn-primary,
      .quick-view-actions .btn-secondary {
        width: 100%;
        justify-content: center;
        padding: 18px 30px;
      }
      .wishlist-modal-btn {
        background: transparent;
        border: 2px solid rgba(212, 175, 55, 0.3);
        color: #fff;
        border-radius: 50px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      .wishlist-modal-btn:hover {
        border-color: #d4af37;
        color: #d4af37;
      }
      @media (max-width: 768px) {
        .quick-view-content {
          grid-template-columns: 1fr;
          padding: 20px;
          gap: 20px;
          max-height: 95vh;
        }
        .quick-view-image {
          max-height: 300px;
        }
        .quick-view-info h2 {
          font-size: 1.5rem;
        }
        .quick-view-info .product-price {
          font-size: 1.5rem;
        }
        .quick-view-close {
          top: 10px;
          right: 10px;
          width: 40px;
          height: 40px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // ============================================
  // CARROUSEL DE PRODUITS
  // ============================================
  initCarousel() {
    const carousel = document.getElementById("productsCarousel");
    const prevBtn = document.getElementById("carouselPrev");
    const nextBtn = document.getElementById("carouselNext");

    if (!carousel || !prevBtn || !nextBtn) return;

    const isMobile = Utils.isMobile();

    if (isMobile) {
      // Mode mobile : scroll natif
      carousel.style.scrollSnapType = "x mandatory";
      carousel.style.overflowX = "auto";
      carousel.style.webkitOverflowScrolling = "touch";
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
      return;
    }

    // Mode desktop : navigation par boutons
    const getCardWidth = () => {
      const card = carousel.querySelector(".product-card");
      return card ? card.offsetWidth + 20 : 350;
    };

    const getVisibleCards = () => {
      return (
        Math.floor(carousel.parentElement.offsetWidth / getCardWidth()) || 1
      );
    };

    const updateCarousel = () => {
      const cards = carousel.querySelectorAll(".product-card");
      const cardWidth = getCardWidth();
      const visibleCards = getVisibleCards();
      const maxPosition = Math.max(
        0,
        (cards.length - visibleCards) * cardWidth,
      );

      this.carouselPosition = Math.max(
        0,
        Math.min(this.carouselPosition, maxPosition),
      );
      carousel.style.transform = `translateX(-${this.carouselPosition}px)`;

      prevBtn.style.opacity = this.carouselPosition <= 0 ? "0.3" : "1";
      prevBtn.style.pointerEvents =
        this.carouselPosition <= 0 ? "none" : "auto";
      nextBtn.style.opacity =
        this.carouselPosition >= maxPosition ? "0.3" : "1";
      nextBtn.style.pointerEvents =
        this.carouselPosition >= maxPosition ? "none" : "auto";
    };

    prevBtn.addEventListener("click", () => {
      this.carouselPosition -= getCardWidth();
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      this.carouselPosition += getCardWidth();
      updateCarousel();
    });

    updateCarousel();

    // Autoplay
    if (CONFIG.carouselAutoplay) {
      let autoplayTimer = setInterval(() => {
        const cards = carousel.querySelectorAll(".product-card");
        const cardWidth = getCardWidth();
        const maxPosition = (cards.length - getVisibleCards()) * cardWidth;

        this.carouselPosition =
          this.carouselPosition >= maxPosition
            ? 0
            : this.carouselPosition + cardWidth;
        updateCarousel();
      }, CONFIG.carouselInterval);

      carousel.addEventListener("mouseenter", () =>
        clearInterval(autoplayTimer),
      );
      carousel.addEventListener("mouseleave", () => {
        autoplayTimer = setInterval(() => {
          const cards = carousel.querySelectorAll(".product-card");
          const cardWidth = getCardWidth();
          const maxPosition = (cards.length - getVisibleCards()) * cardWidth;

          this.carouselPosition =
            this.carouselPosition >= maxPosition
              ? 0
              : this.carouselPosition + cardWidth;
          updateCarousel();
        }, CONFIG.carouselInterval);
      });
    }

    // Recalculer au resize
    window.addEventListener(
      "resize",
      Utils.debounce(() => {
        if (Utils.isMobile()) {
          carousel.style.scrollSnapType = "x mandatory";
          carousel.style.overflowX = "auto";
          carousel.style.transform = "";
          prevBtn.style.display = "none";
          nextBtn.style.display = "none";
        } else {
          carousel.style.scrollSnapType = "";
          carousel.style.overflowX = "";
          prevBtn.style.display = "flex";
          nextBtn.style.display = "flex";
          this.carouselPosition = 0;
          updateCarousel();
        }
      }, 200),
    );
  }

  // ============================================
  // FILTRES DE CATÉGORIE
  // ============================================
  initFilters() {
    const filterContainer = document.getElementById("categoryFilter");
    if (!filterContainer) return;

    const buttons = filterContainer.querySelectorAll(".filter-btn");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        this.renderGridProducts(filter);

        // Animation du bouton
        btn.style.transform = "scale(0.95)";
        setTimeout(() => (btn.style.transform = ""), 150);

        // Scroll vers la grille
        const grid = document.getElementById("productsGrid");
        if (grid && Utils.isMobile()) {
          setTimeout(() => {
            Utils.scrollToElement(grid, 150);
          }, 300);
        }
      });
    });
  }

  // ============================================
  // TÉMOIGNAGES SLIDER
  // ============================================
  initTestimonials() {
    const track = document.getElementById("testimonialTrack");
    const dots = document.querySelectorAll(".testimonial-dots .dot");

    if (!track) return;

    const items = track.querySelectorAll(".testimonial-item");
    const total = items.length;

    const goToSlide = (index) => {
      this.currentTestimonial = ((index % total) + total) % total;
      track.style.transform = `translateX(-${this.currentTestimonial * 100}%)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === this.currentTestimonial);
      });
    };

    // Clic sur les dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => goToSlide(index));
    });

    // Autoplay
    let autoplayTimer = setInterval(() => {
      goToSlide(this.currentTestimonial + 1);
    }, CONFIG.testimonialInterval);

    // Pause au survol
    track.addEventListener("mouseenter", () => clearInterval(autoplayTimer));
    track.addEventListener("mouseleave", () => {
      autoplayTimer = setInterval(() => {
        goToSlide(this.currentTestimonial + 1);
      }, CONFIG.testimonialInterval);
    });

    // Swipe tactile
    let startX = 0;
    let isDragging = false;

    track.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
      },
      { passive: true },
    );

    track.addEventListener(
      "touchend",
      (e) => {
        if (!isDragging) return;

        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {
          goToSlide(
            diff > 0
              ? this.currentTestimonial + 1
              : this.currentTestimonial - 1,
          );
        }

        isDragging = false;
      },
      { passive: true },
    );
  }

  // ============================================
  // COMPTEURS ANIMÉS
  // ============================================
  initCounters() {
    const counters = document.querySelectorAll(".stat-number");
    if (counters.length === 0) return;

    const animateCounter = (counter) => {
      const target = parseInt(counter.dataset.count) || 0;
      const duration = 2000;
      const startTime = performance.now();

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic

        const current = Math.floor(easeProgress * target);
        counter.textContent = current;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = target + (target === 100 ? "%" : "+");
        }
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  // ============================================
  // ANIMATIONS AU SCROLL
  // ============================================
  initScrollAnimations() {
    const reveals = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale",
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    reveals.forEach((el) => revealObserver.observe(el));

    // Parallax pour les formes (desktop uniquement)
    if (!Utils.isMobile()) {
      const shapes = document.querySelectorAll(".shape");

      window.addEventListener(
        "scroll",
        Utils.throttle(() => {
          const scrolled = window.pageYOffset;
          shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.05;
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.02}deg)`;
          });
        }, 16),
        { passive: true },
      );
    }
  }

  // ============================================
  // FORMULAIRES
  // ============================================
  initForms() {
    // Newsletter
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailInput = newsletterForm.querySelector("input[type='email']");
        const email = emailInput?.value?.trim();

        if (!email || !Utils.validateEmail(email)) {
          this.notifications.error(
            "❌ Veuillez entrer une adresse email valide.",
          );
          emailInput?.focus();
          return;
        }

        // Simuler l'envoi
        const button = newsletterForm.querySelector("button");
        const originalText = button.textContent;
        button.textContent = "Envoi...";
        button.disabled = true;

        setTimeout(() => {
          this.notifications.success(
            "🎉 Merci pour votre inscription ! Vous recevrez nos offres exclusives.",
          );
          newsletterForm.reset();
          button.textContent = originalText;
          button.disabled = false;
        }, 1000);
      });
    }

    // Contact
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Validation
        if (
          !data.name?.trim() ||
          !data.email?.trim() ||
          !data.subject?.trim() ||
          !data.message?.trim()
        ) {
          this.notifications.error("❌ Veuillez remplir tous les champs.");
          return;
        }

        if (!Utils.validateEmail(data.email)) {
          this.notifications.error("❌ Adresse email invalide.");
          return;
        }

        const submitBtn = contactForm.querySelector(".form-submit");
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;

        setTimeout(() => {
          this.notifications.success(
            "✅ Message envoyé avec succès ! Nous vous répondrons sous 24h.",
          );
          contactForm.reset();
          submitBtn.innerHTML = originalHTML;
          submitBtn.disabled = false;

          // Optionnel : ouvrir WhatsApp
          // const whatsappMsg = encodeURIComponent(`Nouveau message de ${data.name}\n\nEmail: ${data.email}\nSujet: ${data.subject}\n\nMessage:\n${data.message}`);
          // window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${whatsappMsg}`, '_blank');
        }, 1500);
      });
    }

    // Effet focus sur les champs
    document
      .querySelectorAll(".form-group input, .form-group textarea")
      .forEach((input) => {
        input.addEventListener("focus", () => {
          input.parentElement.classList.add("focused");
        });

        input.addEventListener("blur", () => {
          if (!input.value) {
            input.parentElement.classList.remove("focused");
          }
        });

        // Vérifier si déjà rempli
        if (input.value) {
          input.parentElement.classList.add("focused");
        }
      });
  }

  // ============================================
  // BOUTON RETOUR EN HAUT
  // ============================================
  initBackToTop() {
    const backToTop = document.getElementById("backToTop");
    if (!backToTop) return;

    const toggleVisibility = Utils.throttle(() => {
      backToTop.classList.toggle("visible", window.pageYOffset > 500);
    }, 100);

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ============================================
  // PLACEHOLDERS POUR IMAGES
  // ============================================
  initPlaceholders() {
    const createPlaceholder = (text = "✨") => {
      return `data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
          <rect fill="#1a1a1a" width="400" height="400"/>
          <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#d4af37" font-size="60">${text}</text>
        </svg>
      `)}`;
    };

    // About placeholders
    document.querySelectorAll(".about-placeholder").forEach((img) => {
      if (
        !img.src ||
        img.src === window.location.href ||
        img.src.endsWith("/")
      ) {
        img.src = createPlaceholder("💎");
      }
    });

    // Gallery placeholders
    const galleryIcons = {
      "gallery-1": "🧴",
      "gallery-2": "✨",
      "gallery-3": "💎",
      "gallery-4": "🌿",
      "gallery-5": "💆",
    };

    document.querySelectorAll(".gallery-placeholder").forEach((img) => {
      if (
        !img.src ||
        img.src === window.location.href ||
        img.src.endsWith("/")
      ) {
        const placeholder = img.dataset.placeholder;
        img.src = createPlaceholder(galleryIcons[placeholder] || "✨");
      }
    });

    // Gestionnaire global d'erreur d'image
    document.addEventListener(
      "error",
      (e) => {
        if (e.target.tagName === "IMG" && !e.target.dataset.errorHandled) {
          e.target.dataset.errorHandled = "true";
          e.target.src = createPlaceholder();
        }
      },
      true,
    );
  }

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#" || targetId === "#!") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          Utils.scrollToElement(targetElement);
        }
      });
    });
  }

  // ============================================
  // LAZY LOADING
  // ============================================
  initLazyLoading() {
    const images = document.querySelectorAll("img[data-src]");

    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
              imageObserver.unobserve(img);
            }
          });
        },
        { rootMargin: "100px" },
      );

      images.forEach((img) => imageObserver.observe(img));
    } else {
      images.forEach((img) => {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
      });
    }
  }

  // ============================================
  // NAVIGATION CLAVIER
  // ============================================
  initKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      // Échap pour fermer les modals/menus
      if (e.key === "Escape") {
        document.querySelector(".quick-view-modal")?.remove();
        document.body.style.overflow = "";

        if (this.isMenuOpen) {
          document.getElementById("menuToggle")?.classList.remove("active");
          document.getElementById("mobileMenu")?.classList.remove("active");
          this.isMenuOpen = false;
        }
      }

      // Tab navigation améliorée
      if (e.key === "Tab") {
        document.body.classList.add("keyboard-nav");
      }
    });

    document.addEventListener("mousedown", () => {
      document.body.classList.remove("keyboard-nav");
    });
  }

  // ============================================
  // GESTIONNAIRE DE REDIMENSIONNEMENT
  // ============================================
  initResizeHandler() {
    let resizeTimer;

    window.addEventListener("resize", () => {
      document.body.classList.add("resize-animation-stopper");

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 400);
    });
  }
}

// ============================================
// EFFETS VISUELS SUPPLÉMENTAIRES
// ============================================
class VisualEffects {
  static init() {
    this.initHeroParallax();
    this.initTiltEffect();
    this.initRippleEffect();
    this.initMagneticButtons();
  }

  static initHeroParallax() {
    const heroContent = document.querySelector(".hero-content");
    if (!heroContent || Utils.isMobile()) return;

    window.addEventListener(
      "scroll",
      Utils.throttle(() => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
          heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
          heroContent.style.opacity = Math.max(
            0,
            1 - scrolled / (window.innerHeight * 0.8),
          );
        }
      }, 16),
      { passive: true },
    );
  }

  static initTiltEffect() {
    if (Utils.isTouchDevice()) return;

    const cards = document.querySelectorAll(".product-card, .feature-card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  static initRippleEffect() {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes ripple {
        to { transform: scale(4); opacity: 0; }
      }
      .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);

    document.addEventListener("click", (e) => {
      const button = e.target.closest(
        ".btn-primary, .btn-secondary, .filter-btn, .btn-order",
      );
      if (!button) return;

      const ripple = document.createElement("span");
      const rect = button.getBoundingClientRect();

      ripple.className = "ripple-effect";
      ripple.style.width = ripple.style.height =
        Math.max(rect.width, rect.height) + "px";
      ripple.style.left =
        e.clientX - rect.left - Math.max(rect.width, rect.height) / 2 + "px";
      ripple.style.top =
        e.clientY - rect.top - Math.max(rect.width, rect.height) / 2 + "px";

      button.style.position = "relative";
      button.style.overflow = "hidden";
      button.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  }

  static initMagneticButtons() {
    if (Utils.isTouchDevice()) return;

    const elements = document.querySelectorAll(
      ".nav-cta, .whatsapp-btn, .back-to-top",
    );

    elements.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });

      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }
}

// ============================================
// ANALYTICS & TRACKING
// ============================================
class Analytics {
  static track(category, action, label) {
    console.log(`📊 Event: ${category} | ${action} | ${label}`);

    // Intégration Google Analytics (si disponible)
    if (typeof gtag === "function") {
      gtag("event", action, {
        event_category: category,
        event_label: label,
      });
    }
  }

  static init() {
    // Tracker les clics sur les boutons d'achat
    document.addEventListener("click", (e) => {
      const orderBtn = e.target.closest(".btn-order");
      if (orderBtn) {
        const card = orderBtn.closest(".product-card");
        const productName =
          card?.querySelector(".product-name")?.textContent || "Unknown";
        this.track("Produit", "Clic Acheter", productName);
      }

      const quickViewBtn = e.target.closest(".quick-view-btn");
      if (quickViewBtn) {
        const card = quickViewBtn.closest(".product-card");
        const productName =
          card?.querySelector(".product-name")?.textContent || "Unknown";
        this.track("Produit", "Quick View", productName);
      }
    });

    // Tracker le scroll
    let maxScroll = 0;
    window.addEventListener(
      "scroll",
      Utils.throttle(() => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
            100,
        );
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent;
          this.track("Scroll", `${scrollPercent}%`, window.location.pathname);
        }
      }, 500),
      { passive: true },
    );
  }
}

// ============================================
// INITIALISATION GLOBALE
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  // Application principale
  window.lumiereApp = new LumiereApp();

  // Effets visuels (après un court délai pour ne pas bloquer le rendu)
  setTimeout(() => {
    VisualEffects.init();
    Analytics.init();
  }, 100);
});

// ============================================
// GESTION DES ERREURS GLOBALES
// ============================================
window.addEventListener("error", (e) => {
  console.warn("Erreur capturée:", e.message);
});

window.addEventListener("unhandledrejection", (e) => {
  console.warn("Promise rejetée:", e.reason);
});

// ============================================
// STYLES DYNAMIQUES POUR KEYBOARD NAV
// ============================================
const dynamicStyles = document.createElement("style");
dynamicStyles.textContent = `
  .keyboard-nav *:focus {
    outline: 2px solid #d4af37 !important;
    outline-offset: 3px;
  }
  
  .resize-animation-stopper * {
    animation: none !important;
    transition: none !important;
  }
  
  .product-rating {
    display: flex;
    gap: 2px;
    color: #d4af37;
    font-size: 0.85rem;
    margin-bottom: 10px;
  }
  
  .wishlist-btn.active {
    color: #ff4757;
  }
  
  .wishlist-btn.active i {
    color: #ff4757;
  }
`;
document.head.appendChild(dynamicStyles);

// ============================================
// EXPORT POUR UTILISATION EXTERNE
// ============================================
window.LumiereApp = LumiereApp;
window.PRODUCTS = PRODUCTS;
window.CONFIG = CONFIG;

console.log("🌟 Lumière d'Or - Script v2.0 chargé avec succès!");
