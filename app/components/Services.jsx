import { serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

export const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Ce que j'ai à offrir
      </motion.h4>
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className=" text-center text-5xl font-Ovo"
      >
        Mes services
      </motion.h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Des connaissances allant du design à l'intégration web, mes 7 années de
        travail au sein d'une startup puis d'un grand groupe mon permis
        d'acquérir des compétences variés.
      </p>

      <ul className="grid grid-cols-services gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <li
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt="Picto du service decrit" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            {/* <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
