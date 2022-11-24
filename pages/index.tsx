import React from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import Projects from "../components/projects";
import ServicesTwo from "../components/servicesTwo";
import Testimonials from "../components/testimonials";
import Bio from "../components/bio";
import Head from "next/head";
import Marquee from "react-fast-marquee";
import styles from "../components/hero.module.css";
import Spheres from "../components/reactThreeFiberTwo";

const heroVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
    },
  },
};

function Home() {
  return (
    <>
      <Head>
        <title>Khans-Landing</title>
        <meta />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>

      <motion.div
        className="my-20"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <p className="text-xl uppercase text-center">frontend developer</p>
        <Marquee speed={100} className="my-20 flex space-x-10 items-center">
          <h1 className={styles.largeText}>Jay Khan</h1>
          <div className="mx-20 w-64 border-t border-black"></div>
        </Marquee>
        <motion.div
          className={styles.spline}
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          {/* <Iframe
            url="https://my.spline.design/interactivespherescopy-397558837af7b3db9602d1bcc603c9f9/"
            width="100%"
            height="100%"
            display="block"
            position="absolute"
          /> */}

          {/* <Temple /> */}
          <Spheres />
          {/* <SceneTwo /> */}
        </motion.div>
      </motion.div>
      <motion.div>
        <Projects />
      </motion.div>
      <motion.div>
        <ServicesTwo />
      </motion.div>
      <motion.div>
        <Testimonials />
      </motion.div>
      <motion.div>
        <Bio />
      </motion.div>
    </>
  );
}

export default Home;
