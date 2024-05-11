import { useEffect, useState } from "react";

import Quotes from "./quotes";
import peofull from "../assets/peofull.png";
import peoangy from "../assets/peoangy.png";
import peolove from "../assets/peolove.png";

export default function Page() {
  const images = [peofull, peoangy, peolove];
  const [image, setImage] = useState(0);

  function changeImage() {
    setImage((prevIndex) => prevIndex + 1);
    if (image === 2) {
      setImage(0);
    }
  }
  return (
    <>
      <div className="flex flex-col mt-20 text-center mx-auto">
        <p className="text-yellow-500 text-4xl font-permanent">
          Happy Birthday
        </p>
        <p className="text-white text-5xl mt-5 font-geometry">
          Yukinoshita Peo
        </p>
        <Quotes />
      </div>
      <div className="absolute bottom-5 right-0 z-1 items-center hidden lg:flex flex-col">
        <img src={images[image]} alt="" className="h-[30vh] " />
        <div className="flex mx-auto">
          <button
            onClick={changeImage}
            class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md mx-auto"
          >
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span class="relative text-white">change</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
