"use client";

import { motion } from "framer-motion";
import GlowButton from "./ui/GlowButton";

const DEMO_URL = "https://emenyu.com/demo/table1/menu";
const IMG = "https://emenyu.com/demo/Images/thumbnails";

// Faithful recreation of the live demo (Demo Steakhouse sample restaurant),
// using real dish photos from the demo itself. The phone links to the
// actual product.
const menuItems = [
  { name: "Ribeye 380g", price: "R 365", img: `${IMG}/ribeye_380g.webp` },
  {
    name: "Kingklip & Prawn",
    price: "R 325",
    img: `${IMG}/kingklip_and_prawn.webp`,
  },
  {
    name: "Bacon Cheeseburger",
    price: "R 165",
    img: `${IMG}/bacon_and_cheese_burger.webp`,
  },
  {
    name: "Red Velvet Cake",
    price: "R 119",
    img: `${IMG}/red_velvet_cake.webp`,
  },
];

const tabs = ["Starters", "Mains", "Dessert", "Drinks"];

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

        {/* Right: phone linking to the live demo (Demo Steakhouse) */}
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
            aria-label="Open the live demo — Demo Steakhouse sample restaurant"
          >
            <div
              style={{
                position: "relative",
                borderRadius: 40,
                border: "6px solid var(--ink)",
                background: "#0b1420",
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
                  padding: "50px 16px 14px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 12,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 19,
                        fontWeight: 700,
                        color: "#f5efe0",
                        lineHeight: 1.1,
                      }}
                    >
                      Demo Steakhouse
                    </div>
                    <div
                      style={{
                        fontSize: 8,
                        letterSpacing: "0.22em",
                        color: "#d9b36a",
                        fontWeight: 600,
                      }}
                    >
                      PREMIUM STEAKHOUSE EXPERIENCE
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "5px 12px",
                      borderRadius: 100,
                      border: "1px solid rgba(217, 179, 106, 0.4)",
                      fontSize: 10,
                      color: "#e6d8b8",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Table 1
                  </div>
                </div>

                {/* Category tabs */}
                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    marginBottom: 14,
                  }}
                >
                  {tabs.map((tab, i) => (
                    <div
                      key={tab}
                      style={{
                        flex: 1,
                        textAlign: "center",
                        padding: "7px 0",
                        borderRadius: 10,
                        fontSize: 10,
                        fontWeight: 600,
                        background:
                          i === 0
                            ? "linear-gradient(135deg, #e9c982, #d9b36a)"
                            : "rgba(255,255,255,0.05)",
                        color: i === 0 ? "#0b1420" : "#c8d0d9",
                        border:
                          i === 0
                            ? "none"
                            : "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      {tab}
                    </div>
                  ))}
                </div>

                {/* Pairing suggestion strip */}
                <div
                  style={{
                    background: "rgba(217, 179, 106, 0.08)",
                    border: "1px solid rgba(217, 179, 106, 0.28)",
                    borderRadius: 12,
                    padding: "10px 12px",
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#f5efe0",
                    }}
                  >
                    Not sure what to order?
                  </div>
                  <div style={{ fontSize: 9, color: "#a9b4c0" }}>
                    One-tap chef pairings — drink, starter, main & dessert
                  </div>
                </div>

                {/* Menu items with real demo photos */}
                <div style={{ flex: 1, overflow: "hidden" }}>
                  {menuItems.map((item) => (
                    <div
                      key={item.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: 12,
                        padding: 8,
                        marginBottom: 8,
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.img}
                        alt={item.name}
                        width={44}
                        height={44}
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 8,
                          objectFit: "cover",
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#f5efe0",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item.name}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: "#d9b36a",
                          }}
                        >
                          {item.price}
                        </div>
                      </div>
                      <div
                        style={{
                          padding: "5px 12px",
                          borderRadius: 100,
                          background: "#d9b36a",
                          color: "#0b1420",
                          fontSize: 10,
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        Add
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart bar */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #e9c982, #d9b36a)",
                    color: "#0b1420",
                    borderRadius: 12,
                    padding: "10px 16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  <span>View order · 2 items</span>
                  <span>R 530</span>
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
            Live demo: Demo Steakhouse, a sample restaurant —{" "}
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
