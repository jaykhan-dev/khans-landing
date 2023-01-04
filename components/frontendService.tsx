import React from "react";

function FrontendService() {
  return (
    <div className="grid lg:grid-cols-2 mx-auto place-items-top">
      <div className="lg:border-r border-black/20 flex flex-col justify-between">
        {/* <h2 className="text-8xl font-black">$35/h</h2> */}
        <p className="text-4xl my-4">
          A user interface optimized for responsiveness, accessibility, and
          performance.
        </p>
        <p className="my-4">Please contact for a fixed price project</p>
      </div>
      <div className="p-4">
        <p className="uppercase text-xl my-4">Tech Stack:</p>
        <ul className="text-4xl space-y-4">
          <li>Next JS</li>
          <li>Sveltekit</li>
          <li>Tailwind CSS</li>
          <li>Vercel</li>
        </ul>
      </div>
    </div>
  );
}

export default FrontendService;
