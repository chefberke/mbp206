import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melih Uslu",
  description: "Melih Uslu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${poppins.className} bg-neutral-950 text-neutral-300 flex items-center justify-center w-full min-h-screen p-2 md:p-4`}
      >
        <main className="flex-col items-center justify-center w-full h-full max-w-2xl mx-auto py-16 md:py-20">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
