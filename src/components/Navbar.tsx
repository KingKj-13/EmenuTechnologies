"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Product", href: "/features" },
    { label: "Live Demo", href: "/demo" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(251, 247, 240, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--line)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 21,
            fontWeight: 700,
            textDecoration: "none",
            letterSpacing: "-0.01em",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ color: "var(--ink)" }}>EMenu</span>
          <span style={{ color: "var(--terracotta)" }}>Technology</span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: isActive(link.href) ? "var(--ink)" : "var(--ink-soft)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: isActive(link.href) ? 600 : 500,
                transition: "color 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--ink)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = isActive(link.href)
                  ? "var(--ink)"
                  : "var(--ink-soft)")
              }
            >
              {link.label}
              {isActive(link.href) && (
                <span
                  style={{
                    position: "absolute",
                    bottom: -6,
                    left: 0,
                    right: 0,
                    height: 2,
                    borderRadius: 1,
                    background: "var(--terracotta)",
                  }}
                />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary"
            style={{ padding: "10px 24px", fontSize: 13 }}
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-mobile-btn"
          style={{
            background: "none",
            border: "none",
            color: "var(--ink)",
            cursor: "pointer",
            padding: 8,
          }}
          aria-label="Toggle mobile menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(251, 247, 240, 0.98)",
              backdropFilter: "blur(16px)",
              padding: "16px 24px 24px",
              borderTop: "1px solid var(--line)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "12px 0",
                  color: isActive(link.href) ? "var(--ink)" : "var(--ink-soft)",
                  textDecoration: "none",
                  fontSize: 16,
                  fontWeight: isActive(link.href) ? 600 : 500,
                  borderBottom: "1px solid var(--line)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary"
              style={{
                marginTop: 16,
                display: "block",
                textAlign: "center",
              }}
            >
              Book a Demo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
