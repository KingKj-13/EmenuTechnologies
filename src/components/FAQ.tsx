"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "Four packages: Silver at R499/month, Gold at R699/month, Platinum at R999/month, and Diamond at R1,099/month. Each has a once-off setup fee (R2,000–R5,000) that covers digitising your full menu, photos, and QR codes. Founding partners lock in their rate permanently.",
  },
  {
    question: "What's the difference between the packages?",
    answer:
      "Silver covers the essentials: digital menu with photos, waiter app, admin app, and support. Gold adds menu videos and admin analytics. Platinum adds AI up-sell and cross-sell suggestions. Diamond adds the Waiter PRO AI app and food ratings.",
  },
  {
    question: "What does the Founding Partner Program mean?",
    answer:
      "We're a new company with a finished product and no public client list yet — we'd rather say that plainly than pretend otherwise. Our first restaurants get hands-on setup, direct access to the founder, preferential pricing, and real influence over what we build next.",
  },
  {
    question: "Do I need special hardware or equipment?",
    answer:
      "No. EMenu runs in the browser on any device — guests use their own phones, and your kitchen dashboard works on any tablet, laptop, or screen you already own.",
  },
  {
    question: "How long does setup take?",
    answer:
      "We digitise your menu for you — dishes, photos, prices, and categories — and generate your table QR codes. Most menus can be live within a day or two of receiving your menu details.",
  },
  {
    question: "Can the menu match my restaurant's brand?",
    answer:
      "Yes. Colours, typography, photos, and layout are customised so the digital menu feels like an extension of your restaurant, not a template.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No. We work month-to-month — if we're not earning our keep, you can walk away. We'd rather keep you with a good product than with paperwork.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Direct WhatsApp support with our team — no ticket queues or chatbots. As a small company, we treat support as our biggest advantage over larger vendors.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        position: "relative",
        zIndex: 1,
        padding: "0 24px 100px",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <span className="eyebrow">FAQ</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
            }}
          >
            Honest answers to fair questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "20px 24px",
                    background: isOpen ? "var(--surface-warm)" : "transparent",
                    border: "none",
                    borderBottom:
                      i < faqs.length - 1 ? "1px solid var(--line)" : "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "var(--ink)",
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isOpen)
                      e.currentTarget.style.background = "var(--surface-warm)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen)
                      e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span>{faq.question}</span>
                  <motion.svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="var(--terracotta)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M9 3v12M3 9h12" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          padding: "16px 24px 22px",
                          fontSize: 14,
                          lineHeight: 1.75,
                          color: "var(--ink-soft)",
                          background: "var(--surface-warm)",
                          borderBottom:
                            i < faqs.length - 1
                              ? "1px solid var(--line)"
                              : "none",
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
