"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import {
  Smartphone,
  Sparkles,
  BarChart3,
  PencilRuler,
  Languages,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: <Smartphone size={24} />,
    title: "QR Digital Menu",
    description:
      "A mobile-first menu with photos and descriptions that update in real time. Change a price or 86 a dish in seconds.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Smart Suggestions",
    description:
      "Pairing and add-on suggestions built into the ordering flow — a side, a drink, a dessert — presented naturally, never pushy.",
  },
  {
    icon: <Bell size={24} />,
    title: "Live Order Dashboard",
    description:
      "Every order lands on your kitchen dashboard the moment it's placed, itemised by table with modifiers spelled out.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Sales Insights",
    description:
      "See what sells, when, and at which tables. Simple daily views — not a data-science project.",
  },
  {
    icon: <PencilRuler size={24} />,
    title: "Your Brand, Your Menu",
    description:
      "Colours, photography, and layout tuned to match your restaurant. It should feel like yours, not ours.",
  },
  {
    icon: <Languages size={24} />,
    title: "Multi-language Ready",
    description:
      "Serve tourists and locals alike — menus can be offered in multiple languages from the same source.",
  },
];

export default function Features() {
  return (
    <SectionWrapper id="features" className="section-container" delay={0}>
      <div style={{ padding: "100px 0" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            What You Get
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
            Everything a busy floor needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 17,
              color: "var(--ink-soft)",
              maxWidth: 540,
              margin: "0 auto",
            }}
          >
            One system that covers the guest, the floor, and the kitchen —
            without replacing the way you run your restaurant.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-xl)",
                padding: 32,
                cursor: "default",
                boxShadow: "var(--shadow-card)",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-lift)";
                e.currentTarget.style.borderColor = "var(--line-strong)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-card)";
                e.currentTarget.style.borderColor = "var(--line)";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "var(--terracotta-soft)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  color: "var(--terracotta)",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  marginBottom: 10,
                  fontFamily: "var(--font-display)",
                  color: "var(--ink)",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--ink-soft)",
                  lineHeight: 1.7,
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
