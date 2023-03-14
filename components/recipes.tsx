"use client";

import Link from "next/link";
import type { Result } from "@/app/generate/page";
import { useState, useEffect } from "react";
import getRecipe from "@/lib/getRecipe";
import { useIngredients } from "./ingredientsContext";
import { NextSeo } from "next-seo";

export default function Recipes({
  children,
  ...delegated
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Result | null | undefined>(null);
  const [error, setError] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  const { ingredients, ingredientsSetted } = useIngredients();

  useEffect(() => {
    if (ingredients.length > 0 && ingredientsSetted) {
      console.log("Getting recipe...");
      getRecipe(ingredients).then((res) => {
        if (res.error) {
          console.error(res);
          setError(res.message);
        } else {
          setData(res.result);
          // document.title = `ResepAI - Resep ${res.result?.title}`;
        }
        setLoading(false);
      });
    }
  }, [ingredientsSetted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (error) {
    return (
      <div className="w-full flex bg-gray-900 rounded-xl shadow-md p-4 gap-4 mt-10 justify-center items-center">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col bg-gray-900 rounded-xl shadow-md p-4 gap-4 mt-10">
      <div className="w-full flex p-2">
        <h2
          className={`w-full text-2xl font-bold text-center text-white underline ${
            loading && "animate-pulse h-8"
          }`}
        >
          {loading ? "Memuat Resep..." : `Resep ${data?.title}`}
        </h2>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3 flex flex-col">
          <h3 className="text-xl font-bold text-center text-white">Bahan</h3>
          <div
            className={`w-full flex flex-row ${
              !loading && `md:flex-col`
            } flex-wrap gap-2 p-2`}
          >
            {loading
              ? // random from 5-10
                Array(Math.floor(Math.random() * 5) + 5)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      className={`bg-indigo-800 hover:bg-indigo-600 duration-200 rounded-lg animate-pulse h-6 ${
                        ["w-1/2", "w-1/3", "w-1/4"][
                          Math.floor(Math.random() * 3)
                        ]
                      } ${
                        ["delay-50", "delay-100", "delay-150", "delay-200"][
                          index % 4
                        ]
                      }`}
                      key={index}
                    ></div>
                  ))
              : data?.bahan.map((bahan, index) => (
                  <Link
                    // link to google search
                    href={`https://www.google.com/search?q=${bahan.replaceAll(
                      " ",
                      "+"
                    )}`}
                    target="_blank"
                    className="text-sm font-semibold p-2 text-white bg-indigo-800 hover:bg-indigo-600 duration-200 rounded-lg"
                    key={index}
                  >
                    {bahan}
                  </Link>
                ))}
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col p-2 gap-2">
          <h3 className="text-xl font-bold text-center text-white">
            Step-by-step
          </h3>
          <div className="w-full flex flex-col gap-2">
            {loading
              ? Array(Math.floor(Math.random() * 5) + 5)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      className="animate-pulse h-10 bg-gray-800 hover:bg-gray-700 cursor-pointer duration-200 flex flex-row gap-2 items-center p-2 rounded-lg group"
                      key={index}
                    ></div>
                  ))
              : data?.steps.map((step, index) => (
                  <div
                    className="text-lg font-semibold text-white hover:text-gray-300 hover:bg-gray-800 cursor-pointer duration-200 flex flex-row gap-4 items-center p-2 rounded-lg group"
                    key={index}
                  >
                    <div className="flex items-center justify-center rounded-md bg-pink-600 p-4 group-hover:bg-pink-500 duration-200">
                      {index + 1}
                    </div>
                    <div>{step}</div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
