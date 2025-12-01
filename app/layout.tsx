import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "💻 WENDIMAGEGN ABERA | Full-Stack Web Developer",
  description: "Portfolio of WENDIMAGEGN ABERA - A passionate Full-Stack Web Developer specializing in React, Node.js, and modern web technologies.",
  keywords: ["Full-Stack Developer", "Web Developer", "React", "Node.js", "Portfolio", "WENDIMAGEGN ABERA"],
  authors: [{ name: "WENDIMAGEGN ABERA" }],
  openGraph: {
    title: "💻 WENDIMAGEGN ABERA | Full-Stack Web Developer",
    description: "Portfolio of WENDIMAGEGN ABERA - A passionate Full-Stack Web Developer specializing in React, Node.js, and modern web technologies.",
    type: "website",
    locale: "en_US",
    siteName: "WENDIMAGEGN ABERA Portfolio",
  },
};

import { ThemeProvider } from "../components/ThemeProvider";

// ... (imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-medium dark:font-normal`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
