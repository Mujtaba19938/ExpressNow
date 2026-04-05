export default function CategoryChipScroller({ categories, activeCategory, onSelect }) {
  return (
    <div
      className="chip-scroller"
      style={{
        display: "flex",
        overflowX: "auto",
        gap: 8,
        padding: "8px 16px",
        background: "#fff",
        borderBottom: "0.5px solid rgba(0,0,0,0.08)",
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {categories.map(cat => {
        const active = activeCategory === cat.name;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.name)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              padding: "6px 12px",
              borderRadius: 20,
              border: active ? "none" : "0.5px solid rgba(0,0,0,0.12)",
              background: active ? "#FF6B00" : "#fff",
              color: active ? "#fff" : "#374151",
              fontSize: 10,
              fontWeight: 500,
              whiteSpace: "nowrap",
              flexShrink: 0,
              minHeight: 44,
              minWidth: 56,
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 18, lineHeight: 1 }}>{cat.icon}</span>
            <span>{cat.name.replace(" — ", "\n").split("\n")[0]}</span>
          </button>
        );
      })}
    </div>
  );
}
