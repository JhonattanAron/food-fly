import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardMenu from "../menuPage/CardMenu";

export default function Carusel() {
  const data = [
    <CardMenu key={0} price="223" />,
    <CardMenu key={1} price="898" />,
    <CardMenu key={2} price="45" />,
    <CardMenu key={3} price="3" />,
    <CardMenu key={4} price="22" />,
    // Añade más elementos según sea necesario
  ];

  const [currentIndex, setcurrentIndex] = useState(0);

  const handlePrev = () => {
    setcurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setcurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="relative"
      style={{ width: "65vw", maxWidth: "65vw", margin: "0 auto" }}
    >
      <button
        onClick={handlePrev}
        className="bg-green-400 absolute left-1 p-3 text-white font-bold rounded-xl hover:bg-green-800 duration-100"
        style={{ zIndex: 1 }}
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="bg-green-400 absolute right-1 p-3 text-white font-bold rounded-xl hover:bg-green-600 duration-100"
        style={{ zIndex: 1 }}
      >
        Next
      </button>

      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          id="CardContainer"
          key={currentIndex}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x:
                  index === currentIndex
                    ? 0
                    : index < currentIndex
                    ? -100
                    : 100,
                zIndex: index === currentIndex ? 2 : 1,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x:
                  index === currentIndex
                    ? 0
                    : index < currentIndex
                    ? 100
                    : -100,
              }}
              transition={{ duration: 0.5 }}
              style={{
                flexShrink: 0,
                position: "absolute",
                left:
                  index === currentIndex
                    ? "50%"
                    : index === (currentIndex + 1) % data.length
                    ? "30%"
                    : "10%",
              }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
