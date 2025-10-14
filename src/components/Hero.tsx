"use client";

import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "motion/react";

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
      <motion.section
        className="bg-[url('/hero0.png')] mt-[65px] bg-cover bg-center bg-no-repeat flex items-center justify-start h-[85vh] px-4 sm:px-8 md:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.05,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <TextGenerateEffect
            wordsArray={words}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-left"
          />
          <motion.div
            className="mt-4 text-base sm:text-lg text-balance text-white max-w-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.span
              className="font-bold text-[#FFD45C]"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              Vaakya
            </motion.span>
            <motion.span
              className="ml-2"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              empowers communities to prevent child abuse, bullying, cyber
              threats, and addiction through awareness and early action.
            </motion.span>
          </motion.div>
          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-4 max-w-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 1.0,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.05 },
              }}
            >
              <Link href="#contact">
                <Button className="bg-[#FFD45C] text-black font-medium py-4 sm:py-6 px-6 sm:px-8 rounded-lg text-lg sm:text-xl hover:bg-yellow-400 transition-colors border-0 w-full sm:w-auto">
                  Protect a Child Today
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 1.1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.05 },
              }}
            >
              <Link href="#volunteer">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white font-medium py-4 sm:py-6 px-6 sm:px-8 rounded-lg text-lg sm:text-xl hover:bg-white hover:text-black transition-colors bg-transparent w-full sm:w-auto"
                >
                  Become Volunteer
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Workshop Banner - Positioned directly below hero */}
      <motion.div
        className="bg-black py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 lg:px-12 text-center w-full block"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 1.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <motion.p
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 1.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Join our upcoming workshop to empower kids and spark smiles!{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.25,
              delay: 1.5,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
            }}
          >
            <Link
              href="/workshop"
              className="text-[#FFD45C] font-semibold hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black rounded inline-block"
            >
              Register now.
            </Link>
          </motion.span>
        </motion.p>
      </motion.div>
    </>
  );
};
