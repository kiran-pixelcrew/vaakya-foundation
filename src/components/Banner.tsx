import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

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
    <motion.div
      className="py-12 px-4 relative md:px-40 z-99 my-12"
      style={{ backgroundColor: bgColor || "transparent" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`max-w-3xl space-y-6 ${cn}`}>
        <motion.h2
          className="text-3xl font-bold text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button
            asChild
            className="bg-[#FFD45C] w-full md:w-auto hover:bg-[#FFD45C]/90 text-black px-4 text-base font-bold py-6 cursor-pointer"
          >
            <Link href={ctaLink1}>{ctaText1}</Link>
          </Button>
          <Button
            asChild
            variant={"outline"}
            className="px-4 py-6 w-full md:w-auto text-black text-base font-bold cursor-pointer hover:bg-gray-100"
          >
            <Link href={ctaLink2}>{ctaText2}</Link>
          </Button>
        </motion.div>
      </div>
      {image && (
        <motion.div
          className="absolute hidden md:block right-32 -top-20"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src={"/whitefoot.png"} width={450} height={450} alt="foot" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Banner;
