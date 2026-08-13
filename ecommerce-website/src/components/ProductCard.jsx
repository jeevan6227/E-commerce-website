import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">

      <img src={product.image} alt={product.name} />

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <div className="product-bottom">
          <span className="price">
            ₹{product.price}
          </span>

          <span className="rating">
            ⭐ {product.rating}
          </span>
        </div>

        <button
          className="add-cart"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;