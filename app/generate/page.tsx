import Form from "@/components/form";
import Logo from "@/components/logo";
import Recipes from "@/components/recipes";
import SubmitForm from "@/components/submit";

export interface Result {
  title: string;
  bahan: string[];
  steps: string[];
}

async function getRecipes(ingredients: string) {
  const result = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/get?ingredients=" + ingredients
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

export default async function Generate({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const recipes: Result = await getRecipes(searchParams.ingredients as string);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 gap-3">
      <Logo />
      <Form />
      <SubmitForm ingredientsInit={searchParams.ingredients as string} />
      <Recipes data={recipes} />
    </div>
  );
}
