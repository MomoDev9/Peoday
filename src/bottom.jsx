import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import popokao from "./assets/popokao.png";
import poponaka from "./assets/poponaka.png";
import poposhiri from "./assets/poposhiri.png";
import peonyan from "./assets/PeonyanCat.gif";
import peorun from "./assets/peorun.gif";
import peobabu from "./assets/peobabu.gif";
import popostick from "./assets/popostick.gif";

export default function Bottom() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scaleDirection, setScaleDirection] = useState(1);
  const [images, setImages] = useState([
    peonyan,
    peobabu,
    popostick,
    peorun,
    // Tambahkan path gambar lainnya
  ]);
  const transition = {
    duration: 10, // Durasi total animasi
    repeat: Infinity,
    repeatType: "mirror",
  };

  const scaleTransition = {
    // Jenis transisi untuk scaleX
    damping: 10,
    stiffness: 100,
    duration: 1,
    delay: 10, // Durasi khusus untuk perubahan scaleX
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Interval setiap 10 detik
    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: "calc(50vw)",
        }}
        transition={{
          duration: 10, // Durasi total animasi
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="relative lg:absolute lg:bottom-14 left-10 "
      >
        <img src={images[currentImageIndex]} alt="" className=" h-20 " />
      </motion.div>
      <div className="relative lg:absolute lg:bottom-1 flex flex-row ">
        <motion.img
          src={popokao}
          alt=""
          className="h-20"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={poponaka}
          alt=""
          className="h-20 w-[50vw]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.img
          src={poposhiri}
          alt=""
          className="h-20"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3 }}
        />
      </div>
    </>
  );
}
