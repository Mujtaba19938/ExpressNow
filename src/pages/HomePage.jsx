import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { products, categories } from "../data/products";
import useWindowWidth from "../hooks/useWindowWidth";

const trustItems = [
  { icon: "🚚", title: "Same Day Delivery", sub: "Order before 3 PM" },
  { icon: "✅", title: "100% Fresh",         sub: "Quality guaranteed"   },
  { icon: "↩️", title: "Easy Returns",       sub: "7 day return policy"  },
  { icon: "📞", title: "24/7 Support",       sub: "WhatsApp & Call"      },
];

export default function HomePage({ setPage, cartCount, addToCart, viewProduct, onSearch, onCategorySelect, activeCategory: activeCategoryProp }) {
  const [activeCategory, setActive] = useState(null);
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  const goToListing = (cat) => setPage("listing", cat);

  return (
    <div style={{ background: "#F8F8F8", minHeight: "100vh" }}>
      <Navbar
        cartCount={cartCount}
        onNavigate={setPage}
        onSearch={onSearch}
        onCategorySelect={onCategorySelect}
        categories={categories}
        activeCategory={activeCategoryProp}
      />

      <div style={{
        display: "flex",
        gap: 14,
        padding: "14px 16px",
        maxWidth: 1232,
        margin: "0 auto",
        minHeight: "100vh",
        paddingBottom: 50,
      }}>

        {/* Sidebar — hidden on mobile */}
        {!isMobile && (
          <div style={{ position: "sticky", top: 20, zIndex: 50, width: 210, flexShrink: 0, height: "fit-content", alignSelf: "flex-start" }}>
            <Sidebar
              activeCategory={activeCategory}
              onSelect={(cat) => { setActive(cat); goToListing(cat); }}
            />
          </div>
        )}

        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Hero */}
          <div style={{
            background: "#1A1A2E",
            borderRadius: 16,
            padding: isMobile ? "20px 16px" : "28px 28px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "stretch" : "center",
            textAlign: isMobile ? "center" : "left",
            marginBottom: 14,
          }}>
            <div>
              <span style={{
                background: "#FF6B00", color: "#fff", fontSize: 11,
                padding: "3px 10px", borderRadius: 10, display: "inline-block", marginBottom: 10,
              }}>New Arrivals</span>
              <h1 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: 8 }}>
                Karachi's Fastest<br />
                <span style={{ color: "#FF6B00" }}>Delivery Store</span>
              </h1>
              <p style={{ fontSize: 13, color: "#aaa", marginBottom: 18 }}>
                Grocery, Fashion, Fresh Meat & More — Same Day
              </p>
              <button
                onClick={() => goToListing("General Store")}
                style={{
                  background: "#FF6B00",
                  color: "#fff",
                  border: "none",
                  padding: isMobile ? "13px 0" : "11px 24px",
                  width: isMobile ? "100%" : "auto",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  minHeight: 44,
                  display: "block",
                }}
              >
                Shop Now
              </button>
            </div>
            {/* Hero illustration — hidden on mobile */}
            {!isMobile && (
              <div style={{
                width: 160, height: 130, background: "rgba(255,255,255,0.05)",
                borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 56, flexShrink: 0,
              }}>🛒</div>
            )}
          </div>

          {/* Trust bar — 2×2 on mobile, 4-col on desktop */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
            gap: 10,
            marginBottom: 16,
          }}>
            {trustItems.map(item => (
              <div key={item.title} style={{
                background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)",
                borderRadius: 10, padding: "10px 12px", display: "flex", alignItems: "center", gap: 10,
              }}>
                <div style={{
                  width: 36, height: 36, background: "#fff7f0", borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0,
                }}>{item.icon}</div>
                <div>
                  <strong style={{ fontSize: 12, display: "block", color: "#111" }}>{item.title}</strong>
                  <span style={{ fontSize: 10, color: "#6B7280" }}>{item.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Categories — 3-col mobile, 4-col tablet, 5-col desktop */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <h2 style={{ fontSize: 15, fontWeight: 600, color: "#111" }}>Shop by category</h2>
            <span onClick={() => goToListing("General Store")} style={{ fontSize: 12, color: "#FF6B00", cursor: "pointer" }}>View all ›</span>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(3,1fr)" : isTablet ? "repeat(4,1fr)" : "repeat(5,1fr)",
            gap: 10,
            marginBottom: 18,
          }}>
            {categories.map(cat => (
              <div
                key={cat.id}
                onClick={() => goToListing(cat.name)}
                style={{
                  background: "#fff",
                  border: `1.5px solid ${activeCategory === cat.name ? "#FF6B00" : "rgba(0,0,0,0.1)"}`,
                  borderRadius: 14,
                  padding: isMobile ? "10px 6px" : "14px 10px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "border-color 0.15s",
                }}
              >
                <div style={{
                  width: isMobile ? 36 : 44, height: isMobile ? 36 : 44, borderRadius: "50%",
                  background: cat.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 6px", fontSize: isMobile ? 18 : 22,
                }}>{cat.icon}</div>
                <div style={{ fontSize: isMobile ? 10 : 11, fontWeight: 500, color: "#111" }}>{cat.name}</div>
              </div>
            ))}
          </div>

          {/* Trending products — 2-col mobile, 4-col desktop */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <h2 style={{ fontSize: 15, fontWeight: 600, color: "#111" }}>Trending products</h2>
            <span onClick={() => goToListing("Fresh & Frozen")} style={{ fontSize: 12, color: "#FF6B00", cursor: "pointer" }}>View all ›</span>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
            gap: 10,
            marginBottom: 18,
          }}>
            {products.filter(p => p.category === "Fresh & Frozen").slice(0, 4).map(p => (
              <ProductCard key={p.id} product={p} onAddToCart={addToCart} onClickProduct={viewProduct} />
            ))}
          </div>

          {/* Promo banners — stacked on mobile */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: 10,
          }}>
            <div style={{
              background: "#FF6B00", borderRadius: 14, padding: "20px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>Limited offer</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
                  Grocery Deals<br />Up to 20% off
                </div>
                <button
                  onClick={() => goToListing("Grocery")}
                  style={{
                    marginTop: 12, background: "rgba(255,255,255,0.2)", color: "#fff",
                    border: "none", padding: "7px 16px", borderRadius: 8, fontSize: 12, cursor: "pointer",
                  }}
                >Shop Grocery ›</button>
              </div>
              <div style={{ fontSize: 48 }}>🛒</div>
            </div>
            <div style={{
              background: "#1A1A2E", borderRadius: 14, padding: "20px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>Fresh arrivals</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
                  Fresh & Frozen<br />Order by 3 PM
                </div>
                <button
                  onClick={() => goToListing("Fresh & Frozen")}
                  style={{
                    marginTop: 12, background: "rgba(255,255,255,0.1)", color: "#fff",
                    border: "none", padding: "7px 16px", borderRadius: 8, fontSize: 12, cursor: "pointer",
                  }}
                >Shop Fresh ›</button>
              </div>
              <div style={{ fontSize: 48 }}>❄️</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
