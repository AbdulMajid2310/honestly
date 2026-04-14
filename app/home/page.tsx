"use client";

import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import SecuritySpecs from "@/components/SecuritySpecs";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-slate-200">
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="features">
        <Stats />
      </div>

      <div id="security">
        <SecuritySpecs />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <Footer />
    </main>
  );
}
