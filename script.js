/* ============================================
   LUMIÈRE D'OR - JAVASCRIPT PRINCIPAL
   Site Vitrine Cosmétique Premium
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
};

// ============================================
// BASE DE DONNÉES DES PRODUITS
// ============================================
const PRODUCTS = [
  // SAVONS
  {
    id: 1,
    name: "Savon Nila Premium",
    category: "savons",
    price: 3500,
    oldPrice: null,
    description:
      "Savon naturel au nila bleu pour un teint éclatant et uniforme",
    image: "images/products/savon-nila.jpg",
    badge: "Best-seller",
    rating: 5,
    stock: true,
  },
  {
    id: 2,
    name: "Savon Curcuma Gold",
    category: "savons",
    price: 3000,
    oldPrice: 3500,
    description:
      "Savon éclaircissant au curcuma pour une peau lumineuse et saine",
    image: "images/products/savon-curcuma.jpg",
    badge: "Promo",
    rating: 5,
    stock: true,
  },
  {
    id: 3,
    name: "Savon Carotte Intense",
    category: "savons",
    price: 2500,
    oldPrice: null,
    description: "Enrichi en bêta-carotène pour un effet bonne mine naturel",
    image: "images/products/savon-carotte.jpg",
    badge: null,
    rating: 4,
    stock: true,
  },
  {
    id: 4,
    name: "Savon Lait de Chèvre",
    category: "savons",
    price: 4000,
    oldPrice: null,
    description: "Douceur et hydratation intense pour les peaux sensibles",
    image: "images/products/savon-lait-chevre.jpg",
    badge: "Nouveau",
    rating: 5,
    stock: true,
  },
  {
    id: 5,
    name: "Savon Charbon Actif",
    category: "savons",
    price: 3500,
    oldPrice: null,
    description: "Purifie et détoxifie la peau en profondeur",
    image: "images/products/savon-charbon.jpg",
    badge: null,
    rating: 4,
    stock: true,
  },

  // SOINS VISAGE
  {
    id: 6,
    name: "Sérum Anti-Taches Éclat",
    category: "soins",
    price: 12000,
    oldPrice: 15000,
    description: "Sérum concentré pour éliminer les taches et unifier le teint",
    image: "images/products/serum-anti-taches.jpg",
    badge: "Top vente",
    rating: 5,
    stock: true,
  },
  {
    id: 7,
    name: "Crème Hydratante 24H",
    category: "soins",
    price: 8500,
    oldPrice: null,
    description: "Hydratation longue durée pour une peau douce et rebondie",
    image: "images/products/creme-hydratante.jpg",
    badge: null,
    rating: 5,
    stock: true,
  },
  {
    id: 8,
    name: "Huile de Carotte Pure",
    category: "soins",
    price: 6000,
    oldPrice: null,
    description: "Huile naturelle pour un teint hâlé et une peau nourrie",
    image: "images/products/huile-carotte.jpg",
    badge: "Naturel",
    rating: 4,
    stock: true,
  },
  {
    id: 9,
    name: "Masque Éclat Instantané",
    category: "soins",
    price: 5500,
    oldPrice: null,
    description: "Masque illuminateur pour un coup d'éclat immédiat",
    image: "images/products/masque-eclat.jpg",
    badge: null,
    rating: 4,
    stock: true,
  },

  // CORPS
  {
    id: 10,
    name: "Lait Corporel Karité",
    category: "corps",
    price: 7500,
    oldPrice: null,
    description: "Lait nourrissant au beurre de karité pour une peau satinée",
    image: "images/products/lait-karite.jpg",
    badge: "Coup de cœur",
    rating: 5,
    stock: true,
  },
  {
    id: 11,
    name: "Gommage Corps Café",
    category: "corps",
    price: 5000,
    oldPrice: null,
    description: "Exfoliant naturel au café pour une peau lisse et tonifiée",
    image: "images/products/gommage-cafe.jpg",
    badge: null,
    rating: 4,
    stock: true,
  },
  {
    id: 12,
    name: "Huile Sèche Précieuse",
    category: "corps",
    price: 9000,
    oldPrice: 11000,
    description: "Huile multi-usages pour le corps, le visage et les cheveux",
    image: "images/products/huile-seche.jpg",
    badge: "Promo",
    rating: 5,
    stock: true,
  },

  // CHEVEUX
  {
    id: 13,
    name: "Bonnet Chauffant Pro",
    category: "cheveux",
    price: 15000,
    oldPrice: null,
    description: "Bonnet thermique pour des soins capillaires professionnels",
    image: "images/products/bonnet-chauffant.jpg",
    badge: "Exclusif",
    rating: 5,
    stock: true,
  },
  {
    id: 14,
    name: "Masque Capillaire Intense",
    category: "cheveux",
    price: 6500,
    oldPrice: null,
    description: "Masque réparateur pour cheveux secs et abîmés",
    image: "images/products/masque-capillaire.jpg",
    badge: null,
    rating: 4,
    stock: true,
  },
  {
    id: 15,
    name: "Huile de Ricin Premium",
    category: "cheveux",
    price: 5500,
    oldPrice: null,
    description: "Stimule la pousse des cheveux et des cils naturellement",
    image: "images/products/huile-ricin.jpg",
    badge: "Naturel",
    rating: 5,
    stock: true,
  },

  // ACCESSOIRES
  {
    id: 16,
    name: "Brosse Nettoyante Visage",
    category: "accessoires",
    price: 8000,
    oldPrice: null,
    description: "Brosse en silicone pour un nettoyage en profondeur",
    image: "images/products/brosse-visage.jpg",
    badge: null,
    rating: 4,
    stock: true,
  },
  {
    id: 17,
    name: "Bandeau Spa Luxe",
    category: "accessoires",
    price: 3000,
    oldPrice: null,
    description: "Bandeau doux et élégant pour vos soins beauté",
    image: "images/products/bandeau-spa.jpg",
    badge: null,
    rating: 5,
    stock: true,
  },
  {
    id: 18,
    name: "Kit Pinceaux Maquillage",
    category: "accessoires",
    price: 12000,
    oldPrice: 15000,
    description: "Set complet de 12 pinceaux professionnels",
    image: "images/products/kit-pinceaux.jpg",
    badge: "Promo",
    rating: 5,
    stock: true,
  },
];

// ============================================
// TÉMOIGNAGES
// ============================================
const TESTIMONIALS = [
  {
    id: 1,
    text: "Les produits Lumière d'Or ont complètement transformé ma peau. Le sérum anti-tache est incroyable ! En quelques semaines, mes taches ont considérablement diminué.",
    author: "Sarah M.",
    role: "Cliente fidèle",
    avatar: "S",
    image: null,
  },
  {
    id: 2,
    text: "Enfin des produits naturels qui fonctionnent vraiment ! Le savon au curcuma a rendu ma peau lumineuse. Je recommande à 100% !",
    author: "Aminata K.",
    role: "Nouvelle cliente",
    avatar: "A",
    image: null,
  },
  {
    id: 3,
    text: "Service client exceptionnel et produits de qualité. Le bonnet chauffant pour mes cheveux est devenu indispensable dans ma routine capillaire.",
    author: "Fatou D.",
    role: "Cliente VIP",
    avatar: "F",
    image: null,
  },
  {
    id: 4,
    text: "J'utilise le lait corporel au karité depuis 3 mois. Ma peau n'a jamais été aussi douce et hydratée. Merci Lumière d'Or !",
    author: "Marie-Claire T.",
    role: "Cliente régulière",
    avatar: "M",
    image: null,
  },
  {
    id: 5,
    text: "Les savons sont d'une qualité exceptionnelle. Mon préféré est le savon au lait de chèvre, parfait pour ma peau sensible.",
    author: "Patricia N.",
    role: "Cliente satisfaite",
    avatar: "P",
    image: null,
  },
];

// ============================================
// CLASSE PRINCIPALE DE L'APPLICATION
// ============================================
class LumiereApp {
  constructor() {
    this.init();
  }

  init() {
    // Attendre le chargement du DOM
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

    console.log("✅ Lumière d'Or - Site prêt !");
  }

  // ============================================
  // PRELOADER
  // ============================================
  initPreloader() {
    const preloader = document.getElementById("preloader");

    if (!preloader) return;

    // Simuler le chargement
    let progress = 0;
    const progressBar = preloader.querySelector(".preloader-progress");

    const loadingInterval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(loadingInterval);

        // Masquer le preloader
        setTimeout(() => {
          preloader.classList.add("hidden");
          document.body.style.overflow = "visible";

          // Supprimer après l'animation
          setTimeout(() => {
            preloader.remove();
          }, 800);
        }, 500);
      }

      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    }, 100);

    // Fallback si le chargement prend trop de temps
    setTimeout(() => {
      if (!preloader.classList.contains("hidden")) {
        preloader.classList.add("hidden");
      }
    }, 5000);
  }

  // ============================================
  // CURSEUR PERSONNALISÉ
  // ============================================
  initCustomCursor() {
    const cursor = document.querySelector(".cursor");
    const cursorDot = document.querySelector(".cursor-dot");

    if (!cursor || !cursorDot) return;

    // Désactiver sur mobile/tablette
    if (window.matchMedia("(pointer: coarse)").matches) {
      cursor.style.display = "none";
      cursorDot.style.display = "none";
      return;
    }

    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;

    // Suivre la souris
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Mise à jour directe du point
      cursorDot.style.left = mouseX + "px";
      cursorDot.style.top = mouseY + "px";
    });

    // Animation fluide du cercle
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";

      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Effet au survol des liens
    const interactiveElements = document.querySelectorAll(
      "a, button, .product-card, .filter-btn, .overlay-btn, input, textarea",
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
      });

      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
      });
    });

    // Masquer lors de la sortie de la fenêtre
    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
      cursorDot.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1";
      cursorDot.style.opacity = "1";
    });
  }

  // ============================================
  // PARTICULES FLOTTANTES
  // ============================================
  initParticles() {
    const particlesContainer = document.getElementById("particles");

    if (!particlesContainer) return;

    // Créer les particules
    for (let i = 0; i < CONFIG.particlesCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      // Position aléatoire
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";

      // Taille aléatoire
      const size = Math.random() * 6 + 2;
      particle.style.width = size + "px";
      particle.style.height = size + "px";

      // Délai d'animation aléatoire
      particle.style.animationDelay = Math.random() * 8 + "s";
      particle.style.animationDuration = Math.random() * 4 + 6 + "s";

      // Opacité variable
      particle.style.opacity = Math.random() * 0.5 + 0.1;

      particlesContainer.appendChild(particle);
    }
  }

  // ============================================
  // NAVIGATION
  // ============================================
  initNavigation() {
    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileLinks = mobileMenu?.querySelectorAll("a");

    // Effet au scroll
    let lastScroll = 0;
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
          const currentScroll = window.pageYOffset;

          // Ajouter/retirer la classe scrolled
          if (currentScroll > 100) {
            navbar?.classList.add("scrolled");
          } else {
            navbar?.classList.remove("scrolled");
          }

          // Masquer/afficher au scroll (optionnel)
          if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.style.transform = "translateY(-100%)";
          } else {
            navbar.style.transform = "translateY(0)";
          }

          lastScroll = currentScroll;
          isScrolling = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Menu mobile toggle
    menuToggle?.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      mobileMenu?.classList.toggle("active");
      document.body.style.overflow = mobileMenu?.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Fermer le menu au clic sur un lien
    mobileLinks?.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle?.classList.remove("active");
        mobileMenu?.classList.remove("active");
        document.body.style.overflow = "";
      });
    });

    // Active link highlighting
    this.initActiveLinks();
  }

  initActiveLinks() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const highlightActiveLink = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 200;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", highlightActiveLink, { passive: true });
  }

  // ============================================
  // HERO SLIDER
  // ============================================
  initHeroSlider() {
    const slides = document.querySelectorAll(".hero-slide");

    if (slides.length <= 1) return;

    let currentSlide = 0;

    const nextSlide = () => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    };

    // Démarrer le slider automatique
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

    const filteredProducts =
      filter === "all"
        ? PRODUCTS.filter((p) => p.badge) // Produits avec badge pour le carrousel
        : PRODUCTS.filter((p) => p.category === filter);

    const productsToShow =
      filteredProducts.length > 0 ? filteredProducts : PRODUCTS.slice(0, 6);

    carousel.innerHTML = productsToShow
      .map((product) => this.createProductCard(product))
      .join("");

    // Réinitialiser la position du carrousel
    carousel.style.transform = "translateX(0)";
    this.carouselPosition = 0;

    // Ajouter les événements aux boutons
    this.attachProductEvents();
  }

  renderGridProducts(filter = "all") {
    const grid = document.getElementById("productsGrid");

    if (!grid) return;

    const filteredProducts =
      filter === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === filter);

    grid.innerHTML = filteredProducts
      .map((product) => this.createProductCard(product))
      .join("");

    // Animation d'entrée
    const cards = grid.querySelectorAll(".product-card");
    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";

      setTimeout(() => {
        card.style.transition = "all 0.5s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 100);
    });

    // Attacher les événements
    this.attachProductEvents();
  }

  createProductCard(product) {
    const whatsappMessage = encodeURIComponent(
      `Bonjour, je suis intéressé(e) par le produit "${product.name}" à ${this.formatPrice(product.price)}. Est-il disponible ?`,
    );

    const whatsappLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${whatsappMessage}`;

    const badgeHTML = product.badge
      ? `<span class="product-badge">${product.badge}</span>`
      : "";

    const oldPriceHTML = product.oldPrice
      ? `<span>${this.formatPrice(product.oldPrice)}</span>`
      : "";

    const ratingHTML = this.createRatingStars(product.rating);

    return `
      <div class="product-card" data-category="${product.category}" data-id="${product.id}">
        ${badgeHTML}
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" 
               onerror="this.parentElement.innerHTML='<i class=\\'fas fa-spa placeholder-icon\\'></i>'">
          <div class="product-overlay">
            <button class="overlay-btn quick-view-btn" data-id="${product.id}" title="Aperçu rapide">
              <i class="fas fa-eye"></i>
            </button>
            <button class="overlay-btn wishlist-btn" data-id="${product.id}" title="Ajouter aux favoris">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-category">${this.getCategoryLabel(product.category)}</span>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-rating">${ratingHTML}</div>
          <p class="product-description">${product.description}</p>
          <div class="product-footer">
            <div class="product-price">
              ${this.formatPrice(product.price)}
              ${oldPriceHTML}
            </div>
            <a href="${whatsappLink}" class="btn-order" target="_blank">
              <i class="fab fa-whatsapp"></i> Acheter
            </a>
          </div>
        </div>
      </div>
    `;
  }

  createRatingStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars += '<i class="fas fa-star"></i>';
      } else {
        stars += '<i class="far fa-star"></i>';
      }
    }
    return stars;
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

  formatPrice(price) {
    return new Intl.NumberFormat("fr-FR").format(price) + " " + CONFIG.currency;
  }

  attachProductEvents() {
    // Quick View
    document.querySelectorAll(".quick-view-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const productId = parseInt(btn.dataset.id);
        this.showQuickView(productId);
      });
    });

    // Wishlist
    document.querySelectorAll(".wishlist-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        btn.classList.toggle("active");
        btn.querySelector("i").classList.toggle("fas");
        btn.querySelector("i").classList.toggle("far");

        // Animation
        btn.style.transform = "scale(1.3)";
        setTimeout(() => {
          btn.style.transform = "scale(1)";
        }, 200);

        this.showNotification(
          btn.classList.contains("active")
            ? "Produit ajouté aux favoris ❤️"
            : "Produit retiré des favoris",
        );
      });
    });
  }

  showQuickView(productId) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    // Créer la modal
    const modal = document.createElement("div");
    modal.className = "quick-view-modal";
    modal.innerHTML = `
      <div class="quick-view-overlay"></div>
      <div class="quick-view-content">
        <button class="quick-view-close">
          <i class="fas fa-times"></i>
        </button>
        <div class="quick-view-image">
          <img src="${product.image}" alt="${product.name}"
               onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%231a1a1a%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 text-anchor=%22middle%22 fill=%22%23d4af37%22 font-size=%2230%22>✨</text></svg>'">
        </div>
        <div class="quick-view-info">
          <span class="product-category">${this.getCategoryLabel(product.category)}</span>
          <h2>${product.name}</h2>
          <div class="product-rating">${this.createRatingStars(product.rating)}</div>
          <p class="product-description">${product.description}</p>
          <div class="product-price">
            ${this.formatPrice(product.price)}
            ${product.oldPrice ? `<span>${this.formatPrice(product.oldPrice)}</span>` : ""}
          </div>
          <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`Bonjour, je souhaite commander "${product.name}" à ${this.formatPrice(product.price)}`)}" 
             class="btn-primary" target="_blank">
            <i class="fab fa-whatsapp"></i> Commander Maintenant
          </a>
        </div>
      </div>
    `;

    // Styles de la modal
    const style = document.createElement("style");
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
        animation: fadeIn 0.3s ease forwards;
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
        max-width: 900px;
        max-height: 90vh;
        overflow-y: auto;
        transform: scale(0.9);
        animation: scaleIn 0.3s ease forwards;
      }
      .quick-view-close {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background: rgba(212, 175, 55, 0.1);
        border: none;
        border-radius: 50%;
        color: #d4af37;
        font-size: 1.2rem;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .quick-view-close:hover {
        background: #d4af37;
        color: #000;
      }
      .quick-view-image {
        border-radius: 15px;
        overflow: hidden;
        background: #2a2a2a;
      }
      .quick-view-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .quick-view-info {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .quick-view-info h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2rem;
        color: #fff;
      }
      .quick-view-info .product-description {
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.8;
      }
      .quick-view-info .product-price {
        font-size: 1.8rem;
        font-weight: 700;
        color: #d4af37;
      }
      .quick-view-info .product-rating {
        color: #d4af37;
      }
      @keyframes fadeIn {
        to { opacity: 1; }
      }
      @keyframes scaleIn {
        to { transform: scale(1); }
      }
      @media (max-width: 768px) {
        .quick-view-content {
          grid-template-columns: 1fr;
          padding: 20px;
        }
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";

    // Fermeture
    const close = () => {
      modal.style.opacity = "0";
      setTimeout(() => {
        modal.remove();
        document.body.style.overflow = "";
      }, 300);
    };

    modal.querySelector(".quick-view-overlay").addEventListener("click", close);
    modal.querySelector(".quick-view-close").addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  // ============================================
  // CARROUSEL DE PRODUITS
  // ============================================
  initCarousel() {
    const carousel = document.getElementById("productsCarousel");
    const prevBtn = document.getElementById("carouselPrev");
    const nextBtn = document.getElementById("carouselNext");

    if (!carousel || !prevBtn || !nextBtn) return;

    this.carouselPosition = 0;
    const cardWidth = 380; // largeur carte + gap

    const updateCarousel = () => {
      const cards = carousel.querySelectorAll(".product-card");
      const maxPosition = Math.max(
        0,
        (cards.length -
          Math.floor(carousel.parentElement.offsetWidth / cardWidth)) *
          cardWidth,
      );

      this.carouselPosition = Math.min(
        Math.max(this.carouselPosition, 0),
        maxPosition,
      );
      carousel.style.transform = `translateX(-${this.carouselPosition}px)`;

      // Mise à jour des boutons
      prevBtn.style.opacity = this.carouselPosition <= 0 ? "0.5" : "1";
      nextBtn.style.opacity =
        this.carouselPosition >= maxPosition ? "0.5" : "1";
    };

    prevBtn.addEventListener("click", () => {
      this.carouselPosition -= cardWidth;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      this.carouselPosition += cardWidth;
      updateCarousel();
    });

    // Autoplay
    if (CONFIG.carouselAutoplay) {
      let autoplayInterval = setInterval(() => {
        const cards = carousel.querySelectorAll(".product-card");
        const maxPosition = (cards.length - 3) * cardWidth;

        if (this.carouselPosition >= maxPosition) {
          this.carouselPosition = 0;
        } else {
          this.carouselPosition += cardWidth;
        }
        updateCarousel();
      }, CONFIG.carouselInterval);

      // Pause au survol
      carousel.addEventListener("mouseenter", () => {
        clearInterval(autoplayInterval);
      });

      carousel.addEventListener("mouseleave", () => {
        autoplayInterval = setInterval(() => {
          const cards = carousel.querySelectorAll(".product-card");
          const maxPosition = (cards.length - 3) * cardWidth;

          if (this.carouselPosition >= maxPosition) {
            this.carouselPosition = 0;
          } else {
            this.carouselPosition += cardWidth;
          }
          updateCarousel();
        }, CONFIG.carouselInterval);
      });
    }

    // Swipe tactile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.touches[0].clientX;
      },
      { passive: true },
    );

    carousel.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            this.carouselPosition += cardWidth;
          } else {
            this.carouselPosition -= cardWidth;
          }
          updateCarousel();
        }
      },
      { passive: true },
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
        // Retirer la classe active de tous les boutons
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Filtrer les produits
        const filter = btn.dataset.filter;
        this.renderGridProducts(filter);

        // Animation du bouton
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
          btn.style.transform = "";
        }, 150);
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

    let currentTestimonial = 0;
    const totalTestimonials =
      document.querySelectorAll(".testimonial-item").length;

    const goToSlide = (index) => {
      currentTestimonial = index;
      track.style.transform = `translateX(-${index * 100}%)`;

      // Mise à jour des dots
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    };

    // Clic sur les dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => goToSlide(index));
    });

    // Autoplay
    setInterval(() => {
      const nextIndex = (currentTestimonial + 1) % totalTestimonials;
      goToSlide(nextIndex);
    }, CONFIG.testimonialInterval);

    // Swipe tactile
    let touchStartX = 0;

    track.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.touches[0].clientX;
      },
      { passive: true },
    );

    track.addEventListener(
      "touchend",
      (e) => {
        const diff = touchStartX - e.changedTouches[0].clientX;

        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            goToSlide((currentTestimonial + 1) % totalTestimonials);
          } else {
            goToSlide(
              (currentTestimonial - 1 + totalTestimonials) % totalTestimonials,
            );
          }
        }
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
      const target = parseInt(counter.dataset.count);
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + (target === 100 ? "%" : "+");
        }
      };

      updateCounter();
    };

    // Observer pour déclencher l'animation quand visible
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

    reveals.forEach((reveal) => revealObserver.observe(reveal));

    // Parallax effect pour les formes flottantes
    window.addEventListener(
      "scroll",
      () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll(".shape");

        shapes.forEach((shape, index) => {
          const speed = (index + 1) * 0.1;
          shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
      },
      { passive: true },
    );
  }

  // ============================================
  // FORMULAIRES
  // ============================================
  initForms() {
    // Formulaire Newsletter
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector("input[type='email']").value;

        if (this.validateEmail(email)) {
          this.showNotification(
            "🎉 Merci pour votre inscription ! Vous recevrez nos offres exclusives.",
          );
          newsletterForm.reset();

          // Animation de succès
          newsletterForm.style.transform = "scale(1.02)";
          setTimeout(() => {
            newsletterForm.style.transform = "";
          }, 200);
        } else {
          this.showNotification(
            "❌ Veuillez entrer une adresse email valide.",
            "error",
          );
        }
      });
    }

    // Formulaire Contact
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Validation
        if (!data.name || !data.email || !data.subject || !data.message) {
          this.showNotification(
            "❌ Veuillez remplir tous les champs.",
            "error",
          );
          return;
        }

        if (!this.validateEmail(data.email)) {
          this.showNotification("❌ Adresse email invalide.", "error");
          return;
        }

        // Simuler l'envoi
        const submitBtn = contactForm.querySelector(".form-submit");
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
        submitBtn.disabled = true;

        setTimeout(() => {
          this.showNotification(
            "✅ Message envoyé avec succès ! Nous vous répondrons sous 24h.",
          );
          contactForm.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;

          // Ouvrir WhatsApp avec le message
          const whatsappMessage = encodeURIComponent(
            `Nouveau message de ${data.name}\n\nEmail: ${data.email}\nSujet: ${data.subject}\n\nMessage:\n${data.message}`,
          );
          // window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${whatsappMessage}`, '_blank');
        }, 1500);
      });
    }

    // Animation des champs de formulaire
    const formInputs = document.querySelectorAll(
      ".form-group input, .form-group textarea",
    );

    formInputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentElement.classList.add("focused");
      });

      input.addEventListener("blur", () => {
        if (!input.value) {
          input.parentElement.classList.remove("focused");
        }
      });
    });
  }

  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  showNotification(message, type = "success") {
    // Supprimer les notifications existantes
    document.querySelectorAll(".notification").forEach((n) => n.remove());

    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <span>${message}</span>
      <button class="notification-close"><i class="fas fa-times"></i></button>
    `;

    // Styles
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 30px;
      background: ${type === "success" ? "linear-gradient(135deg, #d4af37, #f4e4bc)" : "#ff4444"};
      color: ${type === "success" ? "#000" : "#fff"};
      padding: 20px 30px;
      border-radius: 15px;
      font-weight: 500;
      z-index: 10001;
      display: flex;
      align-items: center;
      gap: 15px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      transform: translateX(120%);
      animation: slideInNotification 0.5s ease forwards;
      max-width: 400px;
    `;

    // Style du bouton de fermeture
    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideInNotification {
        to { transform: translateX(0); }
      }
      @keyframes slideOutNotification {
        to { transform: translateX(120%); }
      }
      .notification-close {
        background: transparent;
        border: none;
        color: inherit;
        font-size: 1rem;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.3s;
      }
      .notification-close:hover {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Fermeture automatique
    const closeNotification = () => {
      notification.style.animation = "slideOutNotification 0.3s ease forwards";
      setTimeout(() => notification.remove(), 300);
    };

    notification
      .querySelector(".notification-close")
      .addEventListener("click", closeNotification);
    setTimeout(closeNotification, 5000);
  }

  // ============================================
  // BOUTON RETOUR EN HAUT
  // ============================================
  initBackToTop() {
    const backToTop = document.getElementById("backToTop");

    if (!backToTop) return;

    // Afficher/masquer selon le scroll
    window.addEventListener(
      "scroll",
      () => {
        if (window.pageYOffset > 500) {
          backToTop.classList.add("visible");
        } else {
          backToTop.classList.remove("visible");
        }
      },
      { passive: true },
    );

    // Remonter en haut au clic
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // ============================================
  // PLACEHOLDERS POUR IMAGES MANQUANTES
  // ============================================
  initPlaceholders() {
    // Créer des placeholders SVG pour les images manquantes
    const placeholderSVG = (text, size = "large") => {
      const width = size === "large" ? 600 : 300;
      const height = size === "large" ? 400 : 300;
      return `data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
          <rect fill="#1a1a1a" width="${width}" height="${height}"/>
          <text x="50%" y="50%" text-anchor="middle" fill="#d4af37" font-size="40" font-family="serif">${text}</text>
        </svg>
      `)}`;
    };

    // Appliquer aux images du About
    document.querySelectorAll(".about-placeholder").forEach((img) => {
      if (!img.src || img.src === window.location.href) {
        img.src = placeholderSVG("✨", "large");
      }
    });

    // Appliquer aux images de la galerie
    document.querySelectorAll(".gallery-placeholder").forEach((img) => {
      if (!img.src || img.src === window.location.href) {
        const placeholder = img.dataset.placeholder;
        const icons = {
          "gallery-1": "🧴",
          "gallery-2": "✨",
          "gallery-3": "💎",
          "gallery-4": "🌿",
          "gallery-5": "💆",
        };
        img.src = placeholderSVG(icons[placeholder] || "✨");
      }
    });

    // Gestionnaire global d'erreur d'image
    document.addEventListener(
      "error",
      (e) => {
        if (e.target.tagName === "IMG") {
          e.target.src = placeholderSVG("✨");
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

        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();

          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  }

  // ============================================
  // LAZY LOADING DES IMAGES
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
        {
          rootMargin: "50px",
        },
      );

      images.forEach((img) => imageObserver.observe(img));
    } else {
      // Fallback pour les anciens navigateurs
      images.forEach((img) => {
        img.src = img.dataset.src;
      });
    }
  }
}

// ============================================
// EFFETS VISUELS SUPPLÉMENTAIRES
// ============================================

// Effet de parallaxe sur le hero
const initHeroParallax = () => {
  const hero = document.querySelector(".hero");
  const heroContent = document.querySelector(".hero-content");

  if (!hero || !heroContent) return;

  window.addEventListener(
    "scroll",
    () => {
      const scrolled = window.pageYOffset;

      if (scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
        heroContent.style.opacity = 1 - scrolled / window.innerHeight;
      }
    },
    { passive: true },
  );
};

// Effet de tilt sur les cartes produits
const initTiltEffect = () => {
  const cards = document.querySelectorAll(".product-card, .feature-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
};

// Effet de ripple sur les boutons
const initRippleEffect = () => {
  const buttons = document.querySelectorAll(
    ".btn-primary, .btn-secondary, .filter-btn, .btn-order",
  );

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();

      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        left: ${e.clientX - rect.left}px;
        top: ${e.clientY - rect.top}px;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        margin-top: -50px;
      `;

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Animation CSS pour le ripple
  const style = document.createElement("style");
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
};

// Effet de typing pour le titre hero
const initTypingEffect = () => {
  const heroTitle = document.querySelector(".hero-title");
  if (!heroTitle) return;

  // Effet optionnel : peut être activé si souhaité
  // const text = heroTitle.textContent;
  // heroTitle.textContent = '';
  // ... implémentation du typing
};

// Magnétisme sur les boutons CTA
const initMagneticButtons = () => {
  const magneticElements = document.querySelectorAll(
    ".nav-cta, .whatsapp-btn, .back-to-top",
  );

  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
};

// ============================================
// INITIALISATION
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialiser l'application principale
  const app = new LumiereApp();

  // Initialiser les effets visuels supplémentaires après un court délai
  setTimeout(() => {
    initHeroParallax();
    initTiltEffect();
    initRippleEffect();
    initMagneticButtons();
  }, 100);
});

// ============================================
// GESTION DES ERREURS GLOBALES
// ============================================
window.addEventListener("error", (e) => {
  console.warn("Erreur capturée:", e.message);
});

// ============================================
// SERVICE WORKER POUR PWA (Optionnel)
// ============================================
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // navigator.serviceWorker.register('/sw.js')
    //   .then(reg => console.log('Service Worker enregistré'))
    //   .catch(err => console.log('Erreur SW:', err));
  });
}

// ============================================
// ANALYTICS & TRACKING (Optionnel)
// ============================================
const trackEvent = (category, action, label) => {
  // Intégration Google Analytics ou autre
  // gtag('event', action, { 'event_category': category, 'event_label': label });
  console.log(`📊 Event: ${category} - ${action} - ${label}`);
};

// Tracker les clics sur les boutons d'achat
document.addEventListener("click", (e) => {
  if (e.target.closest(".btn-order")) {
    const productCard = e.target.closest(".product-card");
    const productName =
      productCard?.querySelector(".product-name")?.textContent;
    trackEvent("Produit", "Clic Acheter", productName);
  }
});

console.log("🌟 Lumière d'Or - Script chargé avec succès!");
