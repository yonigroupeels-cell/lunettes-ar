"use client";

import { useState } from "react";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <img
        src={selectedImage}
        alt={name}
        className="w-full rounded-3xl shadow-lg bg-white"
      />

      <div className="grid grid-cols-4 gap-3 mt-4">
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt={name}
            onClick={() => setSelectedImage(image)}
            className="
w-full
h-24
object-cover
rounded-xl
border
bg-white
cursor-pointer
hover:border-black
transition
"
          />
        ))}
      </div>
    </div>
  );
}