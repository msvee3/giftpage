import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GiftPage AI - Create Personalized Digital Gift Webpages",
  description: "Create stunning, AI-powered personalized gift webpages for birthdays, anniversaries, weddings, and special occasions. Shareable, memorable, and eco-friendly digital celebrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
