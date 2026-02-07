import "./Home.css";
import React from "react";
import HeroSection from "../components/Herosection/HeroSection";
import FeaturedTeaser from "../components/FeaturedTeaser/FeaturedTeaser";
import FeaturedItemCard from "../components/FeaturedItemCard/FeaturedItemCard";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturedTeaser />

        <section className="featured-items-section">
          <FeaturedItemCard />
          <FeaturedItemCard />
          <FeaturedItemCard />
        </section>
      </main>
    </>
  );
}
