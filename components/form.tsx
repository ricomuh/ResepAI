"use client";

import { useRef } from "react";
import { useIngredients } from "@/components/ingredientsContext";

export default function Form() {
  const { ingredients, addIngredient } = useIngredients();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (value) {
      addIngredient(value);
      inputRef.current.value = "";
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center duration-200"
    >
      <input
        ref={inputRef}
        type="text"
        name="ingredient"
        id="ingredient"
        className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-l-xl shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none duration-200"
        placeholder={
          ingredients.length > 0
            ? "Tambahkan ingredient"
            : "Ada apa saja di kulkasmu?"
        }
      />
      <button
        type="submit"
        className="px-2 py-[0.57rem] text-white bg-indigo-600 rounded-r-xl shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 duration-200"
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
            d="M12 6v12m6-6H6"
          />
        </svg>
      </button>
    </form>
  );
}
