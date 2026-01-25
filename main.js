// Product data - simulating real Jakarta Selatan pricing
const products = [
  {
    id: 1,
    name: "Sate Padang Original",
    description: "Sate daging sapi empuk dengan kuah kental khas Padang. Paket lengkap dengan lontong dan acar.",
    price: 35000,
    image: "/images/products/sate-padang-ori.png"
  },
  {
    id: 2,
    name: "Sate Padang Spesial",
    description: "Varian premium dengan potongan daging pilihan dan kuah extra kental. Porsi lebih besar!",
    price: 45000,
    image: "/images/products/sate-padang-ori.png"
  },
  {
    id: 3,
    name: "Sate Padang Lidah",
    description: "Sate lidah sapi super lembut dengan tekstur yang meleleh di mulut. Limited edition!",
    price: 55000,
    image: "/images/products/sate-padang-ori.png"
  },
  {
    id: 4,
    name: "Sate Padang Combo",
    description: "Kombinasi sate daging dan jeroan dengan kuah melimpah. Cocok untuk yang lapar berat!",
    price: 50000,
    image: "/images/products/sate-padang-ori.png"
  },
  {
    id: 5,
    name: "Gulai Kikil",
    description: "Kikil sapi empuk dengan kuah gulai yang gurih dan kaya rempah. Pas banget untuk sahur!",
    price: 40000,
    image: "/images/products/gulai-kikil.png"
  },
  {
    id: 6,
    name: "Rendang Daging",
    description: "Rendang daging sapi autentik Padang yang empuk dan bumbu meresap sempurna.",
    price: 48000,
    image: "/images/products/rendang-daging.png"
  }
];

// Format currency to IDR
function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);
}

// Render products
function renderProducts() {
  const productList = document.getElementById('product-list');

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">${formatPrice(product.price)}</span>
          <button class="product-btn" onclick="addToCart(${product.id})">
            <i class="fas fa-cart-plus"></i> Pesan
          </button>
        </div>
      </div>
    `;
    productList.appendChild(productCard);
  });
}

// Add to cart function (dummy)
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  alert(`${product.name} ditambahkan ke keranjang! 🛒\n\nSilakan pilih platform delivery favorit Anda di bawah untuk melanjutkan pesanan.`);

  // Scroll to CTA section
  document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll animations
function revealOnScroll() {
  const elements = document.querySelectorAll('.why-card, .product-card, .testimonial-card');

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Initialize animations
function initAnimations() {
  const elements = document.querySelectorAll('.why-card, .product-card, .testimonial-card');
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initAnimations();

  // Add click handlers for delivery buttons
  const deliveryButtons = document.querySelectorAll('.order-btn');
  deliveryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const platform = button.querySelector('span').textContent;
      alert(`Redirecting ke ${platform}...\n\n(Ini adalah demo - dalam implementasi nyata akan mengarah ke link aplikasi yang sebenarnya)`);
    });
  });
});

// Make addToCart available globally
window.addToCart = addToCart;
