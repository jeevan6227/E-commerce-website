import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="wishlist-page">

      {/* Header */}

      <div className="wishlist-header">
        <p>YOUR FAVORITES</p>

        <h1>My Wishlist ❤️</h1>

        <span>
          {wishlist.length}{" "}
          {wishlist.length === 1 ? "item" : "items"}
        </span>
      </div>


      {/* Empty Wishlist */}

      {wishlist.length === 0 ? (

        <div className="wishlist-empty">

          <div className="empty-heart">
            ♡
          </div>

          <h2>
            Your wishlist is empty
          </h2>

          <p>
            Save products you love and find them here
            whenever you come back.
          </p>

          <Link
            to="/products"
            className="wishlist-shop-button"
          >
            Explore Products →
          </Link>

        </div>

      ) : (

        /* Wishlist Products */

        <div className="wishlist-grid">

          {wishlist.map((product) => (

            <div
              className="wishlist-card"
              key={product.id}
            >

              {/* Image */}

              <div className="wishlist-image">

                <Link to={`/products/${product.id}`}>

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                </Link>

                <button
                  className="wishlist-remove"
                  onClick={() =>
                    toggleWishlist(product)
                  }
                  aria-label="Remove from wishlist"
                >
                  ♥
                </button>

              </div>


              {/* Info */}

              <div className="wishlist-info">

                <p className="wishlist-category">
                  {product.category}
                </p>

                <Link
                  to={`/products/${product.id}`}
                  className="wishlist-name"
                >
                  {product.name}
                </Link>


                <div className="wishlist-rating">
                  ⭐ {product.rating}
                </div>


                <div className="wishlist-bottom">

                  <span className="wishlist-price">
                    ₹{product.price}
                  </span>

                  <button
                    className="wishlist-cart-button"
                    onClick={() =>
                      handleAddToCart(product)
                    }
                  >
                    🛒 Add
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Wishlist;