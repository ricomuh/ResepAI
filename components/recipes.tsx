import Link from "next/link";
import type { Result } from "@/app/generate/page";

export default function Recipes({
  data,
  loading,
}: {
  data?: Result;
  loading?: boolean;
}) {
  return (
    <div className="w-full flex flex-col bg-gray-900 rounded-xl shadow-md p-4 gap-4 mt-10">
      <div className="w-full flex p-2">
        <h2
          className={`w-full text-2xl font-bold text-center text-white ${
            loading && "animate-pulse h-8"
          }`}
        >
          {loading ? "Memuat Resep..." : `Resep ${data?.title}`}
        </h2>
      </div>
      <div className="w-full flex flex-row gap-4">
        <div className="w-1/3 flex flex-col">
          <h3 className="text-xl font-bold text-center text-white">Bahan</h3>
          <div className="w-full flex flex-col gap-2 p-2">
            {loading
              ? Array(Math.floor(Math.random() * 8) + 1)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      className="bg-indigo-800 hover:bg-indigo-600 duration-200 rounded-lg animate-pulse h-6"
                      key={index}
                    />
                  ))
              : data?.bahan.map((bahan, index) => (
                  <Link
                    // link to google search
                    href={`https://www.google.com/search?q=${bahan.replaceAll(
                      " ",
                      "+"
                    )}`}
                    target="_blank"
                    className="text-lg font-bold p-2 text-white bg-indigo-800 hover:bg-indigo-600 duration-200 rounded-lg"
                    key={index}
                  >
                    {bahan}
                  </Link>
                ))}
          </div>
        </div>
        <div className="w-2/3 flex flex-col p-2 gap-2">
          <h3 className="text-xl font-bold text-center text-white">
            Step-by-step
          </h3>
          <div className="w-full flex flex-col gap-2">
            {loading
              ? Array(Math.floor(Math.random() * 8) + 1)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      className="text-lg font-semibold text-center text-white hover:text-gray-300 hover:bg-gray-600 cursor-pointer duration-200 animate-pulse h-6"
                      key={index}
                    />
                  ))
              : data?.steps.map((step, index) => (
                  <div
                    className="text-lg font-semibold text-white hover:text-gray-300 hover:bg-gray-800 cursor-pointer duration-200 flex flex-row gap-2 items-center p-2 rounded-lg group"
                    key={index}
                  >
                    <div className="flex items-center justify-center rounded-md bg-indigo-700 p-4 group-hover:bg-indigo-800 duration-200">
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