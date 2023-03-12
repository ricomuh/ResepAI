import Form from "@/components/form";
import Recipes from "@/components/recipes";
import SubmitForm from "@/components/submit";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-3">
      <h1 className="text-6xl font-bold text-center text-white">RecipeGPT</h1>
      <Form />
      <SubmitForm ingredientsInit="Loading...,Loading...,Loading..." />
      <Recipes loading={true} />
    </div>
  );
}
