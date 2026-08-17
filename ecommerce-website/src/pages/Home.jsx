import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}

      <section className="hero">
        <div className="hero-content">
          <p className="hero-small">WELCOME TO SHOPZONE</p>

          <h1>
            Shop Smart.
            <br />
            Live Better.
          </h1>

          <p className="hero-description">
            Discover amazing products at prices you'll love.
          </p>

          <Link to="/products" className="shop-now">
            Shop Now →
          </Link>
        </div>

        <div className="hero-image">
          🛍️
        </div>
      </section>
      {/* Shop By Category */}

      <section className="categories">

        <div className="section-heading category-heading">
          <div>
            <p>EXPLORE</p>
            <h2>Shop by Category</h2>
          </div>
        </div>


        <div className="category-grid">

          <Link
            to="/products"
            className="category-card"
          >
            <div className="category-icon">
              👕
            </div>

            <h3>Fashion</h3>

            <span>
              Explore Collection →
            </span>
          </Link>


          <Link
            to="/products"
            className="category-card"
          >
            <div className="category-icon">
              💻
            </div>

            <h3>Electronics</h3>

            <span>
              Explore Collection →
            </span>
          </Link>


          <Link
            to="/products"
            className="category-card"
          >
            <div className="category-icon">
              👟
            </div>

            <h3>Footwear</h3>

            <span>
              Explore Collection →
            </span>
          </Link>


          <Link
            to="/products"
            className="category-card"
          >
            <div className="category-icon">
              🎧
            </div>

            <h3>Accessories</h3>

            <span>
              Explore Collection →
            </span>
          </Link>

        </div>

      </section>

      {/* Featured Products */}

      <section className="featured">
        <div className="section-heading">
          <div>
            <p>OUR COLLECTION</p>
            <h2>Featured Products</h2>
          </div>

          <button className="view-all">
            View All →
          </button>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;