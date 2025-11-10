import Image from "next/image";
import React from "react";

const WhyVaakya = () => {
  return (
    <div className="flex items-center w-auto my-10 md:my-20">
      <div className="w-full max-w-7xl h-full bg-[#FFD45C] lg:pl-40 lg:pr-10 p-6 md:px-40 md:py-20">
        <div className="gap-4 md:gap-6 flex flex-col text-base md:text-lg">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Why Vakya Foundation?
          </h1>
          <p>
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
          </p>
        </div>
      </div>
      <div className="container hidden md:block mx-auto">
        <div className="w-auto lg:w-auto md:flex justify-center">
          <Image
            src={"/foot.png"}
            className=" w-full max-w-[500px] md:max-w-[500px] lg:max-w-[500px] h-auto"
            width={500}
            height={500}
            alt="foot"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyVaakya;
