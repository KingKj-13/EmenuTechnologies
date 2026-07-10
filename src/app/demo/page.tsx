"use client";

import Navbar from "@/components/Navbar";
import DemoShowcase from "@/components/DemoShowcase";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function DemoPage() {
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
          <span className="eyebrow">Live Demo</span>
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
            Try the real product,{" "}
            <span style={{ color: "var(--terracotta)", fontStyle: "italic" }}>
              right now
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
            Sample restaurant environments running the actual software — no
            signup, no sales call. Place a test order and see it land on the
            admin dashboard.
          </p>
        </section>

        <DemoShowcase />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
