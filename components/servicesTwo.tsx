import React from "react";
import { Accordion } from "flowbite-react";
import FrontendService from "./frontendService";
import GraphicService from "./graphicService";

function ServicesTwo() {
  return (
    <section
      id="services-two"
      aria-label="services"
      className="bg-green-100 my-20 py-20"
    >
      <p className="text-center text-xl uppercase my-8">Services</p>
      <Accordion flush={true} className="lg:w-2/3 mx-auto">
        <Accordion.Panel>
          <Accordion.Title className="text-3xl font-black">
            Frontend Development
          </Accordion.Title>
          <Accordion.Content>
            <FrontendService />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-3xl font-black">
            Graphic Design
          </Accordion.Title>
          <Accordion.Content>
            <GraphicService />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </section>
  );
}

export default ServicesTwo;
