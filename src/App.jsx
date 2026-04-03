import { useState } from "react";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartCheckoutPage from "./pages/CartCheckoutPage";
import "./styles/global.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("General Store");
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigateTo = (pageName, category = null) => {
    setPage(pageName);
    if (category !== null) setSelectedCategory(category);
  };

  const viewProduct = (product) => {
    setSelectedProduct(product);
    setPage("detail");
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(i =>
      i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i
    ));
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div>
      {page === "home" && (
        <HomePage setPage={navigateTo} cartCount={cartCount} addToCart={addToCart} viewProduct={viewProduct} />
      )}
      {page === "listing" && (
        <ProductListingPage
          setPage={navigateTo}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          cartCount={cartCount}
          addToCart={addToCart}
          viewProduct={viewProduct}
        />
      )}
      {page === "detail" && (
        <ProductDetailPage setPage={navigateTo} cartCount={cartCount} product={selectedProduct} addToCart={addToCart} />
      )}
      {page === "cart" && (
        <CartCheckoutPage
          setPage={navigateTo}
          cart={cart}
          cartCount={cartCount}
          updateQty={updateQty}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}
