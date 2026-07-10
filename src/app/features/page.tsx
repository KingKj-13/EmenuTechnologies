"use client";

import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ProductVisuals from "@/components/ProductVisuals";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        {/* Page header */}
        <section
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "80px 24px 0",
            background:
              "linear-gradient(180deg, var(--paper-deep) 0%, var(--paper) 100%)",
          }}
        >
          <span className="eyebrow">Product</span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 54px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: 16,
              color: "var(--ink)",
            }}
          >
            The full tour,{" "}
            <span style={{ color: "var(--terracotta)", fontStyle: "italic" }}>
              course by course
            </span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "var(--ink-soft)",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            What EMenu actually does for your guests, your floor staff, and
            your kitchen — and how it fits into a real service.
          </p>
        </section>

        <Features />
        <HowItWorks />
        <ProductVisuals />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
