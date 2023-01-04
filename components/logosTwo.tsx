import AdobeLogo from "../public/images/logos/400x200_adobe.png";
import FigmaLogo from "../public/images/logos/400x200_figma.png";
import Image from "next/image";

export default function LogosTwo() {
  return (
    <div className="lg:flex items-center lg:space-x-4 mb-20">
      <Image src={AdobeLogo} width={100} height={50} alt="next-js-logo" />
      <Image src={FigmaLogo} width={100} height={50} alt="vercel-logo" />

      {/* <Image src={AdobeLogo} width={100} height={50} alt="adobe-logo" /> */}
    </div>
  );
}
