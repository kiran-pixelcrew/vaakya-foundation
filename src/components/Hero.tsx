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
      <div className="h-screen bg-[url('/hero0.png')] bg-contain bg-no-repeat bg-center flex items-center justify-start px-10">
        <div className="ml-2">
          <TextGenerateEffect
            wordsArray={words}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl font-bold text-left"
          />
          <div className="mt-4 text-lg text-balance text-white max-w-sm">
            <span className="font-bold text-[#FFD45C]">Vaakya</span>
            <span className="ml-2">
              empowers communities to prevent child abuse, bullying, cyber
              threats, and addiction through awareness and early action.
            </span>
          </div>
          <div className="mt-6 flex gap-4 max-w-sm">
            <Link href="/">
              <Button className="bg-[#FFD45C] text-black font-medium py-6 px-8 rounded-lg text-xl hover:bg-yellow-400 transition-colors border-0">
                Protect a Child Today
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-2 border-white text-white font-medium py-6 px-8 rounded-lg text-xl hover:bg-white hover:text-black transition-colors bg-transparent"
              >
                Become Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Workshop Banner */}
      <div className="bg-black py-4 px-6 text-center border-t border-gray-700">
        <p className="text-white text-lg">
          Join our upcoming workshop to empower kids and spark smiles!{" "}
          <Link href="/workshop" className="text-[#FFD45C] font-semibold hover:underline transition-all">
            Register now.
          </Link>
        </p>
      </div>
    </>
  );
};
