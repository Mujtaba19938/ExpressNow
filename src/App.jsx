import { useState } from "react";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartCheckoutPage from "./pages/CartCheckoutPage";
import "./styles/global.css";

export default function App() {
  const [page, setPage] = useState("home");

  const routes = {
    home:    <HomePage setPage={setPage} />,
    listing: <ProductListingPage setPage={setPage} />,
    detail:  <ProductDetailPage setPage={setPage} />,
    cart:    <CartCheckoutPage setPage={setPage} />,
  };

  return (
    <div>
      {routes[page]}
    </div>
  );
}
