"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    restaurant: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi EMenu Technology!\n\nName: ${formData.name}\nEmail: ${formData.email}\nRestaurant: ${formData.restaurant}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/27674098289?text=${text}`, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "var(--radius-md)",
    border: "1px solid var(--line)",
    background: "var(--surface)",
    color: "var(--ink)",
    fontSize: 15,
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "all 0.25s ease",
  };

  const focusIn = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.style.borderColor = "var(--terracotta)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(194, 84, 43, 0.12)";
  };
  const focusOut = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.style.borderColor = "var(--line)";
    e.currentTarget.style.boxShadow = "none";
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 500,
    color: "var(--ink-soft)",
    marginBottom: 6,
    display: "block",
  };

  const cards = [
    {
      href: "https://wa.me/27674098289",
      external: true,
      emoji: "💬",
      title: "WhatsApp",
      body: "The fastest way to reach us — talk directly with our team.",
      detail: "+27 67 409 8289",
      accent: "#1da851",
      accentBg: "rgba(37, 211, 102, 0.1)",
    },
    {
      href: "mailto:kshitij@emenutechnology.com",
      external: false,
      emoji: "✉️",
      title: "Email",
      body: "Prefer writing it all down? Send us the details.",
      detail: "kshitij@emenutechnology.com",
      accent: "var(--forest)",
      accentBg: "var(--forest-soft)",
    },
    {
      href: "https://wa.me/27674098289?text=Hi%20EMenu%20Technology!%20I%27d%20like%20to%20book%20a%20demo%20for%20my%20restaurant.",
      external: true,
      emoji: "📅",
      title: "Book a Demo",
      body: "A personal walkthrough of the product — on your own menu if you like.",
      detail: "Schedule on WhatsApp →",
      accent: "var(--terracotta)",
      accentBg: "var(--terracotta-soft)",
    },
  ];

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        {/* Page header */}
        <section
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "80px 24px 0",
            background:
              "linear-gradient(180deg, var(--paper-deep) 0%, var(--paper) 100%)",
          }}
        >
          <span className="eyebrow">Contact</span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 54px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: 16,
              color: "var(--ink)",
            }}
          >
            Talk to a person,{" "}
            <span style={{ color: "var(--terracotta)", fontStyle: "italic" }}>
              not a funnel
            </span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "var(--ink-soft)",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Tell us about your restaurant and we&apos;ll reply within one
            business day — usually much faster.
          </p>
        </section>

        {/* Contact content */}
        <section
          style={{
            position: "relative",
            zIndex: 1,
            padding: "80px 24px 100px",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 48,
            }}
          >
            {/* Contact cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
              }}
            >
              {cards.map((card, i) => (
                <motion.a
                  key={card.title}
                  href={card.href}
                  {...(card.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-xl)",
                    padding: "36px 32px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    boxShadow: "var(--shadow-card)",
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
                      width: 64,
                      height: 64,
                      borderRadius: 18,
                      background: card.accentBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                      margin: "0 auto 20px",
                    }}
                  >
                    {card.emoji}
                  </div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      fontFamily: "var(--font-display)",
                      marginBottom: 8,
                      color: card.accent,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--ink-soft)",
                      marginBottom: 12,
                      lineHeight: 1.6,
                    }}
                  >
                    {card.body}
                  </p>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--ink)",
                      wordBreak: "break-word",
                    }}
                  >
                    {card.detail}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Contact form → WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                maxWidth: 640,
                margin: "0 auto",
                width: "100%",
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-xl)",
                padding: "40px 36px",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  fontFamily: "var(--font-display)",
                  marginBottom: 8,
                  textAlign: "center",
                  color: "var(--ink)",
                }}
              >
                Send us a message
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--ink-muted)",
                  textAlign: "center",
                  marginBottom: 32,
                }}
              >
                Fill in the form and we&apos;ll continue the conversation on
                WhatsApp
              </p>

              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 16,
                  }}
                  className="contact-form-grid"
                >
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      style={inputStyle}
                      onFocus={focusIn}
                      onBlur={focusOut}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@restaurant.com"
                      style={inputStyle}
                      onFocus={focusIn}
                      onBlur={focusOut}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Restaurant Name</label>
                  <input
                    type="text"
                    name="restaurant"
                    value={formData.restaurant}
                    onChange={handleChange}
                    placeholder="Your restaurant's name"
                    style={inputStyle}
                    onFocus={focusIn}
                    onBlur={focusOut}
                  />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your restaurant and what you're looking for..."
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: 120,
                    }}
                    onFocus={focusIn}
                    onBlur={focusOut}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "16px 32px",
                    fontSize: 16,
                  }}
                >
                  Send via WhatsApp
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
