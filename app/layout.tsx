import "./globals.css";
import Ingredients from "@/components/ingredientsContext";
import { Metadata } from "next";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "ResepAI",
  description: "ResepAI adalah aplikasi yang dapat membuat resep makanan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-800 flex flex-col justify-between">
        <Header />
        <Ingredients>
          <main className="w-full md:w-8/12 mx-auto my-auto">{children}</main>
        </Ingredients>
        <div></div>
      </body>
    </html>
  );
}
