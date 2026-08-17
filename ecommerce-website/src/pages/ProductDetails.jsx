import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import products from "../data/products";
import { useToast } from "../context/ToastContext";

function ProductDetails() {

  const { showToast } = useToast();

  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="product-not-found">

        <h1>Product Not Found 😕</h1>

        <p>
          The product you're looking for doesn't exist.
        </p>

        <Link to="/products">
          Back to Products
        </Link>

      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    navigate("/checkout");
    showToast(
    `${quantity} × ${product.name} added to cart!`,
    "success"
  );
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) =>
      current > 1 ? current - 1 : 1
    );
  };

  const wishlistActive = isInWishlist(product.id);

  return (
    <div className="product-details-page">

      {/* Breadcrumb */}

      <div className="product-breadcrumb">

        <Link to="/">
          Home
        </Link>

        <span>/</span>

        <Link to="/products">
          Products
        </Link>

        <span>/</span>

        <span>{product.name}</span>

      </div>


      {/* Product */}

      <div className="product-details-container">

        {/* Image */}

        <div className="product-details-image">

          <img
            src={product.image}
            alt={product.name}
          />

          <button
  className={
    wishlistActive
      ? "details-wishlist active"
      : "details-wishlist"
  }
  onClick={() => {

    const alreadyAdded =
      isInWishlist(product.id);

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


        {/* Information */}

        <div className="product-details-info">

          <p className="details-category">
            {product.category}
          </p>

          <h1>
            {product.name}
          </h1>


          {/* Rating */}

          <div className="details-rating">

            <span>
              ⭐ {product.rating}
            </span>

            <span>
              120 Reviews
            </span>

          </div>


          {/* Price */}

          <div className="details-price">

            <span>
              ₹{product.price}
            </span>

            <del>
              ₹{Math.round(product.price * 1.2)}
            </del>

            <strong>
              20% OFF
            </strong>

          </div>


          <div className="details-divider"></div>


          {/* Description */}

          <div className="product-description">

            <h3>
              About this product
            </h3>

            <p>
              Experience quality, comfort and style with
              this carefully selected product from ShopZone.
              Designed to give you great value and an
              excellent everyday experience.
            </p>

          </div>


          {/* Quantity */}

          <div className="quantity-section">

  <span>
    Quantity
  </span>

  <div className="details-quantity">

    <button
      onClick={decreaseQuantity}
      type="button"
    >
      −
    </button>

    <span>
      {quantity}
    </span>

    <button
      onClick={increaseQuantity}
      type="button"
    >
      +
    </button>

  </div>

</div>

          {/* Buttons */}

          <div className="details-actions">

            <button
              className="details-add-cart"
              onClick={handleAddToCart}
            >
              🛒 Add to Cart
            </button>

            <button
              className="details-buy-now"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>

          </div>


          {/* Benefits */}

          <div className="product-benefits">

            <div>
              🚚
              <span>
                Free Shipping
              </span>
            </div>

            <div>
              🔄
              <span>
                Easy Returns
              </span>
            </div>

            <div>
              🔒
              <span>
                Secure Payment
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;