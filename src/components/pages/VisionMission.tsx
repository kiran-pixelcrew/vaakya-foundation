import React from "react";
import { motion } from "motion/react";
import { LucideEye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <div className="container mx-auto min-h-[60vh] items-center justify-center relative flex px-4 sm:px-0 py-18 sm:py-0">
      <div className="flex justify-evenly items-center w-full h-auto flex-col md:flex-row gap-8 md:gap-0">
        <motion.div className="bg-[#EDF8FF] h-auto p-12 md:p-12 static md:absolute md:left-42 rounded-lg w-full md:w-5/12 lg:w-4/12 flex flex-col gap-4">
          <div className="">
            <LucideEye />
          </div>
          <div className="">
            <h1 className="text-xl md:text-2xl font-bold">Vision</h1>
          </div>
          <div className="">
            <p className="text-base text-balance">
              <span className="italic font-semibold">Vakya</span> believes in
              acting before harm—creating informed communities that safeguard
              every child&apos;s physical and emotional well-being. Vakya
              believes in acting before harm—creating informed communities that
              safeguard every child&apos;s physical and emotional well-being.{" "}
            </p>
          </div>
        </motion.div>
        <motion.div className="bg-[#FFF7E2] h-auto static md:absolute md:right-42 md:bottom-0 rounded-lg p-12 md:p-12 w-full md:w-5/12 lg:w-4/12 flex flex-col gap-4">
          <div className="">
            <Target />
          </div>
          <div className="">
            <h1 className="text-xl md:text-2xl font-bold">Mission</h1>
          </div>
          <div className="">
            <p className="text-base text-balance">
              <span className="italic font-semibold">Vakya</span> believes in
              acting before harm—creating informed communities that safeguard
              every child&apos;s physical and emotional well-being. Vakya
              believes in acting before harm—creating informed communities that
              safeguard every child&apos;s physical and emotional well-being.{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionMission;
