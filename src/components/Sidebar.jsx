import { Menu } from "lucide-react";

const sidebarItems = [
  { label: "General Store",   badge: "New",   badgeColor: "#FF6B00" },
  { label: "Grocery" },
  { label: "Edible / Snacks" },
  { label: "Fresh & Frozen",  badge: "Fresh", badgeColor: "#22C55E" },
  { label: "Kapray — Gents" },
  { label: "Kapray — Ladies" },
  { label: "Baby Clothing" },
  { label: "Jewellery" },
  { label: "Handbags" },
  { label: "Perfumes" },
];

export default function Sidebar({ activeCategory, onSelect }) {
  return (
    <aside style={{
      width: 210,
      flexShrink: 0,
      background: "#fff",
      border: "0.5px solid rgba(0,0,0,0.1)",
      borderRadius: 14,
      overflow: "hidden",
      alignSelf: "flex-start",
      position: "sticky",
      top: 100,
    }}>
      {/* Header */}
      <div style={{
        background: "#FF6B00",
        padding: "11px 14px",
        fontSize: 13,
        fontWeight: 600,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}>
        <Menu size={16} color="#fff" />
        Shop Categories
      </div>

      {/* Items */}
      {sidebarItems.map((item) => (
        <div
          key={item.label}
          onClick={() => onSelect?.(item.label)}
          style={{
            padding: "10px 14px",
            fontSize: 12,
            color: activeCategory === item.label ? "#FF6B00" : "#111",
            borderBottom: "0.5px solid rgba(0,0,0,0.07)",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: activeCategory === item.label ? "#fff7f0" : "#fff",
            transition: "background 0.12s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#fff7f0"}
          onMouseLeave={e => e.currentTarget.style.background =
            activeCategory === item.label ? "#fff7f0" : "#fff"}
        >
          <span>{item.label}</span>
          {item.badge ? (
            <span style={{
              background: item.badgeColor,
              color: "#fff",
              fontSize: 10,
              padding: "1px 7px",
              borderRadius: 8,
              fontWeight: 600,
            }}>
              {item.badge}
            </span>
          ) : (
            <span style={{ color: "#ccc", fontSize: 12 }}>›</span>
          )}
        </div>
      ))}
    </aside>
  );
}
