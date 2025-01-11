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
  title: 'Claude Application Frederike Falke',
  description: 'Showcase of Claude capabilities and work vision by Frederike Falke',
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/images/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.frederikeforclaude.com',
    siteName: 'Frederike for Claude',
    title: 'Claude Application Frederike Falke',
    description: 'Showcase of Claude capabilities and work vision by Frederike Falke',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
