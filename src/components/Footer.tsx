import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="sticky bottom-0 w-full py-4 md:py-6 bg-neutral-950">
      <nav className="flex items-center justify-center px-4 md:px-0">
        <ul className="flex items-center space-x-4 md:space-x-6">
          <li>
            <Link
              href="https://github.com/uslumelih"
              className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300"
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/melih-uslu-b51526314/"
              className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          </li>
          <li>
            <Link
              href="https://x.com/melihuslu518"
              className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
