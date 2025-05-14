"use client";

import React from "react";

function ContactPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-neutral-100 mb-8 text-center">
          İletişim
        </h1>

        <div className="space-y-6 text-neutral-300">
          <p className="text-lg leading-relaxed">Eğer siz de:</p>

          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Yeni bir web projesi geliştirmek</li>
            <li>Mevcut projenizi modernize etmek</li>
            <li>Özel bir web uygulaması oluşturmak</li>
            <li>Ya da herhangi bir web geliştirme ihtiyacınız varsa</li>
          </ul>

          <p className="text-lg leading-relaxed">
            Benimle iletişime geçmekten çekinmeyin. Projeniz için en uygun
            çözümü birlikte geliştirebiliriz.
          </p>

          <div className="pt-6">
            <a
              href="mailto:your.email@example.com"
              className="inline-block bg-neutral-700 hover:bg-neutral-600 text-neutral-100 font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Proje üretmek isterseniz benimle iletişime geçebilirsiniz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
