"use client";

import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Live Demo", href: "/demo" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "How It Works", href: "/#how-it-works" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          label: "kshitij@emenutechnology.com",
          href: "mailto:kshitij@emenutechnology.com",
        },
        { label: "WhatsApp: +27 67 409 8289", href: "https://wa.me/27674098289" },
      ],
    },
  ];

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid var(--line)",
        background: "var(--paper-deep)",
        padding: "64px 24px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 48,
          marginBottom: 48,
        }}
      >
        {/* Brand column */}
        <div>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 16,
            }}
          >
            <span style={{ color: "var(--ink)" }}>EMenu</span>
            <span style={{ color: "var(--terracotta)" }}>Technology</span>
          </Link>
          <p
            style={{
              fontSize: 14,
              color: "var(--ink-soft)",
              lineHeight: 1.7,
              maxWidth: 280,
            }}
          >
            Digital menus, smart table ordering, and live kitchen dashboards —
            built for independent restaurants.
          </p>
          {/* Contact icons */}
          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            <a
              href="mailto:kshitij@emenutechnology.com"
              title="Email"
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "var(--surface)",
                border: "1px solid var(--line)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "all 0.2s ease",
                color: "var(--ink-soft)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--terracotta)";
                e.currentTarget.style.color = "var(--terracotta)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.color = "var(--ink-soft)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
            </a>
            <a
              href="https://wa.me/27674098289"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "var(--surface)",
                border: "1px solid var(--line)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "all 0.2s ease",
                color: "var(--ink-soft)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#25D366";
                e.currentTarget.style.color = "#1da851";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.color = "var(--ink-soft)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h4
              style={{
                fontSize: 13,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--ink-muted)",
                marginBottom: 20,
              }}
            >
              {group.title}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {group.links.map((link) => {
                const isExternal =
                  link.href.startsWith("http") ||
                  link.href.startsWith("mailto:");
                const Component = isExternal ? "a" : Link;
                const extraProps = isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {};
                return (
                  <Component
                    key={link.label}
                    href={link.href}
                    {...extraProps}
                    style={{
                      fontSize: 14,
                      color: "var(--ink-soft)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      (e.currentTarget.style.color = "var(--terracotta)")
                    }
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      (e.currentTarget.style.color = "var(--ink-soft)")
                    }
                  >
                    {link.label}
                  </Component>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          borderTop: "1px solid var(--line)",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <p style={{ fontSize: 13, color: "var(--ink-muted)" }}>
          © {new Date().getFullYear()} EMenu Technology. All rights reserved.
        </p>
        <p style={{ fontSize: 13, color: "var(--ink-muted)" }}>
          Made for restaurants that care about service.
        </p>
      </div>
    </footer>
  );
}
