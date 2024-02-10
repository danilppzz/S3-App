import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CookiesProvider } from "@/components/cookies-provider";
import { Navigation } from "@/components/sections/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "danilppzz",
  description: "Made by danilppzz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" content="https://lucide.dev/" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <CookiesProvider />
      </body>
    </html>
  );
}
