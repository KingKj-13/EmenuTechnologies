"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import { Receipt, Timer, HeartHandshake } from "lucide-react";

// Qualitative, truthful benefits — no invented percentages or counters.
const benefits = [
  {
    icon: <Receipt size={30} />,
    title: "Orders arrive exactly as placed",
    description:
      "Guests type their own orders, so nothing gets lost between the table and the kitchen — no misheard modifiers, no illegible dockets.",
  },
  {
    icon: <Timer size={30} />,
    title: "Less waiting, more turning",
    description:
      "Guests order the moment they're ready instead of waiting to flag someone down. Staff spend their time on service, not transcription.",
  },
  {
    icon: <HeartHandshake size={30} />,
    title: "A menu that sells for you",
    description:
      "Photos, descriptions, and well-placed suggestions help guests discover more of your menu than a laminated page ever could.",
  },
];

export default function Benefits() {
  return (
    <SectionWrapper id="benefits" className="section-container" delay={0}>
      <div style={{ padding: "100px 0" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            Why It Matters
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
            Built around a real service night
          </motion.h2>
        </div>

        {/* Benefits grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-xl)",
                padding: "40px 32px",
                boxShadow: "var(--shadow-card)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-lift)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-card)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  background: "var(--forest-soft)",
                  color: "var(--forest)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                {benefit.icon}
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
                {benefit.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--ink-soft)",
                  lineHeight: 1.75,
                }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
