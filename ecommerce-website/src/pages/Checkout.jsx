import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Your cart is empty!");
    navigate("/products");
    return;
  }

  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.phone.trim() ||
    !formData.address.trim() ||
    !formData.city.trim() ||
    !formData.pincode.trim()
  ) {
    alert("Please fill in all delivery details.");
    return;
  }

  // Clear the cart
  clearCart();

  // Go to success page
  navigate("/order-success");
};
  if (cart.length === 0) {
    return (
      <div className="empty-checkout">
        <div className="empty-cart-icon">🛒</div>

        <h1>Your Cart is Empty</h1>

        <p>
          Add some products before proceeding to checkout.
        </p>

        <button
          onClick={() => navigate("/products")}
          className="continue-shopping"
        >
          Browse Products →
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">

      <div className="checkout-header">
        <p>SECURE CHECKOUT</p>
        <h1>Checkout</h1>
      </div>

      <div className="checkout-container">

        {/* Customer Details */}

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >

          <h2>Delivery Information</h2>

          <div className="form-row">

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

          </div>


          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>


          <div className="form-group">
            <label>Address</label>

            <textarea
              name="address"
              placeholder="Enter your complete address"
              rows="4"
              value={formData.address}
              onChange={handleChange}
            />
          </div>


          <div className="form-row">

            <div className="form-group">
              <label>City</label>

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>PIN Code</label>

              <input
                type="text"
                name="pincode"
                placeholder="PIN Code"
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>

          </div>


          {/* Payment */}

          <h2 className="payment-title">
            Payment Method
          </h2>

          <div className="payment-options">

            <label
              className={
                paymentMethod === "cod"
                  ? "payment-option selected"
                  : "payment-option"
              }
            >
              <input
                type="radio"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />

              <span>
                💵 Cash on Delivery
              </span>
            </label>


            <label
              className={
                paymentMethod === "upi"
                  ? "payment-option selected"
                  : "payment-option"
              }
            >
              <input
                type="radio"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />

              <span>
                📱 UPI
              </span>
            </label>


            <label
              className={
                paymentMethod === "card"
                  ? "payment-option selected"
                  : "payment-option"
              }
            >
              <input
                type="radio"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />

              <span>
                💳 Credit / Debit Card
              </span>
            </label>

          </div>


          <button
            type="submit"
            className="place-order-button"
          >
            Place Order ₹{cartTotal}
          </button>

        </form>


        {/* Order Summary */}

        <div className="checkout-summary">

          <h2>Your Order</h2>

          <div className="checkout-products">

            {cart.map((item) => (
              <div
                className="checkout-product"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h3>{item.name}</h3>

                  <p>
                    Qty: {item.quantity}
                  </p>
                </div>

                <strong>
                  ₹{item.price * item.quantity}
                </strong>

              </div>
            ))}

          </div>


          <div className="summary-divider"></div>

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

        </div>

      </div>

    </div>
  );
}

export default Checkout;