import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout.jsx";
import Location from "./pages/Location";
import AboutUs from "./pages/AboutUS";
import Reviews from "./pages/Reviews";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CartSidebar from "./components/CartSidebar/CartSidebar";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Herosection/HeroSection.jsx";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function addToCart(item) {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prev.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  }

  function removeFromCart(itemId) {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === itemId);

      if (!existingItem) {
        return prev;
      }

      if (existingItem.quantity <= 1) {
        return prev.filter((cartItem) => cartItem.id !== itemId);
      }

      return prev.map((cartItem) => {
        if (cartItem.id === itemId) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
    });
  }

  function clearItemFromCart(itemId) {
    setCart((prev) => prev.filter((cartItem) => cartItem.id !== itemId));
  }

  return (
    <>
      <NavBar
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
        onCartClick={() => setIsCartOpen((prev) => !prev)}
      />
      {isCartOpen && (
        <CartSidebar
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          onRemoveItem={clearItemFromCart}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home addToCart={addToCart} removeFromCart={removeFromCart} />
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
