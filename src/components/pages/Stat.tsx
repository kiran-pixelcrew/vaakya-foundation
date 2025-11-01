"use client";

import React from "react";
import { motion } from "motion/react";
import { AnimatedCounter } from "../AnimatedCounter";
import Image from "next/image";

const Stat = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-10 px-4 sm:px-40 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
      <div className="">
        <Image
          src={"/stat.png"}
          width={800}
          height={500}
          alt="stat image"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <motion.div
        className="w-full md:w-1/2 lg:w-2/5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12">
          <motion.div
            className="flex items-center flex-col rounded-lg p-4 md:p-6 bg-[#EDF8FF] justify-center"
            variants={itemVariants}
          >
            <AnimatedCounter target={5} suffix="+" delay={2} />
            <p className="text-sm md:text-base text-slate-900">States</p>
          </motion.div>
          <motion.div
            className="flex flex-col rounded-lg p-4 md:p-6 items-center bg-[#FFF7E1] justify-center"
            variants={itemVariants}
          >
            <AnimatedCounter target={20} suffix="+" delay={2} />
            <p className="text-sm md:text-base text-slate-900">
              Schools Reached
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col rounded-lg p-4 md:p-6 items-center  bg-[#FFF7E1] justify-center"
            variants={itemVariants}
          >
            <AnimatedCounter target={2000} suffix="+" delay={2} />
            <p className="text-sm md:text-base text-slate-900">
              Students Trained
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col rounded-lg p-4 md:p-6 items-center bg-[#EDF8FF] justify-center"
            variants={itemVariants}
          >
            <AnimatedCounter target={98} suffix="%" delay={2} />
            <p className="text-sm md:text-base text-slate-900">Satisfied</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Stat;
