import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "O1 Visa Judge Sponsorship Program | Devfolio",
  description:
    "Develop extraordinary ability through institutional contribution. Evaluate cutting-edge projects, earn O1 visa sponsorship.",
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
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
