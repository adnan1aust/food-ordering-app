import Image from "next/image";
import HeroImage from "../../public/hero.png";

export default function Hero() {
  return (
    <div>
      <Image
        src={HeroImage}
        alt="hero"
        className="w-full max-h-[600px] object-cover"
      />
    </div>
  );
}
