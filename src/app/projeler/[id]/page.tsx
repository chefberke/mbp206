import React from "react";
import Link from "next/link";
import Image from "next/image";

import japan from "@/assets/japonishi.jpeg";
import redkeys from "@/assets/redkeys.jpg";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProjeDetay({ params }: PageProps) {
  const resolvedParams = await params;

  const projeler = [
    {
      id: 1,
      name: "Japonishi",
      description: "Japon marka araba galerisi",
      image: japan,
      link: "https://github.com",
      techs: ["HTML", "CSS", "PHP"],
      detay:
        "Japonishi, Japon otomobil markalarına odaklanan modern bir galeri sitesidir. HTML, CSS ve PHP kullanılarak geliştirilen bu projede, kullanıcılar şık bir arayüz üzerinden farklı marka ve modelleri inceleyebilir. Responsive tasarımı sayesinde tüm cihazlarda sorunsuz görüntülenir. Proje, statik sayfa yapısı üzerine dinamik içerikler eklenerek geliştirilmiş ve kullanıcı deneyimi ön planda tutulmuştur. Amacı, Japon arabalarına ilgi duyanlara sade ve etkili bir şekilde bilgi sunmaktır.",
    },
    {
      id: 2,
      name: "Redkeys",
      description: "Müzik şirketi web sitesi",
      image: redkeys,
      link: "https://github.com",
      techs: ["HTML", "CSS", "JS"],
      detay:
        "Redkeys, modern bir müzik şirketi için tasarlanmış şık ve kullanıcı dostu bir web sitesidir. HTML, CSS ve JavaScript kullanılarak geliştirilen bu projede, ziyaretçiler sanatçıları tanıyabilir, müziklerini dinleyebilir ve etkinlikleri takip edebilir. Site, dinamik animasyonlar ve etkileşimli öğelerle zenginleştirilmiştir. Kullanıcı deneyimini artırmak için mobil uyumlu bir tasarım tercih edilmiştir. Redkeys, dijital dünyada bir müzik markasının kimliğini güçlü bir şekilde yansıtmayı hedeflemektedir.",
    },
  ];

  const proje = projeler.find((p) => p.id === parseInt(resolvedParams.id));

  if (!proje) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-neutral-100">
          Proje bulunamadı
        </h1>
      </div>
    );
  }

  return (
    <article className="min-h-screen py-12 px-4 md:px-0">
      <Link
        href="/projeler"
        className="inline-flex items-center space-x-2 bg-neutral-700 hover:bg-neutral-600 text-neutral-100 px-4 py-2 rounded-lg transition-colors duration-300 mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span>Geri</span>
      </Link>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-100 mb-4">
          {proje.name}
        </h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {proje.techs.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-neutral-700/50 rounded-full text-sm text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      <section className="mb-8">
        <div className="w-full h-64 md:h-96 bg-neutral-700 rounded-xl overflow-hidden mb-6">
          {proje.image && (
            <Image
              src={
                typeof proje.image === "string" ? proje.image : proje.image.src
              }
              alt={proje.name}
              className="w-full h-full object-cover"
              width={1200}
              height={800}
            />
          )}
        </div>
      </section>

      <section className="space-y-6">
        <div className="prose prose-invert max-w-none">
          <p className="text-neutral-300 leading-relaxed">{proje.detay}</p>
        </div>

        <div className="flex justify-start pt-4">
          <a
            href={proje.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-neutral-700 hover:bg-neutral-600 text-neutral-100 px-4 py-2 rounded-lg transition-colors duration-300"
          >
            <span>Github&apos;da İncele</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </section>
    </article>
  );
}
