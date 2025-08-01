"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://i.pinimg.com/736x/dc/46/8b/dc468be47bc0cf1324c092f776383709.jpg",
  },
  {
    id: 2,
    url: "https://i.pinimg.com/1200x/06/91/74/069174362999b9be50b6e17da6ec0299.jpg",
  },
  {
    id: 3,
    url: "https://i.pinimg.com/736x/5a/7c/72/5a7c72fefd4861c393ba484fe3efdad6.jpg",
  },
  {
    id: 4,
    url: "https://i.pinimg.com/1200x/a1/98/e4/a198e43312385bcfa9899094177a6fec.jpg",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className=" flex justify-between gap-4 mt-8 cursor-pointer">
        {images.map((image, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8"
            key={image.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={image.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
