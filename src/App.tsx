import { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Characters from "./sections/Characters";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import Video from "./sections/Video";
import Footer from "./components/Footer";

function App() {
  // Sections References
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const charactersRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLElement>(null);

  return (
    <div className="font-medieval">
      <Navbar
        scrollToHome={() =>
          homeRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToAbout={() =>
          aboutRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToCharacters={() =>
          charactersRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToGallery={() =>
          galleryRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToVideo={() =>
          videoRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Characters ref={charactersRef} />
      <Gallery ref={galleryRef} />
      <Video ref={videoRef} />
      <Footer />
    </div>
  );
}

export default App;
