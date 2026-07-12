import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — EMenu Technology",
  description:
    "Four clear packages from R499/month: Silver, Gold, Platinum, and Diamond. Once-off setup includes full menu digitisation. Month-to-month, no hidden costs.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
