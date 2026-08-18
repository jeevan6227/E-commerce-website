import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar({ darkMode, toggleTheme }) {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo">
        Shop<span>Zone</span>
      </Link>

      {/* Navigation */}
      <div className="nav-links">

        <Link to="/" className="nav-card">
          🏠 Home
        </Link>

        <Link to="/products" className="nav-card">
          🛍️ Products
        </Link>

        <Link to="/categories" className="nav-card">
         📂 Categories
        </Link>

        <Link to="/wishlist" className="nav-card wishlist-nav">
          ❤️ Wishlist
        </Link>

        <Link to="/cart" className="nav-card cart-link">
          🛒 Cart

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </Link>

        <Link to="/profile" className="nav-card profile-nav">
          👤 Profile
        </Link>

        {/* Theme */}
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