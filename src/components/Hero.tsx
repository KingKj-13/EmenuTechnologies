"use client";

import { motion } from "framer-motion";
import GlowButton from "./ui/GlowButton";

const DEMO_URL = "https://emenyu.com/Trump/Table1";

// Faithful recreation of the live demo (Trumps Prime Grillhouse sample
// restaurant) — the phone links straight to the real thing.
const categories = [
  { name: "Wine", sub: "The cellar", icon: "🍷" },
  { name: "Cocktails", sub: "Signature pours", icon: "🍸" },
  { name: "Set Menu", sub: "Curated combos", icon: "✨" },
  { name: "Mains", sub: "Steaks & grill", icon: "🥩" },
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
            <GlowButton variant="secondary" href={DEMO_URL}>
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
            The demo is the real product, live in your browser — no signup
            needed.
          </motion.p>
        </div>

        {/* Right: phone linking to the live demo (Trumps Prime Grillhouse) */}
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
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "block" }}
            aria-label="Open the live demo — Trumps Prime Grillhouse sample restaurant"
          >
            <div
              style={{
                position: "relative",
                borderRadius: 40,
                border: "6px solid var(--ink)",
                background: "#0b1622",
                height: 600,
                boxShadow: "0 40px 80px rgba(46, 36, 24, 0.22)",
                overflow: "hidden",
                cursor: "pointer",
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

              {/* Demo menu recreation */}
              <div
                style={{
                  padding: "52px 18px 16px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                {/* Monogram */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    margin: "0 auto 8px",
                    borderRadius: "50%",
                    border: "1px solid #d9b36a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#d9b36a",
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                  }}
                >
                  T
                </div>
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.3em",
                    color: "#d9b36a",
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  WELCOME TO
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 30,
                    fontWeight: 700,
                    color: "#e9c982",
                    lineHeight: 1.1,
                  }}
                >
                  Trumps
                </div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.32em",
                    color: "#d9b36a",
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  PRIME GRILLHOUSE
                </div>

                {/* Table pill */}
                <div
                  style={{
                    margin: "0 auto 14px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 14px",
                    borderRadius: 100,
                    border: "1px solid rgba(217, 179, 106, 0.35)",
                    fontSize: 9,
                    letterSpacing: "0.18em",
                    color: "#e6d8b8",
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#d9b36a",
                    }}
                  />
                  TABLE 1 · SCAN · ORDER · SAVOUR
                </div>

                {/* Browse banner */}
                <div
                  style={{
                    background: "rgba(217, 179, 106, 0.08)",
                    border: "1px solid rgba(217, 179, 106, 0.3)",
                    borderRadius: 14,
                    padding: "12px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 14,
                    textAlign: "left",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#f5efe0",
                      }}
                    >
                      Browse the Full Menu
                    </div>
                    <div style={{ fontSize: 10, color: "#a9b4c0" }}>
                      Every dish, pour and pairing
                    </div>
                  </div>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: "#d9b36a",
                      color: "#0b1622",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    →
                  </div>
                </div>

                {/* Category grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 10,
                    flex: 1,
                  }}
                >
                  {categories.map((cat) => (
                    <div
                      key={cat.name}
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(217, 179, 106, 0.16)",
                        borderRadius: 14,
                        padding: "14px 12px",
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ fontSize: 16 }}>{cat.icon}</div>
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "#f5efe0",
                          }}
                        >
                          {cat.name}
                        </div>
                        <div style={{ fontSize: 10, color: "#a9b4c0" }}>
                          {cat.sub}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.25em",
                    color: "#d9b36a",
                    fontWeight: 600,
                    marginTop: 12,
                  }}
                >
                  ⚔ BUTCHERY
                </div>
              </div>
            </div>
          </a>

          {/* Caption under mockup */}
          <p
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "var(--ink-muted)",
              marginTop: 16,
            }}
          >
            Live demo: Trumps Prime Grillhouse, a sample restaurant —{" "}
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--terracotta)", fontWeight: 600 }}
            >
              tap to open it
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
