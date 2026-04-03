import { useState } from "react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";

export default function Navbar({ cartCount = 0, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All Categories");

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
      {/* Top bar */}
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

      {/* Main navbar */}
      <nav style={{
        background: "#fff",
        borderBottom: "0.5px solid rgba(0,0,0,0.1)",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}>
        {/* Logo */}
        <div 
          onClick={() => onNavigate && onNavigate('home')}
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
          <button style={{
            background: "#FF6B00",
            border: "none",
            padding: "0 18px",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}>
            <Search size={14} />
            Search
          </button>
        </div>

        {/* Nav actions */}
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexShrink: 0 }}>
          {onNavigate && (
            <div style={{ display: "flex", gap: 16, marginRight: 8, borderRight: "1px solid #eee", paddingRight: 16 }}>
              <button onClick={() => onNavigate('home')} style={{ background: "none", border: "none", fontSize: 13, fontWeight: 600, color: "#111", cursor: "pointer", padding: 0 }}>Home</button>
              <button onClick={() => onNavigate('listing')} style={{ background: "none", border: "none", fontSize: 13, fontWeight: 600, color: "#111", cursor: "pointer", padding: 0 }}>Products</button>
              <button onClick={() => onNavigate('detail')} style={{ background: "none", border: "none", fontSize: 13, fontWeight: 600, color: "#111", cursor: "pointer", padding: 0 }}>Details</button>
            </div>
          )}

          {/* Cart button */}
          <button
            onClick={() => onNavigate && onNavigate('cart')}
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
      </nav>

      {/* Promo bar */}
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
    </div>
  );
}
