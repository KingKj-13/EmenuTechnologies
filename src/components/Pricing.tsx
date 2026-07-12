"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import GlowButton from "./ui/GlowButton";
import { Check, X, Sparkles } from "lucide-react";

// Every card shows the full feature matrix so packages are easy to compare.
const allFeatures = [
  { name: "Digital menu with photos", premium: false },
  { name: "Menu videos", premium: false },
  { name: "Waiter app", premium: false },
  { name: "Admin app", premium: false },
  { name: "Admin analytics", premium: false },
  { name: "AI up-sell & cross-sell", premium: true },
  { name: "Waiter PRO AI app", premium: true },
  { name: "Food ratings", premium: false },
  { name: "Support & maintenance", premium: false },
];

const plans = [
  {
    name: "Silver",
    monthly: "R499",
    setup: "R2,000",
    color: "#8a94a0",
    tagline: "The essentials to go digital",
    included: [
      "Digital menu with photos",
      "Waiter app",
      "Admin app",
      "Support & maintenance",
    ],
    isFeatured: false,
  },
  {
    name: "Gold",
    monthly: "R699",
    setup: "R3,000",
    color: "#b98a2f",
    tagline: "Add videos and know your numbers",
    included: [
      "Digital menu with photos",
      "Menu videos",
      "Waiter app",
      "Admin app",
      "Admin analytics",
      "Support & maintenance",
    ],
    isFeatured: false,
  },
  {
    name: "Platinum",
    monthly: "R999",
    setup: "R4,000",
    color: "#c2542b",
    tagline: "Let AI grow every order",
    included: [
      "Digital menu with photos",
      "Menu videos",
      "Waiter app",
      "Admin app",
      "Admin analytics",
      "AI up-sell & cross-sell",
      "Support & maintenance",
    ],
    isFeatured: true,
    badge: "Best Value",
  },
  {
    name: "Diamond",
    monthly: "R1,099",
    setup: "R5,000",
    color: "#3f7f8c",
    tagline: "The complete experience",
    included: [
      "Digital menu with photos",
      "Menu videos",
      "Waiter app",
      "Admin app",
      "Admin analytics",
      "AI up-sell & cross-sell",
      "Waiter PRO AI app",
      "Food ratings",
      "Support & maintenance",
    ],
    isFeatured: false,
  },
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
              Four packages, clear prices
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
              A once-off setup fee covers digitising your full menu. Then one
              flat monthly fee — no hidden costs, no long-term contract.
            </motion.p>
          </div>
        )}

        {/* Pricing grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                borderRadius: "var(--radius-xl)",
                border: plan.isFeatured
                  ? `2px solid ${plan.color}`
                  : "1px solid var(--line)",
                background: "var(--surface)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                boxShadow: plan.isFeatured
                  ? "var(--shadow-lift)"
                  : "var(--shadow-card)",
              }}
            >
              {/* Tier color band */}
              <div
                style={{
                  height: 6,
                  background: plan.color,
                }}
              />

              {plan.isFeatured && plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: 18,
                    right: 18,
                    background: plan.color,
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "5px 12px",
                    borderRadius: 100,
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div
                style={{
                  padding: "26px 24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                {/* Tier name + tagline */}
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: plan.color,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: 4,
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--ink-muted)",
                    marginBottom: 20,
                    minHeight: 20,
                  }}
                >
                  {plan.tagline}
                </p>

                {/* Price block */}
                <div
                  style={{
                    paddingBottom: 20,
                    marginBottom: 20,
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 44,
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        color: "var(--ink)",
                        lineHeight: 1,
                      }}
                    >
                      {plan.monthly}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        color: "var(--ink-muted)",
                        fontWeight: 500,
                      }}
                    >
                      /month
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--ink-soft)",
                      marginTop: 8,
                      fontWeight: 500,
                    }}
                  >
                    + {plan.setup} once-off setup
                  </div>
                </div>

                {/* Full feature matrix */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 11,
                    flex: 1,
                    marginBottom: 26,
                  }}
                >
                  {allFeatures.map((feature) => {
                    const has = plan.included.includes(feature.name);
                    return (
                      <div
                        key={feature.name}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          fontSize: 13.5,
                          color: has ? "var(--ink-soft)" : "var(--ink-muted)",
                          opacity: has ? 1 : 0.45,
                          lineHeight: 1.4,
                        }}
                      >
                        <span
                          style={{
                            color: has ? plan.color : "var(--ink-muted)",
                            flexShrink: 0,
                            display: "flex",
                          }}
                        >
                          {has ? <Check size={15} /> : <X size={15} />}
                        </span>
                        <span
                          style={{
                            textDecoration: has ? "none" : "line-through",
                            fontWeight: feature.premium && has ? 600 : 400,
                            color:
                              feature.premium && has
                                ? "var(--terracotta)"
                                : undefined,
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                          }}
                        >
                          {feature.name}
                          {feature.premium && has && (
                            <Sparkles size={12} style={{ flexShrink: 0 }} />
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <GlowButton
                  variant={plan.isFeatured ? "primary" : "secondary"}
                  href="/contact"
                  className="w-full"
                >
                  <span
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    Get Started
                  </span>
                </GlowButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "var(--ink-muted)",
            marginTop: 36,
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.7,
          }}
        >
          <Sparkles
            size={13}
            style={{ display: "inline", verticalAlign: "-2px" }}
          />{" "}
          = premium AI features. All packages are month-to-month — cancel
          anytime.{" "}
          <a
            href="https://emenyu.com/demo/table1/menu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--terracotta)", fontWeight: 600 }}
          >
            Try the live demo
          </a>{" "}
          before you decide.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
