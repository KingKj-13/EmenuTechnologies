"use client";

import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function PricingPage() {
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
          <span className="eyebrow">Pricing</span>
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
            Straight talk about{" "}
            <span style={{ color: "var(--terracotta)", fontStyle: "italic" }}>
              price
            </span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "var(--ink-soft)",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            We quote per restaurant rather than publishing a one-size-fits-all
            number — and founding partners lock in preferential rates.
          </p>
        </section>

        <Pricing showHeader={false} />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
