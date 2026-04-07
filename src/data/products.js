export const categories = [
  { id: 1,  name: "General Store",   slug: "general-store",  icon: "🛍️", color: "#fff7f0", stroke: "#FF6B00" },
  { id: 2,  name: "Grocery",         slug: "grocery",         icon: "🌾", color: "#f0faf4", stroke: "#22C55E" },
  { id: 3,  name: "Edible / Snacks", slug: "snacks",          icon: "🍟", color: "#fff7f0", stroke: "#FF6B00" },
  { id: 4,  name: "Fresh & Frozen",  slug: "fresh-frozen",    icon: "❄️", color: "#f0faf4", stroke: "#22C55E" },
  { id: 5,  name: "Kapray — Gents",  slug: "kapray-gents",    icon: "👔", color: "#eff6ff", stroke: "#3B82F6" },
  { id: 6,  name: "Kapray — Ladies", slug: "kapray-ladies",   icon: "👗", color: "#fdf4ff", stroke: "#A855F7" },
  { id: 7,  name: "Baby Clothing",   slug: "baby-clothing",   icon: "👶", color: "#fff7f0", stroke: "#FF6B00" },
  { id: 8,  name: "Jewellery",       slug: "jewellery",       icon: "💍", color: "#fffbeb", stroke: "#F59E0B" },
  { id: 9,  name: "Handbags",        slug: "handbags",        icon: "👜", color: "#fdf4ff", stroke: "#A855F7" },
  { id: 10, name: "Perfumes",        slug: "perfumes",        icon: "🌸", color: "#fdf2f8", stroke: "#EC4899" },
];

export const subTagsMap = {
  "General Store":   ["All", "Detergent", "Personal Care", "Kitchen", "Household"],
  "Grocery":         ["All", "Rice", "Oil", "Spices", "Pulses", "Flour", "Meat"],
  "Edible / Snacks": ["All", "Chips", "Biscuits", "Chocolates", "Nuts", "Drinks"],
  "Fresh & Frozen":  ["All", "Fresh Meat", "Frozen Fish", "Frozen Mutton", "Frozen Chicken"],
  "Kapray — Gents":  ["All", "Shalwar Kameez", "Shirts", "Trousers", "Jackets", "Sportswear"],
  "Kapray — Ladies": ["All", "Lawn", "Chiffon", "Casual", "Dupatta", "Formal"],
  "Baby Clothing":   ["All", "0-3 months", "3-6 months", "6-12 months", "1-2 years"],
  "Jewellery":       ["All", "Earrings", "Necklace", "Bangles", "Rings"],
  "Handbags":        ["All", "Tote", "Shoulder", "Clutch", "Backpack"],
  "Perfumes":        ["All", "Oriental", "Floral", "Fresh", "Woody"],
};

