import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product — EMenu Technology",
  description:
    "QR digital menus, table ordering, live kitchen dashboard, menu manager, and sales insights — what EMenu does for guests, floor staff, and the kitchen.",
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
