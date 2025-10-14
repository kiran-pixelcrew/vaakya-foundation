"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Vaakyatext = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const x0 = useTransform(scrollYProgress, [0, 0.5], [600, 0]);
  const opacity0 = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const x1 = useTransform(scrollYProgress, [0.08, 0.58], [-600, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.08, 0.33], [0, 1]);

  const x2 = useTransform(scrollYProgress, [0.16, 0.66], [0, 0]); // center - only fade
  const opacity2 = useTransform(scrollYProgress, [0.16, 0.41], [0, 1]);

  const x3 = useTransform(scrollYProgress, [0.24, 0.74], [600, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.24, 0.49], [0, 1]);

  const x4 = useTransform(scrollYProgress, [0.32, 0.82], [-600, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.32, 0.57], [0, 1]);

  return (
    <div
      ref={ref}
      className="container h-[140vh] flex items-center justify-center mx-auto"
    >
      <div className="-space-y-12">
        <motion.h1
          style={{ x: x0, opacity: opacity0 }}
          className="text-[115px] text-balance text-black text-center uppercase font-semibold outline-text"
        >
          Vaakya Foundation
        </motion.h1>

        <motion.h1
          style={{ x: x1, opacity: opacity1 }}
          className="text-[115px] text-balance text-center uppercase font-semibold outline-text"
        >
          Vaakya Foundation
        </motion.h1>

        <motion.h1
          style={{ x: x2, opacity: opacity2 }}
          className="text-[115px] font-helvetica text-balance text-center uppercase font-semibold"
        >
          Vaakya Foundation
        </motion.h1>

        <motion.h1
          style={{ x: x3, opacity: opacity3 }}
          className="text-[115px] text-balance text-center uppercase font-semibold outline-text"
        >
          Vaakya Foundation
        </motion.h1>

        <motion.h1
          style={{ x: x4, opacity: opacity4 }}
          className="text-[115px] text-balance text-center uppercase font-semibold outline-text"
        >
          Vaakya Foundation
        </motion.h1>
      </div>
    </div>
  );
};
