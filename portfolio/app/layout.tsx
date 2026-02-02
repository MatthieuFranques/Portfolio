import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/Components/header";
import { Footer } from "@/app/Components/footer";
import { Providers } from "./providers";

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
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
