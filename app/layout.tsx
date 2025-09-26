import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import ClientWrapper from './components/ClientWrapper';

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export const metadata: Metadata = {
  title: "Mobile AI Proxy",
  description: "PWA proxy app for AI endpoints",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mobile AI Proxy"
  },
  formatDetection: {
    telephone: false
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
