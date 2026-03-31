import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { products } from "../data/products";
import { SlidersHorizontal, Grid2X2, List } from "lucide-react";

const filterTags = ["All", "Fresh", "Frozen", "Chicken", "Beef", "Fish", "Mutton"];
const weightOptions = ["250g", "500g", "1 kg", "2 kg", "5 kg"];

export default function ProductListingPage({ setPage }) {
  const [cart, setCart] = useState([]);
  const [activeTag, setActiveTag] = useState("All");
  const [sortBy, setSortBy] = useState("Popularity");
  const [gridView, setGridView] = useState(true);
  const [selectedWeights, setSelectedWeights] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const toggleWeight = (w) => {
    setSelectedWeights(prev =>
      prev.includes(w) ? prev.filter(x => x !== w) : [...prev, w]
    );
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  const filtered = products.filter(p => {
    if (activeTag !== "All") {
      const tagMap = { Fresh: "Fresh", Frozen: "Frozen", Chicken: "Chicken", Beef: "Beef", Fish: "Fish", Mutton: "Mutton" };
      const term = tagMap[activeTag] || activeTag;
      if (!p.name.includes(term) && !p.subcat.includes(term)) return false;
    }
    if (p.price < priceRange.min || p.price > priceRange.max) return false;
    return true;
  });

  return (
    <div style={{ background: "#F8F8F8", minHeight: "100vh" }}>
      <Navbar cartCount={cartCount} onNavigate={setPage} />

      <div style={{ padding: "10px 16px", fontSize: 12, color: "#6B7280" }}>
        Home › <span style={{ color: "#FF6B00" }}>Fresh & Frozen</span> › All Products
      </div>

      <div style={{ display: "flex", gap: 14, padding: "0 16px 28px", maxWidth: 1232, margin: "0 auto" }}>
        {/* Filter Panel */}
        <aside style={{ width: 210, flexShrink: 0, alignSelf: "flex-start", position: "sticky", top: 100 }}>
          {[
            {
              title: "Categories",
              content: (
                <div>
                  {["Fresh Meat","Frozen Meat","Frozen Fish","Frozen Mutton","Frozen Beef"].map(cat => (
                    <label key={cat} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, cursor: "pointer", fontSize: 12 }}>
                      <input type="checkbox" style={{ accentColor: "#FF6B00", width: 14, height: 14 }} />
                      <span style={{ flex: 1 }}>{cat}</span>
                      <span style={{ fontSize: 11, color: "#9CA3AF" }}>{Math.floor(Math.random()*12)+4}</span>
                    </label>
                  ))}
                </div>
              ),
            },
            {
              title: "Price Range",
              content: (
                <div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <input
                      type="number" value={priceRange.min} placeholder="Min"
                      onChange={e => setPriceRange(p => ({ ...p, min: +e.target.value }))}
                      style={{ width: "100%", border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: 6, padding: "6px 8px", fontSize: 12, outline: "none" }}
                    />
                    <span style={{ fontSize: 12, color: "#9CA3AF" }}>—</span>
                    <input
                      type="number" value={priceRange.max} placeholder="Max"
                      onChange={e => setPriceRange(p => ({ ...p, max: +e.target.value }))}
                      style={{ width: "100%", border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: 6, padding: "6px 8px", fontSize: 12, outline: "none" }}
                    />
                  </div>
                  <button style={{
                    width: "100%", marginTop: 10, background: "#FF6B00", color: "#fff",
                    border: "none", padding: 7, borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer",
                  }}>Apply</button>
                </div>
              ),
            },
            {
              title: "Weight",
              content: (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {weightOptions.map(w => (
                    <button
                      key={w}
                      onClick={() => toggleWeight(w)}
                      style={{
                        padding: "4px 12px", borderRadius: 14,
                        border: `0.5px solid ${selectedWeights.includes(w) ? "#FF6B00" : "rgba(0,0,0,0.15)"}`,
                        fontSize: 11, cursor: "pointer",
                        background: selectedWeights.includes(w) ? "#FF6B00" : "#fff",
                        color: selectedWeights.includes(w) ? "#fff" : "#374151",
                      }}
                    >{w}</button>
                  ))}
                </div>
              ),
            },
            {
              title: "Rating",
              content: (
                <div>
                  {["4 stars & above", "3 stars & above", "Any rating"].map((r, i) => (
                    <label key={r} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, cursor: "pointer", fontSize: 12 }}>
                      <input type="radio" name="rating" defaultChecked={i === 0} style={{ accentColor: "#FF6B00" }} />
                      {r}
                    </label>
                  ))}
                </div>
              ),
            },
          ].map(box => (
            <div key={box.title} style={{
              background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)",
              borderRadius: 14, marginBottom: 10, overflow: "hidden",
            }}>
              <div style={{
                padding: "11px 14px", fontSize: 13, fontWeight: 600,
                borderBottom: "0.5px solid rgba(0,0,0,0.07)", color: "#111",
              }}>
                {box.title}
              </div>
              <div style={{ padding: "12px 14px" }}>{box.content}</div>
            </div>
          ))}
        </aside>

        {/* Main content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Topbar */}
          <div style={{
            background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)",
            borderRadius: 14, padding: "10px 14px", marginBottom: 12,
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span style={{ fontSize: 13, color: "#6B7280" }}>
              Showing <strong style={{ color: "#111" }}>{filtered.length} products</strong> in Fresh & Frozen
            </span>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                style={{
                  border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: 6,
                  padding: "5px 10px", fontSize: 12, outline: "none",
                }}
              >
                {["Popularity", "Price: Low to High", "Price: High to Low", "Newest First", "Top Rated"].map(o => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <div style={{ display: "flex", border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: 6, overflow: "hidden" }}>
                {[true, false].map((isGrid) => (
                  <button
                    key={String(isGrid)}
                    onClick={() => setGridView(isGrid)}
                    style={{
                      padding: "5px 9px", border: "none", cursor: "pointer",
                      background: gridView === isGrid ? "#FF6B00" : "#fff",
                      display: "flex", alignItems: "center",
                    }}
                  >
                    {isGrid ? <Grid2X2 size={14} color={gridView ? "#fff" : "#6B7280"} /> : <List size={14} color={!gridView ? "#fff" : "#6B7280"} />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Filter tags */}
          <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
            {filterTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                style={{
                  padding: "5px 14px", borderRadius: 14, border: "none", cursor: "pointer",
                  background: activeTag === tag ? "#FF6B00" : "#fff",
                  color: activeTag === tag ? "#fff" : "#374151",
                  fontSize: 12, fontWeight: activeTag === tag ? 600 : 400,
                  boxShadow: "0 0 0 0.5px rgba(0,0,0,0.12)",
                }}
              >{tag}</button>
            ))}
          </div>

          {/* Products grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: gridView ? "repeat(3,1fr)" : "1fr",
            gap: 10,
          }}>
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
            ))}
          </div>

          {/* Pagination */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 20 }}>
            {["‹", "1", "2", "3", "...", "7", "›"].map((pg, i) => (
              <button
                key={i}
                style={{
                  width: 34, height: 34, borderRadius: 6, cursor: "pointer",
                  border: pg === "1" ? "none" : "0.5px solid rgba(0,0,0,0.15)",
                  background: pg === "1" ? "#FF6B00" : "#fff",
                  color: pg === "1" ? "#fff" : "#374151",
                  fontSize: 13, fontWeight: pg === "1" ? 600 : 400,
                }}
              >{pg}</button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
