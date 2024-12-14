// This page is responsible for showing details of a specific animal based on the id parameter
 //in  the URL.

// 1.The params prop is used to retrieve the id from the URL.

// 2.The animalInfo array is searched to find the animal that matches the id.

// 3.The Image component is used to display the animal's image, and the animal's name is shown
//  below it.

// Detail Page: The [id]/page.tsx file retrieves the animal's ID from the URL, finds the 
// corresponding animal in the animalInfo array, and displays its details (name and image).




"use client";

import NextImage from "next/image";
import React, { useState, useEffect } from "react";
import { animalInfo } from "@/constant/allAnimal"; // Import your animalInfo array

interface Params {
  params: {
    id: string;
  };
}

const SingleAnimal: React.FC<Params> = ({ params }) => {
  const { id } = params;
  const animal = animalInfo.find((item) => item.id === parseInt(id, 10));

  const [selectedImage, setSelectedImage] = useState<string>(animal?.image || "");

  useEffect(() => {
    const addZoom = (target: string) => {
      const container = document.getElementById(target);
      if (!container) return;

      const imgsrc = window.getComputedStyle(container).backgroundImage.slice(4, -1).replace(/"/g, "");

      const img = new window.Image();
      img.src = imgsrc;

      img.onload = () => {
        const ratio = img.naturalHeight / img.naturalWidth;

        container.onmousemove = (e) => {
          const rect = container.getBoundingClientRect();
          const xPos = e.clientX - rect.left;
          const yPos = e.clientY - rect.top;
          const xPercent = (xPos / (container.clientWidth / 100)) + "%";
          const yPercent = (yPos / ((container.clientWidth * ratio) / 100)) + "%";

          Object.assign(container.style, {
            backgroundPosition: `${xPercent} ${yPercent}`,
            backgroundSize: `${img.naturalWidth * 2}px`,
            transition: "background-position 0.3s ease, background-size 0.3s ease",
          });
        };

        container.onmouseleave = () => {
          Object.assign(container.style, {
            backgroundPosition: "center",
            backgroundSize: "cover",
            transition: "background-position 0.3s ease, background-size 0.3s ease",
          });
        };
      };
    };

    addZoom("zoomC");
  }, [selectedImage]);

  if (!animal) {
    return <div>Animal not found</div>;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div
          id="zoomC"
          className="w-[300px] h-[300px] bg-center bg-cover cursor-pointer"
          style={{ backgroundImage: `url(${selectedImage})` }}
          aria-label="Main Image"
        ></div>
      </div>

      <div className="flex justify-center items-center gap-4 p-8">
        {animal.details.images.map((img, index) => (
          <div key={index}>
            <NextImage
              src={img}
              alt={animal.name}
              width={200}
              height={200}
              className="cursor-pointer"
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <h1>{animal.name}</h1>
        <p>{animal.details.habitat}</p>
      </div>
    </>
  );
};

export default SingleAnimal;

