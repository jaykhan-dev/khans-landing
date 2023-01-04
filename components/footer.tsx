import React, { useEffect, useRef } from "react";
import Logos from "./logos";
import styles from "./hover.module.css";
import Link from "next/link";
import bgstyles from "./bg.module.css";

function Footer() {
  return (
    <>
      <footer
        id="contact"
        className="bg-zinc-900 text-white border-t border-zinc-700 py-4 px-4"
      >
        <div className="lg:w-2/3 mx-auto flex items-center justify-between">
          <div className="flex space-x-4 items-center">
            <a
              href="mailto:jaykhan.sound@gmail.com"
              className="flex items-center space-x-2"
            >
              <i className="fa-solid fa-envelope"></i>
              <p className="hover:cursor-pointer">jaykhan.sound@gmail.com</p>
            </a>
          </div>
          <div className="text-2xl space-x-4 flex justify-center items-center">
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
              href="https://github.com/jaykhan-dev/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <i className="fa-brands fa-github hover:cursor-pointer"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
