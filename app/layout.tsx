import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ECOLED — Turn Crossbeam Overlaps into Revenue",
  description: "ECOLED automates the full partner-led growth workflow. Connect Crossbeam, score your overlaps, generate AI research briefs, and launch personalized co-sell outreach — all in one platform.",
  keywords: "Crossbeam, partner-led growth, co-sell, partnership automation, revenue intelligence",
  openGraph: {
    title: "ECOLED — Turn Crossbeam Overlaps into Revenue",
    description: "Automate your partner-led growth workflow. Score overlaps, generate AI briefs, launch co-sell outreach.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
