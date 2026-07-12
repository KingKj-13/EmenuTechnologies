"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ProductVisuals from "@/components/ProductVisuals";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const BackToTop = dynamic(() => import("@/components/ui/BackToTop"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <Features />
        <ProductVisuals />
        <Benefits />
        <Pricing />
        <CTABanner />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
