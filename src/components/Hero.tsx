"use client";

import { motion } from "framer-motion";
import GlowButton from "./ui/GlowButton";

const menuItems = [
  { name: "Grilled Lamb Souvlaki", desc: "Charred lemon, tzatziki, warm pita", price: "R165", emoji: "🍢" },
  { name: "Wood-Fired Margherita", desc: "San Marzano tomato, basil, fior di latte", price: "R120", emoji: "🍕" },
  { name: "Catch of the Day", desc: "Pan-seared, brown butter, capers", price: "R210", emoji: "🐟" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "160px 24px 96px",
        background:
          "linear-gradient(180deg, var(--paper-deep) 0%, var(--paper) 60%)",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1160,
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* Left: copy */}
        <div>
          {/* Badge — honest early-stage positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              borderRadius: 100,
              border: "1px solid var(--line-strong)",
              background: "var(--surface)",
              marginBottom: 28,
              fontSize: 13,
              fontWeight: 600,
              color: "var(--forest)",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--forest)",
              }}
            />
            Now onboarding founding restaurants
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(38px, 5.5vw, 64px)",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: 24,
              color: "var(--ink)",
            }}
          >
            Your menu, on every table.{" "}
            <span style={{ color: "var(--terracotta)", fontStyle: "italic" }}>
              Beautifully.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              fontSize: "clamp(16px, 2vw, 19px)",
              color: "var(--ink-soft)",
              maxWidth: 480,
              marginBottom: 36,
              lineHeight: 1.7,
            }}
          >
            Guests scan a QR code, browse a menu that does your food justice,
            and order without waiting. Your kitchen sees everything live — no
            new hardware, no app downloads.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <GlowButton variant="primary" href="/contact">
              Book a Demo
            </GlowButton>
            <GlowButton variant="secondary" href="/demo">
              Try the Live Demo
            </GlowButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              marginTop: 20,
              fontSize: 13,
              color: "var(--ink-muted)",
            }}
          >
            See the real product in your browser — no signup needed.
          </motion.p>
        </div>

        {/* Right: phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            position: "relative",
            maxWidth: 320,
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 40,
              border: "6px solid var(--ink)",
              background: "var(--surface)",
              height: 600,
              boxShadow: "0 40px 80px rgba(46, 36, 24, 0.18)",
              overflow: "hidden",
            }}
          >
            {/* Notch */}
            <div
              style={{
                position: "absolute",
                top: 12,
                left: "50%",
                transform: "translateX(-50%)",
                width: 100,
                height: 26,
                background: "var(--ink)",
                borderRadius: 13,
                zIndex: 10,
              }}
            />

            {/* Mock menu UI */}
            <div
              style={{
                padding: "56px 20px 20px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background: "var(--surface-warm)",
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--ink)",
                  }}
                >
                  Trattoria Demo
                </div>
                <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>
                  Table 4 · Dinner menu
                </div>
              </div>

              {/* Category pills */}
              <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                <div
                  style={{
                    background: "var(--ink)",
                    color: "var(--surface)",
                    padding: "6px 14px",
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Mains
                </div>
                <div
                  style={{
                    background: "var(--surface)",
                    color: "var(--ink-soft)",
                    padding: "6px 14px",
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 500,
                    border: "1px solid var(--line)",
                  }}
                >
                  Starters
                </div>
                <div
                  style={{
                    background: "var(--surface)",
                    color: "var(--ink-soft)",
                    padding: "6px 14px",
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 500,
                    border: "1px solid var(--line)",
                  }}
                >
                  Drinks
                </div>
              </div>

              {/* Menu items */}
              <div style={{ flex: 1 }}>
                {menuItems.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      gap: 14,
                      marginBottom: 16,
                      background: "var(--surface)",
                      border: "1px solid var(--line)",
                      borderRadius: 16,
                      padding: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 12,
                        background: "var(--terracotta-soft)",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 26,
                      }}
                    >
                      {item.emoji}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "var(--ink)",
                          marginBottom: 2,
                        }}
                      >
                        {item.name}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--ink-muted)",
                          marginBottom: 6,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.desc}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: "var(--terracotta)",
                          }}
                        >
                          {item.price}
                        </span>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            color: "var(--surface)",
                            background: "var(--forest)",
                            padding: "4px 12px",
                            borderRadius: 12,
                          }}
                        >
                          Add
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart bar */}
              <div
                style={{
                  background: "var(--ink)",
                  color: "var(--surface)",
                  borderRadius: 14,
                  padding: "12px 18px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                <span>View order · 2 items</span>
                <span>R285</span>
              </div>
            </div>
          </div>

          {/* Caption under mockup */}
          <p
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "var(--ink-muted)",
              marginTop: 16,
            }}
          >
            Product preview with sample menu data
          </p>
        </motion.div>
      </div>
    </section>
  );
}
