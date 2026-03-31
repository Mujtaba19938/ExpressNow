import { useState } from "react";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartCheckoutPage from "./pages/CartCheckoutPage";
import "./styles/global.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("General Store");

  const navigateTo = (pageName, category = null) => {
    setPage(pageName);
    if (category !== null) setSelectedCategory(category);
  };

  return (
    <div>
      {page === "home" && (
        <HomePage setPage={navigateTo} />
      )}
      {page === "listing" && (
        <ProductListingPage
          setPage={navigateTo}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      {page === "detail" && (
        <ProductDetailPage setPage={navigateTo} />
      )}
      {page === "cart" && (
        <CartCheckoutPage setPage={navigateTo} />
      )}
    </div>
  );
}
