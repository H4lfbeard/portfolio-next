import { Outfit,  Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Thomas Humbert",
  description: "Made with <3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.className} ${ovo.className} antialiased scroll-smooth`}>
      <body
        className="font-Outfit leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white"
      >
        {children}
      </body>
    </html>
  );
}
