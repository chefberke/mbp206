"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full max-w-2xl py-4 md:py-6 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-black/80 backdrop-blur-sm"
      } z-50`}
    >
      <nav className="flex items-center justify-center px-4 md:px-0">
        <ul className="flex flex-row items-center space-x-6 md:space-x-12 text-sm font-light tracking-wider">
          <li>
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              ANA SAYFA
            </Link>
          </li>
          <li>
            <Link
              href="/projeler"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              PROJELER
            </Link>
          </li>
          <li>
            <Link
              href="/galeri"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              GALERİ
            </Link>
          </li>
          <li>
            <Link
              href="/iletisim"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              İLETİŞİM
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
