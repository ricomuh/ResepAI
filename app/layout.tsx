import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Ingredients from "@/components/ingredientsContext";

export const metadata: Metadata = {
  title: "ResepAI",
  description: "ResepAI adalah aplikasi yang dapat membuat resep makanan",
};

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-gray-800 flex flex-col justify-between ${inter.className}`}
      >
        <Header />
        <Ingredients>
          <main className="w-full md:w-8/12 mx-auto my-auto">{children}</main>
        </Ingredients>
        <Footer />
      </body>
    </html>
  );
}
