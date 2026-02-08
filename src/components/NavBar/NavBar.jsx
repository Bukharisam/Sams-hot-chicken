import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

export default function NavBar({ cartCount, onCartClick }) {
  const [lightMode, setLightMode] = useState(false);

  const themeToggleButton = () => {
    setLightMode(!lightMode);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={lightMode ? "navbar light-mode" : "navbar"}
    >
      <div className="left-nav">
        <Link to="/">
          <img
            className="logo-style"
            src="/images/logo.jpeg"
            alt="Sam's Hot Chicken Logo"
            width="110"
            height="110"
          />
        </Link>
        <h1>
          Sam's <span className="logo-name-highlight"> Hot </span> Chicken
        </h1>
      </div>

      <div className="middle-nav">
        <Link className="nav-link" to="/menu">
          Menu
        </Link>
        <Link className="nav-link" to="/reviews">
          Reviews
        </Link>
        <Link className="nav-link" to="/checkout">
          Checkout
        </Link>
        <Link className="nav-link" to="/location">
          Location
        </Link>
        <Link className="nav-link" to="/about">
          About US
        </Link>
      </div>

      <div className="right-nav">
        <button type="button" className="order-now-style" onClick={onCartClick}>
          <span className="order-now-label">View Cart</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
        <div className="auth-actions">
          <button className="login-button"> Login </button>
          <button className="themeToggleButton" onClick={themeToggleButton}>
            {lightMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
