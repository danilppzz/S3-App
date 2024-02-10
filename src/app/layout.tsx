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
        <link rel="icon" href="/icon.png" type="image/png" sizes="128x128" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <CookiesProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
