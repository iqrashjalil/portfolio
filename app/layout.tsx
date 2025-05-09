import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Grechen_Fuemen,
  Montserrat_Alternates,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const grechen = Grechen_Fuemen({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-grechen",
});

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add more if needed
  variable: "--font-montserrat",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iqrash Jalil - Full Stack Developer",
  description: "Iqrash jalil portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${grechen.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
