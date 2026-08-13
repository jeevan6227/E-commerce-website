import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-icon">🛒</div>

        <h1>Your Cart is Empty</h1>

        <p>
          Looks like you haven't added anything to your cart yet.
        </p>

        <Link to="/products" className="continue-shopping">
          Continue Shopping →
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <div className="cart-header">
        <p>YOUR SHOPPING BAG</p>
        <h1>Shopping Cart 🛒</h1>
      </div>

      <div className="cart-container">

        {/* Cart Items */}

        <div className="cart-items">

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-info">

                <p>{item.category}</p>

                <h3>{item.name}</h3>

                <span className="cart-item-price">
                  ₹{item.price}
                </span>

              </div>

              <div className="quantity-controls">

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >
                  +
                </button>

              </div>

              <div className="item-total">
                ₹{item.price * item.quantity}
              </div>

              <button
                className="remove-item"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                ×
              </button>

            </div>
          ))}

        </div>


        {/* Order Summary */}

        <div className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{cartTotal}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>FREE</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total</span>
            <span>₹{cartTotal}</span>
          </div>

          <Link
            to="/checkout"
            className="checkout-button"
          >
            Proceed to Checkout →
          </Link>

          <Link
            to="/products"
            className="continue-link"
          >
            ← Continue Shopping
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Cart;