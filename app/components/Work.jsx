import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export const Work = ({ isDarkMode }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Mon portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className=" text-center text-5xl font-Ovo"
      >
        Mes derniers projets
      </motion.h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Bienvenue sur mon portfolio de designer et intégrateur web. Ici vous
        pouvez visiter une collections de mes derniers projets mettant en avant
        mon expertise en design et intégration web.
      </p>

      <ul className="grid grid-cols-services gap-5 my-10 dark:text-black">
        {workData.map((project, index) => (
          <li
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square bg-no-repeat bg-center bg-cover border relative group border-gray-400 rounded-lg px-8 py-12  hover:shadow-black hover:-translate-y-1 duration-500"
          >
            <a
              href={project.link}
              target="_blank"
              className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 cursor-pointer"
            >
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-amber-400 transition">
                <Image
                  src={assets.send_icon}
                  alt="Picto envoyer"
                  className="w-5"
                />
              </div>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="https://www.behance.net/humbertthoa68c#"
        target="_blank"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover/30 duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Voir plus{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="flèche droite"
          className="w-4"
        />
      </a>
    </div>
  );
};
