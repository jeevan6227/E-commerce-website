import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-page">

      {/* Header */}

      <section className="products-header">
        <p>OUR STORE</p>
        <h1>All Products</h1>
        <span>
          Find everything you'll love.❤️
        </span>
      </section>

      {/* Search + Filter */}

      <section className="products-controls">

        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="category-buttons">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active-category" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

      </section>

      {/* Products */}

      <section className="all-products">

        <div className="products-count">
          <span>{filteredProducts.length} Products</span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <h2>No products found 😕</h2>
            <p>Try searching for something else.</p>
          </div>
        )}

      </section>

    </div>
  );
}

export default Products;