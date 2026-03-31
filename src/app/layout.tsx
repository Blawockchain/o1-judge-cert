import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Judgeathon 2026 | Danveer Technologies",
  description:
    "The world's first hackathon for judges. No hackers. No teams. Just you, a panel of projects, and an O1 letter waiting at the finish line.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
