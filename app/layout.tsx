import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ram Gavhane — Engineer & Full Stack Developer",
  description:
    "Portfolio of Ram Gavhane. Full Stack Developer specializing in React, Next.js, Node.js, and high-performance engineering.",
  keywords: [
    "Ram Gavhane",
    "Full Stack Developer",
    "Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-background font-sans text-foreground antialiased selection:bg-foreground selection:text-background`}>
        {children}
      </body>
    </html>
  );
}
