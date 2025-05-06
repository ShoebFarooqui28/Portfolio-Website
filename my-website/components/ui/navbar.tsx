"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label : "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const getLinkClasses = (href: string) =>
    `block px-4 py-2 rounded-full transition ${
      pathname === href
        ? "bg-white text-black"
        : "text-foreground hover:text-primary"
    }`;

  return (
    <div className="relative">
      <div className="flex justify-between items-center py-6 px-8 m-8 bg-black/50 backdrop-blur-3xl rounded-full shadow-md">
        <div className="text-2xl font-bold text-foreground hover:text-primary cursor-pointer transition-all duration-200 ease-in-out">
          <Link href="/">Shoeb Farooqui</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4 text-lg">
        {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={getLinkClasses(link.href)}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <Button onClick={() => setIsOpen(!isOpen)} className="rounded-full">
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
  className={`md:hidden absolute top-full left-1/2 -translate-x-1/2 w-[80%] backdrop-blur-sm rounded-2xl z-40 transition-all duration-500 ease-in-out transform ${
    isOpen
      ? "translate-y-8 opacity-100 visible"
      : "-translate-y-0 opacity-0 invisible"
  }`}
>
  <div className="bg-black/50 rounded-2xl p-6 space-y-4 shadow-xl text-center">
    {links.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        className={getLinkClasses(link.href)}
        onClick={() => setIsOpen(false)}
      >
        {link.label}
      </Link>
    ))}
  </div>
</div>

    </div>
  );
};

export default Navbar;
