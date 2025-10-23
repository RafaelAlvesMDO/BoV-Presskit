import { forwardRef } from "react";
import GameImage from "../assets/About-Image.png";

// forwardRef used to make possible App.tsx to reference the sections
// _props -> Used to tell that props is opcional
const About = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref} // reference passed by App.tsx
      id="about" // section id (Optional but Optimal)
      className="bg-neutral-900 text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      {/* About - Text Content */}
      <div className="md:w-1/2">
        {/* About - Text */}
        <h2 className="text-4xl font-bold mb-4">About the Game</h2>
        <div className="w-16 h-1 bg-secondary-700 mb-8"></div>
        <p className="text-lg mb-12">
          Blade of Valor is a 2d platformer side-scroller with roguelite
          mechanics. Face challenging enemies, overcome obstacles, and master
          strategic combat as you progress through the levels. With each
          restart, your character grows stronger, making every journey unique
          and rewarding, as you fight to restore peace to the kingdom of
          Eldoria.
        </p>
        {/* Synopsis - Text */}
        <h2 className="text-4xl font-bold mb-4">Synopsis</h2>
        <div className="w-16 h-1 bg-secondary-700 mb-8"></div>
        <p className="text-lg mb-8">
          “An ancient evil has awakened and threatens to destroy the kingdom of
          Eldoria. You are Gareth, the knight chosen by the king to face this
          threat, defeat the darkness, and restore peace to the realm… but the
          true danger may lie beyond what the eye can see.”
        </p>
        <a
          href="https://docs.google.com/document/d/1FWZO2pPQ2zxA4g151utDTkH8tKjKFPjf/edit?usp=sharing&ouid=102524195174147751813&rtpof=true&sd=true"
          target="_blank"
          className="w-full md:w-auto px-4 md:px-8 py-2 transition-colors duration-300 ease-in-out 
          text-white text-shadow-md text-lg bg-secondary-700 hover:bg-secondary-900 
          rounded-md shadow-md border-1 border-secondary-100"
        >
          Full Story
        </a>
      </div>

      {/* About - Game Image */}
      <div className="md:w-1/2">
        <img
          src={GameImage}
          alt="Blade of Valor"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
});

export default About;
