import React from "react";

function FrontendService() {
  return (
    <div className="grid lg:grid-cols-2 lg:w-1/2 mx-auto text-center place-items-center">
      <div className="p-4 border-r border-black/20">
        <h2 className="text-8xl font-black">$35/h</h2>
        <p className="text-xl my-4">
          A user interface optimized for responsiveness, accessibility, and
          performance.
        </p>
        <p className="my-4">For a fixed price project, please contact</p>
      </div>
      <div>
        <a href="https://jaykhan.xyz/docs/design-philosophy" rel="">
          <p className="uppercase text-xl my-4">Tech Stack:</p>
          <ul className="text-4xl space-y-4">
            <li>Next JS</li>
            <li>Tailwind CSS</li>
            <li>Vercel</li>
          </ul>
        </a>
      </div>
    </div>
  );
}

export default FrontendService;
