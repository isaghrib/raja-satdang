// ========================================
// CONTENTFUL CMS INTEGRATION
// ========================================
import { createClient } from 'contentful';

// Contentful Client Configuration
const client = createClient({
  space: 'sd2pr7kslaqn',
  accessToken: '6wVLqFxUjpXc_3H2Whfc03JaXOX398HQY6Hk72Av0LQ'
});

// Global products array (will be populated from Contentful)
let products = [];

// Format currency to IDR
function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);
}

// Fetch products from Contentful CMS
async function fetchProductsFromContentful() {
  try {
    const response = await client.getEntries({
      content_type: 'rajaSatePadang'
    });

    // Transform Contentful data to our product format
    products = response.items.map((item, index) => {
      const fields = item.fields;
      return {
        id: item.sys.id,
        name: fields.name || fields.title || 'Produk',
        description: fields.description.content[0].content[0].value || '',
        price: fields.price || 0,
        image: fields.image
      };
    });

    console.log('Products loaded from Contentful:', products.length);
    return products;
  } catch (error) {
    console.error('Error fetching from Contentful:', error);

    return [];
  }
}


// Render products to DOM
function renderProducts(productsData) {
  const productList = document.getElementById('product-list');

  // Clear existing content
  productList.innerHTML = '';

  // Show loading state if data is null
  if (productsData === null) {
    productList.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
        <i class="fas fa-spinner fa-spin" style="font-size: 3rem; color: var(--color-maroon);"></i>
        <p style="margin-top: 1rem; font-size: 1.2rem;">Memuat produk...</p>
      </div>
    `;
    return;
  }

  // Show empty state if array is empty
  if (productsData.length === 0) {
    productList.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
        <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: var(--color-maroon);"></i>
        <p style="margin-top: 1rem; font-size: 1.2rem;">Gagal memuat produk atau produk belum tersedia.</p>
        <button onclick="window.location.reload()" class="btn btn-primary" style="margin-top: 1rem; font-size: 0.9rem; padding: 0.5rem 1rem;">Coba Lagi</button>
      </div>
    `;
    return;
  }


  productsData.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">${formatPrice(product.price)}</span>
          <button class="product-btn" onclick="window.addToCart('${product.id}')">
            <i class="fas fa-cart-plus"></i> Pesan
          </button>
        </div>
      </div>
    `;
    productList.appendChild(productCard);
  });
}

// Add to cart function
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) {
    console.error('Product not found:', productId);
    return;
  }

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
document.addEventListener('DOMContentLoaded', async () => {
  // Show loading state
  renderProducts(null);

  // Fetch products from Contentful CMS
  const productsData = await fetchProductsFromContentful();

  // Render products with fetched data
  renderProducts(productsData);

  // Initialize animations after products are rendered
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

