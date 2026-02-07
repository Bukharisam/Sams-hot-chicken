import React from "react";
import "./FeaturedTeaser.css";

function FeaturedTeaser() {
  return (
    <div className="product-grid">
      <div className="product-context">
        <p className="featured-items-title"> Featured Items </p>
        <button className="view-full-menu-button">View Full Menu</button>
      </div>

      <div className="featured-items-description-container">
        <p>trending items thats offered at Sam's Hot Chicken</p>
      </div>
    </div>
  );
}

export default FeaturedTeaser;
