import React from "react";
import Logos from "./logos";
import FrontendService from "./frontendService";
import GraphicService from "./graphicService";
import { motion } from "framer-motion";
import { useState } from "react";

function Services() {
  const [isHovering, setIsHovering] = useState(false);
  const [graphicHovering, setGraphicHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleGraphicOver = () => {
    setGraphicHovering(true);
  };

  const handleGraphicOut = () => {
    setGraphicHovering(false);
  };

  return (
    <section
      id="services"
      className="grid place-items-center bg-green-100 my-20 py-20"
    >
      <p className="uppercase text-xl mb-20">Services</p>
      <motion.div className="opacity-20 hover:opacity-100 duration-300 grid place-items-center space-y-10">
        <p
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="my-8 lg:text-7xl text-4xl"
        >
          Frontend Development
        </p>

        {isHovering && <FrontendService />}
      </motion.div>
      <motion.div className="opacity-20 hover:opacity-100 duration-300 grid place-items-center space-y-10">
        <p
          onMouseOver={handleGraphicOver}
          onMouseOut={handleGraphicOut}
          className="my-8 lg:text-7xl text-4xl"
        >
          Graphic Design
        </p>

        {graphicHovering && <GraphicService />}
      </motion.div>
    </section>
  );
}

export default Services;
