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
            Because prevention saves more than reaction ever can. Vakya
            Foundation believes that awareness is the first step toward
            protection. We work to stop harm before it begins—whether it&apos;s
            child abuse, bullying, cyber threats, or addiction.
          </p>
          <p>
            Our programs focus on educating, empowering, and equipping
            communities to stay safe. Through workshops, counseling, and
            outreach, we reach children, parents, and educators alike. Our
            flagship initiative, Project Chiguru, builds emotional resilience
            and life skills among students. We create safe spaces for
            conversations that are often ignored but deeply needed. Our team
            blends compassion with expertise to bring real change at the ground
            level.
          </p>
          <p>
            We believe prevention is not just a choice—it&apos;s a
            responsibility. Every awareness session plants a seed of safety and
            confidence in a child&apos;s life. Every parent we reach becomes a
            stronger guardian. And every school we partner with becomes a safer
            community.
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
