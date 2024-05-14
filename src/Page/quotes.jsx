w-500import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import AnimText from "./animtext";
import basement from "../assets/basement.png";
import peoenjoy from "../assets/peoenjoy.gif";
import popone from "../assets/popojump1.gif";
import popomore from "../assets/popojump.gif";
import peofree from "../assets/peofree.gif";
import peofan from "../assets/Peofan.gif";
import peopanic from "../assets/peopanic.gif";
import peotato from "../assets/peotato.gif";
import peocopter from "../assets/peocopter.gif";
import popohp from "../assets/popohp.gif";
import popoeat from "../assets/popoeat.gif";
import poporere from "../assets/poporere.gif";
import popocatch from "../assets/popocatch.gif";
import popohands from "../assets/popohands.png";
import peozilla from "../assets/Peozilla.png";
import peoroll from "../assets/peoroll.gif";

export default function Quotes() {
  const [quotesIndex, setQuotesIndex] = useState(0);

  const quote = () => {
    setQuotesIndex((prevIndex) => (prevIndex + 1) % 7); // 3 adalah jumlah total quotes yang Anda miliki
  };
  const renderQuotes = () => {
    switch (quotesIndex) {
      case 0:
        return (
          <motion.div
            key={0}
            className="flex flex-col cursor-pointer mt-20 hover:bg-slate-700"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 2 }}
            onClick={() => quote()}
          >
            <p className="text-white text-xl">⇘ click me ⇙</p>
            <img src={basement} alt="" className="h-[20vh] object-contain" />
          </motion.div>
        );
      case 1:
        return (
          <div key={1} className="mt-20">
            <motion.div
              className="flex justify-between"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 7 }}
            >
              <img src={peoenjoy} alt="" className="h-[10vh]" />
              <img src={popone} alt="" className="h-[10vh]" />
            </motion.div>
            <p className="text-white text-2xl font-permanent my-5">
              <AnimText
                Text="Age is Just the Number of Years the World has been Blessed by Your Presence~"
                Repeat={10}
                Delay={1}
              />
            </p>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="flex flex-col items-end mt-3 "
            >
              <p className="text-white text-xl">⇙ more</p>
              <img
                src={basement}
                alt=""
                className="h-[10vh] hover:h-[11vh] hover:bg-slate-700 cursor-pointer"
                onClick={() => quote()}
              />
            </motion.div>
          </div>
        );
      case 2:
        return (
          <motion.div
            key={2}
            className="mt-20"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="flex flex-col items-end mt-3 "
            >
              <img
                src={basement}
                alt=""
                className="h-[10vh] hover:h-[11vh] hover:bg-slate-700 cursor-pointer "
                onClick={() => quote()}
              />
              <p className="text-white text-xl">⇖ more</p>
            </motion.div>
            <p className="text-white text-2xl font-permanent my-5">
              <AnimText
                Text="On Our Special Day,, May The Joy You Bring to Others Come back to You~"
                Repeat={10}
                Delay={1}
              />
            </p>
            <motion.div
              className="flex justify-between "
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 7 }}
            >
              <img src={popomore} alt="" className="h-[10vh] " />
              <img src={peofree} alt="" className="h-[10vh]" />
            </motion.div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key={3}
            className=" mt-20"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="flex flex-col items-start mt-3 "
            >
              <img
                src={basement}
                alt=""
                className="h-[10vh] hover:h-[11vh] hover:bg-slate-700 cursor-pointer "
                onClick={() => quote()}
              />
              <p className="text-white text-xl">⇗ more</p>
            </motion.div>
            <p className="text-white text-2xl font-permanent my-5">
              <AnimText
                Text="Another Year Older is Another Year to Shine Bright!!!"
                Repeat={10}
                Delay={1}
              />
            </p>
            <motion.div
              className="flex justify-between "
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 7 }}
            >
              <img src={peopanic} alt="" className="h-[10vh] " />
              <img src={peofan} alt="" className="h-[10vh]" />
            </motion.div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key={4}
            className=" mt-20"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="flex justify-between "
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 7 }}
            >
              <img src={peotato} alt="" className="h-[10vh] " />
              <img src={peocopter} alt="" className="h-[10vh]" />
            </motion.div>
            <p className="text-white text-2xl font-permanent my-5">
              <AnimText
                Text="May Your Birthday as Wonderful and Unique as You Are!"
                Repeat={10}
                Delay={1}
              />
            </p>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="flex flex-col items-start mt-3 "
            >
              <img
                src={basement}
                alt=""
                className="h-[10vh] hover:h-[11vh] hover:bg-slate-700 cursor-pointer "
                onClick={() => quote()}
              />
              <p className="text-white text-xl ">⇗ more</p>
            </motion.div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div
            key={5}
            className=" mt-20"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="flex justify-between "
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 7 }}
            >
              <img src={peozilla} alt="" className="h-[10vh] " />
              <img src={peoroll} alt="" className="h-[10vh]" />
            </motion.div>
            <p className="text-white text-2xl font-permanent my-5">
              <AnimText
                Text="Today is the Perfect Reminder to celebrate Your Kindness, Your Sanity and Your Beautiful Soul~"
                Repeat={10}
                Delay={1}
              />
            </p>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="flex flex-col items-center mt-3 "
            >
              <img
                src={basement}
                alt=""
                className="h-[10vh] hover:h-[11vh] hover:bg-slate-700 cursor-pointer "
                onClick={() => quote()}
              />
              <p className="text-white text-xl ">⇗ Thank You~ ⇖</p>
            </motion.div>
          </motion.div>
        );
      case 6:
        return (
          <motion.div
            key={6}
            className=" mt-20"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="flex justify-between "
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <img src={popoeat} alt="" className="h-[10vh] " />
              <img src={popohp} alt="" className="h-[10vh]" />
              <img src={popocatch} alt="" className="h-[10vh]" />
            </motion.div>
            <p className="text-white text-2xl font-permanent my-5">
              I want to express my gratitude to all Peonista who have celebrated
              this celebration together~
            </p>
            <p className="text-white text-2xl mt-3">Terima Kasih~</p>

            <motion.div
              className="flex  "
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <img src={popohands} alt="" className="h-[10vh] mx-auto " />
              <img src={poporere} alt="" className="h-[10vh] mx-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="flex flex-col items-center mt-10 "
            >
              <img
                src={basement}
                alt=""
                className="h-[10vh] hover:h-[11vh] hover:bg-slate-700 cursor-pointer "
                onClick={() => quote()}
              />
              <p className="text-white text-lg ">⇗ Reset ⇖</p>
            </motion.div>
            <p className="text-yellow-500 text-xl mt-10 lg:text-white">
              All assets I use on this website are from Peo Garden
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div className="z-10">{renderQuotes()}</div>
    </>
  );
}
