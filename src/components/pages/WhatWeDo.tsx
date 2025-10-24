"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import Image from "next/image";

const doList = [
  {
    img: "/watwedo1.png",
    title: "Bullying & Cyber Safety",
    data: "Empowering children with the skills to navigate the digital world safely, and fostering resilience against bullying, both online and offline.",
  },
  {
    img: "/watwedo2.png",
    title: "Sexuality Education",
    data: "Helping children and their caregivers understand the impact of mental health struggles and substance abuse.",
  },
  {
    img: "/watwedo3.png",
    title: "Mental Health Awareness",
    data: "Teaching children about healthy boundaries, personal safety, and how to protect themselves from abuse.",
  },
  {
    img: "/watwedo4.png",
    title: "Support for Parents & Educators",
    data: "Strengthening the wider ecosystem schools, parents, and caregivers providing education, resources, and tools for a collective approach to child safety.",
  },
];

const WhatWeDo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      id="whatwedo"
      ref={containerRef}
      className="relative bg-background min-h-screen"
    >
      {doList.map((item, index) => (
        <ScrollItem
          key={index}
          item={item}
          index={index}
          total={doList.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
};

interface ScrollItemProps {
  item: { img: string; data: string; title: string };
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

const ScrollItem: React.FC<ScrollItemProps> = ({
  item,
  index,
  total,
  scrollYProgress,
}) => {
  const start = index / total;
  const end = (index + 1) / total;

  // Optimized fade transitions - shorter transitions for clearer center visibility
  const fadeInStart = start;
  const fadeInPeak = start + 0.08;
  const fadeOutStart = end - 0.08;
  const fadeOutEnd = end;

  // Main container opacity - stays at 1 longer for crystal clear visibility
  const opacity = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInPeak, fadeOutStart, fadeOutEnd],
    [0, 1, 1, 0]
  );

  // Minimal vertical movement for stability
  const y = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInPeak, fadeOutStart, fadeOutEnd],
    [30, 0, 0, -30]
  );

  // Image animations - minimal scale to avoid blur
  const imageScale = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInPeak, fadeOutStart, fadeOutEnd],
    [0.98, 1, 1, 0.98]
  );

  const imageX = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInPeak, fadeOutStart, fadeOutEnd],
    [-15, 0, 0, -15]
  );

  // Text animations - synchronized with image for clarity
  const textX = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInPeak, fadeOutStart, fadeOutEnd],
    [20, 0, 0, 20]
  );

  const textY = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInPeak, fadeOutStart, fadeOutEnd],
    [10, 0, 0, -10]
  );

  return (
    <div className="h-screen sticky top-0 flex items-center justify-center px-4 py-6 md:py-8">
      <motion.div
        style={{ opacity, y }}
        className="container mx-auto max-w-6xl"
      >
        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-10 lg:mb-12 text-foreground"
          style={{ opacity }}
        >
          {item.title}
        </motion.h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Image */}
          <motion.div
            className="flex-shrink-0"
            style={{
              opacity,
              x: imageX,
              scale: imageScale,
            }}
          >
            <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] xl:w-[400px] xl:h-[400px] group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
              <Image
                src={item.img}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, (max-width: 1280px) 380px, 400px"
                className="object-cover rounded-2xl shadow-lg transition-shadow duration-300 ease-out group-hover:shadow-xl"
                alt={item.title}
                quality={95}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex-1 max-w-lg xl:max-w-xl"
            style={{
              opacity,
              x: textX,
              y: textY,
            }}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-loose text-foreground font-medium text-center md:text-left px-2 md:px-0">
              {item.data}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhatWeDo;
