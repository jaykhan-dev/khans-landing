import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Shaybeas from "../public/images/logos/projects_shaybeas.png";
import Scribendi from "../public/images/logos/projects_scribendi.png";
import LHL from "../public/images/logos/projects_lhl.png";
import Appreci from "../public/images/logos/projects_appreci.png";

function Projects() {
  const ref = useRef(null);

  return (
    <section
      id="projects"
      aria-label="projects"
      className="grid place-items-center lg:w-1/2 mx-auto p-4"
    >
      <p className="text-xl uppercase">Projects</p>
      <div className="my-20 w-full grid lg:grid-cols-2 gap-10">
        {/* ITEM */}
        <div className="flex items-center space-x-8 opacity-30 hover:opacity-100 duration-300">
          <div className="w-32 my-8 border border-black/20 rounded shadow-xl p-4">
            <Image
              src={Shaybeas}
              width={150}
              height={150}
              alt="Shaybeas logo"
            />
          </div>
          <div>
            <div className="flex items-center space-x-4">
              <p>01</p>
              <div className="border-t border-black w-24"></div>
            </div>
            <h2 className="lg:text-4xl text-2xl font-black">ShayBeas</h2>
            {/* LINKS */}
            <div className="flex items-center my-2 space-x-4 text-2xl">
              <a
                href="https://jaykhan.xyz/docs/web-dev/shaybeas-enterprises"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fa-solid fa-file-invoice hover:cursor-pointer"></i>
              </a>
              <a
                href="https://next-shaybeas.vercel.app/"
                rel="noreferrer noopener"
                target="_blank"
                className=""
              >
                <i className="fa-solid fa-link hover:cursor-pointer"></i>
              </a>
            </div>
          </div>
        </div>

        {/* ITEM */}
        <div className="flex items-center space-x-8 opacity-30 hover:opacity-100 duration-300">
          <div className="w-32 my-8 border border-black/20 rounded shadow-xl p-4">
            <Image src={Appreci} width={150} height={150} alt="Shaybeas logo" />
          </div>
          <div>
            <div className="flex items-center space-x-4">
              <p>02</p>
              <div className="border-t border-black w-24"></div>
            </div>
            <h2 className="lg:text-4xl text-2xl font-black">Appreci</h2>
            {/* LINKS */}
            <div className="flex items-center my-2 space-x-4 text-2xl">
              <a
                href="https://jaykhan.xyz/docs/web-dev/appreci"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fa-solid fa-file-invoice hover:cursor-pointer"></i>
              </a>
              <a
                href="https://appreci.netlify.app"
                rel="noreferrer noopener"
                target="_blank"
                className=""
              >
                <i className="fa-solid fa-link hover:cursor-pointer"></i>
              </a>
            </div>
          </div>
        </div>

        {/* ITEM */}
        <div className="flex items-center space-x-8 opacity-30 hover:opacity-100 duration-300">
          <div className="w-32 my-8 border border-black/20 rounded shadow-xl p-4">
            <Image src={LHL} width={150} height={150} alt="Shaybeas logo" />
          </div>
          <div>
            <div className="flex items-center space-x-4">
              <p>03</p>
              <div className="border-t border-black w-24"></div>
            </div>
            <h2 className="lg:text-4xl text-2xl font-black">Lighthouse Labs</h2>
            {/* LINKS */}
            <div className="flex items-center my-2 lg:space-x-4 text-2xl">
              <a
                href="https://jaykhan.xyz/docs/graphics/social-media"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fa-solid fa-file-invoice hover:cursor-pointer"></i>
              </a>
              {/* <a
                href="https://www.lighthouselabs.ca"
                rel="noreferrer noopener"
                target="_blank"
                className=""
              >
                <i className="fa-solid fa-link hover:cursor-pointer"></i>
              </a> */}
            </div>
          </div>
        </div>

        {/* ITEM */}
        <div className="flex items-center space-x-8 opacity-30 hover:opacity-100 duration-300">
          <div className="w-32 my-8 border border-black/20 rounded shadow-xl">
            <Image
              src={Scribendi}
              width={150}
              height={150}
              alt="Shaybeas logo"
            />
          </div>
          <div>
            <div className="flex items-center space-x-4">
              <p>04</p>
              <div className="border-t border-black w-24"></div>
            </div>
            <h2 className="lg:text-4xl text-2xl font-black">Scribendi</h2>
            {/* LINKS */}
            <div className="flex items-center my-2 lg:space-x-4 text-2xl">
              <a
                href="https://jaykhan.xyz/docs/web-dev/scribendi"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fa-solid fa-file-invoice hover:cursor-pointer"></i>
              </a>
              {/* <a
                href="https://www.scribendi.com"
                rel="noreferrer noopener"
                target="_blank"
                className=""
              >
                <i className="fa-solid fa-link hover:cursor-pointer"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="my-4">
        <a
          href="https://jaykhan.xyz/docs/tech-stack"
          rel="noreferrer noopener"
          target="_blank"
        >
          <button className="hover:scale-110 duration-300 rounded-full p-4 px-8 text-xl uppercase bg-black text-white">
            See More
          </button>
        </a>
      </div>
    </section>
  );
}

export default Projects;
