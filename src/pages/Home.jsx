import "./Home.css";

export default function Home() {
  return (
    <>
      <main>
        <div className="hero-section">
          <div className="welcome-text">
            <div className="info-badges">
              <button className="location-button">
                📍 Hillside Ave - Queens, NY
              </button>
              <button className="spice-button">🔥 Nashville-style</button>
              <button className="rating-button">⭐ 4.9 1200+</button>
            </div>

            <p className="spotlight-text">
              NYC's Hottest <br />
              <span className="highlight">Chicken Spot</span>
            </p>

            <p className="description-text">
              Crispy, juicy, and 100% Halal Nashville-style hot chicken made
              fresh daily in the heart of Queens. Pick your heat level from mild
              to insane!
            </p>

            <div className="hero-buttons">
              <button className="view-menu-button">View Menu</button>
              <button className="learn-more-button">Find Us</button>
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
              <a
                href="https://instagram.com/samshotchickenog"
                className="contact-link"
              >
                <img
                  src="/images/instagram-1-svgrepo-com.svg"
                  alt="Instagram"
                  className="contact-icon"
                />
                samshotchickenog
              </a>
              <a
                href="mailto:samshotchicken@gmail.com"
                className="contact-link"
              >
                <img
                  src="/images/gmail-old-svgrepo-com.svg"
                  alt="Gmail"
                  className="contact-icon"
                />
                samshotchicken@gmail.com
              </a>
              <a href="tel:347-677-5603" className="contact-link">
                <img
                  src="/images/phone-out-svgrepo-com.svg"
                  alt="Phone"
                  className="contact-icon"
                />
                347-677-5603
              </a>
            </div>
          </div>
        </div>

        <div className="product-grid">
          <div className="product-context">
            <p className="featured-items-title"> Featured Items </p>
            <button className="view-full-menu-button">View Full Menu</button>
          </div>

          <div className="featured-items-description-container">
            <p>trending items thats offered at Sam's Hot Chicken</p>
          </div>
        </div>

        <section className="featured-items-section">
          <div className="featured-item-card">
            <p className="featured-item-name"></p>
            <p className="featured-item-price"></p>
          </div>

          <div className="featured-item-card">
            <p className="featured-item-name"></p>
            <p className="featured-item-price"></p>
          </div>

          <div className="featured-item-card">
            <p className="featured-item-name"></p>
            <p className="featured-item-price"></p>
          </div>
        </section>
      </main>
    </>
  );
}
