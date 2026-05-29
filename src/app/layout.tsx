import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrintMe — AI-кастомизация одежды",
  description:
    "Создай собственный дизайн футболки или худи с помощью искусственного интеллекта. Печать DTF и доставка.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
