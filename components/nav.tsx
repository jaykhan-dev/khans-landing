import React from "react";
import styles from "./hover.module.css";

function Nav() {
  return (
    <nav className="flex items-center justify-between text-2xl uppercase py-10 px-20">
      <h1>Jay</h1>
      <div className="flex items-center space-x-4">
        <p className={styles.hoverAnim}>Projects</p>
        <p>Services</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </nav>
  );
}

export default Nav;
