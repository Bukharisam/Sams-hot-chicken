import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo & Name */}
        <div className="footer-section">
          <Link to="/" className="footer-logo-link">
            <img
              className="footer-logo"
              src="/images/logo.jpeg"
              alt="Sam's Hot Chicken Logo"
            />
            <h3>Sam's Hot Chicken</h3>
          </Link>
        </div>

        {/* Center Section - Address & Location */}
        <div className="footer-section">
          <h4>Location</h4>
          <a
            href="https://maps.google.com/?q=Hillside+Ave+Queens+NY"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            📍 Hillside Ave, Queens, NY
          </a>
          <p className="footer-contact">347-677-5603</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a
              href="https://instagram.com/samshotchicken"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <img
                src="/images/instagram-1-svgrepo-com.svg"
                alt="Instagram"
                className="footer-icon"
              />
              Instagram
            </a>
          </div>
        </div>

        {/* Delivery Apps */}
        <div className="footer-section">
          <h4>Order Online</h4>
          <div className="delivery-links">
            <a href="#grubhub" className="footer-link">
              Grubhub
            </a>
            <a href="#doordash" className="footer-link">
              DoorDash
            </a>
            <a href="#ubereats" className="footer-link">
              Uber Eats
            </a>
          </div>
        </div>

        {/* Site Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="site-links">
            <Link to="/menu" className="footer-link">
              Menu
            </Link>
            <Link to="/reviews" className="footer-link">
              Reviews
            </Link>
            <Link to="/location" className="footer-link">
              Location
            </Link>
            <Link to="/about" className="footer-link">
              About Us
            </Link>
            <Link to="/checkout" className="footer-link">
              Checkout
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 Sam's Hot Chicken. All rights reserved.</p>
      </div>
    </footer>
  );
}
