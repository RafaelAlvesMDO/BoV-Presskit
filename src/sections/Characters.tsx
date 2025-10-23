import { useState, forwardRef } from "react";
import { motion } from "framer-motion";

import { FaHandPointer } from "react-icons/fa";

import GarethPortrait from "../assets/CharactersPortraits/Gareth-Portrait.jpg";
import MyrelaPortrait from "../assets/CharactersPortraits/Myrela-Portrait.jpg";
import AbyssalKnightPortrait from "../assets/CharactersPortraits/AbyssalKnight-Portrait.jpg";
import SirCedricPortrait from "../assets/CharactersPortraits/SirCedric-Portrait.jpg";
import KingAldrenIIPortrait from "../assets/CharactersPortraits/KingAldrenII-Portrait.jpg";
import MalrikPortrait from "../assets/CharactersPortraits/Malrik-Portrait.jpg";

import GarethBackground from "../assets/Backgrounds/Home-Background.jpg";
import MyrelaBackground from "../assets/Backgrounds/MagicTower-Background.jpg";
import AbyssalKnightBackground from "../assets/Backgrounds/BlackVeilFortress-Background.png";
import SirCedricBackground from "../assets/Backgrounds/SirCedric-Background.png";
import KingAldrenIIBackground from "../assets/Backgrounds/KingAldrenII-Background.png";
import MalrikBackground from "../assets/Backgrounds/Malrik-Background.png";

// Tipagem do card
type CharacterCardProps = {
  name: string;
  title: string;
  image: string;
  background: string;
  intro: string;
  details: string;
};

// Componente do Card individual
function CharacterCard({
  name,
  title,
  image,
  background,
  intro,
  details,
}: CharacterCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className={`relative w-96 h-[30rem] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
        flipped ? "scale-105 shadow-2xl" : "shadow-lg"
      }`}
      onClick={() => setFlipped(!flipped)}
      whileHover={{ scale: flipped ? 1.05 : 1.03 }}
    >
      {/* Parte superior com fundo e personagem */}
      <div className="relative h-1/2 w-full">
        {/* Fundo com blur leve e overlay */}
        <img
          src={background}
          alt={`${name} background`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Imagem do personagem */}
        <div className="relative flex items-center justify-center h-full">
          <img
            src={image}
            alt={name}
            className="h-32 w-32 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Parte inferior com texto */}
      <motion.div
        key={flipped ? "details" : "intro"}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="h-1/2 bg-neutral-900 text-white flex flex-col justify-center items-center px-4 text-center"
      >
        <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
        <h4 className="text-xl font-bold mb-2 text-white">{title}</h4>
        <p className="text-lg text-neutral-200 mb-4">
          {flipped ? details : intro}
        </p>
        <p className="flex items-center gap-2 text-sm text-secondary-500">
          <FaHandPointer className="inline text-lg" /> Click to See More
        </p>
      </motion.div>
    </motion.div>
  );
}

// forwardRef para permitir referência no App.tsx
const Characters = forwardRef<HTMLElement>((_props, ref) => {
  const characters = [
    {
      name: "Gareth",
      title: "The Knight",
      image: GarethPortrait,
      background: GarethBackground,
      intro:
        "Once a loyal knight serving the crown, now burdened by a destiny greater than himself.",
      details:
        "Once a promising knight under King Aldren II, Gareth — son of Sir Cedric, the Hero of Eldoria — now fights to stop the return of the Black Veil.",
    },
    {
      name: "Myrela",
      title: "The Wizardess",
      image: MyrelaPortrait,
      background: MyrelaBackground,
      intro:
        "A prodigious sorceress whose wisdom shines brighter than her spells.",
      details:
        "The most gifted mage of Eldoria since the ancient wizard Malrik, now guiding Gareth through his perilous journey.",
    },
    {
      name: "???",
      title: "Abyssal Knight",
      image: AbyssalKnightPortrait,
      background: AbyssalKnightBackground,
      intro: "A fallen hero consumed by the shadows he once swore to destroy.",
      details:
        "A cursed knight, shrouded in eternal darkness. Once a protector of Eldoria, he is now the warden of the very curse he vowed to contain.",
    },
    {
      name: "Sir Cedric",
      title: "The Kingdom Hero",
      image: SirCedricPortrait,
      background: SirCedricBackground,
      intro: "The valiant hero whose legacy still echoes through the ages.",
      details:
        "The former Hero of Eldoria who fought bravely, sacrificing himself to protect the realm from the Dark Veil.",
    },
    {
      name: "Aldren II",
      title: "The King",
      image: KingAldrenIIPortrait,
      background: KingAldrenIIBackground,
      intro:
        "A wise ruler burdened by his father’s legacy and the shadow of a returning darkness.",
      details:
        "Son of King Aldren I, now ruling Eldoria after his father’s passing. His reign stands at the edge of peace and the looming threat of the Dark Veil’s return.",
    },
    {
      name: "Malrik",
      title: "The Rebel Wizard",
      image: MalrikPortrait,
      background: MalrikBackground,
      intro: "Once the kingdom’s greatest mind, now its greatest curse.",
      details:
        "The former Archmage and royal advisor to King Aldren I. Blinded by his lust for power, he turned against the crown and created the Dark Veil.",
    },
  ];

  return (
    <section
      ref={ref} // referência passada pelo App.tsx
      id="characters"
      className="bg-neutral-800 py-20 px-6 md:px-20 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-white">Characters</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {characters.map((c) => (
          <CharacterCard key={c.name} {...c} />
        ))}
      </div>
    </section>
  );
});

export default Characters;
