import Link from "next/link";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: "600",
});

export default function Logo() {
  return (
    <Link href="/">
      <h1
        className={`text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-y to-indigo-600 pb-2 drop-shadow-lg duration-200 ${notoSans.className}`}
      >
        ResepAI
      </h1>
    </Link>
  );
}
