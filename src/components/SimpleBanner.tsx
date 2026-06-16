"use client";
import { motion } from "motion/react";
import Link from "next/link";   
import React from "react";

export const SimpleBanner = () => {
  return (
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
      href="/payments"
      className="text-[#FFD45C] font-semibold hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black rounded inline-block"
    >
      Register now.
    </Link>
  </motion.span>
</motion.p>
</motion.div>
  );
};