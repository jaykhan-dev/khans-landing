import React from "react";
import Image from "next/image";
import Portrait from "../public/images/jaykhan.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./bg.module.css";
import Link from "next/link";

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
      className="lg:w-2/3 mx-auto p-4 py-20"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <motion.div className="pt-8 grid place-items-center">
        <div className="">
          <Image
            src={Portrait}
            width={100}
            height={100}
            className="rounded-full border-8 shadow-2xl border-blue-500"
            alt="Jay Khan portrait"
          />
        </div>
        <h1 className="lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-violet-600 py-8">
          Jay Khan
        </h1>

        <p className="lg:text-4xl text-xl lg:w-1/2 text-center leading-loose my-12 text-white">
          <span className="text-sky-400 font-bold">Focused</span> on building
          the best User Interfaces and{" "}
          <span className="font-bold text-green-400">advocating</span> for
          self-sovereignty.
        </p>

        <div className="my-4 uppercase lg:space-x-6 flex lg:justify-start justify-between items-center text-white">
          <Link href="#projects" scroll={false}>
            <button className="flex items-center space-x-2 bg-blue-500 animate-pulse p-4 border rounded border-zinc-700 hover:scale-95 duration-300">
              <p>See Work</p>
            </button>
          </Link>
        </div>
        <div className="w-24">
          {/* @ts-ignore */}
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_vfmyxu76.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            class="opacity-50"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Bio;
