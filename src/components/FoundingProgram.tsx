"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import GlowButton from "./ui/GlowButton";
import { Check } from "lucide-react";

// Honest early-stage section: instead of fabricated testimonials,
// we invite the first restaurants to join as founding partners.
const perks = [
  "White-glove setup — we digitise your full menu for you",
  "Founding-partner pricing, locked in permanently",
  "Direct WhatsApp line to the founder — not a ticket queue",
  "Your feedback shapes the product roadmap",
];

export default function FoundingProgram() {
  return (
    <SectionWrapper
      id="founding-partners"
      className="section-container"
      delay={0}
    >
      <div style={{ padding: "100px 0" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: "var(--ink)",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(40px, 6vw, 72px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* Left: pitch */}
          <div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#e8b48f",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                display: "block",
                marginBottom: 16,
              }}
            >
              Founding Partner Program
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3.5vw, 40px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: 20,
                color: "#fbf7f0",
                lineHeight: 1.15,
              }}
            >
              We&apos;re a new company, and we&apos;re honest about it.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(251, 247, 240, 0.75)",
                lineHeight: 1.75,
                marginBottom: 28,
                maxWidth: 480,
              }}
            >
              The product is built and ready — you can try every part of it in
              the live demo right now. What we&apos;re looking for is our first
              group of restaurants to launch with. In exchange for being early,
              founding partners get more attention than any big vendor could
              ever give them.
            </p>
            <GlowButton variant="primary" href="/contact">
              Become a Founding Partner
            </GlowButton>
          </div>

          {/* Right: perks */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {perks.map((perk, i) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  background: "rgba(251, 247, 240, 0.06)",
                  border: "1px solid rgba(251, 247, 240, 0.12)",
                  borderRadius: 14,
                  padding: "16px 20px",
                }}
              >
                <span
                  style={{
                    color: "#e8b48f",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <Check size={18} />
                </span>
                <span
                  style={{
                    fontSize: 15,
                    color: "rgba(251, 247, 240, 0.9)",
                    lineHeight: 1.6,
                  }}
                >
                  {perk}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
