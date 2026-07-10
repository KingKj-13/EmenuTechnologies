import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — EMenu Technology",
  description:
    "One complete plan, quoted per restaurant. Founding partner restaurants get preferential rates locked in permanently. No long-term contracts.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
