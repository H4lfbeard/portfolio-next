import { assets } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours...");
    const formData = new FormData(event.target);

    formData.append("access_key", "984a8dff-e638-4bff-8e98-70b5c4924b05");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message envoyé avec succès");
      event.target.reset();
    } else {
      console.log("Une erreur est survenue,veuillez reéssayer plus tard", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 ">
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Vous êtes au bon endroit pour
      </motion.h4>
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className=" text-center text-5xl font-Ovo"
      >
        Me contacter
      </motion.h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        N'hésitez pas à me contacter, si vous avez une question, un commentaire
        ou un retour, merci d'utiliser le formulaire !
      </p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-services gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white/50 dark:bg-darkHover dark:border-white/90"
            type="text"
            placeholder="Entrez votre nom"
            required
            name="name"
          ></motion.input>
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white/50 dark:bg-darkHover dark:border-white/90"
            type="text"
            placeholder="Entrez votre email"
            required
            name="email"
          ></motion.input>
        </div>
        <motion.textarea
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white/50 mb-6 dark:bg-darkHover dark:border-white/90"
          rows="6"
          placeholder="Entrez votre message"
          required
          name="message"
        ></motion.textarea>
        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 cursor-pointer text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          type="submit"
        >
          Envoyer
          <Image
            alt="right arrow"
            src={assets.right_arrow_white}
            className="w-4"
          />
        </button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </div>
  );
};
