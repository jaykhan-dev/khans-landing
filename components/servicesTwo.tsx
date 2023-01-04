import React from "react";
import { Accordion } from "flowbite-react";
import FrontendService from "./frontendService";
import GraphicService from "./graphicService";
import Logos from "./logos";
import LogosTwo from "./logosTwo";

function ServicesTwo() {
  return (
    <>
      <section
        id="services-two"
        aria-label="services"
        className="bg-zinc-800 py-20 text-white p-4"
      >
        <h2 className="text-center font-black my-8 lg:text-8xl mb-20 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600">
          Services
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 lg:w-2/3 mx-auto">
          {/* COL */}
          <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-500 rounded grid place-items-center">
            <div className="w-64">
              {/* @ts-ignore */}
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_fbry1ksx.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              />
            </div>
            <h2 className="lg:text-6xl font-black text-center mt-20">
              Frontend Development
            </h2>
            <p className="my-4 text-2xl lg:w-2/3 text-center">
              A user interface optimized for responsiveness, accessibility, and
              performance.
            </p>
            <Logos />
          </div>

          {/* COL */}
          <div className="p-4 bg-gradient-to-br from-purple-600 to-blue-500 rounded grid place-items-center">
            <div className="w-64">
              {/* @ts-ignore */}
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_rkyfvrzn.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              />
            </div>
            <h2 className="lg:text-6xl font-black text-center">
              Graphic <br />
              Design
            </h2>
            <p className="my-4 text-2xl lg:w-2/3 text-center">
              Digital assets for web, social, and print made with the Adobe
              Creative Cloud, and Figma
            </p>
            <LogosTwo />
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesTwo;
