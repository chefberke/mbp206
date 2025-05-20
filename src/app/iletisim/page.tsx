"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function ContactPage() {
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      content: "melihuslu@gmail.com",
      link: "mailto:melihuslu@gmail.com",
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Telefon",
      content: "+90 555 123 4567",
      link: "tel:+905551234567",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Konum",
      content: "İzmir, Türkiye",
      link: "https://maps.google.com",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">İletişim</h1>
          <p className="text-gray-300 text-lg">
            Projeleriniz için benimle iletişime geçebilirsiniz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-blue-400">{info.icon}</div>
                <div>
                  <h3 className="font-semibold">{info.title}</h3>
                  <p className="text-gray-300">{info.content}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Harita */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-[400px] rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124845.24255498464!2d27.0173784!3d38.4237347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e1a0e4e6c7%3A0x1b9a6e4c6c0c0c0c!2zxLB6bWly!5e0!3m2!1str!2str!4v1647881760"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
