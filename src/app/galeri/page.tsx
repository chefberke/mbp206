import React from "react";
import resim1 from "@/assets/resim2.jpeg";
import resim2 from "@/assets/resim3.jpeg";

export default function Galeri() {
  const images = [
    {
      id: 1,
      src: resim1.src,
      alt: "Sahil fotoğrafı",
      description: "",
    },
    {
      id: 2,
      src: resim2.src,
      alt: "Askeri araç fotoğrafı",
      description: "",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50" />
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-bold text-center mb-20 text-white tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Fotoğraf Galerisi
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`group relative ${
                  index % 2 === 0 ? "md:translate-y-12" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[600px]">
                  <div className="w-full h-full relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute inset-0 border border-white/10 rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                </div>

                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white/80 text-lg font-medium bg-black/50 px-6 py-2 rounded-full backdrop-blur-sm">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
