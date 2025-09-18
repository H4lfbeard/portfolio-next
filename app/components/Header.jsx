import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hey ! je m'appel Thomas HUMBERT
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:test-6xl lg:text-[66px] font-Ovo">
        Designer et intégrateur web basé à Bordeaux
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo ">
        Je suis designer et intégrateur web originaire d'Annecy et maintenant
        basé à Bordeaux avec plus de 7 années d'expériences. J'ai récemment
        suivi un bootcamp sur JS et ReactJS de 6 mois dans le but d'améliorer
        mes connaissances en web.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-gray-500 bg-black text-white flex items-center gap-2"
        >
          Me contacter
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Télécharger mon CV
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
