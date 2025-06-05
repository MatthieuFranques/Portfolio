import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/Components/header";
import { Footer } from "@/app/Components/footer";

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
