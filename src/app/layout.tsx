import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olympiad Champs",
  description: "A learning platform for Olympiad preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
