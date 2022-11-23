import React from "react";
import Image from "next/image";

import AdobeLogo from "../public/images/logos/400x200_adobe.png";
import GithubLogo from "../public/images/logos/400x200_github.png";
import NextLogo from "../public/images/logos/400x200_next.png";
import TailwindLogo from "../public/images/logos/400x200_tailwind.png";
import VercelLogo from "../public/images/logos/400x200_vercel.png";

function Logos() {
  return (
    <div className="lg:flex items-center justify-center lg:space-x-4 mb-20">
      <Image src={NextLogo} width={100} height={50} alt="next-js-logo" />
      <Image src={VercelLogo} width={100} height={50} alt="vercel-logo" />
      <Image src={GithubLogo} width={100} height={50} alt="github-logo" />
      <Image src={TailwindLogo} width={150} height={100} alt="tailwind-logo" />
      {/* <Image src={AdobeLogo} width={100} height={50} alt="adobe-logo" /> */}
    </div>
  );
}

export default Logos;
