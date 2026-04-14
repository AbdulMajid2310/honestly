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
  title: {
    default: "HonestLy — Kirim Pesan Anonim Tanpa Jejak",
    template: "%s | HonestLy",
  },
  description:
    "Platform pengakuan anonim berbasis AI. Tumpahkan keresahanmu dengan Ghost-Mode Privacy dan enkripsi tingkat militer.",
  keywords: [
    "HonestLy",
    "Pesan Anonim",
    "Confession App",
    "Kirim Pesan Rahasia",
    "AI Message Rewrite",
    "MaJdev Lab",
  ],
  authors: [{ name: "MjDev Lab", url: "https://mjdev-nine.vercel.app/" }],
  creator: "Abdul Majid",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://honestly.majdev.com", // Ganti dengan domain paman
    title: "HonestLy — Jujur Tanpa Takut",
    description:
      "Kirim pesan anonim yang dipoles oleh AI. Privasi mutlak, koneksi instan ke WhatsApp.",
    siteName: "HonestLy",
    images: [
      {
        url: "/images/logo.png", // Pastikan file ini ada di folder public
        width: 1200,
        height: 630,
        alt: "HonestLy Preview",
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
