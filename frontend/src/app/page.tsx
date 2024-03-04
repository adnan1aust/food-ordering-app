import Image from "next/image";
import LandingImage from "../../public/landing.png";
import AppDownloadImage from "../../public/appDownload.png";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-12">
        <div className="bg-white rounder-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
          <h1 className="text-5xl font-bold tracking-tight text-primary">
            Tuck into a takeaway today
          </h1>
          <span className="text-xl">Food is just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <Image src={LandingImage} alt="landing image" />
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="font-bold text-3xl tracking-tighter">
              Order Takeaway even faster!
            </span>
            <span>
              Download the HungryEats app for faster ordering and personalized
              recommendations.
            </span>
            <Image src={AppDownloadImage} alt="external link" />
          </div>
        </div>
      </div>
    </main>
  );
}
