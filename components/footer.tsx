import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full justify-center items-center py-4 px-4 text-white font-semibold text-sm">
      <p className="text-center">
        Made with ❤️ by{" "}
        <Link
          href="https://github.com/ricomuh"
          target="_blank"
          className="text-indigo-400 hover:text-indigo-300 duration-200"
        >
          Rico
        </Link>
      </p>
    </footer>
  );
}
