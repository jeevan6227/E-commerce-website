import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Categories() {
  const categories = [
    {
      name: "All",
      icon: "🛍️",
    },
    {
    name: "Home",
    icon: "🏠",
    },
    {
      name: "Clothing",
      icon: "👕",
    },
    {
      name: "Footwear",
      icon: "👟",
    },
    {
      name: "Electronics",
      icon: "💻",
    },
    {
      name: "Accessories",
      icon: "⌚",
    },
  {
    name: "Gaming",
    icon: "🎮",
  },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="categories-page">

      {/* Page Header */}
      <div className="categories-header">
        <h1>Shop by Category</h1>
        <p>
          Choose a category and explore our products.
        </p>
      </div>

      <div className="categories-layout">

        {/* LEFT SIDEBAR */}
        <aside className="categories-sidebar">

          <h2>Categories</h2>

          <div className="category-list">

            {categories.map((category) => (
              <button
                key={category.name}
                className={
                  selectedCategory === category.name
                    ? "category-item active"
                    : "category-item"
                }
                onClick={() =>
                  setSelectedCategory(category.name)
                }
              >
                <span className="category-item-icon">
                  {category.icon}
                </span>

                <span>{category.name}</span>
              </button>
            ))}

          </div>

        </aside>


        {/* RIGHT PRODUCTS AREA */}
        <main className="category-products">

          <div className="category-products-header">

            <div>
              <h2>
                {selectedCategory === "All"
                  ? "All Products"
                  : selectedCategory}
              </h2>

              <p>
                {filteredProducts.length} products found
              </p>
            </div>

          </div>


          {/* PRODUCTS */}
          {filteredProducts.length > 0 ? (

            <div className="category-products-grid">

              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>

          ) : (

            <div className="no-category-products">
              <h3>No products found</h3>
              <p>
                There are no products in this category yet.
              </p>
            </div>

          )}

        </main>

      </div>

    </div>
  );
}

export default Categories;