import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import MobileDrawer from "../components/MobileDrawer";
import { products, subTagsMap } from "../data/products";
import { Grid2X2, List, SlidersHorizontal, X } from "lucide-react";
import useWindowWidth from "../hooks/useWindowWidth";

export default function ProductListingPage({
  setPage, selectedCategory, setSelectedCategory, cartCount, addToCart, viewProduct,
  onSearch, onCategorySelect, categories, activeCategory: activeCategoryProp,
  searchQuery, searchCategory, onClearSearch,
}) {
  const [activeTag, setActiveTag]       = useState("All");
  const [sortBy, setSortBy]             = useState("Popularity");
  const [gridView, setGridView]         = useState(true);
  const [priceRange, setPriceRange]     = useState({ min: 0, max: 99999 });
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const width = useWindowWidth();
  const isMobile = width < 768;

  useEffect(() => {
    setActiveTag("All");
    setPriceRange({ min: 0, max: 99999 });
  }, [selectedCategory]);

  const filterTags = subTagsMap[selectedCategory] || ["All"];

  const filtered = products
    .filter(p => {
      if (searchQuery && !searchCategory) return true;
      return p.category === selectedCategory;
    })
    .filter(p => {
      if (searchQuery) return true;
      return activeTag === "All" || p.subcat === activeTag;
    })
    .filter(p => p.price >= priceRange.min && p.price <= priceRange.max)
    .filter(p => {
      if (!searchQuery) return true;
      return p.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => {
      if (sortBy === "Price: Low to High")  return a.price - b.price;
      if (sortBy === "Price: High to Low")  return b.price - a.price;
      if (sortBy === "Top Rated")           return b.rating - a.rating;
      if (sortBy === "Newest First")        return b.id - a.id;
      return b.reviews - a.reviews;
    });

  const filterPanel = (
    <>
      <Sidebar
        activeCategory={selectedCategory}
        onSelect={(cat) => { setSelectedCategory(cat); setFilterDrawerOpen(false); }}
      />
      {/* Price Range */}
      <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: 14, marginTop: 10, overflow: "hidden" }}>
        <div style={{ padding: "11px 14px", fontSize: 13, fontWeight: 600, borderBottom: "0.5px solid rgba(0,0,0,0.07)", color: "#111" }}>
          Price Range (Rs.)
        </div>
        <div style={{ padding: "12px 14px" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input type="number" value={priceRange.min || ""} placeholder="Min"
              onChange={e => setPriceRange(p => ({ ...p, min: +e.target.value || 0 }))}
              style={{ width: "100%", border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: 6, padding: "6px 8px", fontSize: 12, outline: "none" }}
            />
            <span style={{ fontSize: 12, color: "#9CA3AF" }}>—</span>
            <input type="number" value={priceRange.max === 99999 ? "" : priceRange.max} placeholder="Max"
              onChange={e => setPriceRange(p => ({ ...p, max: +e.target.value || 99999 }))}
              style={{ width: "100%", border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: 6, padding: "6px 8px", fontSize: 12, outline: "none" }}
            />
          </div>
          <button onClick={() => setPriceRange({ min: 0, max: 99999 })}
            style={{ width: "100%", marginTop: 10, background: "#FF6B00", color: "#fff", border: "none", padding: 7, borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer" }}
          >Reset</button>
        </div>
      </div>
      {/* Rating */}
      <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: 14, marginTop: 10, overflow: "hidden" }}>
        <div style={{ padding: "11px 14px", fontSize: 13, fontWeight: 600, borderBottom: "0.5px solid rgba(0,0,0,0.07)", color: "#111" }}>Rating</div>
        <div style={{ padding: "12px 14px" }}>
          {["4 stars & above", "3 stars & above", "Any rating"].map((r, i) => (
            <label key={r} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, cursor: "pointer", fontSize: 12 }}>
              <input type="radio" name="rating" defaultChecked={i === 2} style={{ accentColor: "#FF6B00" }} />
              {r}
            </label>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div style={{ background: "#F8F8F8", minHeight: "100vh" }}>
      <Navbar
        cartCount={cartCount}
        onNavigate={setPage}
        onSearch={onSearch}
        onCategorySelect={onCategorySelect}
        categories={categories || []}
        activeCategory={activeCategoryProp}
      />

      {/* Breadcrumb */}
      <div style={{ padding: "10px 16px", fontSize: 12, color: "#6B7280" }}>
        <span onClick={() => setPage("home")} style={{ cursor: "pointer", color: "#FF6B00" }}>Home</span>
        {" › "}
        <span style={{ color: "#111", fontWeight: 500 }}>{selectedCategory}</span>
      </div>

      <div style={{ display: "flex", gap: 14, padding: "0 16px 50px", maxWidth: 1232, margin: "0 auto", minHeight: "100vh" }}>

        {/* Left panel — desktop only */}
        {!isMobile && (
          <div style={{ position: "sticky", top: 20, zIndex: 50, width: 210, flexShrink: 0, height: "fit-content", alignSelf: "flex-start" }}>
            {filterPanel}
          </div>
        )}

        {/* Main content */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Mobile: Filters button + sort */}
          {isMobile && (
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              <button
                onClick={() => setFilterDrawerOpen(true)}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "#1A1A2E", color: "#fff", border: "none",
                  padding: "0 16px", borderRadius: 8, fontSize: 13,
                  fontWeight: 600, minHeight: 44, cursor: "pointer", flexShrink: 0,
                }}
              >
                <SlidersHorizontal size={15} /> Filters
              </button>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                style={{
                  flex: 1, border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: 8,
                  padding: "0 10px", fontSize: 13, outline: "none", minHeight: 44,
                }}
              >
                {["Popularity", "Price: Low to High", "Price: High to Low", "Newest First", "Top Rated"].map(o => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          )}

          {/* Topbar — desktop */}
          {!isMobile && (
            <div style={{
              background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)",
              borderRadius: 14, padding: "10px 14px", marginBottom: 12,
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{ fontSize: 13, color: "#6B7280" }}>
                Showing{" "}
                <strong style={{ color: "#111" }}>{filtered.length} products</strong>
                {searchQuery
                  ? <>{" "}for <strong style={{ color: "#FF6B00" }}>"{searchQuery}"</strong>
                      <button onClick={onClearSearch} style={{ marginLeft: 8, fontSize: 11, color: "#6B7280", background: "#f0f0f0", border: "none", borderRadius: 4, padding: "2px 8px", cursor: "pointer" }}>✕ Clear</button>
                    </>
                  : <>{" "}in <strong style={{ color: "#FF6B00" }}>{selectedCategory}</strong></>
                }
              </span>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                  style={{ border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: 6, padding: "5px 10px", fontSize: 12, outline: "none" }}
                >
                  {["Popularity", "Price: Low to High", "Price: High to Low", "Newest First", "Top Rated"].map(o => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <div style={{ display: "flex", border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: 6, overflow: "hidden" }}>
                  {[true, false].map((isGrid) => (
                    <button key={String(isGrid)} onClick={() => setGridView(isGrid)}
                      style={{ padding: "5px 9px", border: "none", cursor: "pointer", background: gridView === isGrid ? "#FF6B00" : "#fff", display: "flex", alignItems: "center" }}
                    >
                      {isGrid
                        ? <Grid2X2 size={14} color={gridView ? "#fff" : "#6B7280"} />
                        : <List    size={14} color={!gridView ? "#fff" : "#6B7280"} />
                      }
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mobile result count */}
          {isMobile && (
            <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 10 }}>
              <strong style={{ color: "#111" }}>{filtered.length}</strong> products
              {searchQuery && (
                <> for <strong style={{ color: "#FF6B00" }}>"{searchQuery}"</strong>
                  <button onClick={onClearSearch} style={{ marginLeft: 6, fontSize: 11, color: "#6B7280", background: "#f0f0f0", border: "none", borderRadius: 4, padding: "2px 6px", cursor: "pointer" }}>✕</button>
                </>
              )}
            </div>
          )}

          {/* Sub-category filter tags */}
          <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
            {filterTags.map(tag => (
              <button key={tag} onClick={() => setActiveTag(tag)}
                style={{
                  padding: "5px 14px", borderRadius: 14, border: "none", cursor: "pointer",
                  background: activeTag === tag ? "#FF6B00" : "#fff",
                  color: activeTag === tag ? "#fff" : "#374151",
                  fontSize: 12, fontWeight: activeTag === tag ? 600 : 400,
                  boxShadow: "0 0 0 0.5px rgba(0,0,0,0.12)",
                  minHeight: isMobile ? 36 : "auto",
                }}
              >{tag}</button>
            ))}
          </div>

          {/* Products grid */}
          {filtered.length === 0 ? (
            <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: 14, padding: "60px 20px", textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#111", marginBottom: 6 }}>No products found</div>
              <div style={{ fontSize: 13, color: "#6B7280" }}>Try adjusting your filters or browse another category.</div>
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: gridView ? (isMobile ? "repeat(2,1fr)" : "repeat(3,1fr)") : "1fr",
              gap: 10,
            }}>
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} onAddToCart={addToCart} onClickProduct={viewProduct} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <MobileDrawer isOpen={filterDrawerOpen} onClose={() => setFilterDrawerOpen(false)} side="bottom">
        <div style={{ padding: "0 0 24px" }}>
          <div style={{
            padding: "14px 16px", display: "flex", justifyContent: "space-between",
            alignItems: "center", borderBottom: "0.5px solid rgba(0,0,0,0.1)",
          }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>Filters</span>
            <button onClick={() => setFilterDrawerOpen(false)}
              style={{ background: "none", border: "none", display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36 }}
            >
              <X size={20} />
            </button>
          </div>
          <div style={{ padding: "12px 16px" }}>
            {filterPanel}
          </div>
        </div>
      </MobileDrawer>

      <Footer />
    </div>
  );
}
