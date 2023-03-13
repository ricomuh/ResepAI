import Form from "@/components/form";
import Logo from "@/components/logo";
import Recipes from "@/components/recipes";
import SubmitForm from "@/components/submit";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-3">
      <Logo />
      <Form />
      <SubmitForm ingredientsInit="Loading...,Loading...,Loading..." />
      <Recipes />
    </div>
  );
}
