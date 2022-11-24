import React from "react";

function GraphicService() {
  return (
    <div className="grid lg:grid-cols-2 lg:w-1/2 mx-auto text-center place-items-center">
      <div className="p-4 border-r border-black/20">
        <h2 className="text-8xl font-black">$35/h</h2>
        <p className="text-xl my-4">
          Digital assets for web, social, print made with the Adobe Creative
          Cloud
        </p>
        <p className="my-4">Please contact for a fixed price project</p>
      </div>
      <div>
        <a href="https://jaykhan.xyz/docs/design-philosophy" rel="">
          <p className="uppercase text-xl my-4">Design Philosophy:</p>
          <ul className="text-4xl space-y-4">
            <li>Function over Form</li>
            <li>Keep it simple</li>
          </ul>
        </a>
      </div>
    </div>
  );
}

export default GraphicService;
