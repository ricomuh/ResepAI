import Form from "@/components/form";
import Logo from "@/components/logo";
import Recipes from "@/components/recipes";
// import RecipeWrapper from "./recipeWrapper";
import SubmitForm from "@/components/submit";
import { Metadata } from "next";

export interface Result {
  title: string;
  bahan: string[];
  steps: string[];
}

export const metadata: Metadata = {
  title: "ResepAI",
  description: "ResepAI adalah aplikasi yang dapat membuat resep makanan",
  openGraph: {
    title: "ResepAI",
    description: "ResepAI adalah aplikasi yang dapat membuat resep makanan",
  },
};

export default async function Generate() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-10 gap-3 w-full">
      <Logo />
      <Form />
      <SubmitForm />
      <Recipes />
    </div>
  );
}
