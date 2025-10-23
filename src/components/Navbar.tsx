import React, { useState, useEffect } from "react";
import Icon from "../assets/BoV-Icon.png";

// Scroll to Sections - Functions
interface NavbarProps {
  scrollToHome: () => void;
  scrollToAbout: () => void;
  scrollToCharacters: () => void;
  scrollToGallery: () => void;
  scrollToVideo: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToHome,
  scrollToAbout,
  scrollToCharacters,
  scrollToGallery,
  scrollToVideo,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`font-medieval fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out 
      ${
        isScrolled
          ? "bg-neutral-800 border-b-2 border-secondary-700 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-10xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* LOGO — só aparece ao rolar */}
        <div
          className={`flex items-center space-x-2 transition-all duration-700 ease-in-out 
          ${
            isScrolled
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3"
          }`}
        >
          <img
            src={Icon}
            alt="Blade Of Valor Icon"
            className="h-12 w-12 object-contain"
          />
        </div>

        {/* LINKS — sempre visíveis */}
        <ul className="flex space-x-6">
          <li>
            <a
              onClick={scrollToHome}
              href="#home"
              className="transition-colors duration-300 ease-in-out text-white font-bold hover:text-secondary-500"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              onClick={scrollToAbout}
              href="#about"
              className="transition-colors duration-300 ease-in-out text-white font-bold hover:text-secondary-500"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              onClick={scrollToCharacters}
              href="#characters"
              className="transition-colors duration-300 ease-in-out text-white font-bold hover:text-secondary-500"
            >
              CHARACTERS
            </a>
          </li>
          <li>
            <a
              onClick={scrollToGallery}
              href="#gallery"
              className="transition-colors duration-300 ease-in-out text-white font-bold hover:text-secondary-500"
            >
              GALLERY
            </a>
          </li>
          <li>
            <a
              onClick={scrollToVideo}
              href="#video"
              className="transition-colors duration-300 ease-in-out text-white font-bold hover:text-secondary-500"
            >
              TEASER
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
