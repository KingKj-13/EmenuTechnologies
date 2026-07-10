"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import GlowButton from "./ui/GlowButton";
import { Check } from "lucide-react";

// No public price list yet — pricing is discussed per restaurant.
const included = [
  "QR digital menu with photos & live updates",
  "Table ordering straight from guests' phones",
  "Live kitchen & floor dashboard",
  "Menu manager — edit dishes and prices anytime",
  "Sales insights and daily summaries",
  "Setup and menu digitisation done for you",
  "WhatsApp support, direct with our team",
];

export default function Pricing({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <SectionWrapper id="pricing" className="section-container" delay={0}>
      <div style={{ padding: "100px 0" }}>
        {showHeader && (
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="eyebrow"
            >
              Pricing
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: 16,
                color: "var(--ink)",
              }}
            >
              Priced for your restaurant, not a spreadsheet
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 17,
                color: "var(--ink-soft)",
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              Every restaurant is different, so we&apos;d rather talk than
              publish a one-size-fits-all number. Founding partners get
              preferential rates, locked in for good.
            </motion.p>
          </div>
        )}

        {/* Single honest card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            maxWidth: 880,
            margin: "0 auto",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--line)",
            background: "var(--surface)",
            boxShadow: "var(--shadow-lift)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {/* Left: what's included */}
          <div style={{ padding: "clamp(32px, 5vw, 48px)" }}>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 600,
                fontFamily: "var(--font-display)",
                marginBottom: 8,
                color: "var(--ink)",
              }}
            >
              One complete plan
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "var(--ink-soft)",
                marginBottom: 28,
                lineHeight: 1.6,
              }}
            >
              No tiers, no feature gates. Every restaurant gets the full
              product.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {included.map((feature) => (
                <div
                  key={feature}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    fontSize: 14,
                    color: "var(--ink-soft)",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: "var(--forest)",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <Check size={17} />
                  </span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <div
            style={{
              padding: "clamp(32px, 5vw, 48px)",
              background: "var(--paper-deep)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--terracotta)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 12,
                }}
              >
                Let&apos;s talk
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 30,
                  fontWeight: 600,
                  color: "var(--ink)",
                  lineHeight: 1.2,
                  marginBottom: 12,
                }}
              >
                A price that fits your covers
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--ink-soft)",
                  lineHeight: 1.7,
                }}
              >
                Tell us about your restaurant — size, service style, what you
                need — and we&apos;ll give you a straightforward quote. No
                obligation, no pressure.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <GlowButton variant="primary" href="/contact" className="w-full">
                <span style={{ display: "block", width: "100%", textAlign: "center" }}>
                  Get a Quote
                </span>
              </GlowButton>
              <GlowButton variant="secondary" href="/demo" className="w-full">
                <span style={{ display: "block", width: "100%", textAlign: "center" }}>
                  Try the Demo First
                </span>
              </GlowButton>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
