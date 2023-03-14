import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-600 pb-2 drop-shadow-lg duration-200">
        ResepAI
      </h1>
    </Link>
  );
}
