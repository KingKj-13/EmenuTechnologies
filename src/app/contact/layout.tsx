import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — EMenu Technology",
  description:
    "Reach EMenu Technology on WhatsApp or email to book a demo or get a quote for your restaurant. We reply within one business day.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
