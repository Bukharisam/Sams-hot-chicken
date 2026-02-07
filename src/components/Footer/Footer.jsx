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
            href="https://www.google.com/maps/dir/Sams+hot+chicken,+257-03+Hillside+Ave.,+Queens,+NY+11004/Sams+hot+chicken,+257-03+Hillside+Ave.,+Queens,+NY+11004/@40.7369806,-73.7133157,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89c263003553eb35:0xfa80a5affaea8979!2m2!1d-73.7107408!2d40.7369806!1m5!1m1!1s0x89c263003553eb35:0xfa80a5affaea8979!2m2!1d-73.7107408!2d40.7369806!3e3?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            📍 257-03 Hillside Ave, Queens, NY 11004
          </a>
          <p className="footer-contact">347-677-5603</p>
        </div>

        {/* Contact Links */}
        <div className="footer-section">
          <h4>Contact</h4>
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
            <a href="#" className="footer-link">
              <img
                src="/images/instagram-1-svgrepo-com.svg"
                alt="Facebook"
                className="footer-icon"
              />
              Facebook
            </a>
            <a href="#" className="footer-link">
              <img
                src="/images/instagram-1-svgrepo-com.svg"
                alt="Twitter"
                className="footer-icon"
              />
              Twitter
            </a>
            <a href="mailto:samshotchicken@gmail.com" className="footer-link">
              <img
                src="/images/gmail-old-svgrepo-com.svg"
                alt="Gmail"
                className="footer-icon"
              />
              Gmail
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

        {/* Catering Services */}
        <div className="footer-section">
          <h4>Catering Services</h4>
          <p className="footer-contact">
            Perfect for parties, events, and large group orders.
          </p>
          <a href="#catering" className="footer-link">
            Learn more about catering options
          </a>
        </div>

        {/* Membership Rewards */}
        <div className="footer-section">
          <h4>Membership Rewards</h4>
          <p className="footer-contact">
            Earn points on every order and unlock exclusive deals.
          </p>
          <a href="#rewards" className="footer-link">
            Join our rewards program
          </a>
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
