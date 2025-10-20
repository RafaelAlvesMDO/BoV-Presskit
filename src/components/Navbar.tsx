import React from "react";
import Icon from "../assets/BoV-Icon.png";

// Scroll to Sections - Functions
interface NavbarProps {
  scrollToHome: () => void;
  scrollToAbout: () => void;
  scrollToGallery: () => void;
  scrollToVideo: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToHome,
  scrollToAbout,
  scrollToGallery,
  scrollToVideo,
}) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-500 shadow-md z-50">
      <div className="max-w-10xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <img
            src={Icon}
            alt="Blade Of Valor Icon"
            className="h-12 w-12 object-contain"
          />
        </div>
        {/* OPTIONS */}
        <ul className="flex space-x-6">
          <li>
            <a
              onClick={scrollToHome}
              href="#home"
              className="transition-colors duration-300 
            ease-in-out text-white font-bold hover:text-secondary-500"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              onClick={scrollToAbout}
              href="#about"
              className="transition-colors duration-300 
            ease-in-out text-white font-bold hover:text-secondary-500"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              onClick={scrollToGallery}
              href="#gallery"
              className="transition-colors duration-300 
            ease-in-out text-white font-bold hover:text-secondary-500"
            >
              GALLERY
            </a>
          </li>
          <li>
            <a
              onClick={scrollToVideo}
              href="#video"
              className="transition-colors duration-300 
            ease-in-out text-white font-bold hover:text-secondary-500"
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
