import { assets } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            alt="Logo Thomas Humbert"
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${
            isScroll
              ? ""
              : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a
              href="#top"
              className="font-Ovo hover:text-black/70 dark:hover:text-white/80 duration-300"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-Ovo hover:text-black/70 dark:hover:text-white/80 duration-300"
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="font-Ovo hover:text-black/70 dark:hover:text-white/80 duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="font-Ovo hover:text-black/70 dark:hover:text-white/80 duration-300"
            >
              Mon travail
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-Ovo hover:text-black/70 dark:hover:text-white/80 duration-300"
            >
              Me contacter
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            className="cursor-pointer "
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 hover:bg-lightHover duration-500 dark:border-white/50 dark:hover:bg-darkHover"
          >
            Contact{" "}
            <Image
              alt=""
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
            />
          </a>
          <button className="block md:hidden ml-3">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
              onClick={openMenu}
            />
          </button>
        </div>

        {/* MOBILE MENU */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50
        h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="bouton fermer le meny"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" className="font-Ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo" onClick={closeMenu}>
              My work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
