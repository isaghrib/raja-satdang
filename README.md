# 🍖 Raja Sate Padang - Landing Page

Landing page untuk brand makanan **Raja Sate Padang** dengan desain **NeoBrutalism** yang eye-catching dan modern.

## 🎨 Design System

### Color Palette
- **Merah Tua (Maroon)**: `#8B0000` - Primary color
- **Coklat Kuah**: `#8B4513` - Secondary color
- **Hitam**: `#000000` - Borders & typography
- **Putih**: `#FFFFFF` - Background & contrast
- **Yellow Accent**: `#FFD23F` - Highlights
- **Orange Accent**: `#FF6B35` - CTA elements

### Design Style
- **NeoBrutalism**: Bold borders (4px), brutal shadows, flat colors
- **Typography**: Bold, uppercase, high contrast
- **Animations**: Smooth transitions, hover effects, scroll reveals

## 📦 Project Structure

```
satepadang/
├── public/                    # Public assets (currently empty - all images from Contentful)
├── index.html                 # Main HTML with all sections
├── style.css                  # NeoBrutalism design system
├── main.js                    # Contentful integration & interactions
├── package.json               # Dependencies
├── CHANGELOG.md               # Version history
└── README.md                  # This file
```

## 🛠️ Tech Stack

- **Vite** - Build tool & dev server
- **Vanilla JavaScript** - No framework dependencies
- **CSS3** - Custom NeoBrutalism design
- **Font Awesome 6.5.1** - Icons
- **Contentful CMS** - Headless CMS for product data

## 🔗 Contentful CMS Integration

Product data is dynamically fetched from **Contentful CMS** using the official `contentful` library.


### How It Works:
1. On page load, the app fetches product entries from Contentful
2. Data is transformed to match our product format
3. Products are rendered dynamically to the DOM
4. If Contentful fails, fallback data is used

### Expected Fields in Contentful:
- `name` (Text) - Product name
- `description` (Text/Long text) - Product description
- `price` (Number) - Product price in IDR
- `image` (Media) - Product image (or use `imageUrl` text field)


## 📱 Sections (AIDA Principle)

### 1. **Hero** - Attention (Perhatian)
- Eye-catching title with brutal shadows
- Clear value proposition
- CTA buttons for menu & order
- Trust badges (ratings, stats)

### 2. **Why** - Interest (Minat)
- 4 key benefits with icons
- Feature cards with hover effects
- Explains unique selling points

### 3. **Products** - Desire (Keinginan)
- Menu items with real images
- Pricing (Jakarta Selatan range: Rp 35.000 - Rp 55.000)
- Add to cart buttons

### 4. **Social Proof** - Action Support
- Customer testimonials
- 5-star ratings
- Real customer names & platforms

### 5. **CTA (Call-to-Action)** - Action
- Order buttons for online delivery:
  - Shopeefood
  - Gofood
  - Grabfood

### 6. **Location** - Additional Info
- Physical store address: Jl. Raya Fatmawati No. 123, Cilandak, Jakarta Selatan
- Operating hours: 24 Jam
- Contact number

### 7. **Footer**
- Brand info
- Social media links
- Copyright

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Server akan berjalan di: `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📋 Product Menu

| Product | Description | Price |
|---------|-------------|-------|
| Sate Padang Original | Sate daging sapi empuk dengan kuah kental | Rp 35.000 |
| Sate Padang Spesial | Varian premium dengan porsi lebih besar | Rp 45.000 |
| Sate Padang Lidah | Sate lidah sapi super lembut | Rp 55.000 |
| Sate Padang Combo | Kombinasi sate daging dan jeroan | Rp 50.000 |
| Gulai Kikil | Kikil sapi dengan kuah gulai gurih | Rp 40.000 |
| Rendang Daging | Rendang daging sapi autentik Padang | Rp 48.000 |

## ✨ Features

- ✅ Responsive design (mobile-first)
- ✅ Smooth scroll navigation
- ✅ Scroll reveal animations
- ✅ Product catalog with dynamic rendering
- ✅ Add to cart functionality
- ✅ Delivery platform integration (dummy)
- ✅ SEO optimized (meta tags, semantic HTML)
- ✅ Accessibility considerations

## 🎯 Copywriting Strategy (AIDA)

1. **Attention**: Bold hero with "Gurih, Kental, Bikin Nagih!"
2. **Interest**: Benefits highlighting authenticity, quality, and convenience
3. **Desire**: Appetizing product descriptions with competitive pricing
4. **Action**: Multiple CTA points with delivery platform options

## 📞 Contact & Location

**Alamat Offline:**
Jl. Raya Fatmawati No. 123, Cilandak, Jakarta Selatan 12345

**Jam Operasional:**
Buka 24 Jam - Setiap Hari

**Kontak:**
+62 812-3456-7890

**Order Online:**
- Shopeefood
- Gofood
- Grabfood

## 📄 License

© 2026 Raja Sate Padang. All rights reserved.

---

**Dibuat dengan ❤️ dan bumbu rempah Padang yang autentik!** 🔥

