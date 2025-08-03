import type { Metadata } from "next";
import "./globals.css";
import PageTransition from '../../components/PageTransition';
import RouteChangeHandler from '../../components/RouteChangeHandler';

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
    <html lang="en" className="scroll-smooth">
      <body
      >
        <RouteChangeHandler>
          <PageTransition>
            {children}
          </PageTransition>
        </RouteChangeHandler>
      </body>
    </html>
  );
}
