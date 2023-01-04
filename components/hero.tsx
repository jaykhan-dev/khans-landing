import React from "react";
import styles from "../components/bg.module.css";
import Marquee from "react-fast-marquee";
import Bio from "../components/bio";

export default function Hero() {
  return (
    <div className={styles.portrait}>
      <div className="bg-gradient-to-b from-zinc-900/90 to-zinc-800">
        <Bio />
        <Marquee
          speed={75}
          gradient={false}
          className="flex space-x-10 items-center text-zinc-700/30 py-8 text-7xl"
        >
          <h1 className="">Frontend Developer</h1>
          <div className="mx-20 w-64 border-t border-white/10"></div>
          <h1 className="">Graphic Designer</h1>
          <div className="mx-20 w-64 border-t border-white/10"></div>
          <h1 className="">Bitcoin Advocate</h1>
          <div className="mx-20 w-64 border-t border-white/10"></div>
        </Marquee>
      </div>
    </div>
  );
}
