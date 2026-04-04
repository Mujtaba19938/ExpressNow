import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Minus, Plus, X, Lock, CheckCircle } from "lucide-react";
import { deliveryZones, paymentMethods } from "../data/products";

const DELIVERY_FEE = 99;
const FREE_DELIVERY_THRESHOLD = 1500;
const COUPON_CODE = "WELCOME10";
const COUPON_DISCOUNT = 200;

export default function CartCheckoutPage({ setPage, cart, cartCount, updateQty, removeFromCart }) {
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("same-day");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [step] = useState(2);

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const itemDiscount = cart.reduce((sum, i) => i.oldPrice ? sum + (i.oldPrice - i.price) * i.qty : sum, 0);
  const couponDiscount = couponApplied ? COUPON_DISCOUNT : 0;
  const deliveryFee = deliveryMethod === "express" ? 249
    : deliveryMethod === "standard" ? 0
    : DELIVERY_FEE;
  const total = subtotal - itemDiscount - couponDiscount + deliveryFee;

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === COUPON_CODE) {
      setCouponApplied(true);
    } else {
      setCouponApplied(false);
      alert("Invalid coupon code. Try WELCOME10");
    }
  };

  const deliveryOptions = [
    { id: "same-day", label: "Same-day delivery", sub: "Order before 3 PM — arrives today", price: "Rs. 99" },
    { id: "standard", label: "Standard delivery", sub: "Arrives within 1–2 days", price: "Free" },
    { id: "express", label: "Express (2 hrs)", sub: "Priority handling + rush delivery", price: "Rs. 249" },
  ];

  const steps = ["Cart", "Delivery Info", "Payment", "Confirm"];

  return (
    <div style={{ background: "#F8F8F8", minHeight: "100vh" }}>
      <Navbar cartCount={cartCount} onNavigate={setPage} />

      <div style={{ padding: "10px 16px", fontSize: 12, color: "#6B7280" }}>
        Home › <span style={{ color: "#FF6B00" }}>Cart & Checkout</span>
      </div>

      {/* Steps */}
      <div style={{
        background: "#fff",
        borderBottom: "0.5px solid rgba(0,0,0,0.1)",
        padding: "14px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        marginBottom: 16,
      }}>
        {steps.map((s, i) => (
          <div key={s} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 30, height: 30, borderRadius: "50%",
                background: i < step - 1 ? "#22C55E" : i === step - 1 ? "#FF6B00" : "#f0f0f0",
                color: i <= step - 1 ? "#fff" : "#9CA3AF",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 600,
              }}>
                {i < step - 1 ? "✓" : i + 1}
              </div>
              <span style={{
                fontSize: 12, fontWeight: 600,
                color: i < step - 1 ? "#22C55E" : i === step - 1 ? "#FF6B00" : "#9CA3AF",
              }}>{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div style={{ width: 52, height: 0.5, background: i < step - 1 ? "#22C55E" : "rgba(0,0,0,0.15)", margin: "0 10px" }} />
            )}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 14, padding: "0 16px 28px", maxWidth: 1232, margin: "0 auto" }}>
        {/* Left col */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 12 }}>

          {/* Cart items */}
          <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "0.5px solid rgba(0,0,0,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ fontSize: 14, fontWeight: 600 }}>Your cart ({cartCount} items)</h3>
              <span onClick={() => setPage("home")} style={{ fontSize: 12, color: "#FF6B00", cursor: "pointer" }}>Continue shopping</span>
            </div>
            {cart.length === 0 && (
              <div style={{ padding: "40px 16px", textAlign: "center", color: "#9CA3AF", fontSize: 14 }}>
                Your cart is empty. Start shopping to add items!
              </div>
            )}
            {cart.map(item => (
              <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderBottom: "0.5px solid rgba(0,0,0,0.06)" }}>
                <div style={{
                  width: 68, height: 68, borderRadius: 10, background: "#f0faf4",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 28, flexShrink: 0,
                }}>🥩</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 10, color: "#FF6B00", textTransform: "uppercase", letterSpacing: "0.3px" }}>{item.subcat}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, margin: "2px 0" }}>{item.name}</div>
                  <div style={{ fontSize: 11, color: "#6B7280", marginBottom: 4 }}>{item.unit || item.desc}</div>
                  {item.badge && (
                    <span style={{ background: item.badgeColor, color: "#fff", fontSize: 10, padding: "1px 7px", borderRadius: 6, fontWeight: 600 }}>
                      {item.badge}
                    </span>
                  )}
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#FF6B00" }}>Rs. {(item.price * item.qty).toLocaleString()}</div>
                    {item.oldPrice && <div style={{ fontSize: 10, color: "#9CA3AF", textDecoration: "line-through" }}>Rs. {(item.oldPrice * item.qty).toLocaleString()}</div>}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", border: "0.5px solid rgba(0,0,0,0.15)", borderRadius: 7, overflow: "hidden" }}>
                    <button onClick={() => updateQty(item.id, -1)} style={{ width: 30, height: 30, border: "none", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Minus size={12} />
                    </button>
                    <span style={{ width: 32, textAlign: "center", fontSize: 13, fontWeight: 600 }}>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} style={{ width: 30, height: 30, border: "none", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Plus size={12} />
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} style={{ fontSize: 11, color: "#9CA3AF", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 3 }}>
                    <X size={11} /> Remove
                  </button>
                </div>
              </div>
            ))}
            {/* Coupon */}
            <div style={{ padding: "12px 16px" }}>
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                  placeholder="Enter coupon code..."
                  style={{ flex: 1, border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: 8, padding: "8px 12px", fontSize: 13, outline: "none" }}
                />
                <button onClick={applyCoupon} style={{ background: "#1A1A2E", color: "#fff", border: "none", padding: "8px 18px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                  Apply
                </button>
              </div>
              {couponApplied && (
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8, background: "#f0faf4", border: "0.5px solid #22C55E", borderRadius: 8, padding: "8px 12px", fontSize: 12, color: "#22C55E", fontWeight: 600 }}>
                  <CheckCircle size={14} /> Coupon WELCOME10 applied — Rs. 200 off!
                </div>
              )}
            </div>
          </div>

          {/* Delivery info form */}
          <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "0.5px solid rgba(0,0,0,0.08)" }}>
              <h3 style={{ fontSize: 14, fontWeight: 600 }}>Delivery information</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: "16px" }}>
              {[
                { label: "Full name", placeholder: "Ahmed Ali", full: false },
                { label: "Phone number", placeholder: "+92 300 0000000", full: false },
                { label: "Full address", placeholder: "House #, Street, Block, Area...", full: true },
              ].map(field => (
                <div key={field.label} style={{ gridColumn: field.full ? "1 / -1" : "auto" }}>
                  <label style={{ fontSize: 11, fontWeight: 600, color: "#6B7280", display: "block", marginBottom: 4 }}>{field.label}</label>
                  <input placeholder={field.placeholder} style={{ width: "100%", border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: 8, padding: "9px 12px", fontSize: 13, outline: "none" }} />
                </div>
              ))}
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#6B7280", display: "block", marginBottom: 4 }}>City</label>
                <select style={{ width: "100%", border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: 8, padding: "9px 12px", fontSize: 13, outline: "none" }}>
                  <option>Karachi</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#6B7280", display: "block", marginBottom: 4 }}>Area / Zone</label>
                <select style={{ width: "100%", border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: 8, padding: "9px 12px", fontSize: 13, outline: "none" }}>
                  <option value="">Select area</option>
                  {deliveryZones.map(z => <option key={z}>{z}</option>)}
                </select>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#6B7280", display: "block", marginBottom: 4 }}>Delivery notes (optional)</label>
                <textarea placeholder="Ring the bell, leave at gate, call before arriving..." style={{ width: "100%", border: "0.5px solid rgba(0,0,0,0.2)", borderRadius: 8, padding: "9px 12px", fontSize: 13, outline: "none", resize: "none", height: 64 }} />
              </div>
            </div>
          </div>

          {/* Delivery method */}
          <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "0.5px solid rgba(0,0,0,0.08)" }}>
              <h3 style={{ fontSize: 14, fontWeight: 600 }}>Delivery method</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "12px 16px" }}>
              {deliveryOptions.map(opt => (
                <div key={opt.id} onClick={() => setDeliveryMethod(opt.id)} style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "11px 14px",
                  border: `0.5px solid ${deliveryMethod === opt.id ? "#FF6B00" : "rgba(0,0,0,0.15)"}`,
                  background: deliveryMethod === opt.id ? "#fff7f0" : "#fff",
                  borderRadius: 10, cursor: "pointer",
                }}>
                  <input type="radio" name="delivery" checked={deliveryMethod === opt.id} onChange={() => setDeliveryMethod(opt.id)} style={{ accentColor: "#FF6B00" }} />
                  <div style={{ flex: 1 }}>
                    <strong style={{ fontSize: 13, display: "block" }}>{opt.label}</strong>
                    <span style={{ fontSize: 11, color: "#6B7280" }}>{opt.sub}</span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: opt.price === "Free" ? "#22C55E" : "#FF6B00" }}>{opt.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment method */}
          <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "12px 16px", borderBottom: "0.5px solid rgba(0,0,0,0.08)" }}>
              <h3 style={{ fontSize: 14, fontWeight: 600 }}>Payment method</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "12px 16px" }}>
              {paymentMethods.map(pm => (
                <div key={pm.id} onClick={() => setPaymentMethod(pm.id)} style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "11px 14px",
                  border: `0.5px solid ${paymentMethod === pm.id ? "#FF6B00" : "rgba(0,0,0,0.15)"}`,
                  background: paymentMethod === pm.id ? "#fff7f0" : "#fff",
                  borderRadius: 10, cursor: "pointer",
                }}>
                  <input type="radio" name="payment" checked={paymentMethod === pm.id} onChange={() => setPaymentMethod(pm.id)} style={{ accentColor: "#FF6B00" }} />
                  <div style={{
                    width: 38, height: 28, borderRadius: 5, background: pm.color,
                    color: "#fff", fontSize: 9, fontWeight: 700,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    {pm.id.toUpperCase().slice(0,4)}
                  </div>
                  <div>
                    <strong style={{ fontSize: 13, display: "block" }}>{pm.label}</strong>
                    <span style={{ fontSize: 11, color: "#6B7280" }}>{pm.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div style={{ width: 300, flexShrink: 0, alignSelf: "flex-start", position: "sticky", top: 100 }}>
          <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: 14, overflow: "hidden", marginBottom: 12 }}>
            <div style={{ padding: "12px 16px", borderBottom: "0.5px solid rgba(0,0,0,0.08)" }}>
              <h3 style={{ fontSize: 14, fontWeight: 600 }}>Order summary</h3>
            </div>
            {cart.map(item => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", padding: "8px 16px", fontSize: 13 }}>
                <span style={{ color: "#6B7280" }}>{item.name} × {item.qty}</span>
                <span style={{ fontWeight: 600 }}>Rs. {(item.price * item.qty).toLocaleString()}</span>
              </div>
            ))}
            <hr style={{ border: "none", borderTop: "0.5px solid rgba(0,0,0,0.08)", margin: "4px 0" }} />
            {[
              { label: "Subtotal", value: `Rs. ${subtotal.toLocaleString()}`, color: "#111" },
              { label: "Item discount", value: `− Rs. ${itemDiscount.toLocaleString()}`, color: "#22C55E" },
              ...(couponApplied ? [{ label: "Coupon (WELCOME10)", value: `− Rs. ${couponDiscount.toLocaleString()}`, color: "#22C55E" }] : []),
              { label: "Delivery", value: deliveryFee === 0 ? "Free" : `Rs. ${deliveryFee}`, color: deliveryFee === 0 ? "#22C55E" : "#111" },
            ].map(row => (
              <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "7px 16px", fontSize: 13 }}>
                <span style={{ color: "#6B7280" }}>{row.label}</span>
                <span style={{ fontWeight: 600, color: row.color }}>{row.value}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", background: "#fff7f0" }}>
              <span style={{ fontSize: 15, fontWeight: 700 }}>Total</span>
              <span style={{ fontSize: 20, fontWeight: 700, color: "#FF6B00" }}>Rs. {total.toLocaleString()}</span>
            </div>
            <div style={{ padding: "14px 16px 16px" }}>
              <button style={{
                width: "100%", background: "#FF6B00", color: "#fff", border: "none",
                padding: 14, borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer", marginBottom: 10,
              }}>
                Place Order
              </button>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 11, color: "#9CA3AF" }}>
                <Lock size={12} /> Secure & encrypted checkout
              </div>
            </div>
          </div>

          {/* Payment badges */}
          <div style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: 14, padding: "14px 16px" }}>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10 }}>We accept</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <div style={{ padding: "4px 12px", background: "#1A1A2E", color: "#fff", borderRadius: 5, fontSize: 11, fontWeight: 600 }}>COD</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
