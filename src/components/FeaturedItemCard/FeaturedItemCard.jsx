import React from "react";
import "./FeaturedItemCard.css";

function FeaturedItemCard({ name, price }) {
  return (
    <div className="featured-item-card">
      <p className="featured-item-name">{name}</p>
      <p className="featured-item-price">{price}</p>
    </div>
  );
}

export default FeaturedItemCard;
