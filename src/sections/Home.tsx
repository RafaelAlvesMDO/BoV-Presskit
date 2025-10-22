import { forwardRef } from "react";
import BackgroundImage from "../assets/Home-Background.jpg";
import Logo from "../assets/BoV-Logo.png";

// forwardRef used to make possible App.tsx to reference the sections
// _props -> Used to tell that props is opcional
const Home = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref} // reference passed by App.tsx
      id="home" // section id (Optional but Optimal)
      className="h-screen w-full relative flex flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Blur Effect */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs"></div>

      {/* Home - Content */}
      <div className="relative flex flex-col items-center text-center pt-32 px-4">
        <img
          src={Logo}
          alt="Blade Of Valor Logo"
          className="h-86 w-86 object-contain mb-4"
        />
        <a
          href="https://github.com/RafaelAlvesMDO/BladeOfValor"
          target="_blank"
          className="w-full p-3 transition-colors duration-300 ease-in-out 
          text-white text-shadow-md text-xl bg-secondary-700 hover:bg-secondary-900 
          rounded-md shadow-md border-1 border-secondary-100"
        >
          PLAY NOW
        </a>
      </div>
    </section>
  );
});

export default Home;
