import React, { useState, useEffect } from "react";
import "./FeaturedItemCard.css";

function FeaturedItemCard({ item, addToCart, removeFromCart }) {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState(""); // "success" or "error"

  useEffect(() => {
    if (!feedbackMessage) return;

    const timer = setTimeout(() => {
      setFeedbackMessage("");
      setFeedbackType("");
    }, 1000);

    return () => clearTimeout(timer);
  }, [feedbackMessage]);

  function handleAdd() {
    addToCart(item);
    setFeedbackType("success");
    setFeedbackMessage("Added to cart successfully.");
  }

  function handleRemove() {
    removeFromCart(item.id);
    setFeedbackType("success");
    setFeedbackMessage("Removed from cart.");
  }

  return (
    <div className="featured-item-card">
      <img src={item.image} alt={item.name} className="featured-item-image" />
      <div className="featured-item-content-slot">
        <h3 className="featured-item-name">{item.name}</h3>
        <p className="featured-item-price">{item.price}</p>
        <div className="featured-item-actions">
          <button className="featured-item-add-button" onClick={handleAdd}>
            Add to cart
          </button>
          <button
            className="featured-item-remove-button"
            onClick={handleRemove}
          >
            Remove from cart
          </button>
        </div>
        {feedbackMessage && (
          <p
            className={`featured-item-feedback ${
              feedbackType === "success"
                ? "featured-item-feedback-success"
                : "featured-item-feedback-error"
            }`}
          >
            {feedbackMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default FeaturedItemCard;
