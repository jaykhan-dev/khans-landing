import React from "react";
import Image from "next/image";
import Portrait from "../public/images/jaykhan.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const roles = {
  development: "Frontend Developer",
  design: "Graphic Designer",
  advocate: "Bitcoin Advocate",
};

function Bio() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["100%", "-20%"]);
  let y2 = useTransform(scrollYProgress, [0, 1], ["100%", "-50%"]);

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      id="bio"
      className="grid lg:grid-cols-3 lg:w-2/3 mx-auto gap-4 p-4 py-20 relative"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <motion.div
        className="absolute bottom-0 right-0 bg-blue-200 h-96 w-96 blur-xl rounded-full opacity-40"
        style={{ y }}
      ></motion.div>
      <motion.div className="z-40 grid place-items-center" style={{ y }}>
        <Image
          src={Portrait}
          width={300}
          height={300}
          alt="Jay Khan Portrait"
          className="-rotate-12 shadow-2xl rounded-tr-2xl rounded-bl-2xl border border-black/30"
        />
      </motion.div>

      <motion.div className="lg:col-span-2 z-50">
        <h1 className="text-6xl font-black my-12">Meet Jay</h1>
        <div className="lg:flex items-center lg:space-x-4 uppercase text-xl tracking-wide my-12">
          <p className="flex items-center">
            <span className="font-black text-4xl mx-4">&#x2022;</span>
            {roles.development}
          </p>

          <p className="flex items-center">
            <span className="font-black text-4xl mx-4">&#x2022;</span>
            {roles.design}
          </p>

          <p className="flex items-center">
            <span className="font-black text-4xl mx-4">&#x2022;</span>
            {roles.advocate}
          </p>
        </div>
        <p className="lg:text-3xl text-xl lg:w-full leading-loose my-12">
          <span className="text-sky-400 font-bold">Focused</span> on building
          the best User Interfaces and{" "}
          <span className="font-bold text-green-400">advocating</span> for
          self-custody, financial inclusion and freedom.
        </p>
        <div className="my-8 text-4xl lg:space-x-6 flex lg:justify-start justify-between items-center">
          <a
            href="https://jaykhan.xyz"
            rel="noreferrer noopener"
            target="_blank"
          >
            <p className="text-xl uppercase tracking-wide hover:cursor-pointer">
              jaykhan.xyz
            </p>
          </a>
          <a
            href="https://twitter.com/j__khan"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i className="fa-brands fa-twitter hover:cursor-pointer"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jkhanprofile/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin hover:cursor-pointer"></i>
          </a>
          <a
            href="https://www.instagram.com/jkhan.sound/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i className="fa-brands fa-instagram hover:cursor-pointer"></i>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Bio;
