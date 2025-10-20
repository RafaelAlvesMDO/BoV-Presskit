import { forwardRef } from "react";

// forwardRef used to make possible App.tsx to reference the sections
// _props -> Used to tell that props is opcional
const Video = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref} // reference passed by App.tsx
      id="video" // section id (Optional but Optimal)
      className="flex flex-col items-center justify-center text-center py-20 px-6 bg-neutral-900 text-white"
    >
      <h2 className="text-4xl font-bold mb-4 text-white">
        Game Development Teaser
      </h2>

      <p className="max-w-2xl text-gray-300 mb-10 text-lg">
        Check out an excerpt below showing the progress of{" "}
        <span className="font-bold italic text-secondary-500">
          Blade of Valor
        </span>
        's development. This preview highlights some of the mechanics, phases,
        and systems that are being implemented throughout production.
      </p>

      {/* Teaser Tab */}
      <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-800">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/SEU_VIDEO_AQUI" // Need to be Replaced
          title="Progresso de desenvolvimento - Blade of Valor"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
});

export default Video;
