'use client'
import { useState, useEffect } from "react";
import { ThemeButton } from "../theme-button";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };


    // Agregar listeners para scroll y resize
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Eliminar listeners al desmontar el componente
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`dark:bg-[#08080B] flex h-[56px] justify-between items-center fixed top-0 w-full z-50 bg-opacity-10 backdrop-blur-[2px] ${
        scrolled
          ? "border-b-[0.2px] border-gray-100 border-opacity-[6%]"
          : "border-b-[0.2px] border-gray-100 border-opacity-0"
      }`}
    >
      <Link href={"/"}>
        <div className={`ml-4 flex items-center desktop:ml-[200px]`}>
          <img src="/icon.png" className="w-12 h-12" alt="Logo" />
          <h1 className="ml-2 hover:underline">danilppzz</h1>
        </div>
      </Link>
      <nav className={`flex items-center pr-4 space-x-4 desktop:pr-[200px] md:justify-end`}>
        <Link className="cursor-pointer hover:underline" href={'#about'}>about</Link>
        <Link className="cursor-pointer hover:underline" href={'/docs'}>docs</Link>
        <Separator orientation="vertical" />
        <ThemeButton />
        <Separator orientation="vertical" />
        <Link href={"https://github.com/danilppzz"} target="_blank">
          <Button>GitHub</Button>
        </Link>
      </nav>
    </header>
  );
}
