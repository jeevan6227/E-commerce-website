import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useToast } from "../context/ToastContext";

function ProductCard({ product }) {

  const { showToast } = useToast();
  
  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const wishlistActive = isInWishlist(product.id);

  return (
    <div className="product-card">

      <div className="product-image-container">

        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </Link>

        <span className="product-badge">
          NEW
        </span>

        <button
          className={
            wishlistActive
              ? "wishlist-button active"
              : "wishlist-button"
          }
          onClick={() => {
  const alreadyAdded = isInWishlist(product.id);

  toggleWishlist(product);

  showToast(
    alreadyAdded
      ? `${product.name} removed from wishlist`
      : `${product.name} added to wishlist`,
    "wishlist"
  );
}}
        >
          {wishlistActive ? "♥" : "♡"}
        </button>

      </div>


      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="product-name-link"
        >
          <h3 className="product-name">
            {product.name}
          </h3>
        </Link>

        <div className="product-rating">

          <span className="stars">
            ⭐
          </span>

          <span>
            {product.rating}
          </span>

          <span className="rating-text">
            (120 reviews)
          </span>

        </div>


        <div className="product-price-row">

          <span className="product-price">
            ₹{product.price}
          </span>

          <span className="old-price">
            ₹{Math.round(product.price * 1.2)}
          </span>

          <span className="discount">
            20% OFF
          </span>

        </div>


        <button
          className="add-cart"
          onClick={() => {
           addToCart(product);

           showToast(
    `       ${product.name} added to cart!`,
            "success"
           );
          }}
        >
          🛒 Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;