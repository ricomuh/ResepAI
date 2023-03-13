"use client";

import { useEffect, useRef } from "react";
import { useIngredients } from "./ingredientsContext";
import { useSearchParams } from "next/navigation";

export default function SubmitForm() {
  const {
    ingredients,
    removeIngredient,
    setIngredients,
    setIngredientsSetted,
  } = useIngredients();
  const ingredientsRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();

  const ingredientsInit = searchParams.get("ingredients");

  useEffect(() => {
    if (ingredientsInit) {
      const ingredientsArray = ingredientsInit.split(",");
      setIngredients(ingredientsArray);
      setIngredientsSetted(true);
      console.log("ingredients has been setted: ", ingredientsArray);
    }
    // console.log("ingredients init: ", ingredientsInit);
  }, [ingredientsInit, setIngredients, setIngredientsSetted]);

  return (
    <div className="flex flex-row items-center justify-center mx-auto w-11/12 md:max-w-xl gap-2">
      {ingredients.length > 0 && (
        <div className="flex flex-row gap-2 items-center justify-center flex-wrap flex-grow p-2 rounded-xl bg-gray-900">
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
      )}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        )}
      </form>
    </div>
  );
}
