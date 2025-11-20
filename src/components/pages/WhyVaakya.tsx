import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const WhyVaakya = () => {
  return (
    <div className="flex items-center w-auto my-10 md:my-20">
      <motion.div
        className="w-full max-w-7xl h-full bg-[#FFD45C] lg:pl-40 lg:pr-10 p-6 md:px-40 md:py-20 rounded-r-none sm:rounded-r-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="gap-4 md:gap-6 flex flex-col text-base md:text-lg">
          <motion.h1
            className="font-bold text-2xl md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Why Vakya Foundation?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Children today are growing up in a fast-changing and complex world
            facing challenges around safety, emotions, relationships, social
            media, addictions and identity.
            <p>
              Nuclear families, single parents, double income households,
              stakeholders battling between personal self time and family time
              leave children to fend for themselves to learn and grow.
            </p>
            <p>
              {" "}
              Many do not have safe spaces to learn, ask questions, or express
              themselves without fear or judgment. Stake holders also need all
              the support guidance to match the generation’s gaps to give
              children better environments to live and grow.
            </p>
          </motion.p>
        </div>
      </motion.div>
      <div className="container hidden md:block mx-auto">
        <motion.div
          className="w-auto lg:w-auto md:flex justify-center"
          initial={{ opacity: 0, x: 50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
        >
          <Image
            src={"/foot.png"}
            className=" w-full max-w-[500px] md:max-w-[500px] lg:max-w-[500px] h-auto"
            width={500}
            height={500}
            alt="foot"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhyVaakya;
