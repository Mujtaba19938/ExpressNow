export const categories = [
  { id: 1, name: "General Store", slug: "general", icon: "🛍️", color: "#fff7f0", stroke: "#FF6B00" },
  { id: 2, name: "Grocery", slug: "grocery", icon: "🌾", color: "#f0faf4", stroke: "#22C55E" },
  { id: 3, name: "Snacks", slug: "snacks", icon: "🍟", color: "#fff7f0", stroke: "#FF6B00" },
  { id: 4, name: "Fresh & Frozen", slug: "fresh-frozen", icon: "❄️", color: "#f0faf4", stroke: "#22C55E" },
  { id: 5, name: "Clothing", slug: "clothing", icon: "👕", color: "#fff7f0", stroke: "#FF6B00" },
];

export const products = [
  { id: 1, name: "Fresh Chicken Whole", category: "Fresh & Frozen", subcat: "Fresh Meat", price: 480, oldPrice: null, unit: "per kg", badge: "Fresh", badgeType: "fresh", bg: "#f0faf4", rating: 5, reviews: 94 },
  { id: 2, name: "Basmati Rice 5kg", category: "Grocery", subcat: "Rice", price: 950, oldPrice: 1050, unit: "5kg bag", badge: "10% off", badgeType: "sale", bg: "#f4f4f4", rating: 4, reviews: 62 },
  { id: 3, name: "Frozen Pomfret", category: "Fresh & Frozen", subcat: "Frozen Fish", price: 650, oldPrice: null, unit: "500g", badge: "Frozen", badgeType: "frozen", bg: "#eff6ff", rating: 4, reviews: 38 },
  { id: 4, name: "Lays Chips Multipack", category: "Snacks", subcat: "Chips", price: 320, oldPrice: 360, unit: "6 pcs", badge: "Hot", badgeType: "sale", bg: "#fff7f0", rating: 5, reviews: 110 },
  { id: 5, name: "Fresh Beef Boneless", category: "Fresh & Frozen", subcat: "Fresh Meat", price: 900, oldPrice: 1000, unit: "per kg", badge: "10% off", badgeType: "sale", bg: "#f0faf4", rating: 5, reviews: 128 },
  { id: 6, name: "Frozen Mutton Bone-in", category: "Fresh & Frozen", subcat: "Frozen Mutton", price: 1100, oldPrice: null, unit: "1kg pack", badge: "Frozen", badgeType: "frozen", bg: "#f0faf4", rating: 4, reviews: 45 },
  { id: 7, name: "Sarson Oil 1L", category: "Grocery", subcat: "Oil", price: 480, oldPrice: 520, unit: "1 litre", badge: "Sale", badgeType: "sale", bg: "#fffbeb", rating: 4, reviews: 29 },
  { id: 8, name: "Frozen Surmai Steaks", category: "Fresh & Frozen", subcat: "Frozen Fish", price: 780, oldPrice: null, unit: "500g", badge: "New", badgeType: "new", bg: "#eff6ff", rating: 5, reviews: 17 },
];

export const deliveryZones = [
  "DHA", "Clifton", "Gulshan-e-Iqbal", "North Nazimabad",
  "PECHS", "Saddar", "Korangi", "Malir", "Gulistan-e-Johar", "Nazimabad"
];

export const paymentMethods = [
  { id: "cod", label: "Cash on Delivery", sub: "Pay when your order arrives", color: "#1A1A2E" },
];
