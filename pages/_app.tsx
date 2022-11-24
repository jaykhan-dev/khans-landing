import "../styles/globals.css";
import { AppProps } from "next/app";
import Footer from "../components/footer";
import NavTwo from "../components/navTwo";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <motion.div
        className="cursor z-50"
        variants={{
          default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          },
          text: {
            height: 75,
            width: 75,
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            backgroundColor: "blue",
            opacity: 0.5,
            mixBlendMode: "difference",
          },
        }}
        animate={cursorVariant}
      ></motion.div>
      <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <NavTwo />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
