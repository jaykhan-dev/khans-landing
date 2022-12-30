import React from "react";

function GraphicService() {
  return (
    <div className="grid lg:grid-cols-2 mx-auto place-items-top">
      <div className="p-4 lg:border-r border-black/20">
        <h2 className="text-8xl font-black">$35/h</h2>
        <p className="text-xl my-4">
          Digital assets for web, social, print made with the Adobe Creative
          Cloud
        </p>
        <p className="my-4">Please contact for a fixed price project</p>
      </div>
      <div className="p-4">
        <a href="https://jaykhan.xyz/docs/design-philosophy" rel="">
          <p className="uppercase text-xl my-4">Tech Stack:</p>
          <ul className="text-4xl space-y-4">
            <li>Figma</li>
            <li>Adobe CC</li>
          </ul>
        </a>
      </div>
    </div>
  );
}

export default GraphicService;
