import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar({ darkMode, toggleTheme }) {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Shop<span>Zone</span>
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/cart" className="cart-link">
          Cart 🛒

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </Link>
        <Link to="/wishlist" className="wishlist-nav">
         ❤️ Wishlist
        </Link>
        {/* Theme Button */}

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;