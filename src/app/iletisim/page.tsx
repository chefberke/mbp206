"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Status {
  type: "pending" | "success" | "error" | "";
  message: string;
}

function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "pending", message: "Mesajınız gönderiliyor..." });

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Bir hata oluştu");
      }

      setStatus({
        type: "success",
        message: "Mesajınız başarıyla gönderildi!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Bir hata oluştu. Lütfen tekrar deneyin.",
      });
    }
  };
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-neutral-100 mb-12 text-center">
          İletişim
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-300"
            >
              Ad Soyad
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-600 text-neutral-100"
              placeholder="Adınız ve soyadınız"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-300"
            >
              E-posta
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-600 text-neutral-100"
              placeholder="ornek@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-300"
            >
              Mesaj
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-600 text-neutral-100"
              placeholder="Mesajınızı buraya yazın..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-neutral-700 hover:bg-neutral-600 text-neutral-100 font-medium py-3 px-4 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status.type === "pending"}
          >
            {status.type === "pending" ? "Gönderiliyor..." : "Gönder"}
          </button>

          {status.message && (
            <div
              className={`mt-4 p-4 rounded-lg ${
                status.type === "success"
                  ? "bg-green-500/10 text-green-500"
                  : status.type === "error"
                  ? "bg-red-500/10 text-red-500"
                  : "bg-blue-500/10 text-blue-500"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
