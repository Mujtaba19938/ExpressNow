import { useState } from "react";
import { Heart, Plus } from "lucide-react";

const badgeStyles = {
  sale:   { background: "#FF6B00", color: "#fff" },
  fresh:  { background: "#22C55E", color: "#fff" },
  frozen: { background: "#3B82F6", color: "#fff" },
  new:    { background: "#1A1A2E", color: "#fff" },
};

export default function ProductCard({ product, onAddToCart, onClickProduct }) {
  const [wished, setWished] = useState(false);

  const {
    name, category, subcat, price, oldPrice,
    unit, badge, badgeType, bg, rating, reviews, image,
  } = product;

  const discount = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : null;

  return (
    <div style={{
      background: "#fff",
      border: "0.5px solid rgba(0,0,0,0.1)",
      borderRadius: 14,
      overflow: "hidden",
      cursor: "pointer",
      transition: "border-color 0.15s, transform 0.1s",
    }}
    onClick={() => onClickProduct?.(product)}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "#FF6B00"; e.currentTarget.style.transform = "translateY(-1px)"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {/* Image area */}
      <div style={{
        height: 150,
        background: bg || "#f4f4f4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}>
        {/* Product image or placeholder */}
        {image ? (
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              padding: "8px",
            }}
          />
        ) : (
          <div style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.06)",
          }} />
        )}

        {/* Badge */}
        {badge && (
          <span style={{
            position: "absolute",
            top: 8,
            left: 8,
            ...badgeStyles[badgeType],
            fontSize: 10,
            padding: "2px 8px",
            borderRadius: 6,
            fontWeight: 600,
          }}>
            {badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={e => { e.stopPropagation(); setWished(!wished); }}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "#fff",
            border: "0.5px solid rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Heart
            size={13}
            color="#FF6B00"
            fill={wished ? "#FF6B00" : "none"}
          />
        </button>
      </div>

      {/* Info */}
      <div style={{ padding: "10px 12px" }}>
        <div style={{ fontSize: 10, color: "#FF6B00", textTransform: "uppercase", letterSpacing: "0.4px", marginBottom: 3 }}>
          {subcat || category}
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 2, lineHeight: 1.3 }}>
          {name}
        </div>
        <div style={{ fontSize: 11, color: "#6B7280", marginBottom: 8 }}>
          {unit}
        </div>

        {/* Stars */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
          <div style={{ display: "flex", gap: 2 }}>
            {[1,2,3,4,5].map(i => (
              <div key={i} style={{
                width: 11,
                height: 11,
                background: i <= rating ? "#FF6B00" : "#e0e0e0",
                clipPath: "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
              }} />
            ))}
          </div>
          <span style={{ fontSize: 11, color: "#9CA3AF" }}>({reviews})</span>
        </div>

        {/* Price row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#FF6B00" }}>
              Rs. {price.toLocaleString()}
            </div>
            {oldPrice && (
              <div style={{ fontSize: 10, color: "#9CA3AF", textDecoration: "line-through" }}>
                Rs. {oldPrice.toLocaleString()}
              </div>
            )}
          </div>
          <button
            onClick={e => { e.stopPropagation(); onAddToCart?.(product); }}
            style={{
              background: "#FF6B00",
              color: "#fff",
              border: "none",
              width: 30,
              height: 30,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.15s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#e55f00"}
            onMouseLeave={e => e.currentTarget.style.background = "#FF6B00"}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
