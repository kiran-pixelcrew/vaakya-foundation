import React from "react";
import { motion } from "motion/react";
import { LucideEye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <div className="container mx-auto min-h-[60vh] items-center justify-center relative flex px-4 sm:px-0 py-18 sm:py-0">
      <div className="flex justify-evenly items-center w-full h-auto flex-col md:flex-row gap-8 md:gap-0">
        <motion.div
          className="bg-[#EDF8FF] h-auto p-12 md:p-12 static md:absolute md:left-42 rounded-lg w-full md:w-5/12 lg:w-4/12 flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            y: -8,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          }}
        >
          <motion.div
            className=""
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
            <LucideEye className="w-8 h-8 text-blue-600" />
          </motion.div>
          <div className="">
            <h1 className="text-xl md:text-2xl font-bold">Vision</h1>
          </div>
          <motion.div
            className=""
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
          className="bg-[#FFF7E2] h-auto static md:absolute md:right-42 md:bottom-0 rounded-lg p-12 md:p-12 w-full md:w-5/12 lg:w-4/12 flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          whileHover={{
            y: -8,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          }}
        >
          <motion.div
            className=""
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
            <Target className="w-8 h-8 text-amber-600" />
          </motion.div>
          <div className="">
            <h1 className="text-xl md:text-2xl font-bold">Mission</h1>
          </div>
          <motion.div
            className=""
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
