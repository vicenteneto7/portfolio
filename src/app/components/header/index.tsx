"use client";
import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";

const Nav_items = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "SOBRE",
    href: "/about",
  },
  {
    label: "PROJETOS",
    href: "/projects",
  },
];

export const Header = () => {
  return (
    <header className="w-full h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={45}
            height={0}
            alt="logo"
            className="cursor-pointer outline-none"
            unoptimized
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          {Nav_items.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
};
