"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import {
  Smartphone,
  PlayCircle,
  ClipboardList,
  LayoutDashboard,
  BarChart3,
  Sparkles,
  Bot,
  Star,
  LifeBuoy,
} from "lucide-react";

// The complete product, feature by feature. Premium features are the two
// AI capabilities available in the Platinum and Diamond packages.
const features = [
  {
    icon: <Smartphone size={24} />,
    title: "Digital Menu with Photos",
    description:
      "Guests scan a QR code and get your full menu with appetising photos of every dish. Change a price or mark a dish sold out and it updates on every table instantly.",
    premium: false,
  },
  {
    icon: <PlayCircle size={24} />,
    title: "Menu Videos",
    description:
      "Short videos of your signature dishes playing right inside the menu — sizzling steaks sell themselves better than any description could.",
    premium: false,
  },
  {
    icon: <ClipboardList size={24} />,
    title: "Waiter App",
    description:
      "Your floor staff see every table, take and adjust orders, and stay in sync with the kitchen — no more paper dockets or misheard modifiers.",
    premium: false,
  },
  {
    icon: <LayoutDashboard size={24} />,
    title: "Admin App",
    description:
      "Run the restaurant from one screen: edit the menu, adjust prices, manage availability, and watch live orders as they land — from any device.",
    premium: false,
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Admin Analytics",
    description:
      "Know what sells, when, and at which tables. Daily and weekly views of your top dishes, busiest hours, and revenue — no spreadsheets needed.",
    premium: false,
  },
  {
    icon: <Sparkles size={24} />,
    title: "AI Up-sell & Cross-sell",
    description:
      "The menu suggests the right wine with the steak and the dessert after the mains — at the moment guests are deciding. Higher order values, zero pressure on your staff.",
    premium: true,
  },
  {
    icon: <Bot size={24} />,
    title: "Waiter PRO AI App",
    description:
      "An AI copilot for your floor staff: it prompts pairings, recommends add-ons, and guides every waiter to sell like your best one.",
    premium: true,
  },
  {
    icon: <Star size={24} />,
    title: "Food Ratings",
    description:
      "Guests rate dishes right from the menu, so you learn what to fix and what to feature — feedback that never makes it to Google reviews.",
    premium: false,
  },
  {
    icon: <LifeBuoy size={24} />,
    title: "Support & Maintenance",
    description:
      "Direct WhatsApp support, hosting, updates, and menu changes handled for you. Every package includes it — you cook, we keep it running.",
    premium: false,
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
            The Product
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
            Every feature, explained
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 17,
              color: "var(--ink-soft)",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            One system covering the guest, the floor, and the kitchen.{" "}
            <span style={{ color: "var(--terracotta)", fontWeight: 600 }}>
              Premium
            </span>{" "}
            marks the AI features included in Platinum and Diamond packages.
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
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              style={{
                background: feature.premium
                  ? "linear-gradient(180deg, var(--terracotta-soft) 0%, var(--surface) 45%)"
                  : "var(--surface)",
                border: feature.premium
                  ? "1.5px solid var(--terracotta)"
                  : "1px solid var(--line)",
                borderRadius: "var(--radius-xl)",
                padding: 32,
                cursor: "default",
                boxShadow: "var(--shadow-card)",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-lift)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-card)";
              }}
            >
              {feature.premium && (
                <div
                  style={{
                    position: "absolute",
                    top: 18,
                    right: 18,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    background: "var(--terracotta)",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "5px 12px",
                    borderRadius: 100,
                  }}
                >
                  <Sparkles size={11} />
                  Premium
                </div>
              )}

              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: feature.premium
                    ? "var(--terracotta)"
                    : "var(--terracotta-soft)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  color: feature.premium ? "#fff" : "var(--terracotta)",
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
