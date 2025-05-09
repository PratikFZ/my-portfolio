import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const Name = ({name}) =>{
  const intervalRef       = useRef();
  const cursorRef         = useRef();
  const [text, setText]   = useState(name);
  const [showCursor, setShowCursor] = useState(true);

  // scramble on hover
  const scramble = () => {
    let pos = 0;
    intervalRef.current = window.setInterval(() => {
      setText((_) => {
        const scrambled = name
          .split("")
          .map((ch, i) =>
            pos / CYCLES_PER_LETTER > i
              ? ch
              : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("");
        return scrambled;
      });
      pos++;
      if (pos >= name.length * CYCLES_PER_LETTER) {
        clearInterval(intervalRef.current);
        setText(name);
      }
    }, SHUFFLE_TIME);
  };

  // clear scramble if you leave early
  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(name);
  };

  // blinking cursor – start once on mount
  useEffect(() => {
    cursorRef.current = window.setInterval(() => {
      setShowCursor((c) => !c);
    }, 500);

    return () => {
      clearInterval(cursorRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <motion.div
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="inline-block"
    >
      <h2 className="name text-3xl font-mono">
        {text}
        <span className="inline-block w-1">
          {showCursor ? "_" : "\u00A0"}
        </span>
      </h2>
    </motion.div>
  );
}

export default Name ;