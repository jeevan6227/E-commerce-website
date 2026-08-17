const products = [
  // =========================
  // 👕 CLOTHING - 10
  // =========================

  {
    id: 1,
    name: "Classic Black T-Shirt",
    price: 799,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Premium White Shirt",
    price: 1299,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 2499,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Casual Hoodie",
    price: 1599,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Oversized Grey T-Shirt",
    price: 899,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Casual Polo T-Shirt",
    price: 999,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1625910513413-5fc45f1d4b27?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
  },
  {
    id: 7,
    name: "Classic Blue Jeans",
    price: 1799,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },
  {
    id: 8,
    name: "Summer Casual Shorts",
    price: 899,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
  },
  {
    id: 9,
    name: "Classic Formal Blazer",
    price: 3999,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
  },
  {
    id: 10,
    name: "Casual Summer Dress",
    price: 1899,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },

  // =========================
  // 👟 FOOTWEAR - 8
  // =========================

  {
    id: 11,
    name: "White Sneakers",
    price: 2499,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
  },
  {
    id: 12,
    name: "Running Sports Shoes",
    price: 2999,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1556637640-2c80d3201be8?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },
  {
    id: 13,
    name: "Classic Black Sneakers",
    price: 2199,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
  {
    id: 14,
    name: "Casual Canvas Shoes",
    price: 1499,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
  },
  {
    id: 15,
    name: "Sport Training Shoes",
    price: 2799,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },
  {
    id: 16,
    name: "Classic Leather Loafers",
    price: 2299,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
  },
  {
    id: 17,
    name: "Everyday Running Shoes",
    price: 2599,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
  {
    id: 18,
    name: "Classic Brown Boots",
    price: 3299,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },

  // =========================
  // 📱 ELECTRONICS - 10
  // =========================

  {
    id: 19,
    name: "Smart Watch",
    price: 3499,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },
  {
    id: 20,
    name: "Wireless Earbuds",
    price: 1999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
  },
  {
    id: 21,
    name: "Wireless Headphones",
    price: 2999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
  {
    id: 22,
    name: "Mechanical Keyboard",
    price: 3499,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
  },
  {
    id: 23,
    name: "Wireless Mouse",
    price: 999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
  },
  {
    id: 24,
    name: "Portable Bluetooth Speaker",
    price: 1799,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
  {
    id: 25,
    name: "Digital Camera",
    price: 15999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
  },
  {
    id: 26,
    name: "Smartphone",
    price: 24999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },
  {
    id: 27,
    name: "Tablet",
    price: 18999,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
  {
    id: 28,
    name: "Smart Home Speaker",
    price: 4499,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
  },

  // =========================
  // 🎒 ACCESSORIES - 7
  // =========================

  {
    id: 29,
    name: "Leather Backpack",
    price: 1899,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
  },
  {
    id: 30,
    name: "Classic Leather Wallet",
    price: 799,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
  },
  {
    id: 31,
    name: "Premium Sunglasses",
    price: 1299,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
  {
    id: 32,
    name: "Classic Wrist Watch",
    price: 2499,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },
  {
    id: 33,
    name: "Travel Backpack",
    price: 2199,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
  {
    id: 34,
    name: "Minimalist Cap",
    price: 599,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
  },
  {
    id: 35,
    name: "Premium Leather Belt",
    price: 899,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
  },

  // =========================
  // 🏠 HOME - 7
  // =========================

  {
    id: 36,
    name: "Modern Table Lamp",
    price: 1499,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
  {
    id: 37,
    name: "Minimal Wall Clock",
    price: 999,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
  },
  {
    id: 38,
    name: "Decorative Plant Pot",
    price: 699,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
  },
  {
    id: 39,
    name: "Modern Coffee Mug",
    price: 499,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
  },
  {
    id: 40,
    name: "Soft Cushion Set",
    price: 899,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
  {
    id: 41,
    name: "Modern Ceramic Vase",
    price: 799,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
  },
  {
    id: 42,
    name: "Decorative Floor Lamp",
    price: 2499,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },

  // =========================
  // 🎮 GAMING - 8
  // =========================

  {
    id: 43,
    name: "Gaming Controller",
    price: 2999,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },
  {
    id: 44,
    name: "Gaming Headset",
    price: 2499,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
  {
    id: 45,
    name: "RGB Gaming Keyboard",
    price: 3999,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
  },
  {
    id: 46,
    name: "Gaming Mouse",
    price: 1799,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
  {
    id: 47,
    name: "Gaming Monitor",
    price: 12999,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },
  {
    id: 48,
    name: "Gaming Desk Setup",
    price: 8999,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
  },
  {
    id: 49,
    name: "RGB Gaming Chair",
    price: 10999,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
  },
  {
    id: 50,
    name: "Gaming Laptop",
    price: 74999,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
  },
];

export default products;