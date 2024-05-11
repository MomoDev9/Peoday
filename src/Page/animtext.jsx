import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimText({ Text, ClassName, Repeat, Delay }) {
  const splitText = Text.split("");
  const [animationRepeat, setAnimationRepeat] = useState(Repeat);
  const [animationDelay, setAnimationDelay] = useState(Delay);
  const [animationText, setAnimationText] = useState(splitText);

  useEffect(() => {
    setAnimationRepeat(Repeat);
    setAnimationDelay(Delay);
    setAnimationText(Text.split(""));
  }, [Repeat, Text, Delay]);

  return (
    <span className={ClassName}>
      {animationText.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: animationRepeat * 0.2,
            delay: animationDelay + i * 0.1,
          }}
          key={i}
        >
          {el}
        </motion.span>
      ))}
    </span>
  );
}
