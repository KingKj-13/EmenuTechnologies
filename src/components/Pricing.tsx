"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import GlowButton from "./ui/GlowButton";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Silver",
    monthly: "R499",
    setup: "R2,000",
    color: "#8a94a0",
    soft: "#eef1f4",
    isFeatured: false,
    baseline: "Everything you need to go digital",
    features: [
      "Digital menu with photos",
      "Waiter app",
      "Admin app",
      "Support & maintenance",
    ],
  },
  {
    name: "Gold",
    monthly: "R699",
    setup: "R3,000",
    color: "#b98a2f",
    soft: "#f9f0dc",
    isFeatured: false,
    baseline: "Everything in Silver, plus",
    features: ["Menu videos", "Admin analytics"],
  },
  {
    name: "Platinum",
    monthly: "R999",
    setup: "R4,000",
    color: "#c2542b",
    soft: "#fdeee6",
    isFeatured: true,
    badge: "Best Value",
    baseline: "Everything in Gold, plus",
    features: ["AI up-sell & cross-sell"],
  },
  {
    name: "Diamond",
    monthly: "R1,099",
    setup: "R5,000",
    color: "#3f7f8c",
    soft: "#e8f1f3",
    isFeatured: false,
    baseline: "Everything in Platinum, plus",
    features: ["Waiter PRO AI app", "Food ratings"],
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
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
                padding: "32px 26px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                boxShadow: plan.isFeatured
                  ? "var(--shadow-lift)"
                  : "var(--shadow-card)",
              }}
            >
              {plan.isFeatured && plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -13,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: plan.color,
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "5px 14px",
                    borderRadius: 100,
                    whiteSpace: "nowrap",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Tier name */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 18,
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: plan.color,
                  }}
                />
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    fontFamily: "var(--font-display)",
                    color: "var(--ink)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div style={{ marginBottom: 6 }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 40,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: plan.isFeatured ? plan.color : "var(--ink)",
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
                  {" "}
                  /month
                </span>
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--ink-soft)",
                  background: plan.soft,
                  borderRadius: 8,
                  padding: "6px 10px",
                  display: "inline-block",
                  alignSelf: "flex-start",
                  marginBottom: 22,
                  fontWeight: 500,
                }}
              >
                {plan.setup} once-off setup
              </div>

              {/* Features */}
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--ink-muted)",
                  marginBottom: 12,
                }}
              >
                {plan.baseline}:
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  flex: 1,
                  marginBottom: 28,
                }}
              >
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: 14,
                      color: "var(--ink-soft)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        color: plan.color,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <Check size={16} />
                    </span>
                    {feature}
                  </div>
                ))}
              </div>

              <GlowButton
                variant={plan.isFeatured ? "primary" : "secondary"}
                href="/contact"
                className="w-full"
              >
                <span
                  style={{ display: "block", width: "100%", textAlign: "center" }}
                >
                  Get Started
                </span>
              </GlowButton>
            </motion.div>
          ))}
        </div>

        {/* Honest footnote */}
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
          All packages are month-to-month — cancel anytime. Founding partner
          restaurants lock in their rate permanently.{" "}
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
