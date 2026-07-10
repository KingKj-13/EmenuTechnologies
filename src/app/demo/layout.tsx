import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Demo — EMenu Technology",
  description:
    "Try EMenu in your browser right now: sample restaurant menus and the admin dashboard, running on the real product. No signup needed.",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
