import Link from "next/link";

export default function Header() {
  const links: { name: string; href: string }[] = [
    { name: "Github", href: "https://github.com/ricomuh/ResepAI" },
    {
      name: "Docs",
      href: "https://github.com/ricomuh/ResepAI/blob/main/README.md",
    },
  ];

  return (
    <header className="flex w-full justify-end items-center py-2 px-4 font-semibold">
      <div className="flex items-center divide-x-2 divide-gray-700">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="px-2 text-white hover:text-indigo-400 duration-200"
            target="_blank"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
