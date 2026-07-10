"use client";

import { QrCode, Smartphone, Clock, MessageCircle } from "lucide-react";

// Honest product-fact strip — no invented client logos or counters.
const facts = [
  { icon: <QrCode size={18} />, label: "No app downloads — just scan" },
  { icon: <Smartphone size={18} />, label: "Works on any phone" },
  { icon: <Clock size={18} />, label: "Menu live within a day" },
  { icon: <MessageCircle size={18} />, label: "Direct WhatsApp support" },
];

export default function TrustStrip() {
  return (
    <section
      style={{
        padding: "40px 24px",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        background: "var(--surface-warm)",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px 56px",
        }}
      >
        {facts.map((fact) => (
          <div
            key={fact.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 14,
              fontWeight: 500,
              color: "var(--ink-soft)",
            }}
          >
            <span style={{ color: "var(--terracotta)", display: "flex" }}>
              {fact.icon}
            </span>
            {fact.label}
          </div>
        ))}
      </div>
    </section>
  );
}
