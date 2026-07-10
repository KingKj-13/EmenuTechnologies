"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function GlowButton({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: GlowButtonProps) {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <motion.a
          href={href}
          className={`${baseClass} ${className}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link
          href={href}
          className={`${baseClass} ${className}`}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={`${baseClass} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
