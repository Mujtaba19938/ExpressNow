import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart, Minus, Plus, ShieldCheck, RotateCcw, Truck } from "lucide-react";
import useWindowWidth from "../hooks/useWindowWidth";

const defaultDescription = "Premium quality product sourced from trusted suppliers. Delivered fresh to your doorstep with Express Now's same-day delivery service in Karachi.";

const defaultSpecs = [
  ["Category", "—"],
  ["Storage", "As per packaging"],
  ["Origin", "Pakistan"],
  ["Halal certified", "Yes"],
];

const defaultReviews = [
  { name: "Ahmed Raza", rating: 5, date: "2 days ago", text: "Great product, fast delivery. Will definitely order again!" },
  { name: "Sana Mirza", rating: 4, date: "5 days ago", text: "Good quality, nicely packed. Same day delivery is a great feature." },
  { name: "Hassan Khan", rating: 5, date: "1 week ago", text: "Best quality in Karachi. Express Now delivers on time every time." },
];

export default function ProductDetailPage({ setPage, cartCount, product: passedProduct, addToCart, onSearch, onCategorySelect, categories, activeCategory }) {
  const product = passedProduct || { id: 0, name: "Product", category: "General", subcat: "", price: 0, rating: 0, reviews: 0 };
  const [qty, setQty] = useState(1);
  const width = useWindowWidth();
  const isMobile = width < 768;
  const [weight, setWeight] = useState("1 kg");
  const [type, setType] = useState("Fresh");
  const [wished, setWished] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const total = product.price * qty;
  const ratingBars = [
    { stars: 5, count: 87, pct: 68 },
    { stars: 4, count: 26, pct: 20 },
    { stars: 3, count: 10, pct: 8 },
    { stars: 2, count: 3,  pct: 2 },
    { stars: 1, count: 2,  pct: 1 },
  ];

  return (
    <div style={{ background: "#F8F8F8", minHeight: "100vh" }}>
      <Navbar cartCount={cartCount} onNavigate={setPage} onSearch={onSearch} onCategorySelect={onCategorySelect} categories={categories || []} activeCategory={activeCategory} />

      <div style={{ padding: "10px 16px", fontSize: 12, color: "#6B7280" }}>
        <span onClick={() => setPage("home")} style={{ cursor: "pointer", color: "#FF6B00" }}>Home</span> › {product.category} › <span style={{ color: "#FF6B00" }}>{product.name}</span>
      </div>

      {/* Main detail layout */}
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 20, padding: "0 16px", maxWidth: 1232, margin: "0 auto 24px" }}>
        {/* Image column */}
        <div style={{ width: isMobile ? "100%" : 360, flexShrink: isMobile ? 1 : 0 }}>
          <div style={{
            background: product.bg || "#f0faf4", border: "0.5px solid rgba(0,0,0,0.1)",
            borderRadius: 16, height: isMobile ? 240 : 300,
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", marginBottom: 12, fontSize: 80,
          }}>
            {product.image ? (
              <img src={product.image} alt={product.name} style={{ maxWidth: "80%", maxHeight: "80%", objectFit: "contain" }} />
            ) : "🛍️"}
            {product.category === "Fresh & Frozen" && (
              <span style={{
                position: "absolute", top: 12, left: 12,
                background: "#22C55E", color: "#fff", fontSize: 11,
                padding: "3px 10px", borderRadius: 8, fontWeight: 600,
              }}>Fresh Today</span>
            )}
          </div>
        </div>

        {/* Info column */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, color: "#FF6B00", textTransform: "uppercase", letterSpacing: "0.4px", marginBottom: 6 }}>
            {product.subcat || product.category}
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 8, lineHeight: 1.3 }}>
            {product.name}
          </h1>

          {/* Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ display: "flex", gap: 2 }}>
              {[1,2,3,4,5].map(i => (
                <div key={i} style={{
                  width: 14, height: 14,
                  background: i <= Math.floor(product.rating) ? "#FF6B00" : i === Math.ceil(product.rating) ? "#FF6B00" : "#e0e0e0",
                  clipPath: "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
                  opacity: i === Math.ceil(product.rating) && product.rating % 1 !== 0 ? 0.5 : 1,
                }} />
              ))}
            </div>
            <span style={{ fontSize: 12, color: "#6B7280" }}>{product.rating} ({product.reviews} reviews)</span>
            <span style={{ fontSize: 12, color: "#FF6B00", cursor: "pointer" }}>Read reviews ›</span>
          </div>

          {/* Price */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 6 }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: "#FF6B00" }}>
              Rs. {(product.price * qty).toLocaleString()}
            </span>
            {product.oldPrice && (
              <span style={{ fontSize: 15, color: "#9CA3AF", textDecoration: "line-through" }}>
                Rs. {(product.oldPrice * qty).toLocaleString()}
              </span>
            )}
            {product.oldPrice && (
              <span style={{
                background: "#fff7f0", color: "#FF6B00", fontSize: 12,
                padding: "2px 8px", borderRadius: 8, fontWeight: 600,
                border: "0.5px solid #FF6B00",
              }}>
                Save Rs. {((product.oldPrice - product.price) * qty).toLocaleString()}
              </span>
            )}
          </div>

          {/* Stock */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E" }} />
            <span style={{ fontSize: 12, color: "#22C55E", fontWeight: 600 }}>In stock — Fresh daily delivery</span>
          </div>

          <hr style={{ border: "none", borderTop: "0.5px solid rgba(0,0,0,0.1)", margin: "0 0 16px" }} />

          {/* Weight — only for Fresh & Frozen */}
          {product.category === "Fresh & Frozen" && (
            <>
              <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Select weight:</div>
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                {["500g","1 kg","2 kg","5 kg"].map(w => (
                  <button key={w} onClick={() => setWeight(w)} style={{
                    padding: "7px 18px", borderRadius: 8,
                    border: `0.5px solid ${weight === w ? "#FF6B00" : "rgba(0,0,0,0.15)"}`,
                    background: weight === w ? "#FF6B00" : "#fff",
                    color: weight === w ? "#fff" : "#374151",
                    fontSize: 12, fontWeight: weight === w ? 600 : 400, cursor: "pointer",
                  }}>{w}</button>
                ))}
              </div>
            </>
          )}

          {/* Type — only for Fresh & Frozen */}
          {product.category === "Fresh & Frozen" && (
            <>
              <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Type:</div>
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                {["Fresh","Frozen"].map(t => (
                  <button key={t} onClick={() => setType(t)} style={{
                    padding: "7px 18px", borderRadius: 8,
                    border: `0.5px solid ${type === t ? "#22C55E" : "rgba(0,0,0,0.15)"}`,
                    background: type === t ? "#f0faf4" : "#fff",
                    color: type === t ? "#22C55E" : "#374151",
                    fontSize: 12, fontWeight: type === t ? 600 : 400, cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: t === "Fresh" ? "#22C55E" : "#3B82F6" }} />
                    {t}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Quantity */}
          <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Quantity:</div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", border: "0.5px solid rgba(0,0,0,0.15)", borderRadius: 10, overflow: "hidden" }}>
              <button onClick={() => setQty(q => Math.max(1, q-1))} style={{ width: 38, height: 38, border: "none", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Minus size={14} />
              </button>
              <span style={{ width: 44, textAlign: "center", fontSize: 15, fontWeight: 600 }}>{qty}</span>
              <button onClick={() => setQty(q => Math.min(10, q+1))} style={{ width: 38, height: 38, border: "none", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Plus size={14} />
              </button>
            </div>
            <span style={{ fontSize: 12, color: "#9CA3AF" }}>Max 10 kg per order</span>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 10, marginBottom: 18 }}>
            <button onClick={() => { for (let i = 0; i < qty; i++) addToCart(product); }} style={{
              flex: 1, background: "#FF6B00", color: "#fff", border: "none",
              padding: "13px", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer", minHeight: 48,
            }}>
              Add to Cart
            </button>
            <button style={{
              flex: 1, background: "#1A1A2E", color: "#fff", border: "none",
              padding: "13px", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer", minHeight: 48,
            }}>
              Buy Now
            </button>
            {!isMobile && (
              <button onClick={() => setWished(!wished)} style={{
                width: 46, height: 46, border: "0.5px solid rgba(0,0,0,0.15)",
                borderRadius: 10, background: "#fff", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Heart size={18} color="#FF6B00" fill={wished ? "#FF6B00" : "none"} />
              </button>
            )}
          </div>

          {/* Delivery info */}
          <div style={{ background: "#f8f8f8", borderRadius: 10, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { Icon: Truck, title: "Same-day delivery", sub: "Order before 3 PM — arrives today" },
              { Icon: ShieldCheck, title: "100% Fresh guarantee", sub: "Packed fresh, inspected daily" },
              { Icon: RotateCcw, title: "Easy return", sub: "Quality issue? Full refund within 24hrs" },
            ].map(({ Icon, title, sub }) => (
              <div key={title} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 30, height: 30, background: "#fff7f0", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={14} color="#FF6B00" />
                </div>
                <div>
                  <strong style={{ fontSize: 12, display: "block" }}>{title}</strong>
                  <span style={{ fontSize: 11, color: "#6B7280" }}>{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ maxWidth: 1232, margin: "0 auto", padding: "0 16px 28px" }}>
        <div style={{ display: "flex", borderBottom: "0.5px solid rgba(0,0,0,0.1)", marginBottom: 18 }}>
          {[["description","Description"], ["specs","Specifications"], ["reviews",`Reviews (${product.reviews || 0})`]].map(([id, label]) => (
            <button key={id} onClick={() => setActiveTab(id)} style={{
              padding: "11px 20px", border: "none", background: "transparent", cursor: "pointer",
              fontSize: 13, fontWeight: activeTab === id ? 600 : 400,
              color: activeTab === id ? "#FF6B00" : "#6B7280",
              borderBottom: `2px solid ${activeTab === id ? "#FF6B00" : "transparent"}`,
              marginBottom: -0.5,
            }}>{label}</button>
          ))}
        </div>

        {activeTab === "description" && (
          <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.8 }}>{product.description || defaultDescription}</p>
        )}

        {activeTab === "specs" && (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {(product.specs || [[  "Category", product.category], ["Sub-category", product.subcat || "—"], ["Unit", product.unit || "—"], ...defaultSpecs.slice(1)]).map(([key, val]) => (
                <tr key={key} style={{ borderBottom: "0.5px solid rgba(0,0,0,0.08)" }}>
                  <td style={{ padding: "10px 0", fontSize: 13, color: "#6B7280", width: 180 }}>{key}</td>
                  <td style={{ padding: "10px 0", fontSize: 13, fontWeight: 600, color: "#111" }}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === "reviews" && (
          <div>
            <div style={{ display: "flex", gap: 24, alignItems: "center", marginBottom: 20 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 44, fontWeight: 700, color: "#111", lineHeight: 1 }}>{product.rating || 0}</div>
                <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 4 }}>{product.reviews || 0} reviews</div>
              </div>
              <div style={{ flex: 1 }}>
                {ratingBars.map(({ stars, count, pct }) => (
                  <div key={stars} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                    <span style={{ fontSize: 11, color: "#6B7280", width: 32 }}>{stars} ★</span>
                    <div style={{ flex: 1, height: 7, background: "#f0f0f0", borderRadius: 4, overflow: "hidden" }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: "#FF6B00", borderRadius: 4 }} />
                    </div>
                    <span style={{ fontSize: 11, color: "#9CA3AF", width: 20 }}>{count}</span>
                  </div>
                ))}
              </div>
            </div>
            {(product.reviews_data || defaultReviews).map(rev => (
              <div key={rev.name} style={{
                border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: 10,
                padding: "14px", marginBottom: 10, background: "#fff",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{rev.name}</div>
                    <div style={{ display: "flex", gap: 2, marginTop: 3 }}>
                      {[1,2,3,4,5].map(i => (
                        <div key={i} style={{
                          width: 11, height: 11,
                          background: i <= rev.rating ? "#FF6B00" : "#e0e0e0",
                          clipPath: "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
                        }} />
                      ))}
                    </div>
                  </div>
                  <span style={{ fontSize: 11, color: "#9CA3AF" }}>{rev.date}</span>
                </div>
                <p style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.6 }}>{rev.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
