"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import { QrCode, UtensilsCrossed, ChefHat } from "lucide-react";

const steps = [
  {
    icon: <QrCode size={30} />,
    title: "1. Guests scan the QR code",
    description:
      "A printed QR code on the table opens your full menu instantly — photos, descriptions, and prices. No app to install.",
  },
  {
    icon: <UtensilsCrossed size={30} />,
    title: "2. They browse and order",
    description:
      "Guests explore the menu at their own pace, customise dishes, and place their order straight from their phone.",
  },
  {
    icon: <ChefHat size={30} />,
    title: "3. Your kitchen sees it live",
    description:
      "Orders appear on your dashboard the moment they're placed — clearly itemised by table, with no handwriting to decipher.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="section-container" delay={0}>
      <div style={{ padding: "110px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            How It Works
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
            From table to kitchen in seconds
          </motion.h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-xl)",
                padding: "40px 28px",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  margin: "0 auto 24px",
                  borderRadius: 20,
                  background: "var(--terracotta-soft)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--terracotta)",
                }}
              >
                {step.icon}
              </div>
              <h3
                style={{
                  fontSize: 19,
                  fontWeight: 600,
                  marginBottom: 12,
                  fontFamily: "var(--font-display)",
                  color: "var(--ink)",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--ink-soft)",
                  lineHeight: 1.7,
                  maxWidth: 300,
                  margin: "0 auto",
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
