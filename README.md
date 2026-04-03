# ExpressNow — React Frontend

Karachi's fastest multi-category ecommerce store.
Built with React + Vite + Lucide Icons.

## Brand Colors
- Primary Orange: `#FF6B00`
- Dark Navy:      `#1A1A2E`
- Fresh Green:    `#22C55E`
- Frozen Blue:    `#3B82F6`

## Project Structure

```
express-now/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Root with page routing
    ├── styles/
    │   └── global.css        # Global styles & CSS variables
    ├── data/
    │   └── products.js       # Product data, categories, constants
    ├── components/
    │   ├── Navbar.jsx        # Top bar + search + cart
    │   ├── Sidebar.jsx       # Category sidebar
    │   ├── ProductCard.jsx   # Reusable product card
    │   └── Footer.jsx        # Site footer
    └── pages/
        ├── HomePage.jsx           # Landing page with hero + products
        ├── ProductListingPage.jsx # Filter + product grid
        ├── ProductDetailPage.jsx  # Single product with tabs
        └── CartCheckoutPage.jsx   # Cart + delivery + payment
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

## Pages
| Page | Route (suggested) |
|------|------------------|
| Homepage | `/` |
| Product Listing | `/shop/:category` |
| Product Detail | `/product/:id` |
| Cart & Checkout | `/cart` |

## Next Steps
- Connect to a backend API (Node.js + MongoDB recommended)
- Add React Router for real URL-based navigation
- Integrate JazzCash / EasyPaisa payment APIs
- Add WhatsApp order button via `wa.me` links
- Implement user authentication (login/register)
- Build Admin dashboard for product & order management

## Tech Stack
- React 18
- Vite 5
- Lucide React (icons)
- CSS Variables (no Tailwind needed)
