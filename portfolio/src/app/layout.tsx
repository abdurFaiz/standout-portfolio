import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdurrahman Portfolio",
  description: "A standout portfolio showcasing my skills and projects.",
  keywords: ["portfolio", "frontend engineer", 'product designer', "projects", "skills"],
  authors: [{ name: "Abdurrahman", url: "https://github.com/AbdurFaiz" }],
  creator: "Abdurrahman",
  icons: {
    icon: '/icons/icon-accent.svg',
    shortcut: '/icons/icon-accent.svg',
    apple: '/icons/icon-accent.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
