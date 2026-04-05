import { Menu, ChevronRight, Store, ShoppingBasket, Cookie, Snowflake, Shirt, Sparkles, Baby, Gem, ShoppingBag, Droplets } from "lucide-react";

const sidebarItems = [
  { label: "General Store",   badge: "New",   badgeColor: "#FF6B00", Icon: Store },
  { label: "Grocery",                                                  Icon: ShoppingBasket },
  { label: "Edible / Snacks",                                          Icon: Cookie },
  { label: "Fresh & Frozen",  badge: "Fresh", badgeColor: "#22C55E", Icon: Snowflake },
  { label: "Kapray — Gents",                                           Icon: Shirt },
  { label: "Kapray — Ladies",                                          Icon: Sparkles },
  { label: "Baby Clothing",                                            Icon: Baby },
  { label: "Jewellery",                                                Icon: Gem },
  { label: "Handbags",                                                 Icon: ShoppingBag },
  { label: "Perfumes",                                                 Icon: Droplets },
];

export default function Sidebar({ activeCategory, onSelect, hideHeader = false, inDrawer = false }) {
  if (inDrawer) {
    return (
      <div style={{ paddingBottom: 16 }}>
        {sidebarItems.map((item) => {
          const isActive = activeCategory === item.label;
          const { Icon } = item;
          return (
            <div
              key={item.label}
              onClick={() => onSelect?.(item.label)}
              style={{
                position: "relative",
                height: 56,
                display: "flex",
                alignItems: "center",
                gap: 14,
                paddingLeft: 20,
                paddingRight: 16,
                cursor: "pointer",
                background: isActive ? "rgba(255,107,0,0.05)" : "transparent",
                borderBottom: "0.5px solid rgba(0,0,0,0.06)",
                transition: "background 0.12s",
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "rgba(255,107,0,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = isActive ? "rgba(255,107,0,0.05)" : "transparent"; }}
            >
              {/* Active left bar */}
              {isActive && (
                <div style={{
                  position: "absolute", left: 0, top: 0, bottom: 0,
                  width: 4, background: "#FF6B00", borderRadius: "0 2px 2px 0",
                }} />
              )}
              {/* Category icon */}
              <Icon size={20} color={isActive ? "#FF6B00" : "#9CA3AF"} strokeWidth={1.6} />
              {/* Label */}
              <span style={{
                flex: 1,
                fontSize: 16,
                fontWeight: 500,
                color: isActive ? "#FF6B00" : "#111827",
                letterSpacing: "-0.1px",
              }}>
                {item.label}
              </span>
              {/* Badge or chevron */}
              {item.badge ? (
                <span style={{
                  background: item.badgeColor,
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.2px",
                  padding: "3px 8px",
                  borderRadius: 20,
                  lineHeight: 1,
                }}>
                  {item.badge}
                </span>
              ) : (
                <ChevronRight size={16} color="#D1D5DB" strokeWidth={1.8} />
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <aside style={{
      width: 210,
      background: "#fff",
      border: "0.5px solid rgba(0,0,0,0.1)",
      borderRadius: 14,
      overflow: "hidden",
    }}>
      {/* Header */}
      {!hideHeader && (
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
      )}

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
