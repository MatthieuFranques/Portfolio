import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/Components/header";
import { Footer } from "@/app/Components/footer";
import MouseHighlight from "@/app/Components/MouseHighlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio de Matthieu Franques",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {/* <MouseHighlight> */}
        <Header />
        {children}
        <Footer />
        {/* </MouseHighlight> */}
      </body>
    </html>
  );
}
