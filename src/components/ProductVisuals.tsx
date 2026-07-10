"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./ui/SectionWrapper";

const orders = [
  {
    table: "Table 4",
    items: "Lamb Souvlaki, Greek Salad",
    amount: "R285",
    status: "Preparing",
    statusColor: "var(--honey)",
    statusBg: "var(--honey-soft)",
  },
  {
    table: "Table 7",
    items: "Margherita ×2, House Red",
    amount: "R395",
    status: "Ready",
    statusColor: "var(--forest)",
    statusBg: "var(--forest-soft)",
  },
  {
    table: "Table 12",
    items: "Catch of the Day, Espresso ×2",
    amount: "R270",
    status: "Served",
    statusColor: "var(--ink-muted)",
    statusBg: "var(--paper-deep)",
  },
];

const menuRows = [
  { name: "Wood-Fired Margherita", cat: "Mains", price: "R120", state: "Live" },
  { name: "Burrata & Heirloom Tomato", cat: "Starters", price: "R95", state: "Live" },
  { name: "Tiramisu", cat: "Desserts", price: "R75", state: "Sold out" },
];

export default function ProductVisuals() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <SectionWrapper className="section-container" delay={0}>
      <div ref={sectionRef} style={{ padding: "100px 0", position: "relative" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            Behind the Pass
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
            Run the floor from one screen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 15,
              color: "var(--ink-muted)",
              maxWidth: 460,
              margin: "0 auto",
            }}
          >
            Previews of the actual product interface, shown with sample data.
          </motion.p>
        </div>

        {/* Dashboard mockups */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 24,
            position: "relative",
          }}
        >
          {/* Panel 1 — live orders */}
          <motion.div style={{ y: y1 }} className="glass-card">
            <div style={{ padding: 24 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 24,
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    fontFamily: "var(--font-display)",
                    color: "var(--ink)",
                  }}
                >
                  Live Orders
                </h3>
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--forest)",
                    fontWeight: 600,
                    background: "var(--forest-soft)",
                    padding: "4px 10px",
                    borderRadius: 6,
                  }}
                >
                  Sample view
                </span>
              </div>

              {orders.map((order, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 0",
                    borderBottom:
                      idx < orders.length - 1
                        ? "1px solid var(--line)"
                        : "none",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--ink)",
                      }}
                    >
                      {order.table}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--ink-muted)",
                        marginTop: 2,
                      }}
                    >
                      {order.items}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--ink)",
                      }}
                    >
                      {order.amount}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: order.statusColor,
                        background: order.statusBg,
                        fontWeight: 600,
                        marginTop: 4,
                        padding: "2px 8px",
                        borderRadius: 6,
                        display: "inline-block",
                      }}
                    >
                      {order.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Panel 2 — menu manager */}
          <motion.div style={{ y: y2 }} className="glass-card">
            <div style={{ padding: 24 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 24,
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    fontFamily: "var(--font-display)",
                    color: "var(--ink)",
                  }}
                >
                  Menu Manager
                </h3>
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--terracotta)",
                    fontWeight: 600,
                    background: "var(--terracotta-soft)",
                    padding: "4px 10px",
                    borderRadius: 6,
                  }}
                >
                  Edit in seconds
                </span>
              </div>

              {menuRows.map((row, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 0",
                    borderBottom:
                      idx < menuRows.length - 1
                        ? "1px solid var(--line)"
                        : "none",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--ink)",
                      }}
                    >
                      {row.name}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--ink-muted)",
                        marginTop: 2,
                      }}
                    >
                      {row.cat} · {row.price}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: 6,
                      color:
                        row.state === "Live"
                          ? "var(--forest)"
                          : "var(--terracotta)",
                      background:
                        row.state === "Live"
                          ? "var(--forest-soft)"
                          : "var(--terracotta-soft)",
                    }}
                  >
                    {row.state}
                  </div>
                </div>
              ))}

              {/* Simple bar chart */}
              <div style={{ marginTop: 24 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--ink-muted)",
                    marginBottom: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Orders by hour (sample)
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 6,
                    height: 60,
                  }}
                >
                  {[30, 45, 38, 62, 85, 100, 78, 52].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background:
                          h === 100 ? "var(--terracotta)" : "var(--line-strong)",
                        borderRadius: 4,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
