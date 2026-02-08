import "./HeroSection.css";
import InfoBadge from "../InfoBadge/InfoBadge";
import ContactLink from "../Contact/Contact-links";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="welcome-text">
        <div className="info-badges">
          <InfoBadge icon="📍" text="Hillside Ave - Queens, NY" />
          <InfoBadge icon="🔥" text="Nashville-style" />
          <InfoBadge icon="⭐" text="4.9 1200+" />
        </div>

        <p className="spotlight-text">
          NYC's Hottest <br />
          <span className="highlight">Chicken Spot</span>
        </p>

        <p className="description-text">
          Crispy, juicy, and 100% Halal Nashville-style hot chicken made fresh
          daily in the heart of Queens. Pick your heat level from mild to
          insane!
        </p>

        <div className="hero-buttons">
          <button className="view-menu-button">View Menu</button>
          <a href="#footer-section" className="learn-more-button">
            Find Us
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/images/download.jpeg"
          alt="Hero Image"
          width="500px"
          height="500px"
        />
        <div className="contact-info">
          <ContactLink
            href="https://instagram.com/samshotchickenog"
            icon="/images/instagram-1-svgrepo-com.svg"
            text="samshotchickenog"
          />

          <ContactLink
            href="mailto:samshotchicken@gmail.com"
            icon="/images/gmail-old-svgrepo-com.svg"
            text="samshotchicken@gmail.com"
          />

          <ContactLink
            href="tel:347-677-5603"
            icon="/images/phone-out-svgrepo-com.svg"
            text="347-677-5603"
          />
        </div>
      </div>
    </div>
  );
}
