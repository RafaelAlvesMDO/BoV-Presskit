import Logo from "../assets/BoV-Logo.png";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export type FooterProps = {
  logoSrc?: string;
  gameName?: string;
  copyrightYear?: number;
};

export default function Footer({
  logoSrc = Logo,
  gameName = "Blade of Valor",
  copyrightYear = new Date().getFullYear(),
}: FooterProps) {
  return (
    <footer className="w-full bg-neutral-500 text-white">
      <div className="mx-6 p-4 flex flex-row items-center justify-between gap-8">
        {/* Game Logo */}
        <img
          src={logoSrc}
          alt={`${gameName} logo`}
          className="w-32 h-32 object-contain"
        />

        {/* Links and Platforms */}
        <div className="flex gap-12">
          <div>
            <h4 className="text-sm font-semibold">Links</h4>
            <ul className="mt-2 text-sm">
              <li>
                <a
                  href="https://docs.google.com/document/d/1ovNfVfL7xAh6Iv9Xi4G_VdakdgUsrUHlQjNZ_pSS_OE/edit?usp=sharing"
                  className="transition-colors duration-300 ease-in-out text-white 
                hover:text-secondary-500"
                  target="_blank"
                >
                  Game Design Document (GDD)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Platform</h4>
            <ul className="mt-2 text-sm">
              <li>PC (Steam)</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="mx-6 p-4 border-t border-neutral-900 pt-6 flex flex-row 
      items-center justify-between gap-4 text-sm"
      >
        <div>
          © {copyrightYear} {gameName}. For educational purposes only.
        </div>

        <div className="flex items-center gap-4 text-xl">
          <a
            href="https://www.instagram.com/rafaalves_oficial/"
            target="_blank"
            aria-label="Instagram"
            className="transition-colors duration-300 ease-in-out 
          text-white hover:text-secondary-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/rafaelalvesmdo/"
            target="_blank"
            aria-label="LinkedIn"
            className="transition-colors duration-300 ease-in-out 
          text-white hover:text-secondary-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/RafaelAlvesMDO"
            target="_blank"
            aria-label="GitHub"
            className="transition-colors duration-300 ease-in-out 
          text-white hover:text-secondary-500"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
