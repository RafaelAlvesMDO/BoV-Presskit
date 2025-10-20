import { forwardRef } from "react";

// forwardRef used to make possible App.tsx to reference the sections
// _props -> Used to tell that props is opcional
const Gallery = forwardRef<HTMLElement>((_props, ref) => {
  // Import All GameImages
  const images: string[] = Object.values(
    import.meta.glob("../assets/GameImages/*.jpg", {
      eager: true,
      import: "default",
    })
  );

  return (
    <section
      ref={ref} // reference passed by App.tsx
      id="gallery" // section id (Optional but Optimal)
      className="bg-neutral-700 py-20 px-6 md:px-20 text-white"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Game Gallery</h2>
      {/* Gallery - Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={img}
              alt={`Screenshot ${index + 1}`}
              className="w-full h-72 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
});

export default Gallery;
