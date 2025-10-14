import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import { Button } from "./ui/button";

const words = [
  [
    { text: "Safe", color: "#FFD45C" },
    { text: "Childhoods", color: "#FFD45C" },
    { text: "Begin" },
    { text: "with" },
    { text: "Awareness" },
  ],
  [
    { text: "Chiguru:", color: "#FFD45C" },
    { text: "Nurturing", color: "#FFD45C" },
    { text: "Young", color: "#FFD45C" },
    { text: "Minds" },
    { text: "with" },
    { text: "Care" },
  ],
  [
    { text: "Because", color: "#FFD45C" },
    { text: "Every", color: "#FFD45C" },
    { text: "Child", color: "#FFD45C" },
    { text: "Deserves" },
    { text: "Safety" },
  ],
];

export const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[url('/hero0.png')] mt-[65px] bg-cover bg-center bg-no-repeat flex items-center justify-start min-h-[90vh] px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <TextGenerateEffect
            wordsArray={words}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-left"
          />
          <div className="mt-4 text-base sm:text-lg text-balance text-white max-w-lg">
            <span className="font-bold text-[#FFD45C]">Vaakya</span>
            <span className="ml-2">
              empowers communities to prevent child abuse, bullying, cyber
              threats, and addiction through awareness and early action.
            </span>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 max-w-lg">
            <Link href="#contact">
              <Button className="bg-[#FFD45C] text-black font-medium py-4 sm:py-6 px-6 sm:px-8 rounded-lg text-lg sm:text-xl hover:bg-yellow-400 transition-colors border-0 w-full sm:w-auto">
                Protect a Child Today
              </Button>
            </Link>
            <Link href="#volunteer">
              <Button
                variant="outline"
                className="border-2 border-white text-white font-medium py-4 sm:py-6 px-6 sm:px-8 rounded-lg text-lg sm:text-xl hover:bg-white hover:text-black transition-colors bg-transparent w-full sm:w-auto"
              >
                Become Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Workshop Banner - Positioned directly below hero */}
      <div className="bg-black py-4 px-6 text-center w-full block">
        <p className="text-white text-base sm:text-lg">
          Join our upcoming workshop to empower kids and spark smiles!{" "}
          <Link
            href="/workshop"
            className="text-[#FFD45C] font-semibold hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black rounded"
          >
            Register now.
          </Link>
        </p>
      </div>
    </>
  );
};
