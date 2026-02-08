import "./Home.css";
import React from "react";
import HeroSection from "../components/Herosection/HeroSection";
import FeaturedTeaser from "../components/FeaturedTeaser/FeaturedTeaser";
import FeaturedItemCard from "../components/FeaturedItemCard/FeaturedItemCard";
import { productsData } from "../data/products.js";

export default function Home({ addToCart, removeFromCart }) {
  const featuredItems = productsData.filter((item) => item.isFeatured);

  return (
    <>
      <main>
        <HeroSection />
        <FeaturedTeaser />

        <section className="featured-items-section">
          <FeaturedItemCard
            item={featuredItems[0]}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
          <FeaturedItemCard
            item={featuredItems[1]}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
          <FeaturedItemCard
            item={featuredItems[2]}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </section>

        <section className="home-info-section">
          <div className="home-info-card home-reviews-card">
            <h2 className="home-info-title">Customer Reviews</h2>
            <p className="home-info-text">
              “Best hot chicken in the city! Crispy, juicy, and the spice level
              is perfect. I keep coming back every week.”
            </p>
            <p className="home-info-text">
              “Friendly staff, fast service, and the loaded fries are
              unbelievable. Highly recommend!”
            </p>
          </div>

          <div className="home-info-card home-hours-card">
            <h2 className="home-info-title">Hours of Operation</h2>
            <p className="home-info-text">
              Monday – Thursday: 11:00 AM – 9:00 PM
            </p>
            <p className="home-info-text">
              Friday – Saturday: 11:00 AM – 11:00 PM
            </p>
            <p className="home-info-text">Sunday: 12:00 PM – 8:00 PM</p>
          </div>
        </section>
      </main>
    </>
  );
}
