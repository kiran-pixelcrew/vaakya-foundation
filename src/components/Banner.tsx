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
    <div
      className="py-12 px-4 relative md:px-40 z-99 my-12"
      style={{ backgroundColor: bgColor || "transparent" }}
    >
      <div className={`max-w-3xl space-y-6 ${cn}`}>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p>{subtitle}</p>
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            className="bg-[#FFD45C] hover:bg-[#FFD45C]/90 text-black px-4 text-base font-medium py-6 cursor-pointer"
          >
            <Link href={ctaLink1}>{ctaText1}</Link>
          </Button>
          <Button
            asChild
            variant={"outline"}
            className="px-4 py-6 text-black text-base font-medium cursor-pointer hover:bg-gray-100"
          >
            <Link href={ctaLink2}>{ctaText2}</Link>
          </Button>
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
