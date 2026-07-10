"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 1,
        padding: "100px 24px",
        overflow: "hidden",
        background: "var(--paper-deep)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4.5vw, 48px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: 20,
            lineHeight: 1.15,
            color: "var(--ink)",
          }}
        >
          See it working{" "}
          <span style={{ color: "var(--terracotta)", fontStyle: "italic" }}>
            before you commit
          </span>
        </h2>
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            color: "var(--ink-soft)",
            maxWidth: 520,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Open the live demo in your browser right now, or book a walkthrough
          and we&apos;ll show you the product on your own menu.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact" className="btn-primary">
              Book a Demo
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/demo" className="btn-secondary">
              Try the Live Demo
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
