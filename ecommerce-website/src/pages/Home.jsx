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

          <Link to="/products" className="view-all">
  View All →
</Link>
        </div>

        <div className="products-grid">
         {products.slice(0, 6).map((product) => (
          <ProductCard
           key={product.id}
           product={product}
           />
           ))}
       </div>
      </section>
      {/* Special Offer */}

      <section className="offer-section">

        <div className="offer-content">

          <p className="offer-small">
            LIMITED TIME OFFER
          </p>

          <h2>
            Upgrade Your Style.
            <br />
            Save More.
          </h2>

          <p className="offer-description">
            Get amazing deals on selected products.
            Don't miss out on our latest offers!
          </p>

          <Link
            to="/products"
            className="offer-button"
          >
            Shop Deals →
          </Link>

        </div>

        <div className="offer-icon">
          🎁
        </div>

      </section>

      {/* Why ShopZone */}

      <section className="why-shopzone">

        <div className="why-heading">
          <p>SHOP WITH CONFIDENCE</p>
          <h2>Why ShopZone?</h2>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">
              🚚
            </div>

            <h3>Fast Delivery</h3>

            <p>
              Get your favorite products delivered
              quickly and safely.
            </p>
          </div>


          <div className="why-card">
            <div className="why-icon">
              🔒
            </div>

            <h3>Secure Payment</h3>

            <p>
              Your payments and personal information
              are always protected.
            </p>
          </div>


          <div className="why-card">
            <div className="why-icon">
              ↩️
            </div>

            <h3>Easy Returns</h3>

            <p>
              Hassle-free returns whenever you're
              not completely satisfied.
            </p>
          </div>

        </div>

      </section>
      
    </div>
  );
}

export default Home;