export const products = [
  // ─── General Store ───────────────────────────────────────────────────────────
  { id: 101, name: "Surf Excel 1kg",             category: "General Store", subcat: "Detergent",     price: 350,  oldPrice: 400,  unit: "1kg box",   badge: "Sale",    badgeType: "sale",   bg: "#fff7f0", rating: 4, reviews: 88,  image: "/images/general-store/surf-excel.png"         },
  { id: 102, name: "Lifebuoy Soap (Pack of 4)",  category: "General Store", subcat: "Personal Care", price: 280,  oldPrice: 320,  unit: "4 bars",    badge: "New",     badgeType: "new",    bg: "#f0faf4", rating: 4, reviews: 52,  image: "/images/general-store/lifebuoy-soap.png"      },
  { id: 103, name: "Scotch Brite Sponge",        category: "General Store", subcat: "Kitchen",       price: 90,   oldPrice: null, unit: "2 pcs",     badge: null,      badgeType: null,     bg: "#f4f4f4", rating: 3, reviews: 34,  image: "/images/general-store/scotch-brite-sponge.png" },
  { id: 104, name: "Ariel Liquid 1.5L",          category: "General Store", subcat: "Detergent",     price: 620,  oldPrice: 680,  unit: "1.5 litre", badge: "10% off", badgeType: "sale",   bg: "#fff7f0", rating: 5, reviews: 74,  image: "/images/general-store/ariel-liquid.png"       },
  { id: 105, name: "Colgate Toothpaste 120ml",   category: "General Store", subcat: "Personal Care", price: 150,  oldPrice: null, unit: "120ml",     badge: null,      badgeType: null,     bg: "#eff6ff", rating: 4, reviews: 120, image: "/images/general-store/colgate-toothpaste.png" },
  { id: 106, name: "Tissue Roll (12 pcs)",       category: "General Store", subcat: "Household",     price: 360,  oldPrice: 400,  unit: "12 rolls",  badge: "10% off", badgeType: "sale",   bg: "#f4f4f4", rating: 4, reviews: 65,  image: "/images/general-store/tissue-roll.png"        },

  // ─── Grocery ─────────────────────────────────────────────────────────────────
  { id: 201, name: "Basmati Rice 5kg",           category: "Grocery",       subcat: "Rice",          price: 950,  oldPrice: 1050, unit: "5kg bag",   badge: "10% off", badgeType: "sale",   bg: "#f4f4f4", rating: 4, reviews: 62,  image: "/images/grocery/basmati-rice.png"     },
  { id: 202, name: "Sarson Oil 1L",              category: "Grocery",       subcat: "Oil",           price: 480,  oldPrice: 520,  unit: "1 litre",   badge: "Sale",    badgeType: "sale",   bg: "#fffbeb", rating: 4, reviews: 29,  image: "/images/grocery/sarson-oil.png"       },
  { id: 203, name: "Chana Dal 1kg",              category: "Grocery",       subcat: "Pulses",        price: 220,  oldPrice: null, unit: "1kg pack",  badge: null,      badgeType: null,     bg: "#f4f4f4", rating: 4, reviews: 41,  image: "/images/grocery/chana-dal.png"        },
  { id: 204, name: "Atta Flour 10kg",            category: "Grocery",       subcat: "Flour",         price: 1200, oldPrice: 1350, unit: "10kg bag",  badge: "11% off", badgeType: "sale",   bg: "#fffbeb", rating: 5, reviews: 108, image: "/images/grocery/atta-flour.png"       },
  { id: 205, name: "Mixed Spice Pack 200g",      category: "Grocery",       subcat: "Spices",        price: 180,  oldPrice: null, unit: "200g",      badge: "New",     badgeType: "new",    bg: "#fff7f0", rating: 4, reviews: 33,  image: "/images/grocery/mixed-spice-pack.png" },
  { id: 206, name: "Sunflower Oil 3L",           category: "Grocery",       subcat: "Oil",           price: 820,  oldPrice: 920,  unit: "3 litre",   badge: "11% off", badgeType: "sale",   bg: "#fffbeb", rating: 4, reviews: 57,  image: "/images/grocery/sunflower-oil.png"    },

  // ─── Edible / Snacks ─────────────────────────────────────────────────────────
  { id: 301, name: "Lays Chips Multipack",       category: "Edible / Snacks", subcat: "Chips",       price: 320,  oldPrice: 360,  unit: "6 pcs",     badge: "Hot",     badgeType: "sale",   bg: "#fff7f0", rating: 5, reviews: 110, image: "/images/snacks/lays-chips.png"      },
  { id: 302, name: "Oreo Biscuits 6pk",          category: "Edible / Snacks", subcat: "Biscuits",    price: 240,  oldPrice: null, unit: "6 packs",   badge: null,      badgeType: null,     bg: "#f4f4f4", rating: 5, reviews: 87,  image: "/images/snacks/oreo.png"             },
  { id: 303, name: "KitKat Chocolate 8pc",       category: "Edible / Snacks", subcat: "Chocolates",  price: 380,  oldPrice: 420,  unit: "8 bars",    badge: "Sale",    badgeType: "sale",   bg: "#fff7f0", rating: 5, reviews: 95,  image: "/images/snacks/kitkat.png"           },
  { id: 304, name: "Mixed Dry Fruits 250g",      category: "Edible / Snacks", subcat: "Nuts",        price: 550,  oldPrice: null, unit: "250g pack", badge: "New",     badgeType: "new",    bg: "#fffbeb", rating: 4, reviews: 48,  image: "/images/snacks/mixed-dry-fruits.png" },
  { id: 305, name: "Pepsi 1.5L Bottle",          category: "Edible / Snacks", subcat: "Drinks",      price: 120,  oldPrice: null, unit: "1.5 litre", badge: null,      badgeType: null,     bg: "#eff6ff", rating: 4, reviews: 62,  image: "/images/snacks/pepsi.png"            },
  { id: 306, name: "Bourbon Biscuits 3-Pack",    category: "Edible / Snacks", subcat: "Biscuits",    price: 180,  oldPrice: 200,  unit: "3 packs",   badge: "10% off", badgeType: "sale",   bg: "#f4f4f4", rating: 4, reviews: 39,  image: "/images/snacks/bourbon-biscuits.png" },

  // ─── Fresh & Frozen ──────────────────────────────────────────────────────────
  { id: 401, name: "Fresh Whole Chicken",        category: "Fresh & Frozen",  subcat: "Fresh Meat",  price: 480,  oldPrice: null, unit: "per kg",    badge: "Fresh",   badgeType: "fresh",  bg: "#f0faf4", rating: 5, reviews: 94,  image: "/images/fresh-frozen/whole-chicken.png"  },
  { id: 402, name: "Fresh Beef Boneless",        category: "Fresh & Frozen",  subcat: "Fresh Meat",  price: 900,  oldPrice: 1000, unit: "per kg",    badge: "10% off", badgeType: "sale",   bg: "#f0faf4", rating: 5, reviews: 128, image: "/images/fresh-frozen/beef-boneless.png"  },
  { id: 403, name: "Frozen Pomfret 500g",        category: "Fresh & Frozen",  subcat: "Frozen Fish", price: 650,  oldPrice: null, unit: "500g",      badge: "Frozen",  badgeType: "frozen", bg: "#eff6ff", rating: 4, reviews: 38,  image: "/images/fresh-frozen/frozen-pomfret.png" },
  { id: 404, name: "Frozen Mutton Bone-in",      category: "Fresh & Frozen",  subcat: "Frozen Mutton",price: 1100,oldPrice: null, unit: "1kg pack",  badge: "Frozen",  badgeType: "frozen", bg: "#f0faf4", rating: 4, reviews: 45,  image: "/images/fresh-frozen/frozen-mutton.png"  },
  { id: 405, name: "Frozen Surmai Steaks",       category: "Fresh & Frozen",  subcat: "Frozen Fish", price: 780,  oldPrice: null, unit: "500g",      badge: "New",     badgeType: "new",    bg: "#eff6ff", rating: 5, reviews: 17,  image: "/images/fresh-frozen/frozen-surmai.png"    },
  { id: 406, name: "Frozen Chicken Nuggets",     category: "Fresh & Frozen",  subcat: "Frozen Chicken",price: 380,oldPrice: 420,  unit: "500g",      badge: "Sale",    badgeType: "sale",   bg: "#eff6ff", rating: 4, reviews: 56,  image: "/images/fresh-frozen/chicken-nuggets.png"  },

  // ─── Kapray — Gents ──────────────────────────────────────────────────────────
  { id: 501, name: "Formal Shalwar Kameez",      category: "Kapray — Gents", subcat: "Shalwar Kameez", price: 2500, oldPrice: 3000, unit: "1 suit",   badge: "17% off", badgeType: "sale",   bg: "#eff6ff", rating: 5, reviews: 74,  image: "/images/kapray-gents/formal-shalwar-kameez.png" },
  { id: 502, name: "Cotton Polo Shirt",           category: "Kapray — Gents", subcat: "Shirts",         price: 1200, oldPrice: null, unit: "1 piece",  badge: "New",     badgeType: "new",    bg: "#f4f4f4", rating: 4, reviews: 43,  image: "/images/kapray-gents/polo-shirt.png"            },
  { id: 503, name: "Chino Trousers",              category: "Kapray — Gents", subcat: "Trousers",       price: 1800, oldPrice: 2200, unit: "1 piece",  badge: "18% off", badgeType: "sale",   bg: "#eff6ff", rating: 4, reviews: 61,  image: "/images/kapray-gents/chino-trousers.png"        },
  { id: 504, name: "Casual Kurta",                category: "Kapray — Gents", subcat: "Shalwar Kameez", price: 950,  oldPrice: null, unit: "1 piece",  badge: null,      badgeType: null,     bg: "#f4f4f4", rating: 4, reviews: 38,  image: "/images/kapray-gents/casual-kurta.png"          },
  { id: 505, name: "Denim Jacket",                category: "Kapray — Gents", subcat: "Jackets",        price: 3200, oldPrice: 3800, unit: "1 piece",  badge: "16% off", badgeType: "sale",   bg: "#eff6ff", rating: 5, reviews: 29,  image: "/images/kapray-gents/denim-jacket.png"          },
  { id: 506, name: "Sports Tracksuit",            category: "Kapray — Gents", subcat: "Sportswear",     price: 2200, oldPrice: null, unit: "set",      badge: "New",     badgeType: "new",    bg: "#f4f4f4", rating: 4, reviews: 52,  image: "/images/kapray-gents/sports-tracksuit.png"      },

  // ─── Kapray — Ladies ─────────────────────────────────────────────────────────
  { id: 601, name: "Lawn 3pc Suit",              category: "Kapray — Ladies", subcat: "Lawn",    price: 2800, oldPrice: 3500, unit: "3 pcs",   badge: "20% off", badgeType: "sale",   bg: "#fdf4ff", rating: 5, reviews: 112, image: "/images/kapray-ladies/lawn-3pc-suit.png"           },
  { id: 602, name: "Embroidered Chiffon Suit",   category: "Kapray — Ladies", subcat: "Chiffon", price: 4500, oldPrice: null, unit: "3 pcs",   badge: "New",     badgeType: "new",    bg: "#fdf4ff", rating: 5, reviews: 68,  image: "/images/kapray-ladies/embroidered-chiffon-suit.png" },
  { id: 603, name: "Casual Kurti",               category: "Kapray — Ladies", subcat: "Casual",  price: 1200, oldPrice: 1500, unit: "1 piece", badge: "20% off", badgeType: "sale",   bg: "#fdf4ff", rating: 4, reviews: 87,  image: "/images/kapray-ladies/casual-kurti.png"             },
  { id: 604, name: "Printed Cotton Dupatta",     category: "Kapray — Ladies", subcat: "Dupatta", price: 650,  oldPrice: null, unit: "1 piece", badge: null,      badgeType: null,     bg: "#fdf4ff", rating: 4, reviews: 41,  image: "/images/kapray-ladies/printed-cotton-dupatta.png"   },
  { id: 605, name: "Winter Shawl",               category: "Kapray — Ladies", subcat: "Casual",  price: 1800, oldPrice: 2200, unit: "1 piece", badge: "18% off", badgeType: "sale",   bg: "#fdf4ff", rating: 5, reviews: 55,  image: "/images/kapray-ladies/winter-shawl.png"             },
  { id: 606, name: "Formal Trouser Suit",        category: "Kapray — Ladies", subcat: "Formal",  price: 3200, oldPrice: null, unit: "2 pcs",   badge: "New",     badgeType: "new",    bg: "#fdf4ff", rating: 4, reviews: 34,  image: "/images/kapray-ladies/formal-trouser-suit.png"      },

  // ─── Baby Clothing ───────────────────────────────────────────────────────────
  { id: 701, name: "Newborn Onesie Set",         category: "Baby Clothing", subcat: "0-3 months",  price: 850,  oldPrice: 1000, unit: "3 pcs",   badge: "Sale",    badgeType: "sale",   bg: "#fff7f0", rating: 5, reviews: 88, image: "/images/baby-clothing/newborn-onesie-set.png"  },
  { id: 702, name: "Baby Romper",                category: "Baby Clothing", subcat: "3-6 months",  price: 550,  oldPrice: null, unit: "1 piece", badge: "New",     badgeType: "new",    bg: "#f0faf4", rating: 4, reviews: 54, image: "/images/baby-clothing/baby-romper.png"          },
  { id: 703, name: "Winter Baby Suit",           category: "Baby Clothing", subcat: "6-12 months", price: 1200, oldPrice: 1400, unit: "2 pcs",   badge: "14% off", badgeType: "sale",   bg: "#fff7f0", rating: 5, reviews: 72, image: "/images/baby-clothing/winter-baby-suit.png"     },
  { id: 704, name: "Toddler T-Shirt Pack",       category: "Baby Clothing", subcat: "1-2 years",   price: 750,  oldPrice: null, unit: "3 pcs",   badge: null,      badgeType: null,     bg: "#f4f4f4", rating: 4, reviews: 39, image: "/images/baby-clothing/toddler-tshirt-pack.png"  },
  { id: 705, name: "Baby Frock",                 category: "Baby Clothing", subcat: "6-12 months", price: 680,  oldPrice: 800,  unit: "1 piece", badge: "15% off", badgeType: "sale",   bg: "#fdf4ff", rating: 5, reviews: 63, image: "/images/baby-clothing/baby-frock.png"           },
  { id: 706, name: "Infant Sleepsuit",           category: "Baby Clothing", subcat: "0-3 months",  price: 480,  oldPrice: null, unit: "1 piece", badge: "New",     badgeType: "new",    bg: "#fff7f0", rating: 4, reviews: 27, image: "/images/baby-clothing/infant-sleepsuit.png"     },

  // ─── Jewellery ───────────────────────────────────────────────────────────────
  { id: 801, name: "Gold Plated Earrings",       category: "Jewellery", subcat: "Earrings", price: 850,  oldPrice: 1000, unit: "1 pair",  badge: "15% off", badgeType: "sale",   bg: "#fffbeb", rating: 5, reviews: 96, image: "/images/jewellery/gold-plated-earrings.png"    },
  { id: 802, name: "Silver Necklace Set",        category: "Jewellery", subcat: "Necklace", price: 2200, oldPrice: null, unit: "1 set",   badge: "New",     badgeType: "new",    bg: "#fffbeb", rating: 5, reviews: 78, image: "/images/jewellery/silver-necklace-set.png"     },
  { id: 803, name: "Kundan Bangles Set",         category: "Jewellery", subcat: "Bangles",  price: 1500, oldPrice: 1800, unit: "12 pcs",  badge: "17% off", badgeType: "sale",   bg: "#fffbeb", rating: 4, reviews: 54, image: "/images/jewellery/kundan-bangles-set.png"      },
  { id: 804, name: "Stone Ring",                 category: "Jewellery", subcat: "Rings",    price: 650,  oldPrice: null, unit: "1 piece", badge: null,      badgeType: null,     bg: "#fffbeb", rating: 4, reviews: 38, image: "/images/jewellery/stone-ring.png"              },
  { id: 805, name: "Pearl Choker Necklace",      category: "Jewellery", subcat: "Necklace", price: 3200, oldPrice: 3800, unit: "1 piece", badge: "16% off", badgeType: "sale",   bg: "#fffbeb", rating: 5, reviews: 42, image: "/images/jewellery/pearl-choker-necklace.png"   },
  { id: 806, name: "Oxidized Jhumka Earrings",   category: "Jewellery", subcat: "Earrings", price: 480,  oldPrice: null, unit: "1 pair",  badge: "New",     badgeType: "new",    bg: "#fffbeb", rating: 4, reviews: 65, image: "/images/jewellery/oxidized-jhumka-earrings.png" },

  // ─── Handbags ────────────────────────────────────────────────────────────────
  { id: 901, name: "Ladies Tote Bag",            category: "Handbags", subcat: "Tote",     price: 1800, oldPrice: 2200, unit: "1 piece", badge: "18% off", badgeType: "sale",   bg: "#fdf4ff", rating: 5, reviews: 84,  image: "/images/handbags/ladies-tote-bag.png"       },
  { id: 902, name: "Shoulder Bag Brown",         category: "Handbags", subcat: "Shoulder", price: 2500, oldPrice: null, unit: "1 piece", badge: "New",     badgeType: "new",    bg: "#fdf4ff", rating: 5, reviews: 61,  image: "/images/handbags/shoulder-bag-brown.png"    },
  { id: 903, name: "Party Clutch",               category: "Handbags", subcat: "Clutch",   price: 950,  oldPrice: 1200, unit: "1 piece", badge: "21% off", badgeType: "sale",   bg: "#fdf4ff", rating: 4, reviews: 47,  image: "/images/handbags/party-clutch.png"          },
  { id: 904, name: "Mini Backpack",              category: "Handbags", subcat: "Backpack", price: 2200, oldPrice: null, unit: "1 piece", badge: null,      badgeType: null,     bg: "#fdf4ff", rating: 4, reviews: 38,  image: "/images/handbags/mini-backpack.png"         },
  { id: 905, name: "Crossbody Leather Bag",      category: "Handbags", subcat: "Shoulder", price: 3500, oldPrice: 4000, unit: "1 piece", badge: "13% off", badgeType: "sale",   bg: "#fdf4ff", rating: 5, reviews: 72,  image: "/images/handbags/crossbody-leather-bag.png" },
  { id: 906, name: "Casual Canvas Tote",         category: "Handbags", subcat: "Tote",     price: 780,  oldPrice: null, unit: "1 piece", badge: "New",     badgeType: "new",    bg: "#f4f4f4", rating: 4, reviews: 29,  image: "/images/handbags/casual-canvas-tote.png"    },

  // ─── Perfumes ────────────────────────────────────────────────────────────────
  { id: 1001, name: "Oud Al Qamar 100ml",        category: "Perfumes", subcat: "Oriental", price: 3500, oldPrice: 4000, unit: "100ml",    badge: "13% off", badgeType: "sale",   bg: "#fdf2f8", rating: 5, reviews: 115, image: "/images/perfumes/oud-al-qamar.png"        },
  { id: 1002, name: "Rose Bouquet EDP 50ml",     category: "Perfumes", subcat: "Floral",   price: 2200, oldPrice: null, unit: "50ml",     badge: "New",     badgeType: "new",    bg: "#fdf2f8", rating: 5, reviews: 89,  image: "/images/perfumes/rose-bouquet.png"         },
  { id: 1003, name: "Blue Musk EDT 75ml",        category: "Perfumes", subcat: "Fresh",    price: 1800, oldPrice: 2100, unit: "75ml",     badge: "14% off", badgeType: "sale",   bg: "#fdf2f8", rating: 4, reviews: 67,  image: "/images/perfumes/blue-musk.png"            },
  { id: 1004, name: "Sandalwood Attar 10ml",     category: "Perfumes", subcat: "Woody",    price: 950,  oldPrice: null, unit: "10ml",     badge: null,      badgeType: null,     bg: "#fffbeb", rating: 4, reviews: 48,  image: "/images/perfumes/sandalwood-attar.png"     },
  { id: 1005, name: "Body Spray 4-Pack",         category: "Perfumes", subcat: "Fresh",    price: 1200, oldPrice: 1500, unit: "4x200ml",  badge: "20% off", badgeType: "sale",   bg: "#fdf2f8", rating: 4, reviews: 73,  image: "/images/perfumes/body-spray-4pack.png"     },
  { id: 1006, name: "Swiss Arabian Warda 50ml",  category: "Perfumes", subcat: "Oriental", price: 4200, oldPrice: null, unit: "50ml",     badge: "New",     badgeType: "new",    bg: "#fdf2f8", rating: 5, reviews: 92,  image: "/images/perfumes/swiss-arabian-warda.png" },
];

export const deliveryZones = [
  "DHA", "Clifton", "Gulshan-e-Iqbal", "North Nazimabad",
  "PECHS", "Saddar", "Korangi", "Malir", "Gulistan-e-Johar", "Nazimabad"
];

export const paymentMethods = [
  { id: "cod", label: "Cash on Delivery", sub: "Pay when your order arrives", color: "#1A1A2E" },
  { id: "online", label: "Online Payment", sub: "Bank transfer / account deposit", color: "#1a73e8" },
];
