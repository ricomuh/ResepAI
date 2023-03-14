import Form from "@/components/form";
import Logo from "@/components/logo";
import ClientOnly from "@/components/ClientOnly";
// import RecipeWrapper from "./recipeWrapper";
import SubmitForm from "@/components/submit";
import { Metadata } from "next";

export interface Result {
  title: string;
  bahan: string[];
  steps: string[];
}

/*
async function getRecipes(ingredients: string) {
  const result = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/get?ingredients=" + ingredients,
    {
      cache: "no-store",
    }
  );
  return result.json();
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const recipes: Result = await getRecipes(searchParams.ingredients as string);
  return {
    title: `ResepAI - Resep ${recipes.title}`,
    description: `Resep ${recipes.title} dengan bahan ${recipes.bahan.join(
      ", "
    )}`,
    openGraph: {
      title: `ResepAI - Resep ${recipes.title}`,
      description: `Resep ${recipes.title} dengan bahan ${recipes.bahan.join(
        ", "
      )}`,
    },
  };
}
*/

export const metadata: Metadata = {
  title: "ResepAI",
  description: "ResepAI adalah aplikasi yang dapat membuat resep makanan",
  openGraph: {
    title: "ResepAI",
    description: "ResepAI adalah aplikasi yang dapat membuat resep makanan",
  },
};

export default async function Generate() {
  // const recipes: Result = await getRecipes(searchParams.ingredients as string);

  return (
    <div className="flex flex-col items-center justify-center h-full py-10 gap-3 w-full">
      {/* <p>{JSON.stringify(searchParams)}</p> */}
      <Logo />
      <Form />
      <SubmitForm />
      <ClientOnly />
      {/* <RecipeWrapper /> */}
    </div>
  );
}
