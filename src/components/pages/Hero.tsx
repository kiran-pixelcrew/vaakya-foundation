"use client";

import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import hero0 from "/public/hero0.png";

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

const slides = [
  {
    id: 1,
    image: hero0,
    title: "Let's Build a Safer World for Children",
    description:
      "to educate, spread awareness, and make child safety everyone's responsibility.",
  },
  {
    id: 2,
    image: hero0,
    title: "Because Every Child Deserves Safety",
    description:
      "empowering communities to prevent child abuse, bullying, and cyber threats through awareness.",
  },
  {
    id: 3,
    image: hero0,
    title: "Chiguru: Nurturing Young Minds",
    description:
      "protecting children with care, education, and early intervention for a better tomorrow.",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isMobile]);
  return (
    <>
      {/* Desktop Version */}
      <motion.section
        className="relative overflow-hidden mt-20 hidden md:flex items-center justify-start h-[85vh] px-4 sm:px-8 md:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          src={hero0}
          alt="Children empowerment and safety initiative"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
        />
        <motion.div
          className="relative z-10 max-w-4xl"
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
            className="text-2xl sm:text-3xl md:text-4xl max-w-4xl text-balance lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-left"
          />
          <motion.div
            className="mt-4 text-base sm:text-lg text-balance text-white max-w-xl"
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
                <Button className="bg-[#FFD45C] text-black font-medium py-4 sm:py-6 px-6 sm:px-8 rounded-lg text-base hover:bg-yellow-400 transition-colors border-0 w-full sm:w-auto">
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
                  className="border-2 border-white text-white font-medium py-4 sm:py-6 px-6 sm:px-8 rounded-lg text-base hover:bg-white hover:text-black transition-colors bg-transparent w-full sm:w-auto"
                >
                  Become Volunteer
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Mobile Version - Card Based */}
      <section className="md:hidden mt-16 px-4 py-8 bg-white dark:bg-slate-950">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-3xl">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  priority
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center gap-2 py-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-[#FFD45C] w-6"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="px-6 pb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Join{" "}
                  <span className="font-semibold italic">Vakya Foundation</span>{" "}
                  {slides[currentSlide].description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <Link href="#donate">
                    <Button className="w-full bg-[#FFD45C] text-black font-semibold py-6 px-6 rounded-xl text-lg hover:bg-yellow-400 transition-colors border-0">
                      Donate Now
                    </Button>
                  </Link>
                  <Link href="#volunteer">
                    <Button
                      variant="outline"
                      className="w-full border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold py-6 px-6 rounded-xl text-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    >
                      Become Volunteer
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Workshop Banner */}
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
