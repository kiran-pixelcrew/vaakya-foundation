import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Banner = ({
  bgColor,
  title,
  subtitle,
  ctaText1,
  ctaLink1,
  ctaText2,
  ctaLink2,
  image,
  cn,
}: {
  image?: boolean;
  cn?: string;
  bgColor?: string;
  title: string;
  subtitle: string;
  ctaText1: string;
  ctaLink1: string;
  ctaText2: string;
  ctaLink2: string;
}) => {
  return (
    <div className={`bg-[${bgColor}] py-12 px-4 relative md:px-40 my-12`}>
      <div className={`max-w-3xl space-y-6 ${cn}`}>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p>{subtitle}</p>
        <div className="space-x-6">
          <Link href={ctaLink1}>
            <Button className="bg-[#FFD45C] text-black px-4 text-base font-medium py-6">
              {ctaText1}
            </Button>
          </Link>
          <Link href={ctaLink2}>
            <Button
              variant={"outline"}
              className="px-4 py-6 text-black text-base font-medium"
            >
              {ctaText2}
            </Button>
          </Link>
        </div>
      </div>
      <div
        className={`absolute ${image ? "block" : "hidden"} right-32 -top-20`}
      >
        <Image src={"/whitefoot.png"} width={450} height={450} alt="foot" />
      </div>
    </div>
  );
};

export default Banner;
