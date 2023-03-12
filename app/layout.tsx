import "./globals.css";
import Ingredients from "@/components/ingredientsContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-800">
        <Ingredients>
          <main className="max-w-4xl mx-auto">{children}</main>
        </Ingredients>
      </body>
    </html>
  );
}
