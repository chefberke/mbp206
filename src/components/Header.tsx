import Image from "next/image";
import React from "react";
import HeaderImage from "@/assets/melih.jpg";
import About from "@/components/About";
function Header() {
  return (
    <section className="w-full flex items-center justify-center pt-16 md:pt-24 px-4 md:px-0">
      <article className="flex flex-col items-center justify-center max-w-2xl">
        <figure className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <Image
            src={HeaderImage}
            width={160}
            height={160}
            className="rounded-full shadow-2xl relative md:w-[200px] md:h-[200px]"
            alt="Profil fotoğrafı"
          />
        </figure>
        <header className="pt-8 md:pt-12">
          <h1 className="text-neutral-50 font-medium text-4xl md:text-5xl tracking-wider">
            Merhaba, Ben Melih!
          </h1>
        </header>
        <section className="mt-2 md:mt-4 text-center">
          <About />
        </section>
      </article>
    </section>
  );
}

export default Header;
