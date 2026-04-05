import { useState } from "react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import useWindowWidth from "../hooks/useWindowWidth";
import MobileDrawer from "./MobileDrawer";
import CategoryChipScroller from "./CategoryChipScroller";
import Sidebar from "./Sidebar";

export default function Navbar({
  cartCount = 0,
  onNavigate,
  onSearch,
  activeCategory,
  onCategorySelect,
  categories = [],
}) {
  const [category, setCategory] = useState("All Categories");
  const [query, setQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const width = useWindowWidth();
  const isMobile = width < 768;

  const handleSearch = () => {
    if (onSearch) onSearch(query, category);
  };

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100 }}>

      {/* Top info bar — desktop only */}
      {!isMobile && (
        <div style={{ background: "#1A1A2E", padding: "6px 16px", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 11, color: "#aaa" }}>
            Free delivery on orders above Rs. 1,500 in Karachi
          </span>
          <div style={{ display: "flex", gap: 16 }}>
            <span style={{ fontSize: 11, color: "#aaa" }}>+92 300 0000000</span>
            <span style={{ fontSize: 11, color: "#aaa", cursor: "pointer" }}>Track Order</span>
            <span style={{ fontSize: 11, color: "#aaa", cursor: "pointer" }}>Help</span>
          </div>
        </div>
      )}

      {/* Main navbar */}
      <nav style={{ background: "#fff", borderBottom: "0.5px solid rgba(0,0,0,0.1)" }}>

        {isMobile ? (
          /* ── MOBILE LAYOUT ── */
          <>
            {/* Row 1: Logo + Cart + Hamburger */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 16px",
            }}>
              {/* Logo */}
              <div
                onClick={() => onNavigate && onNavigate("home")}
                style={{ fontSize: 20, fontWeight: 700, color: "#1A1A2E", cursor: "pointer" }}
              >
                Express<span style={{ color: "#FF6B00" }}>Now</span>
              </div>

              {/* Right icons */}
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {/* Cart icon */}
                <button
                  onClick={() => onNavigate && onNavigate("cart")}
                  style={{
                    position: "relative",
                    width: 44,
                    height: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "none",
                    border: "none",
                  }}
                >
                  <ShoppingBag size={22} color="#1A1A2E" />
                  {cartCount > 0 && (
                    <span style={{
                      position: "absolute",
                      top: 6,
                      right: 6,
                      background: "#FF6B00",
                      color: "#fff",
                      fontSize: 10,
                      fontWeight: 700,
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      {cartCount}
                    </span>
                  )}
                </button>

                {/* Hamburger */}
                <button
                  onClick={() => setDrawerOpen(true)}
                  style={{
                    width: 44,
                    height: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "none",
                    border: "none",
                  }}
                >
                  <Menu size={22} color="#1A1A2E" />
                </button>
              </div>
            </div>

            {/* Row 2: Full-width search */}
            <div style={{ padding: "0 16px 10px" }}>
              <div style={{
                display: "flex",
                border: "1.5px solid #FF6B00",
                borderRadius: 8,
                overflow: "hidden",
                height: 44,
              }}>
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSearch()}
                  placeholder="Search products..."
                  style={{
                    border: "none",
                    padding: "0 14px",
                    fontSize: 14,
                    flex: 1,
                    outline: "none",
                    background: "#fff",
                    color: "#111",
                  }}
                />
                <button
                  onClick={handleSearch}
                  style={{
                    background: "#FF6B00",
                    border: "none",
                    padding: "0 16px",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    cursor: "pointer",
                    minWidth: 44,
                  }}
                >
                  <Search size={16} />
                </button>
              </div>
            </div>

            {/* Category chip scroller */}
            {categories.length > 0 && (
              <CategoryChipScroller
                categories={categories}
                activeCategory={activeCategory}
                onSelect={(cat) => {
                  if (onCategorySelect) onCategorySelect("listing", cat);
                }}
              />
            )}
          </>
        ) : (
          /* ── DESKTOP LAYOUT ── */
          <div style={{
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            {/* Logo */}
            <div
              onClick={() => onNavigate && onNavigate("home")}
              style={{ fontSize: 20, fontWeight: 700, color: "#1A1A2E", whiteSpace: "nowrap", flexShrink: 0, cursor: "pointer" }}
            >
              Express<span style={{ color: "#FF6B00" }}>Now</span>
            </div>

            {/* Search bar */}
            <div style={{
              flex: 1,
              display: "flex",
              border: "1.5px solid #FF6B00",
              borderRadius: 8,
              overflow: "hidden",
              height: 40,
            }}>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                style={{
                  border: "none",
                  borderRight: "0.5px solid rgba(0,0,0,0.1)",
                  padding: "0 10px",
                  fontSize: 12,
                  background: "#f8f8f8",
                  color: "#6B7280",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <option>All Categories</option>
                <option>Grocery</option>
                <option>Snacks</option>
                <option>Fresh &amp; Frozen</option>
                <option>General Store</option>
                <option>Clothing</option>
              </select>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSearch()}
                placeholder="Search for products, brands, categories..."
                style={{
                  border: "none",
                  padding: "0 14px",
                  fontSize: 13,
                  flex: 1,
                  outline: "none",
                  background: "#fff",
                  color: "#111",
                }}
              />
              <button
                onClick={handleSearch}
                style={{
                  background: "#FF6B00",
                  border: "none",
                  padding: "0 18px",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  cursor: "pointer",
                }}
              >
                <Search size={14} />
                Search
              </button>
            </div>

            {/* Nav actions */}
            <div style={{ display: "flex", gap: 16, alignItems: "center", flexShrink: 0 }}>
              {onNavigate && (
                <div style={{ display: "flex", gap: 16, marginRight: 8, borderRight: "1px solid #eee", paddingRight: 16 }}>
                  <button onClick={() => onNavigate("home")} style={{ background: "none", border: "none", fontSize: 13, fontWeight: 600, color: "#111", cursor: "pointer", padding: 0 }}>Home</button>
                </div>
              )}

              {/* Cart button */}
              <button
                onClick={() => onNavigate && onNavigate("cart")}
                style={{
                  background: "#FF6B00",
                  color: "#fff",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <ShoppingBag size={16} />
                Cart
                {cartCount > 0 && (
                  <span style={{
                    background: "#1A1A2E",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Promo bar — desktop only */}
      {!isMobile && (
        <div style={{
          background: "#FF6B00",
          padding: "7px 16px",
          textAlign: "center",
          fontSize: 12,
          color: "#fff",
          fontWeight: 600,
        }}>
          Same-day delivery available in Karachi — Order before 3 PM
        </div>
      )}

      {/* Mobile drawer */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} side="left">
        <div style={{ padding: "0 0 24px" }}>
          {/* Drawer header */}
          <div style={{
            background: "#FF6B00",
            padding: "14px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>Shop Categories</span>
            <button
              onClick={() => setDrawerOpen(false)}
              style={{ background: "none", border: "none", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32 }}
            >
              <X size={20} />
            </button>
          </div>
          <Sidebar
            hideHeader
            activeCategory={activeCategory}
            onSelect={(cat) => {
              if (onCategorySelect) onCategorySelect("listing", cat);
              setDrawerOpen(false);
            }}
          />
        </div>
      </MobileDrawer>
    </div>
  );
}
