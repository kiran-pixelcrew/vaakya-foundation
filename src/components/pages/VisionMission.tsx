"use client";

import React from "react";
import { motion } from "motion/react";
import { LucideEye, Target } from "lucide-react";
import { Vaakyatext } from "@/components/Vaakyatext";

const VisionMission = () => {
  return (
    <div className="relative container mx-auto flex min-h-[70vh] h-screen items-center justify-center overflow-hidden px-4 py-18 sm:px-0 sm:py-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-25"
      >
        <Vaakyatext />
      </div>

      <div className="relative z-10 flex h-auto w-full flex-col items-center justify-evenly gap-8 md:flex-row md:gap-0">
        <motion.div
          className="static flex h-auto w-full flex-col gap-4 rounded-2xl border border-white/60 bg-[#EDF8FF]/40 p-12 shadow-[0_8px_32px_rgba(31,38,135,0.12)] backdrop-blur-xl md:absolute md:left-42 md:w-5/12 lg:w-4/12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            y: -8,
            boxShadow: "0 16px 48px rgba(31,38,135,0.18)",
            backgroundColor: "rgba(237, 248, 255, 0.55)",
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <LucideEye className="h-8 w-8 text-blue-600" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold md:text-2xl">Vision</h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-base text-balance">
              <span className="italic font-semibold">Vaakya</span> aims to build
              safe, supportive, and inclusive communities and environments where
              every child, young and old, grows with confidence, dignity, and
              awareness; mapped through new-age technology
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="static flex h-auto w-full flex-col gap-4 rounded-2xl border border-white/60 bg-[#FFF7E2]/40 p-12 shadow-[0_8px_32px_rgba(120,80,0,0.1)] backdrop-blur-xl md:absolute md:right-42 md:bottom-0 md:w-5/12 lg:w-4/12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          whileHover={{
            y: -8,
            boxShadow: "0 16px 48px rgba(120,80,0,0.15)",
            backgroundColor: "rgba(255, 247, 226, 0.55)",
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <Target className="h-8 w-8 text-amber-600" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold md:text-2xl">Mission</h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-base text-balance">
              <span className="italic font-semibold">Vaakya</span> aims to
              support schools, families, and communities with training,
              awareness programs, counselling support, and health clinics that
              encourage openness, safety, inclusivity, and wellbeing for every
              child.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionMission;
