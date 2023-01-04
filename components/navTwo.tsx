import React from "react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import Logo from "../public/images/logos/jk-logo-blue.svg";
import styles from "./hover.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
    },
  },
};

function NavTwo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-zinc-900/90 backdrop-blur-lg border-b border-gray-700 py-4"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <div className="lg:w-2/3 mx-auto p-2 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src={Logo} width={50} height={50} alt="Jay Khan Logo" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-2">
                <Link href="#" scroll={false}>
                  <p className="px-3 py-2 rounded-md font-bold text-white">
                    Commentary
                  </p>
                </Link>

                <Link href="#services" scroll={false}>
                  <p className="px-3 py-2 rounded-md font-bold text-white">
                    Music
                  </p>
                </Link>

                <a
                  href="https://jaykhan.xyz/blog"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-white flex items-center space-x-2 font-bold"
                >
                  <p>Tech Blog</p>
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>

                <a
                  href="https://jaykhan.xyz/docs/resume"
                  rel="noreferrer noopener"
                  target="_blank"
                  className=""
                >
                  <div className="flex items-center space-x-2 text-white font-bold mx-4">
                    <p className="">Resume</p>
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </div>
                </a>

                {/* <Link href="#bio" className={styles.hoverAnim}>
                  <p className="px-3 py-2 rounded-md font-bold">Bio</p>
                </Link> */}

                <button className="text-white px-3 py-2 rounded bg-gradient-to-r from-sky-400 to-purple-500 font-black">
                  <a
                    href="mailto:jaykhan.sound@gmail.com"
                    className="flex items-center space-x-2"
                  >
                    <i className="fa-solid fa-envelope"></i>
                    <p className="hover:cursor-pointer">Get in touch</p>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center text-xl uppercase text-white"
            >
              <Link
                href="#projects"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                Work
              </Link>

              <Link
                href="#services"
                className=" block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </Link>

              <a
                href="https://jaykhan.xyz/blog"
                rel="noopener noreferrer"
                target="_blank"
                className="text-white flex items-center space-x-2 font-bold"
              >
                <p>Tech Blog</p>
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>

              <a
                href="https://jaykhan.xyz/docs/resume"
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center space-x-2"
              >
                <p>Resume</p>
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>

              <button className="text-white px-3 py-2 rounded-md bg-gradient-to-r from-sky-400 to-purple-500 font-black">
                <a
                  href="mailto:jaykhan.sound@gmail.com"
                  className="flex items-center space-x-2"
                >
                  <i className="fa-solid fa-envelope"></i>
                  <p className="hover:cursor-pointer">Get in touch</p>
                </a>
              </button>
            </div>
          </div>
        )}
      </Transition>
    </motion.nav>
  );
}

export default NavTwo;
