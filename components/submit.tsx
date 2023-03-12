"use client";

import { useEffect, useRef } from "react";
import { useIngredients } from "./ingredientsContext";

export default function SubmitForm({
  ingredientsInit,
}: {
  ingredientsInit?: string;
}) {
  const { ingredients, removeIngredient, setIngredients } = useIngredients();
  const ingredientsRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ingredientsInit) {
      const ingredientsArray = ingredientsInit.split(",");
      setIngredients(ingredientsArray);
    }
  }, []);

  return (
    <div className="flex flex-row items-center justify-center w-full gap-2">
      <div className="flex flex-row gap-2 items-center justify-center max-w-xl flex-wrap p-2 rounded-xl bg-gray-900">
        {ingredients.map((ingredient, index) => (
          <div
            className="flex flex-row gap-1 items-center justify-between px-2 py-0.5 text-white bg-indigo-600 hover:bg-indigo-700 duration-200 rounded-lg shadow-sm text-sm"
            key={index}
          >
            <p>{ingredient}</p>
            <button
              type="button"
              onClick={() => removeIngredient(index)}
              className="w-5 h-5 text-white duration-200 rounded-md flex justify-center items-center hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 -mr-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <form action="generate" className="flex justify-between items-center">
        <input
          ref={ingredientsRef}
          value={ingredients.join(",")}
          type="hidden"
          name="ingredients"
          className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        {ingredients.length > 0 && (
          <button
            type="submit"
            className="px-4 py-2 text-white bg-indigo-600 rounded-xl shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 duration-200 font-semibold"
          >
            Cari Resep
          </button>
        )}
      </form>
    </div>
  );
}
