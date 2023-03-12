"use client";

import React, { createContext, useContext, useState } from "react";

export const IngredientsContext = createContext<{
  ingredients: string[];
  addIngredient: (ingredient: string) => void;
  removeIngredient: (ingredient: number) => void;
  setIngredients: (ingredients: string[]) => void;
}>({
  ingredients: [],
  addIngredient: () => {},
  removeIngredient: () => {},
  setIngredients: () => {},
});

export function useIngredients() {
  return useContext(IngredientsContext);
}

export default function Ingredients({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ingredients, setIngredients] = useState<string[]>([]);

  function addIngredient(ingredient: string) {
    setIngredients([...ingredients, ingredient]);
  }

  function removeIngredient(ingredient: number) {
    const newIngredients = [...ingredients];
    newIngredients.splice(ingredient, 1);
    setIngredients(newIngredients);
  }

  return (
    <IngredientsContext.Provider
      value={{ ingredients, addIngredient, removeIngredient, setIngredients }}
    >
      {children}
    </IngredientsContext.Provider>
  );
}
