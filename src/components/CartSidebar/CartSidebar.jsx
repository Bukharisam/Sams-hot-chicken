import React from "react";
import "./CartSidebar.css";

function CartSidebar({ cart, onClose, onRemoveItem }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const numeric = parseFloat(String(item.price).replace(/[^0-9.]/g, ""));
    if (Number.isNaN(numeric)) return sum;
    return sum + numeric * item.quantity;
  }, 0);

  return (
    <aside className="cart-sidebar" aria-label="Cart sidebar">
      <header className="cart-sidebar-header">
        <h2 className="cart-sidebar-title">Your Cart</h2>
        <button className="cart-sidebar-close" type="button" onClick={onClose}>
          ✕
        </button>
      </header>

      {cart.length === 0 ? (
        <p className="cart-sidebar-empty">Your cart is currently empty.</p>
      ) : (
        <>
          <ul className="cart-sidebar-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-sidebar-item">
                <div className="cart-sidebar-item-left">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-sidebar-item-image"
                    />
                  )}
                  <div className="cart-sidebar-item-main">
                    <span className="cart-sidebar-item-name">{item.name}</span>
                    <span className="cart-sidebar-item-quantity">
                      x{item.quantity}
                    </span>
                  </div>
                </div>
                <div className="cart-sidebar-item-right">
                  <span className="cart-sidebar-item-price">{item.price}</span>
                  <button
                    type="button"
                    className="cart-sidebar-remove-button"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Remove from cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-sidebar-footer">
            <span className="cart-sidebar-total-label">
              Items: {totalItems}
            </span>
            <span className="cart-sidebar-total-price">
              Est. total: ${totalPrice.toFixed(2)}
            </span>
          </div>
        </>
      )}
    </aside>
  );
}

export default CartSidebar;
