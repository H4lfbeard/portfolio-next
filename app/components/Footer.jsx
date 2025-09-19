import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

export const Footer = () => {
  return (
    <div className="mt-20">
      <section className="text-center">
        <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="icon email" className="w-6" />
          humbert.thomas.pro@gmail.com
        </div>
      </section>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Thomas Humbert. Tous droits réservés.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://www.github.com/H4lfbeard">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/thomas-humbert-760b37111/"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.behance.net/humbertthoa68c">
              Behance
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
