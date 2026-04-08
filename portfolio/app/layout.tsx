import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Providers } from "./providers";
import { LanguageProvider } from "@/app/contexts/languageContext";

export const metadata: Metadata = {
  title: "Matthieu Franques | Full Stack Developer",
  description: "Full Stack Developer specialized in .NET Core, Flutter, Blazor, and Next.js.",
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
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}