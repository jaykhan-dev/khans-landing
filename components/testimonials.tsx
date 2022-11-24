import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import UpworkLogo from "../public/images/logos/upwork.svg";

function Testimonials() {
  return (
    <section id="testimonials" className="grid place-items-center my-20 py-20">
      <p className="uppercase text-xl">Testimonials</p>
      <div className="h-72 w-full lg:w-2/3 grid place-items-center lg:mx-auto my-20">
        <Carousel leftControl="<<" rightControl=">>" indicators={false}>
          {/* SLIDE 1 */}
          <div className="grid place-items-center p-6">
            <p className="lg:text-4xl text-2xl text-center lg:w-1/2">
              Jawad was great. Highly professional, fast and followed all the
              instructions. Would recommend.
            </p>
            <div className="flex lg:space-x-4 my-8 items-center">
              <div className="h-20 w-20 grid place-items-center border rounded-full">
                <Image
                  src={UpworkLogo}
                  width={75}
                  height={75}
                  alt="upwork client"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Richard</h2>
                <p>Upwork Client</p>
              </div>
            </div>
          </div>
          {/* SLIDE1 2 */}
          <div className="grid place-items-center p-6">
            <p className="lg:text-4xl text-2xl text-center lg:w-1/2">
              Jawad is very good at his work and very hard working. Always
              responsive. Would definitely work with him again.
            </p>
            <div className="flex lg:space-x-4 my-8 items-center">
              <div className="h-20 w-20 grid place-items-center border rounded-full">
                <Image
                  src={UpworkLogo}
                  width={75}
                  height={75}
                  alt="upwork client"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Prashant</h2>
                <p>UpWork Client</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
