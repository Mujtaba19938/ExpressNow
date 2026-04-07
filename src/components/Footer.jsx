import useWindowWidth from "../hooks/useWindowWidth";

export default function Footer() {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  return (
    <footer style={{ background: "#1A1A2E", padding: "28px 16px 16px" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: isMobile ? 20 : 24,
        maxWidth: 1200,
        margin: "0 auto 24px",
      }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10 }}>
            Express<span style={{ color: "#FF6B00" }}>Now</span>
          </div>
          <p style={{ fontSize: 12, color: "#888", lineHeight: 1.7, marginBottom: 10 }}>
            Karachi's fastest delivery store — grocery, fashion, fresh meat & more.
          </p>
          <p style={{ fontSize: 12, color: "#FF6B00" }}>03185715246 | 03290390774</p>
        </div>

        {[
          {
            title: "Quick Links",
            links: ["Home", "Shop", "Track Order", "Contact Us", "About Us"],
          },
          {
            title: "My Account",
            links: ["Login / Register", "My Orders", "Wishlist", "Returns & Refunds"],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 10 }}>
              {col.title}
            </h4>
            {col.links.map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  display: "block",
                  fontSize: 12,
                  color: "#888",
                  marginBottom: 6,
                  transition: "color 0.15s",
                }}
                onMouseEnter={e => e.target.style.color = "#FF6B00"}
                onMouseLeave={e => e.target.style.color = "#888"}
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div style={{
        borderTop: "0.5px solid #2a2a40",
        paddingTop: 14,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: isMobile ? 6 : 0,
        maxWidth: 1200,
        margin: "0 auto",
        textAlign: isMobile ? "center" : "left",
      }}>
        <span style={{ fontSize: 11, color: "#555" }}>
          © 2025 ExpressNow. All rights reserved.
        </span>
        <span style={{ fontSize: 11, color: "#555" }}>Karachi, Pakistan</span>
      </div>
    </footer>
  );
}
