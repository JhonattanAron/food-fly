import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardMenu from "../menuPage/CardMenu";

export default function Carusel() {
  const data = [
    {
      price: 19.99,
      name: "Arroz con Pollo",
      description: "Arron que lleva pollo",
    },
    {
      price: 29.99,
      name: "Encebollado",
      description: "Arron que lleva pollo",
    },
    {
      price: 39.99,
      name: "Seco de Chancho",
      description: "Arron que lleva pollo",
    },
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
      className="xl:relative xl:visible invisible"
      style={{ width: "65vw", maxWidth: "65vw", margin: "0 auto" }}
    >
      <button
        onClick={handlePrev}
        className="bg-green-400 absolute left-1 p-3 text-white font-bold rounded-xl hover:bg-green-800 duration-100"
        style={{ zIndex: 4 }}
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="bg-green-400 absolute right-1 p-3 text-white font-bold rounded-xl hover:bg-green-600 duration-100"
        style={{ zIndex: 4 }}
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
              <CardMenu
                price={item.price}
                name={item.name}
                description={item.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
