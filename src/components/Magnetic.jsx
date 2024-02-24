import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

const Magnetic = ({ children }) => {
  
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (event) => {
    const { clientX, clientY } = event;

    const { width, height, left, top } = ref.current.getBoundingClientRect();
    // center the element
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setPosition({ x, y });
  };

  // reset position => element
  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // destructuring the x and y values from the position state
  const { x, y } = position;

  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring" }}
    >
      {" "}
      {children}
    </motion.div>
  );
};

export default Magnetic;
