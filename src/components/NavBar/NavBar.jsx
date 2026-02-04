import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav role="navigation" aria-label="Main navigation">
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
        <h1>Sam's Hot Chicken</h1>
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
      </div>

      <div className="right-nav">
        <button type="button" className="order-now-style">
          Order Now
        </button>
      </div>
    </nav>
  );
}
