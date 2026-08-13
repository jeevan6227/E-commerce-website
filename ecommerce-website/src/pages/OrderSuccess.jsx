import { Link } from "react-router-dom";

function OrderSuccess() {
  const orderId = `SZ${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="order-success">

      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <p className="success-label">
          ORDER CONFIRMED
        </p>

        <h1>Order Placed Successfully! 🎉</h1>

        <p className="success-message">
          Thank you for shopping with ShopZone.
          Your order has been successfully placed.
        </p>

        <div className="order-id">
          <span>Order ID</span>
          <strong>{orderId}</strong>
        </div>

        <div className="success-actions">

          <Link
            to="/products"
            className="continue-shopping"
          >
            Continue Shopping →
          </Link>

          <Link
            to="/"
            className="back-home"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default OrderSuccess;