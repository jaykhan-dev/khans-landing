import React, { useEffect, useRef } from "react";
import Logos from "./logos";
import styles from "./hover.module.css";
import Link from "next/link";
import bgstyles from "./bg.module.css";

function Footer() {
  return (
    <>
      <section id="contact" className={bgstyles.footer}>
        <div className="bg-gradient-to-b from-blue-100/90 to-blue-100">
          <div className="grid place-items-center">
            <h1 className="lg:text-8xl text-6xl text-center font-bold mt-10">
              Let&apos;s Connect
            </h1>
            <div className="flex space-x-4 items-center uppercase text-2xl my-8">
              <a href="mailto:jaykhan.sound@gmail.com">
                <p className="hover:cursor-pointer">jaykhan.sound@gmail.com</p>
              </a>
            </div>
            <div className="w-64 my-8">
              {/* @ts-ignore */}
              <lottie-player
                src="https://assets8.lottiefiles.com/packages/lf20_v7gj8hb1.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                class="opacity-50"
              />
            </div>
            {/* <button className="hover:bg-black hover:scale-110 duration-300 hover:text-white text-2xl border-2 border-black rounded-full p-4 px-4 my-10">
            Work with me
          </button> */}
          </div>
          <div className="grid place-items-center">
            {/* <div className="text-4xl space-x-4 flex justify-center items-center my-20">
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa-solid fa-location-arrow"></i>
            </a>
          </div> */}
            <Logos />
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
