"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";

// Real, clickable product demos — clearly labelled as sample environments.
const demos = [
  {
    title: "Demo Steakhouse — Guest Menu",
    description:
      "Our flagship sample restaurant: browse dishes with real photos, get one-tap chef pairings, and place a test order from your phone.",
    url: "https://emenyu.com/demo/table1/menu",
    tag: "Featured",
    emoji: "🥩",
  },
  {
    title: "Guest Menu — Greek Sample",
    description:
      "Browse a sample taverna menu exactly as your guests would: scan, browse, customise, and order from a phone.",
    url: "https://emenyu.com/Greek/1",
    tag: "Guest Experience",
    emoji: "🫒",
  },
  {
    title: "Guest Menu — Seafood Sample",
    description:
      "A second sample restaurant showing how the same product adapts to a different menu, brand, and style.",
    url: "https://emenyu.com/AlPescatore/1",
    tag: "Guest Experience",
    emoji: "🐟",
  },
  {
    title: "Admin Dashboard",
    description:
      "The owner's view: live orders by table, menu editing, and daily sales insights — the screen your kitchen would run on.",
    url: "https://emenyu.com/Greek/Admin",
    tag: "Owner View",
    emoji: "📊",
  },
];

export default function DemoShowcase() {
  return (
    <SectionWrapper id="demo" className="section-container" delay={0}>
      <div style={{ padding: "100px 0" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            Live Product Demos
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
            Don&apos;t take our word for it — click around
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
            These are sample restaurant environments running on the real
            product. Everything works — place a test order and watch it appear
            on the admin dashboard.
          </motion.p>
        </div>

        {/* Demo cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {demos.map((demo, i) => (
            <motion.a
              key={demo.title}
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--line)",
                background: "var(--surface)",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "var(--shadow-card)",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-lift)";
                e.currentTarget.style.borderColor = "var(--terracotta)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-card)";
                e.currentTarget.style.borderColor = "var(--line)";
              }}
            >
              {/* Preview area */}
              <div
                style={{
                  height: 180,
                  background:
                    "linear-gradient(135deg, var(--paper-deep), var(--terracotta-soft))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Mock browser window */}
                <div
                  style={{
                    width: "78%",
                    height: "72%",
                    background: "var(--surface)",
                    borderRadius: 10,
                    border: "1px solid var(--line)",
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(46,36,24,0.08)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      padding: "10px 14px",
                      borderBottom: "1px solid var(--line)",
                      background: "var(--surface-warm)",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
                  </div>
                  <div
                    style={{
                      padding: 16,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 40,
                    }}
                  >
                    {demo.emoji}
                  </div>
                </div>

                {/* Open overlay */}
                <div
                  className="demo-open-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(46, 36, 24, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      padding: "10px 24px",
                      background: "var(--surface)",
                      color: "var(--ink)",
                      borderRadius: 100,
                      fontSize: 14,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    Open Demo
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2 12L12 2M12 2H5M12 2v7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Card copy */}
              <div style={{ padding: "20px 24px 24px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 10,
                    gap: 8,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      fontFamily: "var(--font-display)",
                      color: "var(--ink)",
                    }}
                  >
                    {demo.title}
                  </h3>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--forest)",
                      background: "var(--forest-soft)",
                      padding: "4px 10px",
                      borderRadius: 6,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {demo.tag}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--ink-soft)",
                    lineHeight: 1.65,
                  }}
                >
                  {demo.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
