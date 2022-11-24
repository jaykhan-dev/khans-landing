import React from "react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import Logo from "../public/images/jk-logo-black.svg";
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
      className=""
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <div className="max-w-8xl mx-auto p-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <Image src={Logo} width={50} height={50} alt="Jay Khan Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-black uppercase text-xl">
                <Link href="#projects" className={styles.hoverAnim}>
                  <p className="px-3 py-2 rounded-md font-bold">Projects</p>
                </Link>

                <Link href="#services" className={styles.hoverAnim}>
                  <p className="px-3 py-2 rounded-md font-bold">Services</p>
                </Link>

                <Link href="#testimonials" className={styles.hoverAnim}>
                  <p className="px-3 py-2 rounded-md font-bold">Testimonials</p>
                </Link>

                <Link href="#bio" className={styles.hoverAnim}>
                  <p className="px-3 py-2 rounded-md font-bold">Bio</p>
                </Link>

                <Link href="#contact" className={styles.hoverAnim}>
                  <p className="px-3 py-2 rounded-md font-bold">Contact</p>
                </Link>
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
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center text-xl uppercase"
            >
              <Link
                href="#projects"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </Link>

              <Link
                href="#services-two"
                className=" block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </Link>

              <Link
                href="#testimonials"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                Testimonials
              </Link>

              <Link
                href="#bio"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                Bio
              </Link>

              <Link
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </motion.nav>
  );
}

export default NavTwo;
