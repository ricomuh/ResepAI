import { Metadata } from "next";
import Form from "@/components/form";
import Logo from "@/components/logo";
import SubmitForm from "@/components/submit";

export const metadata: Metadata = {
  title: "ResepAI",
  description:
    "ResepAI adalah aplikasi yang dapat membuat resep makanan berdasarkan bahan yang dimasukkan menggunakan teknologi GPT-3.5",
  openGraph: {
    title: "ResepAI",
    description:
      "ResepAI adalah aplikasi yang dapat membuat resep makanan berdasarkan bahan yang dimasukkan menggunakan teknologi GPT-3.5",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-2 gap-3">
      <Logo />
      <Form />
      <SubmitForm />
    </div>
  );
}
